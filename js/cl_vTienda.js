import cl_mArticulo from "./cl_mArticulo.js";
import cl_vArticulo from "./cl_vArticulo.js";
export default class cl_vTienda{
    constructor() {
        this.controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        this.vArticulo = new cl_vArticulo();
        this.vArticulo.btProcesar.onclick = () => this.controlador.procesarArticulo();
    }
    procesarArticulo() {
        this.mArticulo = new cl_mArticulo({
            codigo: this.vArticulo.codigo, 
            costo: this.vArticulo.costo, 
            precio: this.vArticulo.precio}); 
    return this.mArticulo;
    }
    reporteTienda(gananciaTotal, productoMasCaro) {
        this.salida.innerHTML = `Ganancia Total: ${gananciaTotal}$<br>
        Codigo del articulo con mayor precio de venta: ${productoMasCaro}`

    }
}