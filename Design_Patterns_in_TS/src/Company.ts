import Faker from 'faker/dist/faker';
import { Mappable } from './CustomMap';


export class Company implements Mappable{
    color:string;
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    }

    constructor(color:string){
        this.companyName = Faker.company.companyName(2);
        this.catchPhrase = Faker.company.catchPhrase();
        this.color = color
        this.location = {
            lat:parseFloat(Faker.address.latitude()),
            lng:parseFloat(Faker.address.longitude())
        }
    }
    markerContent(): string{
        return `
        <div>
            <h1> Company Name : ${this.companyName}</h1>
            <h3> Catchphrase : ${this.catchPhrase}</h3>
        </div>
        `
    }
};