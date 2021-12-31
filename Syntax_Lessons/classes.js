// lesson 43 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('driving...');
    };
    Vehicle.prototype.honk = function () {
        console.log('Beeeeep...');
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
// lesson 44  - basic inheritance 
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(Vehicle));
var car = new Car();
car.drive();
car.honk();
var Car2 = /** @class */ (function (_super) {
    __extends(Car2, _super);
    function Car2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car2.prototype.drive = function () {
        console.log("driving car 2 ...");
    };
    Car2.prototype.honk = function () {
        console.log('hoking car 2 ...');
    };
    return Car2;
}(Vehicle));
var car2 = new Car2();
car2.drive();
car2.honk();
// lesson 45 - Instance method modifiers 
// 1 ) public = this method can be called anytime, anywhere 
// 2) private = this method can only be called by other method in this class 
// 3) protected = this method can be called by other methods in this class or by other methods in child classes
var Vehicle_2 = /** @class */ (function () {
    function Vehicle_2() {
    }
    // drive():void{
    //      console.log('driving...')
    //  }
    Vehicle_2.prototype.honk = function () {
        console.log('Beeeeep 3...');
    };
    return Vehicle_2;
}());
var Car3 = /** @class */ (function (_super) {
    __extends(Car3, _super);
    function Car3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car3.prototype.drive = function () {
        console.log("driving car 3 ...");
    };
    // honk(): void {
    //     console.log('hoking car 3 ...')
    // }
    Car3.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car3;
}(Vehicle_2));
var car_3 = new Car3();
car_3.startDrivingProcess();
// car_3.honk();  => will show error
// car_3.drive(); => will show error
// lesson 46 
var Vehicle_3 = /** @class */ (function () {
    function Vehicle_3(color) {
        this.color = color;
    }
    Vehicle_3.prototype.honk = function () {
        console.log('Beeeeep 3...');
    };
    return Vehicle_3;
}());
var Car4 = /** @class */ (function (_super) {
    __extends(Car4, _super);
    function Car4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car4.prototype.drive = function () {
        console.log("driving car 4 ...");
    };
    Car4.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car4;
}(Vehicle_3));
var car_4 = new Car4('green');
car_4.startDrivingProcess();
console.log(car_4.color);
//  ===== shost form -===
var Vehicle_4 = /** @class */ (function () {
    function Vehicle_4(color) {
        this.color = color;
    }
    Vehicle_4.prototype.honk = function () {
        console.log('Beeeeep 5 ...');
    };
    return Vehicle_4;
}());
var Car5 = /** @class */ (function (_super) {
    __extends(Car5, _super);
    function Car5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car5.prototype.drive = function () {
        console.log("driving car 5 ...");
    };
    Car5.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car5;
}(Vehicle_4));
var car_5 = new Car5('Blue');
car_4.startDrivingProcess();
console.log(car_5.color);
// -------- new lesson --------
//  lesson 47 - fields with inheritance 
// super() key words 
var Car6 = /** @class */ (function (_super) {
    __extends(Car6, _super);
    function Car6(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car6.prototype.drive = function () {
        console.log("driving car 6 ...");
    };
    Car6.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
        console.log(this.color);
    };
    return Car6;
}(Vehicle_4));
var car_6 = new Car6(5, 'Silver');
car_6.startDrivingProcess();
