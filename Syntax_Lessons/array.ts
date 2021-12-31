// Note - hover over code to see type 
// lesson 29
// type annotation -> :string[]
const carMaker:string[] = ['ford','toyota','chevy'];
const mixed = [] // type => any type of data

const dates = [new Date(),new Date()];

// array of string inside arrary - type inference 
const carsByMake = [
    ['f1150'],
    ['corolla'],
    ['camaro']
];

// lesson 30 
// why typed array 
//  Help with inference when extracting values
const car = carMaker[0];
const  myCar = carMaker.pop();

// precent incompatible values
// carMaker.push(100);

//Help with 'map' or other methods;
carMaker.map((car:string):string=>{
return car;
})

// lesson 31  - Multiple types in array

//Flexible types 
const importantDates =[new Date(),'2021-12-28'];
const importantDates2:(Date|string)[] =[new Date()];
importantDates2.push(new Date());
// importantDates2.push(100) -> number wont work since it is not in annotoation

