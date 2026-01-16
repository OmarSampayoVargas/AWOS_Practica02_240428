// Personalización de salidas a Consola
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
// CORRECCIÓN: Agregamos backticks para que sea un string válido
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;

console.log("%c1.- Ejercicio 01: Declaración de Variables ", style_console);

var miNombre = "Omar de jesus";
var misApellidos;

console.warn("Declaracion de variables VAR");
console.log("El valor de la variable miNombre es:", miNombre);
console.log("El valor de la variable misApellidos es:", misApellidos);

misApellidos = "Sampayo Vargas";
console.log("El valor de la variable misApellidos es:", misApellidos);

miNombre = " Omar de jesus";
console.log("Hola, ", miNombre, misApellidos);

// 2. CONST
console.warn("--Declaracion de Variables utilizando el prefijo CONST");
const miMatricula = "240428";
console.log("El valor actual de la constante miMatricula es: ", miMatricula);

// 3. LET y Funciones
var miFechaNacimiento = new Date("2006-10-12");

function calcularEdad(fechaNacimiento) {
    let fechaHoy = new Date();
    let milisegundosPorDia = 24 * 60 * 60 * 1000;
    let diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    let edad = Math.floor(diasVividos / 365.25);
    return edad;
}

console.warn("--El valor de la variable miFechaNacimiento es: ", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log(`Despues de ejecutar la funcion calcularEdad(), puedo saber que tienes: ${miEdad} años.`);

// CORRECCIÓN: Estandarizamos el nombre a minúsculas (esMenordeEdad)
var esMayordeEdad;
var esMenordeEdad;

if (miEdad >= 18) {
    esMayordeEdad = true;
    esMenordeEdad = false;
} else {
    esMayordeEdad = false;
    esMenordeEdad = true;
}

console.log(`En base a tu edad puedo decir que el valor de esMayordeEdad es: ${esMayordeEdad} y el de esMenordeEdad es: ${esMenordeEdad}`);

// Interpolación
console.warn("-- Interpolacion de Datos --");
console.log(`Hola, ${miNombre} ${misApellidos}, sé que tienes: ${miEdad} años, por lo que eres ${esMayordeEdad ? "mayor de edad" : "menor de edad"}.`);

