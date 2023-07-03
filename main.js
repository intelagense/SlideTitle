const progressBar = document.querySelector("#progressBar")
const startTimerButton = document.querySelector("#startTimerButton")
let duration = 5 //1hr in seconds

startTimerButton.addEventListener("click", startTimer)

function startTimer() {
    startTimerButton.disabled = true
    let startTime = Date.now() / 1000

    updateTimer()

    function updateTimer() {
        let currentTime = Date.now() / 1000
        let elapsedTime = currentTime - startTime
        progressBar.value = (elapsedTime / duration) * 100;

        if (elapsedTime >= duration) {
            progressBar.value = progressBar.max
            startTimerButton.disabled = false
        } else {
            progressBar.value = elapsedTime
            requestAnimationFrame(updateTimer)
        }
    }
}