// string
const name = "Harold";
const surname = "Smith";

console.log("Name: " + name, "Surname: " + surname);

// number
const price = 7;

// object
const animal = {
    type: "elephant",
    name: "Burt",
    colour: "grey",
};

// array of strings
const colours = ["red", "blue", "yellow"];

// array of objects
const animals = [
    {
        type: "elephant",
        name: "Burt",
        colour: "grey",
    },
    {
        type: "fox",
        name: "Dixie",
        colour: "orange",
    },
    {
        type: "cat",
        name: "Penny",
        colour: "black",
    },
];

console.log("animals: " + JSON.stringify(animals));

// string
const fullName = name + " " + surname;
// debugger;

// element
const button = document.querySelector("button");

// loop
for (let i = 0; i < 5; i++) {
    // debugger;
    console.log(i);
}

console.dir(button);
