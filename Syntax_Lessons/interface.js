// interface + class = strong code reuse in typescript 
// interface = create a new type describing the property names and values types of an object 
// lesson 37
// long type annotation 
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
var printVehicle = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Name: ".concat(vehicle.broken));
};
printVehicle(oldCivic);
var printVehicle_2 = function (vehicle) {
    console.log(" -------- this is printing with interface ---------");
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Name: ".concat(vehicle.broken));
};
printVehicle_2(oldCivic);
var oldCivic_3 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "This is summary of ".concat(this.name, " model car info");
    }
};
var printVehicle_3 = function (vehicle) {
    console.log(" -------- this is printing with interface 2 ---------");
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Name: ".concat(vehicle.broken));
    console.log("Name: ".concat(vehicle.summary()));
};
printVehicle_3(oldCivic_3);
var printVehicle_4 = function (vehicle) {
    console.log(" -------- this is printing with interface 3 ---------");
    console.log("Name: ".concat(vehicle.summary()));
};
printVehicle_4(oldCivic_3);
var myDrink = {
    name: 'Coca Cola',
    sugar: 40,
    carbonated: true,
    summary: function () {
        return "my drink contains ".concat(this.sugar, " grams of sugar");
    }
};
var printReport = function (report) {
    console.log('--- reusable type --- ');
    console.log(report.summary());
};
printReport(myDrink);
printReport(oldCivic_3);
