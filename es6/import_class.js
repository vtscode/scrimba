import { Animal,Cat } from './class.js';

let cat = new Animal('Cat',4);

cat.legs = 3;
cat.makeNoise('ew');
console.log(cat.legs);

console.log(Animal.return10());

console.log(cat.metaData);

// Cat inheritance from Animal
let cat1= new Cat('Cat',4);

cat1.makeNoise();

console.log(cat.metaData);








