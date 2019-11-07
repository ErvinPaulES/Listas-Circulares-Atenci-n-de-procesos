class Dado{
    constructor(){

    }
    Lanzar = () =>{
        let numeroRandom = Math.ceil(Math.random()*100);
        return numeroRandom
    }
}
export default Dado