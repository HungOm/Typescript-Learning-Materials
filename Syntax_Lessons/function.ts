const add = (a:number,b:number):number=>{
    return a+b

};

// lesson 24
const subtract = (a:number,b:number):number=>{
    return a-b
};

// lesson 25
function divide(a:number,b:number):number{
    return a-b
}

const multiply = function(a:number,b:number):number{
    return a*b

}

// lesson 26
const logger = (message:string):void=>{
    console.log(message)
};

// never return nothing 
const throwError = (message:string):never=>{
    throw new Error(message);
}

// lesson 27 
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast:{date:Date,weather:string}):void=>{
     console.log(forecast.date)
     console.log(forecast.weather)
}

logWeather(todaysWeather);

//ES2015
// destructuring 
const logWeather2=({
    date,weather
}:{
    date:Date;
    weather:string;
})=>{   
    console.log(date)
    console.log(weather)

}

logWeather2(todaysWeather)



