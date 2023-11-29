import { cafeNormal } from "./cafe_normal";

 export class cafe_conLeche implements cafeNormal{
    private cafe: cafeNormal;
     constructor(cafe:cafeNormal){
        this.cafe=cafe;
     }

     getcosto(): number {
         return this.cafe.getcosto() + 1.50;
     }

     getDescripcion(): string {
         return this.cafe.getDescripcion() + ',cafe normal mas leche';
     }
}