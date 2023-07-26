//comentario en una sola linea
/* comentario
multilinea*/

/*declaracion y asignacion de variable correcta*/
let nombre= "daniel";
let apellido= "perez";

/*contantes, variable que nunca cambia su valor, hay que establecer su valor en la misma linea*/

const PI = 3.14;

/*concatenando variables*/
let nombreCompleto= nombre + apellido;
let resultado= PI + 3.24;

/* metodo de salida*/
console.log(apellido);

alert ("hola tarola");

/*metodo de entrada*/

let usuario=prompt("ingresa tu nombre de usuario");

let num1=prompt("ingresa un numero");
num1= parseFloat(num1);
let num2= parseFloat(prompt("ingresa otro numero"));
let resultado2=num1 + num2;
alert(resultado2);

// condicionales

let temperatura = 30;
if (temperatura <= 30){
    console.log("esta agradable");
}else{
    console.log("que calor!!");
}
/* signos: = asignacion, == comparacion, != distinto,*/

if (temperatura > 30){
    console.log("que calor!!");
}else{
    console.log("esta agradable");
}

let Usuario= prompt("Ingresa tu usuario");

if (Usuario == "") {
    console.log("no ingresaste tu usuario");
}else{
    console.log("Bienvenido/a" + Usuario);
}

//otra forma de ponerlo
if (Usuario != "") {
    console.log("Bienvenido/a" + Usuario);
}else{
    console.log("no ingresaste tu usuario");
}

