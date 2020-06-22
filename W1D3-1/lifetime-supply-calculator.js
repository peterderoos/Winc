const calculate = (age, amountPerDay) => {

    let amountPerYear = amountPerDay * 365 * age;
    console.log("Needed: " + amountPerYear);
}
calculate(1, 5);