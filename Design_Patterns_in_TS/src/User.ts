import Faker from 'faker/dist/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable{
    color:string
    name:string;
    location:{
        lat:number;
        lng:number;
    }

    constructor(color:string){
        this.name = Faker.name.firstName(2);
        this.color = color;
        this.location = {
            lat:parseFloat(Faker.address.latitude()),
            lng:parseFloat(Faker.address.longitude())
        }
    }

    markerContent(): string{
        return `User name: ${this.name}`
    }
};