import { cafe_conLeche } from "./cafe_con_leche";
import { cafe, cafeNormal } from "./cafe_normal";

 export class Mocca implements cafeNormal{
    private cafe_2:cafe_conLeche;
    
    constructor(cafe_2:cafe){
        this.cafe_2 = this.cafe_2;
    }

    getcosto(): number {
        return this.cafe_2.getcosto() + 3.5;
    }

    getDescripcion(): string {
        return this.cafe_2.getDescripcion() + ', cafe con leche mas chocolate en polvo';
    }
}