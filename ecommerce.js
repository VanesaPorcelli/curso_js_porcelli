//CLASES Y VARIABLES
class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}
let productos = [
    new Producto(1, "Nueces", 1200, "Frutos Secos"),
    new Producto(2, "Almendras", 1500, "Frutos Secos"),
    new Producto(3, "Avellanas", 1600, "Frutos Secos"),
    new Producto(4, "Mani", 1100, "Frutos Secos"),
    new Producto(5, "Lentejas", 900, "Legumbres"),
    new Producto(6, "Porotos", 950, "Legumbres"),
    new Producto(7, "Maiz", 750, "Legumbres"),
    new Producto(8, "Garbanzos", 980, "Legumbres")
]

let carrito = [];

// OPCION 1 COMPRAR PRODUCTOS:
const comprarProductos = () => {
    let respuesta = '';

    do {
        let nombreProducto = prompt(generarMenuProductos());

        let producto = productoExiste(nombreProducto);

        //Si el producto existe dentro del array se lo agrega
        if (producto) {
            alert(`El producto agregado es: ${producto.nombre}`);
            carrito.push(producto);
        } else {
            //Si no existe, se muestra un mensaje de error
            alert(`El producto no existe! Escriba bien el nombre`);
            continue;
        }
        respuesta = prompt(`¿Quiere comprar otro producto? (SI - NO)`);
    } while (respuesta.toLowerCase() != "no");
    mostrarCarritoTotal();
    alert("Muchas gracias por su compra. Nos estaremos contactando para gestionar el envio.")
}


//ARMA LA LISTA DE PRODUCTOS
const generarMenuProductos = () => {
    let menu = `Estos productos tenemos para ofrecerte. Ingrese el nombre del producto:\n`
    productos.forEach(producto => {
        menu += ` ${producto.id} - ${producto.nombre} - $${producto.precio} \n`
    });
    return menu;
}

//VALIDA SI EL PRODUCTO ESTA EN LA LISTA
const productoExiste = (nombre) => {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

//MOSTRAR CARRITO: SUMA DE PRECIOS DE PRODUCTOS:
const mostrarCarritoTotal = () => {
    let texto = `El resumen de su compra es: \n\n`
    carrito.forEach(item => {
        texto += `* ${item.nombre} - $${item.precio} \n`
    });
    texto += `\n\nEl Subtotal es : $${calcularTotal()}`;
    alert(texto);
}

//CALCULA SUBTOTAL DE PRODUCTOS
const calcularTotal = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    })
    return total;
}


// **PROGRAMA**

alert(`¡Bienvenido a Tukura!`)
let nombreUsuario = prompt('Bienvenido! Ingresa tu nombre para continuar');
while (nombreUsuario == '') {
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}
alert(nombreUsuario + ', gracias por elegirnos! Te invitamos a recorrer nuestra tienda.');

let respuesta = parseInt(prompt(`Que operacion va a realizar, escriba el numero:
1 - Comprar productos.
2 - Ingresar nuevos poductos (ADMIN).
3 - Salir`));

while (respuesta != 3) {

    switch (respuesta) {
        case 1:
            alert(`Ingresando al menu de compra...`);
            comprarProductos();
            break;
        case 2:
            alert(`Ingresando al registro de productos...`);
            agregarProducto();
            break;
        default:
            alert(`Opcion incorrecta!`);
            break
    }
    respuesta = parseInt(prompt(`Que operacion va a realizar, escriba el numero
1 - Comprar productos.
2 - Registrar productos.
3 - Salir`));
}

/* //agregarproductos
function agregarProductos() {
    let id = parseInt(prompt('Ingrese el id'));
    let nombre = prompt('Ingrese el nombre');
    let precio = parseFloat(prompt('Ingresa el precio'));
    productos.push(new Producto(id, nombre, precio));
}
agregarProductos();
console.log(productos); */


let agregarProducto = true;

while (agregarProducto) {
    let id = parseInt(prompt('Ingrese el id'));
    let nombre = prompt('Ingrese el nombre');
    let precio = parseFloat(prompt('Ingresa el precio'));
    productos.push(new Producto(id, nombre, precio));

    let continuar = prompt("¿Desea agregar otro producto? (si/no)"); 

    if (continuar.toLowerCase() === "no") { 
        agregarProducto = false;
    }
}

console.log(productos); // imprimir el array de productos
