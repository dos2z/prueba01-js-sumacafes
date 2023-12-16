// Generador de pedidos aleatorios//

const orden = [];

// clase constructora del Pedido

class pedido {
    constructor(variedad, formato, cantidad) {
        this.variedad = variedad;
        this.formato = formato;
        this.cantidad = cantidad;
    }
}

function seleccionVariedad() {
    let variedad_id = Math.ceil(Math.random() * 5);
    let nombre;

    switch (variedad_id) {
        case 1:
            nombre = "Blend";
            break;
        case 2:
            nombre = "Brasil";
            break;
        case 3:
            nombre = "Colombia";
            break;
        case 4:
            nombre = "Bolivia";
            break;
        case 5:
            nombre = "Guatemala";
            break;
        default:
            break;
    }
    return nombre;
}

function seleccionFormato() {
    let formato_id = Math.ceil(Math.random() * 2);
    let peso;
    switch (formato_id) {
        case 1:
            peso = "250g"
            break;
        default:
            peso = "1Kg"
            break;
    }

    return peso;
}

function seleccionCantidad() {
    let cantidad = Math.ceil(Math.random() * 4)
    return cantidad;
}


// Generador de ordenes
let numeroDePedidos = Math.ceil(Math.random()*15);
console.log(numeroDePedidos)

for (let index = 0; index < numeroDePedidos; index++) {
    let variedad = seleccionVariedad();
    let formato = seleccionFormato();
    let cantidad = seleccionCantidad();
    orden.push(new pedido(variedad, formato, cantidad))
}

// Funciones de filtro

function filtrarBlend() {
    const pedidoBlend = orden.filter((pedido) => pedido.variedad == "Blend")
    return pedidoBlend;
}
function filtrarBrasil() {
    const pedidoBrasil = orden.filter((pedido) => pedido.variedad == "Brasil")
    return pedidoBrasil;
}
function filtrarColombia() {
    const pedidoColombia = orden.filter((pedido) => pedido.variedad == "Colombia")
    return pedidoColombia;
}
function filtrarBolivia() {
    const pedidoBolivia = orden.filter((pedido) => pedido.variedad == "Bolivia")
    return pedidoBolivia;
}
function filtrarGuatemala() {
    const pedidoGuatemala = orden.filter((pedido) => pedido.variedad == "Guatemala")
    return pedidoGuatemala;
}
function filtrarCuarto(compra) {
    const pedidoCuarto = compra.filter((pedido) => pedido.formato == "250g")
    return pedidoCuarto;
}
function filtrarKilo(compra) {
    const pedidoKilo = compra.filter((pedido) => pedido.formato == "1Kg")
    return pedidoKilo;
}

// función contadora de productos x peso
function totalProductos(productos) {
    let cantidad = 0;
    productos.forEach(producto => {
        cantidad += producto.cantidad
    });
    return cantidad;
}

//arrays filtrados

let blend = filtrarBlend();
let blendKilo = filtrarKilo(blend);
let blendCuarto = filtrarCuarto(blend);
let blendCuartoTotal = totalProductos(blendCuarto);
let blendKiloTotal = totalProductos(blendKilo);

let brasil = filtrarBrasil();
let brasilKilo = filtrarKilo(brasil);
let brasilCuarto = filtrarCuarto(brasil);
let brasilCuartoTotal = totalProductos(brasilCuarto);
let brasilKiloTotal = totalProductos(brasilKilo);


let colombia = filtrarColombia();
let colombiaKilo = filtrarKilo(colombia);
let colombiaCuarto = filtrarCuarto(colombia);
let colombiaCuartoTotal = totalProductos(colombiaCuarto);
let colombiaKiloTotal = totalProductos(colombiaKilo);

let bolivia = filtrarBolivia();
let boliviaKilo = filtrarKilo(bolivia);
let boliviaCuarto = filtrarCuarto(bolivia);
let boliviaCuartoTotal = totalProductos(boliviaCuarto);
let boliviaKiloTotal = totalProductos(boliviaKilo);

let guatemala = filtrarGuatemala();
let guatemalaKilo = filtrarKilo(guatemala);
let guatemalaCuarto = filtrarCuarto(guatemala);
let guatemalaCuartoTotal = totalProductos(guatemalaCuarto);
let guatemalaKiloTotal = totalProductos(guatemalaKilo);

// mensajes
let pedidos = "";
orden.forEach(pedido => { pedidos += pedido.cantidad + " " + pedido.variedad + " de " + pedido.formato + "\n";  
});

alert("entraron " + numeroDePedidos + " pedidos\n" + pedidos)


let mensajeVenta = ("Blend cuarto " + blendCuartoTotal + 
"\nBlend Kilo " + blendKiloTotal + 
"\nBrasil cuarto " + brasilCuartoTotal + 
"\nBrasil kilo " + brasilKiloTotal + 
"\nColombia cuarto " + colombiaCuartoTotal + 
"\nColombia kilo " + colombiaKiloTotal + 
"\nBolivia cuarto " + boliviaCuartoTotal + 
"\nBolivia kilo " + boliviaKiloTotal + 
"\nGuatemala cuarto " + guatemalaCuartoTotal + 
"\nGuatemala Kilo " + guatemalaKiloTotal + "\n");

alert("En total son:\n" + mensajeVenta);


