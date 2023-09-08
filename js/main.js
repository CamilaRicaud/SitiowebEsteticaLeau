const tratamientos=[
    {
        id: 1,
        titulo: "limpieza facial profunda",
        precio: 4500,
        img:"limpiezafacial.jpg"
    },
    {id: 2, titulo: "Dermaplaning", precio: 6500, img:"dermaplaning2.jpg"},
    {id:3, titulo: "masaje facial kobido", precio:5000, img:"kobido.jpg"},
];

const carrito=[];
const tratamientosItems=document.querySelector(`#items`);
const tratamientoscarrito= document.querySelector(`#carrito`);
const precioTotal= document.querySelector(`#total`);
const botonVaciar=document.querySelector(`#boton-vaciar`);
const miLocalStorage = window.localStorage;

function mostrarTratamientos(){
    tratamientos.forEach((info)=>{
        const miNodo=document.createElement(`div`);
        miNodo.classList.add(`card`, `col-sm-4`);
        const miNodoCardBody=document.createElement(`div`);
        miNodoCardBody.classList.add(`card-body`);
        const miNodoTitle=document.createElement(`h5`);
        miNodoTitle.classList.add(`card-title`);
        miNodoTitle.textContent= info.titulo;
        const miNodoImagen=document.createElement(`img`);
        miNodoImagen.classList.add(`img-fluid`);
        miNodoImagen.setAttribute(`src`, info.img);
        const miNodoPrecio=document.createElement(`p`);
        miNodoPrecio.classList.add(`card-text`);
        miNodoPrecio.textContent=`$${info.precio}`;
        const miNodoBoton=document.createElement(`button`);
        miNodoBoton.classList.add(`btn`, `btn-primary`);
        miNodoBoton.textContent=`+`;
        miNodoBoton.setAttribute(`marcador`, info.id);
        miNodoBoton.addEventListener(`click`, anyadirAlCarrito);
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        tratamientosItems.appendChild(miNodo);
    });
}

function anyadirAlCarrito(){
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
};

function renderizarCarrito(){
    tratamientoscarrito.textContent=``;
    const carritoSinDuplicado= [...new Set(carrito)];
    carritoSinDuplicado.forEach((item)=>{
        const miItem= tratamientos.filter((itemBaseDatos)=>{
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem= carrito.reduce((total, itemId)=>{
            return itemId === item ? total += 1 : total;
        }, 0);
        const miNodo=document.createElement(`li`);
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].titulo} - ${miItem[0].precio}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = '-';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        tratamientoscarrito.appendChild(miNodo);
    });
    precioTotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}

function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = tratamientos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

botonVaciar.addEventListener('click', vaciarCarrito);

cargarCarritoDeLocalStorage();
mostrarTratamientos();
renderizarCarrito();








