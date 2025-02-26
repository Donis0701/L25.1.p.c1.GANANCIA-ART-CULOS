export default class cl_mTienda{
    constructor() {
        this.acumG = 0;
        this.Mprecio = 0;
        this.Carticulo = "";
    }
    procesarArticulo(articulo){
        this.acumG += articulo.gananciaP();
        if (articulo.precio > this.Mprecio){
            this.Mprecio = articulo.precio;
            this.Carticulo = articulo.codigo;
        }
    }
    gananciaTotal(){
        return this.acumG;
    }
    productoMasCaro(){
        return this.Carticulo;
    }
}