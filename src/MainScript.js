export const format = (val1, val2) => {
     let str = val1.toString() +":"+ val2.toString();
     let firstFormat = /^\d:/.test(str) === true ? '0' + str : str;
    let secondFormat = /60$/.test(str) === true ? firstFormat.replace(/60$/, "00") : firstFormat;
    return /:\d$/.test(secondFormat) === true ? secondFormat.replace(/:/, "$&0") : secondFormat;
}   
let timer = null;
function timerStart(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking) {
    setStatus(status = "play");
   timer = setInterval(() => {
        if (second === 0 && countdown === 0 && interval === "Session") {
            setCountdown(countdown = breaking)
            setSecond(second = 0)
            setInt(interval = "Break");
            document.getElementById("beep").play();
        } else if (second === 0 && countdown === 0 && interval === "Break") {
            setCountdown(countdown = session)
            setSecond(second = 0)
            setInt(interval = "Session");
            document.getElementById("beep").play();
        } else if (second === 0) {
            setCountdown(countdown -= 1)
            setSecond(second = 59)
        } else if (status !== "pause") {
            setSecond(second -= 1)
        }
    }, 1000)
}

export function startStop(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking, setSession, setBreaking) {  
    if (status === "play") {
        clearInterval(timer);
        setStatus('pause')
    }
    if (status === "set") {
        setCountdown(countdown = session)
    }
    if (status === "set"||status==="pause") { timerStart(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking, setSession, setBreaking) }
}

export function reset(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking, setSession, setBreaking) {
    setSession(session = 25);
    setBreaking(breaking = 5);
    setSecond(second = 0);
    clearInterval(timer);
    setStatus('set');
    setInt(interval = "Session")
    document.getElementById("beep").currentTime = 0.0;
    document.getElementById("beep").pause()
}