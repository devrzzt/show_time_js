let hours = 23
let minutes = 59
let seconds = 0

let timerIdentifier

function showTime() {
  console.log(`${hours}h:${minutes}m:${seconds}s`)
}

function resetTime() {
  clearInterval(timerIdentifier)
}

function timer() {
  //

  seconds += 1

  if (seconds === 60) {
    minutes += 1
    seconds = 0
  }

  if (minutes === 60) {
    hours += 1
    minutes = 0
  }

  if (hours === 24) {
    hours = 0
    resetTime()
  }

  showTime()
}

timerIdentifier = setInterval(timer, 1000)

// console.log(showTime())
