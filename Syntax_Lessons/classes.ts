// lesson 43 

class Vehicle{
   drive():void{
        console.log('driving...')
    }

    honk():void{
        console.log('Beeeeep...')
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();


// lesson 44  - basic inheritance 

class Car extends Vehicle {}
const car = new Car();
car.drive();
car.honk();

class Car2 extends Vehicle {
    drive(): void {
        console.log("driving car 2 ...")
    }
    honk(): void {
        console.log('hoking car 2 ...')
    }
}
const car2 = new Car2();
car2.drive();
car2.honk();

// lesson 45 - Instance method modifiers 

// 1 ) public = this method can be called anytime, anywhere 
// 2) private = this method can only be called by other method in this class 
// 3) protected = this method can be called by other methods in this class or by other methods in child classes


class Vehicle_2{
    // drive():void{
    //      console.log('driving...')
    //  }
 
    protected honk():void{
         console.log('Beeeeep 3...')
     }
 }
class Car3 extends Vehicle_2 {
   private drive(): void {
        console.log("driving car 3 ...")
    }
    // honk(): void {
    //     console.log('hoking car 3 ...')
    // }

    startDrivingProcess():void{
        this.drive();
        this.honk();
    }
}

const car_3 = new Car3();
car_3.startDrivingProcess();
// car_3.honk();  => will show error
// car_3.drive(); => will show error


// lesson 46 

class Vehicle_3{
    color:string;
    constructor(color:string){
        this.color = color;

    }
    protected honk():void{
         console.log('Beeeeep 3...')
     }
 }

 class Car4 extends Vehicle_3 {
    private drive(): void {
         console.log("driving car 4 ...")
     }
     startDrivingProcess():void{
         this.drive();
         this.honk();
     }
 }

 const car_4 = new Car4('green');

 car_4.startDrivingProcess();
 console.log(car_4.color)

//  ===== shost form -===

class Vehicle_4{
    constructor(public color:string){

    }
    protected honk():void{
         console.log('Beeeeep 5 ...')
     }
 }
 class Car5 extends Vehicle_4 {
    private drive(): void {
         console.log("driving car 5 ...")
     }
     startDrivingProcess():void{
         this.drive();
         this.honk();
     }
 }

 const car_5 = new Car5('Blue');

 car_4.startDrivingProcess();
 console.log(car_5.color)

// -------- new lesson --------

//  lesson 47 - fields with inheritance 

// super() key words 

class Car6 extends Vehicle_4 {
    constructor(public wheels:number,color:string){
        super(color);

    }
    private drive(): void {
         console.log("driving car 6 ...")
     }
     startDrivingProcess():void{
         this.drive();
         this.honk();
         console.log(this.color)
     }
 }

 const car_6 = new Car6(5,'Silver');
 car_6.startDrivingProcess();

//  lesson 48 
// interfaces + classes = strong code reuse 




 