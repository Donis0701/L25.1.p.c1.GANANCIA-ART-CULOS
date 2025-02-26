export default class cl_vArticulo {
    constructor(){
        this.inCodigo = document.getElementById("articuloForm_inCodigo");
        this.inCosto = document.getElementById("articuloForm_inCosto");
        this.inPrecio = document.getElementById("articuloForm_inPrecio");
        this.btProcesar = document.getElementById("articuloForm_btProcesar");
    }
    get codigo(){
        return this.inCodigo.value;
    }
    get costo(){
        return +this.inCosto.value;
    }
    get precio(){
        return +this.inPrecio.value;
    }
}