import { cafe, cafeNormal } from "./cafe_normal";
import { cafe_conLeche } from "./cafe_con_leche";
import { Mocca } from "./mocca";
import { carajillo } from "./Carajillo";

const mycoffe:cafeNormal = new cafeNormal();
console.log(mycoffe.getDescripcion());
console.log(mycoffe.getcosto());

const cafe2: cafe = new cafe_conLeche(mycoffe);
console.log(cafe2.getDescripcion());
console.log(cafe2.getcosto());

const cafe3: cafe = new Mocca(cafe2);
console.log(cafe3.getDescripcion());
console.log(cafe3.getcosto());

const cafe4: cafe = new Mocca(cafe3);
console.log(cafe4.getDescripcion());
console.log(cafe4.getcosto());

