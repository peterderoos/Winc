// Voor als je de hamburger en de close button wil gebruiken.

// let openMenu = () => {
//     document.getElementById("menu").style.width = "250px";
// }

// let closeMenu = () => {
//     document.getElementById("menu").style.width = "0";
// }

let open = document.getElementById("menu");
// Voor als je alleen de hamburger wil gebruiken en die in beeld blijft staan.
let toggleMenu = () => {
    let open = document.getElementById("menu");
    open.classList.toggle('open');
}
// Weet niet hoe ik dit in een array kan krijgen om er doorheen te loopen.
document.addEventListener("keypress", function (e) {
    if (e.keyCode === 49) {
        document.body.style.backgroundColor = "white";
        document.querySelector("h1").textContent = "White";
    } else if (e.keyCode === 50) {
        document.body.style.backgroundColor = "red";
        document.querySelector("h1").textContent = "red";
    } else if (e.keyCode === 51) {
        document.body.style.backgroundColor = "orange";
        document.querySelector("h1").textContent = "orange";
    } else if (e.keyCode === 52) {
        document.body.style.backgroundColor = "purple";
        document.querySelector("h1").textContent = "purple";
    } else if (e.keyCode === 53) {
        document.body.style.backgroundColor = "green";
        document.querySelector("h1").textContent = "green";
    }
})

let toggleColors = document.querySelectorAll("li");
Array.from(toggleColors);

for (let i = 0; i < toggleColors.length; i++) {
    toggleColors[i].addEventListener("click", function () {
        let color = event.target.id;
        document.body.style.backgroundColor = color;
        document.querySelector("h1").textContent = color;
        open.classList.toggle("open");
    })
}








