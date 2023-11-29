export interface cafe{
    getcosto(): number;
    getDescripcion(): string;
}

 export class cafeNormal implements cafe{
    getcosto(): number {
        return 1;
    }
  
    getDescripcion(): string {
        return 'cafe normal: agua y cafe';
    } 
  }

 
