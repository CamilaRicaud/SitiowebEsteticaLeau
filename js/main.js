const tratamientoscorporales=[
    {id: 1, nombre: "anticelulitico", precio: 10800},
    {id: 2, nombre: "anticelulitico Reafirmante", precio: 13000},
    {id:3, nombre: "tonificador", precio:7800},
    {id:4, nombre: "reducto I", precio:12500},
    {id:5, nombre: "reductor II", precio:12500},
    {id:6, nombre: "reductor III", precio:12300},
    {id:7, nombre: "piernas perfectas", precio:9000},
    {id:8, nombre: "bikini express", precio:13000},
    {id:9, nombre: "promo flash", precio:10000},
    {id:10, nombre: "promo ondas rusas", precio:9200},
    {id:11, nombre: "maderoterapia", precio:11500},
    {id:12, nombre: "maderoterapia + vela slim plus", precio: 14900},
    {id:13, nombre: "maderoterapia + ondas rusas/body up", precio: 14000},
    {id:14, nombre: "drenaje linfatico", precio: 10500},
    {id:15, nombre: "drenaje linfatico + ondas rusas/body up", precio: 13000},
    {id:16, nombre: "drenaje linfatico + vela slim plus", precio: 14500},
    {id:17, nombre: "pase libre 1", precio:18900},
    {id:18, nombre: "pase libre 2", precio: 19800},
];

function saludo(nombre){
    alert("Bienvenido/a: " + nombre);
}

for (let i = 1; i<= 3; i++){
    let nombrecompleto = prompt("Ingresa tu nombre y apellido");
    if(nombrecompleto != ""){
        saludo(nombrecompleto);
        break;
    }else {
        alert("No ingresaste tu nombre, intentelo nuevamente.");
    }
}

function buscartratamiento(array,filtro){
    const encontrado= array.find((el)=> el.nombre.includes(filtro));
    return encontrado;
}

let ingresartratamiento = prompt("Ingresa el tratamiento que quieras buscar, para cancelar ingresar 0");

const tratamientoencontrado = buscartratamiento(tratamientoscorporales,ingresartratamiento);

do{
    if (ingresartratamiento != "0" && ingresartratamiento!=""){
        alert("Tratamiento encontrado: " + tratamientoencontrado.nombre + ", precio:$"+ tratamientoencontrado.precio);
        break;
    }else {
        alert("La busqueda ha sido cancelada");
    }
}while (ingresartratamiento !="0" && ingresartratamiento!="");

let ingresarprecio = prompt("Ingrese su presupuesto");

function filtrarporprecio(array,filtro){
    return array.filter(el=> el.precio<=filtro);
}
const preciotratamientos= filtrarporprecio(tratamientoscorporales, ingresarprecio);

do{
    if (isNaN(ingresarprecio)){
        alert("Solo se pueden ingresar numeros");
        break;
    }else {
        console.log(preciotratamientos);
    }
}while (isNaN(ingresarprecio));


