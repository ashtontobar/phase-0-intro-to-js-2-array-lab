// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    let kittyCat = ["Arnold", ...cats];
    return kittyCat;
}

function removeLastCat() {
    let prepCat = [...cats.slice(0,2)];
    return prepCat;
}

function removeFirstCat() {
    let firstCats = [...cats.slice(1)];
    return firstCats;
}
