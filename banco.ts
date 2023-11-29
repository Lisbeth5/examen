// 1.Ejercicio #1: Se desea un sistema software que permita el ingreso de datos a una lista con una única instancia
// de acceso. El sistema también debe permitir mostrar los datos ingresados en esta única instancia de la lista por pantalla.
// La lista debe ser del tipo de datos descrito en la Tabla 1. Para la comprobación cree 3 objetos a partir de esta única 
// instancia de la lista, ingrese objetos a estas listas y llamar al método que muestra los datos por pantalla, debe comprobar
// que se muestren los mismos datos sin importar el objeto creado.
// cuenta bancaria

class singleton{
    private static instance: singleton;

    private lista_datos:string[] = [];

    private constructor(){}

    public static getInstance(): singleton{
        if(!singleton.instance){
           singleton.instance = new singleton();
        }
        return singleton.instance;
    }

    public lista(item: string): void{
        this.lista_datos.push(item)
    }

    public getlista():void{
        console.log();
        this.lista_datos.forEach(item=> console.log(item));
    }
}

const persona1 = singleton.getInstance();
const persona2 = singleton.getInstance();
const persona3 = singleton.getInstance();

persona1.lista("Lisebth Dolores Aray Gaon");
persona2.lista("daniel aray gaon");
persona3.lista("maria gaon navarrete");

persona1.getlista();
persona2.getlista();
persona3.getlista();

