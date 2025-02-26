/*Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
Ganancia Total: 85$
Código del artículo con mayor precio de venta: 444*/
import cl_mTienda from "./cl_mTienda.js";
import cl_vTienda from "./cl_vTienda.js";
import cl_controlador from "./cl_controlador.js";
export default class cl_principal {
    constructor() {
        let vista = new cl_vTienda;
        let modelo = new cl_mTienda;
        let controlador = new cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}