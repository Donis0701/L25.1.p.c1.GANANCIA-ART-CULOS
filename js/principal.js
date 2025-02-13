/*Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
Ganancia Total: 85$
Código del artículo con mayor precio de venta: 444*/
import cl_Articulo from "./cl_articulo.js";
import cl_Tienda from "./cl_Tienda.js";

let articulo = new cl_Articulo("888", 10, 15);
let articulo2 = new cl_Articulo("777", 20, 25);
let articulo3 = new cl_Articulo("999", 15, 25);
let articulo4 = new cl_Articulo("666", 25, 35);
let articulo5 = new cl_Articulo("111", 50, 70);
let articulo6 = new cl_Articulo("333", 40, 50);
let articulo7 = new cl_Articulo("444", 80, 100);
let articulo8 = new cl_Articulo("222", 5, 10);

let tienda = new cl_Tienda();
tienda.procesarArticulo(articulo);
tienda.procesarArticulo(articulo2); 
tienda.procesarArticulo(articulo3);
tienda.procesarArticulo(articulo4);
tienda.procesarArticulo(articulo5);
tienda.procesarArticulo(articulo6);
tienda.procesarArticulo(articulo7);
tienda.procesarArticulo(articulo8);

let salida = document.getElementById("salida");
salida.innerHTML += `
    Ganancia Total: ${tienda.gananciaTotal()}$
    <br>Código del artículo con mayor precio de venta: ${tienda.productoMasCaro()}`;