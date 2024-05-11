export const time = (value, func) => (value > 60 ? func(1) : value < 0 ? func(60) : null);

export const format = (val1, val2) => {
     let str = val1.toString() +":"+ val2.toString();
     let firstFormat = /^\d:/.test(str) === true ? '0' + str : str;
    let secondFormat = /60$/.test(str) === true ? firstFormat.replace(/60$/, "00") : firstFormat;
    return /:\d$/.test(secondFormat) === true ? secondFormat.replace(/:/, "$&0") : secondFormat;
}     

export function playCount(second, setSecond, status, setStatus,countdown,setCountdown,session) {
    setStatus(status = "play ");
    setCountdown(countdown = session)
    
   
   
    let timer = setInterval(() => {
        if (second === 0 && countdown === 0) {
            clearInterval(timer)
            setCountdown(countdown = 0)
            setSecond(second = 0)
        } else if (second === 0) {
            setCountdown(countdown -=1)
            setSecond(second =59)
        }
        else (setSecond(second -= 1)
        );
       
    }, 1000)
    function stop() {
        clearInterval(timer)
    }
        
    document.getElementById("pause").addEventListener("click", stop);
    
} 

