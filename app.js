const movie = { title: "Inception", year: 2010, director: "Nolan" };

const { title, year } = movie;

console.log(`The movie "${title}" was released in ${year}`);


// assignment3

const calculate = (a, b) => {

    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a/b;

    return [add, subtract, multiply, divide];

}

const [add, subtract, multiply, divide] = calculate(6, 8);

console.log(`6 * 8 = ${multiply}`);