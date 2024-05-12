import './beep.mp3'

export const time = (value, func) => (value > 60 ? func(1) : value < 0 ? func(60) : null);

export const format = (val1, val2) => {
     let str = val1.toString() +":"+ val2.toString();
     let firstFormat = /^\d:/.test(str) === true ? '0' + str : str;
    let secondFormat = /60$/.test(str) === true ? firstFormat.replace(/60$/, "00") : firstFormat;
    return /:\d$/.test(secondFormat) === true ? secondFormat.replace(/:/, "$&0") : secondFormat;
}     

export function playCount(second, setSecond, status, setStatus, countdown, setCountdown, session, interval, setInt, breaking, setSession, setBreaking) {
        if (status === "set") {
        setInt(interval = "session");
        setCountdown(countdown = session)
    }
    if (status === "set" || status == "pause") {
        setStatus(status = "play");
        let timer = setInterval(() => {
            if (second === 0 && countdown === 0 && interval === "session") {
                setCountdown(countdown = breaking)
                setSecond(second = 0)
                setInt(interval = "break");
                document.getElementById("beep").play();
            } else if (second === 0 && countdown === 0 && interval === "break") {
                setCountdown(countdown = session)
                setSecond(second = 0)
                setInt(interval = "session");
                document.getElementById("beep").play();
            } else if (second === 0) {
                setCountdown(countdown -= 1)
                setSecond(second = 59)
            } else if (status !== "pause") {
                setSecond(second -= 1)
            }

            console.log(status)
        }, 1000)
        function reset() {
            setStatus(status = "set");
            setSession(session = 25);
            setBreaking(breaking = 5);
            setSecond(second = 0)
            clearInterval(timer)
            document.getElementById("beep").currentTime = 0;
        }
        function stop() {
            clearInterval(timer)
            setTimeout(()=>setStatus("pause"),200)
            }
        document.getElementById("start_stop").addEventListener("click", stop);
        document.getElementById("reset").addEventListener("click", reset);
    }

    
    
    
        
  
    
}
