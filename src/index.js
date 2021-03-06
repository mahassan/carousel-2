import "./style.scss"
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const viewport = document.getElementById("viewport");
let count = 1;

const generateHTML = (num = 1) => {
    viewport.innerHTML = `
    <img class='carousel img-fluid' src="./img/${num}.jpg" alt="">

    <div class="slides">${num}</div>
    `

}
window.addEventListener("DOMContentLoaded", function () {
    generateHTML();
})
generateHTML();

prev.addEventListener("click", function (e) {
    e.preventDefault()
    generateHTML(count--)
})
next.addEventListener("click", function (e) {
    e.preventDefault()
    generateHTML(count++)
})