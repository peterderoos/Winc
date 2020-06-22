for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is oneven");
    }
}

let tableArray = [];
for (let i = 0; i <= 10; i++) {
    for (let o = 0; o <= 10; o++) {
        let uitkomst = i * o
        console.log(i + " x " + o + " = " + uitkomst)
    }
}
let score = 60

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (score = 60; score <= 100; score++) {
    console.log("Voor " + score + " punten, krijg je een " + assignGrade(score));
}

let colors = ['Yellow', 'blue', 'orange']

colors.forEach(function (color) {

    console.log(color)
})