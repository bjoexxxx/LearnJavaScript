const names = ["Lars","Peter","Jan","Bo","Frederik","Li"]
const filterNames = names.filter(function (name){return name.length <=3;})

//names.forEach(function (name){return console.log(name)})
//filterNames.forEach(function (name){return console.log(name)})
//alternativt
//names.filter(name => name.length <=3)

const upperCased = names.map(name => name.toUpperCase())
//upperCased.forEach(function (name){return console.log(name)})

const joined ="<ul>" + names.map(name => "<li>"+name+"</li>").join("") + "<ul>"
//console.log(joined)

const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
]

const newCars = cars.filter(function (car){return car.year >= 2000})
//newCars.forEach(function (car){return console.log(car)})

const volvos = cars.filter(function (car){return car.make === "Volvo"})
//console.log(volvos)

const cheapCars = cars.filter(function (car){return car.price < 5000})
//console.log(cheapCars)

const insertCar = cars.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES ("
    + car.id +","+ car.year +","+ car.make +","+ car.model + "," + car.price +");" )
const cluster = cars.map(function (car){return car}).join(",")
console.log(cluster)
