class Singleton {
    constructor() {
        this.lista_datos = [];
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    lista(item) {
        this.lista_datos.push(item);
    }

    getlista() {
        console.log();
        this.lista_datos.forEach(item => console.log(item));
    }
}

const persona1 = Singleton.getInstance();
const persona2 = Singleton.getInstance();
const persona3 = Singleton.getInstance();

persona1.lista("Lisebth Dolores Aray Gaon");
persona2.lista("daniel aray gaon");
persona3.lista("maria gaon navarrete");

persona1.getlista();
persona2.getlista();
persona3.getlista();
