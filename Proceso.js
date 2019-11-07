export default class Proceso{
    constructor(nombre, ciclo){
        this._nombre = nombre;
        this._ciclo = ciclo;
        this._siguiente = null;
    }
    get nombre(){
        return this._nombre;
    }
    get ciclo(){
        return this._ciclo;
    }
    get siguiente(){
        return this._siguiente;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set ciclo(ciclo){
        this._ciclo = ciclo;
    }
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }
}