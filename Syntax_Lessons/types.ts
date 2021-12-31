// variables 
const n:number= 1;
let apple:number;
apple=2;

let userName:string = "John";

// built in object  
const today:Date = new Date();
today.getMonth();

const Person = {
    age:20
};


class Color {}
const red = new Color();


//array
let colors:string[]=['red','green','blue'];

let myNumbers:number[]=[1,2,3,4,5,6,7];
let trueths:boolean[] = [true,false,true,false];

//object literal

let point:{x:number,y:number}={
    x:10,
    y:20

}


//function
let logNumber:(i:number) =>void= (i:number)=>{
    console.log(i)
}

//whn to use type annotation

// =>  1) function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates:{x:number,y:number}= JSON.parse(json);
console.log(coordinates) //{x:10,y:20}

//=> 2) when we declar a variable on one line and initialize later
let words = ['red','green','blue'];
let foundWord:boolean;

for(let i in words){
    if(words[i]=='green'){
        foundWord=true
    }
}

//=>3) varaibles whose type cannot be infered correctly
let numbers =  [-10,-1,12];
let numberAboveZero:boolean|number=false;

for(let i in numbers){
    if(numbers[i]>0){
        numberAboveZero = numbers[i];
    }
}


// lesson 23
// Annotation around function