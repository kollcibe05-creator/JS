// Math.random ranges from 0 inclusive to 1 exclusive

Math.floor(Math.random()*100)
Math.ceil(Math.random()*100)

// returns a random integer min(included) max excluded

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(getRandomInteger(0, 50))



//with both min and max included
function getRndmInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndmInteger(0, 5))


//with both max and min excluded
function doubleExclusion (min, max) {
    Math.floor(Math.random() * (max - min - 1) + min + 1)
}

//with min excluded
function withMinExcluded(min, max) {
    return (1.0 - Math.random()) * (max - min) + min
}