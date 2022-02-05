import { Storage } from "./storage.js";

const names = new Storage('names');

names.set('commodity','2');
names.set('commodity','3');

console.log(names.get('commodity'));

console.log(names.isEmpty('commodity'));


