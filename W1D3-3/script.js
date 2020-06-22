let name = prompt('Welcome, what is your name?')

alert('Hey ' + name);

let randomNum = Math.floor(Math.random() * 20);
Math.floor(Math.random() * 10);

Math.round(randomNum);
console.log(randomNum);
let compareNum = () => {
    let guessNum = parseInt(prompt('Voer een nummer in van 0 tot 20 om te beginnen met raden'));
    console.log(randomNum);
    console.log(guessNum);
    if (guessNum === randomNum) {
        alert("Goed!");
    } else {
        alert("Raad opnieuw");
    }
}
compareNum();
