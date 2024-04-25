// JavaScript: Exercise 1
// Task 1.1.2
let names = ["Lars", "Peter", "Jan", "Bo"];

let filteredArr = myFilter(names, myCallback)
filteredArr.forEach(name => console.log(name))

function myFilter(arr, func) {
    let newArr = []
    for(let item of arr) {
        if(func(item)) newArr.push(item)
    }
    return newArr
}

function myCallback(element) {
    if(typeof element === "string" && element.length > 3)  {
        return true;
    } else return false
}

// Task 1.1.3
let mappedArr = myMap(names, getElementLength)
mappedArr.forEach(i => console.log(i))

function myMap(arr, func) {
    let newArr = []
    for(let item of arr) {
        newArr.push(func(item))
    }
    return newArr
}

function getElementLength(element) {
    element = element.length
    return element
}


// ------------- Task 1.2 ----------------
Array.prototype.myFilter = function(callback) {
    let newArr = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) newArr.push(this[i])
    }
    return newArr
}

Array.prototype.myMap = function(callback) {
    let newArr = []
    for(let item of this) {
        newArr.push(callback(item))
    }
    return newArr
}

let prototypeFilteredArr = names.myFilter(myCallback)
prototypeFilteredArr.forEach(name => console.log(name))

let prototypeMappedArr = names.myMap(getElementLength)
prototypeMappedArr.forEach(i => console.log(i))

// ---------------- Task 1.3 ---------------------

let elements = document.getElementsByTagName("div")
for(let div of elements) {
    div.style.backgroundColor = 'red'
}

function changeColor(){
    document.getElementById("one").style.backgroundColor = 'silver'
    document.getElementById("two").style.backgroundColor = 'green'
    document.getElementById("three").style.backgroundColor = 'gold'
}

// ---------------- Task 1.4 -----------------------
document.getElementsTagName('div').addEventListener('click', sayHello(this))
function sayHello(element){
    console.log(`Hello from ${element.id}`)
}