import Proceso from './Proceso.js';
import Dado from './Dado.js';

class Main{
    constructor(){
        this._Actual = null;
        this._Primero = null;
        document.querySelector('#Iniciar').addEventListener('click', () => {
            this._Actual = null;
            this._Primero = null;
            let dado = new Dado();
            let contnulo = 0;
            let contCompletado = 0;
            let a = 1;
            let numProcesosfaltantes = 0;
            let SumaCiclosfaltantes = 0;
            for(let i=0;i<300;i++){
                if(dado.Lanzar()<=39){
                    this.agregarProceso(new Proceso('p'+a, Math.ceil(Math.random()*11)+3));
                    console.log('Se agrego nuevo proceso');
                    a++;
                }
                if(this._Actual!==null){
                    this._Actual.ciclo-=1;
                    
                    if(this._Actual.ciclo===0){
                        contCompletado++;
                        console.log('Se completo el proceso '+ this._Actual.nombre);
                        let point = this._Actual;
                        if(point === this._Primero){
                            let primerpoint = this._Primero;
                            while(primerpoint.siguiente!==this._Primero){
                                primerpoint=primerpoint.siguiente;
                            }
                            this._Primero = point;
                            primerpoint.siguiente=this._Primero;

                        }else{
                            this._Actual = this._Primero;
                            while(this._Actual.siguiente!==point){
                                this._Actual=this._Actual.siguiente;
                            }
                            this._Actual.siguiente=this._Actual.siguiente.siguiente;    
                        }
                        
                    }
                    this._Actual=this._Actual.siguiente;
                }else{
                    contnulo++;
                }
            }
            let faltantes = this._Actual;
            do{
                numProcesosfaltantes++;
                SumaCiclosfaltantes+=this._Actual.ciclo;
                faltantes=faltantes.siguiente;
            }while(faltantes!==this._Primero)
            console.log('Los ciclos que estuvo vacio la cola ' + contnulo);
            console.log('El numero de procesos que se atendieron completamente son: '+ contCompletado);
            console.log('El numero de procesos que quedaron pendientes son: '+ numProcesosfaltantes);
            console.log('La suma de ciclos de los procesos pendientes es: ' + SumaCiclosfaltantes);
            
            
        })
        
    } 
    agregarProceso(proceso){
        if(this._Actual===null){
        this._Primero=proceso;
          this._Actual=this._Primero;
          this._Actual.siguiente = this._Primero;
        }else{
              this._agregarproceso(proceso, this._Actual);
        }       
    }
    _agregarproceso(nuevo, ultimo){
          if(ultimo.siguiente===this._Primero){
            ultimo.siguiente=nuevo;
            nuevo.siguiente = this._Primero;
          }else{
            this._agregarproceso(nuevo, ultimo.siguiente)
          }
    }
}
let main = new Main();