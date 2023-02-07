let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0


function plus1home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function plus2home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function plus3home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function plus1guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function plus2guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function plus3guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}