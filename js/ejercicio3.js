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