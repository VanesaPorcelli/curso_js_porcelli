
let nombreUsuario = prompt('Bienvenido! Ingresa tu nombre para continuar');
while (nombreUsuario == '') {
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}
alert(nombreUsuario + ', gracias por elegirnos! Te invitamos a recorrer nuestra tienda.');

let total = 0;
let mensaje = prompt(nombreUsuario + ' quieres comprar un producto? (s-si / n-no)');
while (mensaje == 's' || mensaje == 'S') {
    let producto = prompt('1-Nueces Peladas\n2-Almendras Tostadas\n3-Avellanas\n4-Maní con Cáscara\n5-Lentejas\n6-Porotos\n7-Maíz\n8-Porotos de Soja');
    switch (producto) {
        case '1':
            alert('Agregaste Nueces Peladas al carito de compras... $ 1200');
            sumarTotal(1200);
            break;
        case '2':
            alert('Agregaste Almendras Tostadas al carito de compras... $ 1500');
            sumarTotal(1500);
            break;
        case '3':
            alert('Agregaste Avellanas al carito de compras... $ 1600');
            sumarTotal(1600);
            break;
        case '4':
            alert('Agregaste Maní con Cáscara al carito de compras... $ 1100');
            sumarTotal(1100);
            break;
        case '5':
            alert('Agregaste Lentejas al carito de compras... $ 900');
            sumarTotal(900);
            break;
        case '6':
            alert('Agregaste Porotos al carito de compras... $ 950');
            sumarTotal(950);
            break;
        case '7':
            alert('Agregaste Maíz al carito de compras... $ 750');
            sumarTotal(750);
            break;
        case '8':
            alert('Agregaste Porotos de Soja al carito de compras... $ 980');
            sumarTotal(980);
            break;

        default:
            alert('Codigo inexistente');
            break;

    }    mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');



gestionarEnvio();
gestionarPago();
}
alert('Muchas gracias ' + nombreUsuario + ' por tu compra. En instantes nos pondremos en contacto para finalizar tu pedido.');





// FUNCIONES UTILIZADAS

function gestionarEnvio() {
    alert(nombreUsuario + ' Agrega por favor tu método de envío:');
    let envio = prompt('1-Envío a domicilio ... $1200\n2-retiro en el local ...Gratis!');
    switch (envio) {
        case '1':
            alert('Agregaste Envío a domicilio... $ 1200');
            sumarTotal(1200);
            break;
        case '2':
            alert('Retirá por nuestro local sin costo adicional!... $ Envío Gratis!');
            sumarTotal(0);
            break;
        default:
            alert('No entendi la respueta');
            gestionarEnvio();
            break;
    }
}

function gestionarPago() {
    alert(nombreUsuario + ' Agrega por favor tu medio de pago:');
    let envio = prompt('1-Efectivo -Contra entrega ($100 descuento )\n2-Tarjeta de credito ($50 recargo)\n3-Tarjeta de débito');
    switch (envio) {
        case '1':
            alert('Abonas en efectivo. Tenes un descuento de $100');
            restarTotal(100);
            break;
        case '2':
            alert('Abonas con tarjeta de crédito.Tenés un recargo de $50');
            sumarTotal(50);
            break;
        case '3':
            alert('Abonas con débito!');
            sumarTotal(0);
            break;
        default:
            alert('No entendi la respueta');
            gestionarEnvio();
            break;
    }
}

function sumarTotal(precio) {
    total = total + precio;
    alert('Llevas gastado $' + total);
}

function restarTotal(precio) {
    total = total - precio;
    alert('Llevas gastado $' + total);
}


