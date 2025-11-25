const names = ['alice', 'bob', 'carol'];

// Return a new array with names capitalized

const capitalized = names.map(name => {
    const firstLetter = name.charAt(0).toUpperCase();

    const restName = name.slice(1);

    return firstLetter + restName;
});

console.log(capitalized);

// DONE