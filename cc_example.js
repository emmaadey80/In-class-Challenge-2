// Task 1 Get products by category

let products = [
    {name: "Laptop", price: 1200, category: "Electronics" },
    { name:"Phone", price: 800, category: "Electronics" },
    { name: "Desk Chair", price: 150, category: "Electronics" }
];

function getProductsByCategory(products, category) { 
return products.filter(product => product.category === category)
}


console.log(getProductsByCategory(products, "Electronics"));


// Task 2 Array Methods - Map

function applyDiscount(products, dsicountRate) {
    return products.map(product => ({
        ...product, 
        price: product.price - (product.price * dsicountRate)
    }

    ))
}

console.log(applyDiscount(products, .1));


function sum3 (x, y, z) {
    return x+y+z
}
let numbers = [1,2,3] // iterable
let someObj = {x:1, y:2, z:3} // iterable

console.log(sum3(...numbers)); // used for multiple 

// Task 3 Array Methods - Reduce

let sales = [250, 400, 150, 900, 1200];
function calulateTotalRevenue(sales) {

return sales.reduce((total, sale)=> total + sale, 0)

}

console.log(calulateTotalRevenue(sales));


// Task 4 Object Manipulation

let employee = { 
    name: "John Doe",
    salary: 50000,
    position: "Manager"
};

console.log(employee);


function updatedSalary(employee, percentageIncrease) {
    employee.salary = employee.salary + (employee.salary * percentageIncrease); // could use employee.salary += employee.salary * percentageIncrease

};

updatedSalary(employee, .1)
console.log(employee); // Second time to see change
