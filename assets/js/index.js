const productos = [
    { nombre: "peppa", precio: 3500 },
    { nombre: "sirenita", precio: 5000 },
    { nombre: "stitch", precio: 6000 },
    { nombre: "bob esponja", precio: 8000 },
    { nombre: "chavo", precio: 5000 },
    { nombre: "leon", precio: 4000 }
];

function obtenerPrecio(productoNombre) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == productoNombre) { 
            return productos[i].precio;
        }
    }
    return 0; 
}


let precioTotal = 0;
let continuarComprando = true;

while (continuarComprando == true) { 
    alert("Los productos disponibles son: peppa, sirenita, stitch, bob esponja, chavo y leon");

    let producto = prompt("¿Qué producto/s deseas llevar?").toLowerCase();

    if (!isNaN(producto)) {
        alert("Pone letras por favor");
    } else {
        let precio = obtenerPrecio(producto);
        if (precio != 0) {
            precioTotal += precio;
        } else {
            alert("Producto no válido");
            continue;
        }

        let respuesta = prompt("¿Desea llevar algo más? (si/no)").toLowerCase();
        if (respuesta != "si") { 
            continuarComprando = false;
        }
    }
}

alert(`acúmulo un total de: ${precioTotal} pesos` ); 



class Tarjeta {
    constructor(nombre, cuotasSinInteres, interesPorMes) {
        this.nombre = nombre;
        this.cuotasSinInteres = cuotasSinInteres;
        this.interesPorMes = interesPorMes;
    }

    calcularInteres(precioTotal, cuotas) {
        if (cuotas <= this.cuotasSinInteres) {
            return 0;
        } else {
            return (precioTotal * this.interesPorMes) * cuotas;
        }
    }
}

function tarjetaCuotas() {
    let elegirTarjeta;
    let cuotas;
    let interes = 0;
    let total = 0;

    const tarjetaNaranja = new Tarjeta('Naranja', 6, 0.02);
    const tarjetaVisa = new Tarjeta('Visa', 3, 0.01);

    // Seleccionar la tarjeta
    do {
        alert("La tarjeta Naranja cuenta con hasta 6 cuotas sin intereses, a partir de 9 cuotas se le agrega 2% de intereses por todos los meses");
        alert("La tarjeta Visa cuenta con hasta 3 cuotas sin intereses, a partir de 6 cuotas se le agrega 1% de intereses por todos los meses");
        elegirTarjeta = prompt("¿Qué tarjeta desea elegir, la Naranja o la Visa?").toLowerCase();
        if (!isNaN(elegirTarjeta)) {
            alert("Ingresa letras y no números por favor.");
        } else if (elegirTarjeta != "naranja" && elegirTarjeta != "visa") {
            alert("No elegiste una tarjeta válida");
        }
    } while (elegirTarjeta != "naranja" && elegirTarjeta != "visa");

    // Seleccionar las cuotas
    do {
        cuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? Tiene la opción de 1, 3, 6, 9 y 12 cuotas"));
        if (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 9 && cuotas != 12) {
            alert("Ingresa un número dentro de las opciones para las cuotas.");
        }
    } while (cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 9 && cuotas != 12);

    if (elegirTarjeta === "naranja") {
        interes = tarjetaNaranja.calcularInteres(precioTotal, cuotas);
    } else if (elegirTarjeta === "visa") {
        interes = tarjetaVisa.calcularInteres(precioTotal, cuotas);
    }

    total = precioTotal + interes;
    alert(`El monto total a pagar es ${total} en ${cuotas} cuota/s`);
}

tarjetaCuotas();
