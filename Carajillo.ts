import { cafeNormal } from "./cafe_normal";

export class carajillo implements cafeNormal{
    private cafe_carajillo: cafeNormal;

    constructor(cafe_carajillo: cafeNormal){
        this.cafe_carajillo = cafe_carajillo
    }
    
    getcosto(): number {
        return this.cafe_carajillo.getcosto() + 3.75;
    }

    getDescripcion(): string {
        return this.cafe_carajillo.getDescripcion() + ',cafe normal mas whisky';
    }

}