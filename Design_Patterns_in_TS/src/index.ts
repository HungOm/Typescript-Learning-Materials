import {User} from './User';
import {Company} from './Company';
import { CustomMap } from './CustomMap';


const user = new User('blue team');
const company = new Company('Red');
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
