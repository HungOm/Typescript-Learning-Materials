// interface + class = strong code reuse in typescript 

// interface = create a new type describing the property names and values types of an object 

// lesson 37
// long type annotation 
const oldCivic = {
    name:'civic',
    year:2000,
    broken:true
}

const printVehicle = (vehicle:{name:string,year:number,broken:boolean}):void=>{
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);

}

printVehicle(oldCivic)



// lesson 38 - adding interface 

interface Vehicle{
    name:string,
    year:number,
    broken:boolean
}

const printVehicle_2 = (vehicle:Vehicle):void=>{
    console.log(" -------- this is printing with interface ---------")
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);

}
printVehicle_2(oldCivic);


//lesson 39 - Syntax around interface

interface Vehicle_2{
    name:string,
    year:Date,
    broken:boolean,
    summary():string;
}
const oldCivic_3 = {
    name:'civic',
    year: new Date(),
    broken:true,
    summary():string{
        return `This is summary of ${this.name} model car info`
    }
}


const printVehicle_3 = (vehicle:Vehicle_2):void=>{
    console.log(" -------- this is printing with interface 2 ---------")
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Name: ${vehicle.broken}`);
    console.log(`Name: ${vehicle.summary()}`);

}
printVehicle_3(oldCivic_3);

// lesson 40 
interface Vehicle_3{
    summary():string;
}

const printVehicle_4 = (vehicle:Vehicle_2):void=>{
    console.log(" -------- this is printing with interface 3 ---------")
    console.log(`Name: ${vehicle.summary()}`);

}

printVehicle_4(oldCivic_3);

// lesson 41  - code reuse

interface reportable{
    // name:string,
    // year:Date,
    // broken:boolean,
    summary():string;
}

const myDrink = {
    name:'Coca Cola',
    sugar: 40,
    carbonated:true,
    summary():string{
        return `my drink contains ${this.sugar} grams of sugar`
    }
}

const printReport= (report:reportable):void=>{
    console.log('--- reusable type --- ')
    console.log(report.summary());
}

printReport(myDrink)
printReport(oldCivic_3);

// General strategey for Reusable code in TS = >
// 1) Create function that accerpt arguemens that are typed with interface 
// 2) Object/classes can decide to 'implement' a given interface to work with a function 


