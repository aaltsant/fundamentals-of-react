const animals = ['dog', 'cat', 'dog', 'bird', 'cat', 'dog'];

const count = animals.reduce((acc, animal) => {

  acc[animal] = (acc[animal] || 0) + 1;

  return acc;

}, {});

console.log(count);

// DONE

// Assingments 1-6 done from JavaScript Foundations

// Link to repository
// https://github.com/aaltsant/fundamentals-of-react
