function printStrings(arr:string[]):void{
    for(let i = 0; i<arr.length;i++){
        console.log(arr[i]);
    }

};


function printNumbers(arr:number[]):void{
    for (let i = 0; i<arr.length;i++){
        console.log(arr[i]);
    }

}


// the above two functions are equavalent to the generic function below

function printAnything<T>(arr:T[]):void{
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }

}

printAnything<string>(['a','b','c'])
printAnything(['a','b','c'])


// Genric Constraints

class Car {
    print(){
        console.log("I am a car")
    }
}

class House{
    print(){
        console.log("I am a house")
    }
}



// make it generic 
//  v-1 => will not work - because string or numbers does not have builtin print 
// function printHousesOrCars<T>(arr: T[]):void{
//     for(let i = 0; i<arr.length;i++){
//         arr[i].print();
//     }
// }

// v-2 => will work 

interface Printable{
    print():void;
}

function printHousesOrCars<T extends Printable>(arr: T[]):void{
    for(let i = 0; i<arr.length;i++){
        arr[i].print();   
    }
}

// this will still not work -> because of generic contraints in numbers
// printHousesOrCars([1,2,3,4,5])

// this will work - becaues the object pass has print function - so no generic contraints
printHousesOrCars<House>([new House(),new House()])
printHousesOrCars<Car>([new Car(),new Car()])

