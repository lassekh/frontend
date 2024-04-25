// JavaScript: Exercise 0
// Task 0.1
let names = ["Jon" ,"Bo" ,"Ib" , "Henrik", "Lars", "Lis", "Valdemar"]
let namesOf3 = names.filter((name) => name.length <= 3)
namesOf3.forEach(name => console.log(name))

// Task 0.2
let namesUpperCase = names.map(name => name.toUpperCase())
namesUpperCase.forEach(name => console.log(name))

// Task 0.3
let namesAsHTML = "<ul>" + names.map(name => "<li>" + name + "</li>").join("") + "</ul>"
console.log(namesAsHTML)

// Task 0.4
let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

let newerThan1999 = cars.filter(car => car.year > 1999)
console.log(newerThan1999)

let volvos = cars.filter(car => car.make = 'Volvo')
console.log(volvos)

let priceBelow5000 = cars.filter(car => car.price < 5000)
console.log(priceBelow5000)

function getSQLStatement() {
    return cars.map(car => {
        let columns = Object.keys(car).join(', ')
        let carValues = Object.values(car).map(value => 
        typeof value === "string" ? `'${value.replace(/'/g, "''")}'` : value)
        .join(', ')
        return `INSERT INTO cars (${columns}) VALUES (${carValues});`
    }).join('\n')
}

//cars.map(car => car).join(",")
console.log(getSQLStatement())