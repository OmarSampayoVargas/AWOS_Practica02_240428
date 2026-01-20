//Pesonalizamos el separador del ejerccio
console.log("%Ejercicio 03: Funciones Procedurales",style_console);
// funciones procedurales, funciones vacias (VOID) o funciones que no rtornan un valor

function saludar()
{
    console.log("Bienvenido al sistema de bienes raices");
}

console.warn("1.Funciones procedurales");
saludar();  

//2.funciones procedurales, con parametros de entrada, es decir que reciben datos para funcionar

function saludarUsuario(nombreUsuario, generoUsuario)
{
    if(generoUsuario="H")
        console.log("Bienvenido Sr. " + nombreUsuario + " al sistema de bienes raices");
    else if(generoUsuario="M")
        console.log("Bienvenida Sra. " + nombreUsuario + " al sistema de bienes raices");   
    else 
        console.log("Bienvenide " + nombreUsuario + " al sistema de bienes raices");
}

console.warn("2.Funciones procedurales con parametros de entrada");
//test 1:
console.log("nombreUsuario=Omar de Jesus Sampayo Vargas, generoUsuario= H");
saludarUsuario("Omar","H");

//test 2:
console.log("nombreUsuario=Maria Lopez, generoUsuario= M");
saludarUsuario("Maria Lopez","M");
//test 3:
console.log("NombreUsuario = Jan, generoUsuario= Null");
saludarUsuario("Jan",null);

// 3. Funciones que rotrnan u balor pero que no reciben parametros de entrada
function fechaActual()
{
    const fecha=new Date();
    const dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
        "Septiembre","Octubre","Noviembre","Diciembre"];

    const fecha_formatoMX=`${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    return fecha_formatoMX;    

}

console.warn("3.Funciones que retornan un valor pero no reciben parametros de entrada");
let hoy= fechaActual();
console.log(fechaActual);
console.log(typeof(fechaActual));
console.log(hoy);

// 4. Funciones que reciben parametros de entrada y retornan un valor
function login(username, password)
{
    let userValidation=true

    if(username==="admin" && password=="12345")
    {
        userValidation=true;
        console.log("Bienvenido usuario admin");
    }
    else if(username==="admin" && password!="12345")
    {
        userValidation=false;
        console.log("Contraseña incorrecta");
    }
    else if(username!="admin" && password!=="12345")
    {
        userValidation=false;
        console.log("usuario no existe");
    }  
    else if(username!="admin" && password!="12345")
    {
        userValidation=false;
        console.log("verifica el usuario y la contraseña");
    }
    return userValidation;
}

console.warn("4.Funciones que reciben parametros de entrada y retornan un valor");
var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario: admin , password: 12345")
loginStatus = login("admin","12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin:"}`);

//Test 2 - Usuario y contraseña correctos
console.log("Test 2 - usuario: admin , password: 12345")
loginStatus = login("admin","12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin:"}`);

//Test 3 - Usuario y contraseña correctos
console.log("Test 3 - usuario: administrador , password: 12345")
loginStatus = login("administrador","12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin:"}`);

//Test 4 - Usuario y contraseña correctos
console.log("Test 4 - usuario: marcor , password: abcde")
loginStatus = login("marcor","abcde");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin:"}`);

//funcion anonima sin parametros (verison extendida)
isNewUser = function(){
    const hoy = new Date();

    return(
        lastLogin.getFullYear()=== hoy.getFullYear()&&
        lastLogin.getMonth()  === hoy.getMonth()&&
        lastLogin.getDate()=== hoy.getDate()
    );
}
console.warn("5.Funciones anonimas, sin parametros");

console.log("Test 1- Fecha de ultimo acceso es igual a la fecha de hoy");
console.log('fecha del ultimo acceso es: ${lastLogin}');
console.log('El usuario logeado es: ${isNewUser()?"Nuevo usuario":"Usuario antiguo"}');

console.log("----------------------------------------------------");
lastLogin = new Date("2025/12/31");
console.log("Test 2- Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log('fecha del ultimo acceso es: ${lastLogin}');
console.log('El usuario logeado es: ${isNewUser()?"Nuevo usuario":"Usuario antiguo"}');


//fuciones anonimas con parametros (version arrow o lambda)

const sumar = (a,b)=>{
    let resultado=a+b;
    return resultado;
}

console.warn("6.Funciones anonima con parametros")
console.log('el resultado de la suma 15 + 83 es: ${sumar(15,83)}');

//cuando la funcion anonima tiene una sola linea de codigo se puede simplificar aun mas
const multiplicar = (a,b) => a*b;
console.log('el resultado de la multiplicacion 15 * 83 es: ${multiplicar(15,83)}');

//callback

console.warn("7.Funciones Anonimas Callback(Respuesta)")
const recoverPassword = function(username, callback)
{
    //Generamos el codigo para enviar al usuario
    const recoveryCode = Math.floor(1000000 + Math.random()*900000); //Codigo de 6 digitos
    console.log(`
        ============================================================================================
        solicitud de recuperacion recibida
        correo del usuario solicitantes ${username}
        Gnerando codigo de recuperacion...
        codigo de recuperacion generado: ${recoveryCode}
        Enviando codigo de recuperacion al correo del usuario...
        ============================================================================================`);
//Definiendo la respuesta del sistema
        const response = {
            status: "ok",
            message: "Codigo de recuperacion enviado al correo del usuario"
        };
        callback(response);
}

console.warn("Testing callback function");
recoverPassword("usuario@ejemplo.com", function(response){
    console.log(`Respuesta del servidor: ${response.message}`);
});