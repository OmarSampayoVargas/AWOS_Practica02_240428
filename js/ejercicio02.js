// Definición de estilo para la consola (necesario para que no marque error)
const style_console = "color: blue; font-weight: bold;";

// Personalización de salidas a Consola
console.log("%cEjercicio 02: Tipos de Datos ", style_console);

// 1.- UNDEFINED
console.warn("1.- UNDEFINED (No Definido)");
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);
/*En java script existe el metodo typeOf que devuelve el tipo de dato de una variable preficamente defininda*/

console.log("Tipos de dato de las variables declaradas:");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

// Actualización de valor
usuarioLogeado = "MarcoRamirez99";
console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);

// 2. BOOLEAN
console.warn("2.- BOOLEAN (TRUE/FALSE)");
var hayUsuarioLogeado;

function validacionUsuarioLogeado() {
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo: ${typeof(hayUsuarioLogeado)}`);
    if (hayUsuarioLogeado === true) {
        console.log("Dado que se ha logeado un usuario la app mostrará el menu de usuario");
    } else if (!hayUsuarioLogeado) {
        console.log("dado que no hay usuario logeado, la app no mostrará el menu de usuario");
    } else {
        console.log("El valor no es booleano verdadero ni falso.");
    }
}

console.log("Test 1");
hayUsuarioLogeado = true;

validacionUsuarioLogeado();

console.log("Test 2");
hayUsuarioLogeado = false;
validacionUsuarioLogeado();

console.log("Test 3");
hayUsuarioLogeado = 52.5;
validacionUsuarioLogeado();

// 3. NUMBER
console.warn("3.- NUMBER (NUMÉRICOS)");
let userID_Owner = 225;
let priceProperty = 125000.50;
let latGPS = 20.240508;
let longGPS = -97.952881;
let altGPS = 1180;

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
ID del Usuario propietario: ${userID_Owner}
Precio de la propiedad: ${priceProperty}
Latitud (GPS): ${latGPS}
Longitud (GPS): ${longGPS}
Altitud (GPS): ${altGPS}`);

console.log(`Los tipos de datos son:
ID: ${typeof(userID_Owner)}
Precio: ${typeof(priceProperty)}
Latitud: ${typeof(latGPS)}
Longitud: ${typeof(longGPS)}
Altitud: ${typeof(altGPS)}`);

// 4. STRING
console.warn("4. STRING (CADENA DE CARÁCTERES)");
// Se deben declarar estas variables antes de usarlas
let fullnameOwner = "Marco Ramirez";
let nameProperty = "Casa de Playa";
let descriptionProperty = "Hermosa vista al mar";
let statusProperty = "Disponible";
let typeProperty = "Venta";

console.log(`El usuario: ${fullnameOwner},
esta vendiendo o rentando: ${nameProperty}
que consiste en: ${descriptionProperty}
actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);

console.log(`Las variables declaradas son del tipo:
fullnameOwner: ${typeof(fullnameOwner)}
nameProperty: ${typeof(nameProperty)}`);

// Ejemplo de toUpperCase
console.log(`Nombre en mayúsculas: ${fullnameOwner.toUpperCase()}`);

// Ejemplo de toLowerCase convierte todo en minusculas
console.log(`Descripcion en la propiedad en minusculas: ${descriptionProperty.toLowerCase()}`);
/*tambien existe la  propiedad que cuenta el numero de  caracteres que forman el texto llamndo lenght
*/
console.log(`La longitud del nombre de la propiedad es de ${nameProperty.length}`);

/*tenemos un metodo que nos permite hacer subvadenas o extraer la porcion de la palabra en base a si posicionamiento */
let lastname = fullnameOwner.slice(8, fullnameOwner.length)
console.log(`El apellido del propietario es: ${lastname}`);
/*Otra funcion util es aquela que nos permite remplazar letras o palabras dentro del texto denominado replace*/
console.log(`Remplazo de la palabra Mar por RIO ,Dedcripcion de la propiedad: ${descriptionProperty.replace('Mar', 'Rio')}`);

/*o el remplazo de todas las ocurrencias e una letra o palabra */
console.log(`Rempazo de las letras A por el numero 4,Nombre de la propiedad: ${nameProperty.replaceAll("a","4")}`);

/*6.SYMBOL */
/*Es el tipo de dato aparte de almacenar el valor, almacena la direccion fija en la memoria donde
se almacena el valor, logrando que todos los valores de cada varable siempre sea unicos */
console.warn("6. SYMBOL (simbolos)");

const numero1 =3;
const numero2 =3.0;
const numero3 ="3";
const numero4 ="3.0";
const numero5 =Symbol(3);
const numero6 =Symbol(3.0);
const numero7 =Symbol("3");
const numero8 =Symbol("3.0");   

console.log(`imprimieendo los valores y tipos de dato:
    numero1, valor: ${numero1}, tipoDato: ${typeof(numero1)}
    numero2, valor: ${numero2}, tipoDato: ${typeof(numero2)}
    numero3, valor: ${numero3}, tipoDato: ${typeof(numero3)}
    numero4, valor: ${numero4}, tipoDato: ${typeof(numero4)}
    numero5, valor: ${numero5.description}, tipoDato: ${typeof(numero5)}
    numero6, valor: ${numero6.description}, tipoDato: ${typeof(numero6)}
    numero7, valor: ${numero7.description}, tipoDato: ${typeof(numero7)}
    numero8, valor: ${numero8.description}, tipoDato: ${typeof(numero8)}
`);

/*Analizando un par de validaciones */
///if(numero1==numero2){*/
/////*/
/*7. NULL (NULO) */
/*Este tipo de datos es similar a UNDEFINED, con la diferencia de que los usuarios o el sistema es 
conciente que se le asignó un valor*/
let isPremiumUser;
let isUserLoged;
var todayDate = new Date();
var lastLogin = todayDate();
let isNewUser;

console.log('las variables del usuario son:
    isPremiumUser, valor: ${isPremiumUser}, tipoDato: ${typeof(isPremiumUser)}
    isUserLoged, valor: ${isUserLoged}, tipoDato: ${typeof(isUserLoged)}
    isNewUser, valor: ${isNewUser}, tipoDato: ${typeof(isNewUser)}
    );