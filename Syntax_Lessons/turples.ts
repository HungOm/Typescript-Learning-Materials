// Turple - array like structure where each element represents some property of a record 
const drink ={
    color:'brown',
    carbonated:true,
    sugar:40
}

// tuple type annotation
// order of element typed - error on change of order assignment
const pepsi:[string,boolean,number] =['brown',true,40];


// type alias  - same as above but more concise
type Drink = [string,boolean,number];

const sprite:Drink = ['clear',true,40];
const tea:Drink = ['brown',false,0];

// why tuple 
const carSpecs:[number,number] = [234,2323];

const carStats ={
    horsePower:400,
    weight:3354
};




