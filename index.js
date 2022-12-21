const homeNumEl = document.getElementById("homeNum")
const guestNumEl = document.getElementById("guestNum")
let homeWidth = 80
let guestWidth = 80


function add(num, whichOne) {
    if (whichOne == "home") {
        let homeLen = (homeNumEl.textContent.length)
        homeNumEl.textContent = parseInt(homeNumEl.textContent)+num
        if (homeNumEl.textContent.length != homeLen) {
            homeWidth += 50
            homeNumEl.style.width = `${homeWidth}px`
        }
    } else {
        let guestLen = guestNumEl.textContent.length
        guestNumEl.textContent = parseInt(guestNumEl.textContent)+num
        if (guestNumEl.textContent.length != guestLen) {
            guestWidth += 50
            guestNumEl.style.width = `${guestWidth}px`
        }
    }
}