let seconds = 0;


const timer = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapsContainer = document.getElementById("laps");

function chageStyle() {
    if (startBtn.disabled) {
        startBtn.classList.remove("btn");
        startBtn.classList.add("disabled");
    } else {
        startBtn.classList.remove("disabled");
        startBtn.classList.add("btn"); 
    }
}

function startTime() {
    seconds += 1;
    console.log(seconds);
    const date = new Date(null);
    date.setSeconds(seconds);
    const result = date.toISOString().slice(11, 19);
    timer.textContent = result;
}

startBtn.addEventListener("click", ()=> {
    intervalId = setInterval(startTime, 1000);
    startBtn.setAttribute("disabled", "disabled");
    chageStyle();
})

stopBtn.addEventListener("click", ()=> {
    startBtn.removeAttribute("disabled");
    clearInterval(intervalId);
    chageStyle();
    const lapTime = timer.textContent;
    lapsContainer.innerHTML += "<p>" + lapTime + "</p>";
})

resetBtn.addEventListener("click", ()=> {
    seconds = 0;
    timer.textContent = "00:00:00";
})
