//Generador de pedidos aleatorios//

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
for (let index = 0; index < 10; index++) {
    let variedad = seleccionVariedad();
    let formato = seleccionFormato();
    let cantidad = seleccionCantidad();
    orden.push(new pedido(variedad, formato, cantidad))
}

console.log(orden);

function filtrarBlend(){
    const pedidoBlend = orden.filter((pedido) => pedido.variedad == "Blend")
    return pedidoBlend;
}
function filtrarBrasil(){
    const pedidoBrasil = orden.filter((pedido) => pedido.variedad == "Brasil")
    return pedidoBrasil;
}
function filtrarColombia(){
    const pedidoColombia = orden.filter((pedido) => pedido.variedad == "Colombia")
    return pedidoColombia;
}
function filtrarBolivia(){
    const pedidoBolivia = orden.filter((pedido) => pedido.variedad == "Bolivia")
    return pedidoBolivia;
}
function filtrarGuatemala(){
    const pedidoGuatemala = orden.filter((pedido) => pedido.variedad == "Guatemala")
    return pedidoGuatemala;
}




let blend = filtrarBlend();
console.log(blend);

function filtrarCuarto(compra){
    const pedidoCuarto = compra.filter((pedido) => pedido.formato = "250g")
    return pedidoCuarto;
}
function filtrarKilo(compra){
    const pedidoKilo = compra.filter((pedido) => pedido.formato = "1Kg")
    return pedidoKilo;
}