// Write your solution here!
// defining our initial cats list
const cats = ["Milo", "Otis", "Garfield"];

// destructive appender function
function destructivelyAppendCat(name) {
    cats.push(name);
};

// destructive prepender function
function destructivelyPrependCat(name) {
    cats.unshift(name);
};

// destructive popper function
function destructivelyRemoveLastCat() {
    cats.pop();
};

// destructive shifter function
function destructivelyRemoveFirstCat() {
    cats.shift();
};

// newarray appender function
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
};

// newarray prepender function
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
};

// non-destructive popper function
function removeLastCat() {
    return cats.slice(0,-1);
};

// non-destructive shifter function
function removeFirstCat() {
    return cats.slice(1);
};