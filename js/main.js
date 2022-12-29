function producto (id, nombre, precio, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.stock = parseInt(stock);
}

const productos = [
    {id: 1,nombre: "Remera Lisa", precio: 700, stock:20},
    {id: 2,nombre: "Remera Estampada", precio: 900, stock:20},
    {id: 3,nombre: "Buso Liso", precio: 2900, stock:20},
    {id: 4,nombre: "Buso Estampado", precio: 3200, stock:20},
    {id: 5,nombre: "jean Liso", precio: 3500, stock:20},
    {id: 6,nombre: "jean Estampado", precio: 4000, stock:20},
    {id: 7,nombre: "Campera Lisa", precio: 3500, stock:20},
    {id: 8,nombre: "Campera Estampada", precio: 3900, stock:20},
    {id: 9,nombre: "Gorra Bordada", precio: 3500, stock:20},
    {id: 10,nombre: "Gorra de la Selección", precio: 4500, stock:20},
    {id: 11,nombre: "Camiseta de la Selección", precio: 6000, stock:20}
]

let carrito = []
const usuario = [];

function saludo (){
    let ingreseNombre = prompt("¿Cómo te llamás?");
    alert(`¡Bienvenido/a ${ingreseNombre} al Simulador de carrito de compras!`);
    usuario.push(ingreseNombre)
}
function registro(){
    let login = false
    for (let index = 2; index >= 0; index--) {
        let telefono = parseInt(prompt("Ingrese su telefono por favor."))
        let email = prompt("Ingrese su correo electronico por favor.")
        if (telefono !="" && email !=""){
            usuario.push(telefono, email)
            login = true
            break
        }else{
            alert("Por favor ingrese los datos requeridos. \nLe quedan " + index + " intentos")
        }
    }
    return login
}
function acceso(){
    if(exito){
            alert("A continuacion la lista de nuestros productos")
            let todosLosProductos = productos.map((producto) => `${producto.nombre} $${producto.precio}`);
            alert(todosLosProductos.join(" - "))
            let respuesta = prompt("Podemos ofrecerte: remeras, busos, jeans y camperas. Elegí uno para saber más")
            compra (respuesta)
            let respuesta1 = parseInt(prompt(`Para seguir ingresá "1". Para finalizar ingresá "0".`)) 
            agregarAlCarrito(respuesta1)
    }else{
        alert("No quedan más intentos. Gracias por utilizar nuestros servicios.")
    }
}
// function pregunta(respuesta){
//     while (respuesta != "0"){
//         if (respuesta == "1") {
//             alert("A continuacion la lista de nuestros productos")
//             let todosLosProductos = productos.map((producto) => `${producto.nombre} $${producto.precio}`);
//             alert(todosLosProductos.join(" - "))
//             break
//         }else if(respuesta == "0") {
//             alert("Gracias por interesarse en nosotros.")
        
//         }else{
//             alert("elija una opcion valida")
//             respuesta = prompt("desea comprar algo? eliga 1 para seguir u oprima 0 para salir")
//         }
//     }
// }
function compra (opcion){
    if (opcion == "remeras" || opcion == "Remeras") {
        console.log("¿Querés la remera lisa o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            precio = 700
            producto = "Remera Lisa"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})

        }else if (diseño == 0){
            precio = 900
            producto = "Remera Estampada"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})

        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(opcion == "busos" || opcion == "Busos"){
        console.log("¿Querés el buso liso o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            precio = 2900
            producto = "Buso Liso"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else if (diseño == 0){
            precio = 3200
            producto = "Buso Estampado"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(opcion == "jeans" || opcion == "Jeans"){
        console.log("¿Querés jeans clásicos o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            precio = 3500
            producto = "jean Liso"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else if (diseño == 0){
            precio = 4000
            producto = "Jean Estampado"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(opcion == "camperas" || opcion == "Camperas"){
        console.log("¿Querés camperas lisas o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            precio = 3500
            producto = "Campera lisa"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else if (diseño == 0){
            precio = 3900
            producto = "Campera estampada"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else{
            console.log("Ingrese una opción válida.");
        }
    }else{
        alert("Ingrese una opción válida.");
    }

        console.log(carrito);

        alert("¿Querés seguir comprando?");
}
function agregarAlCarrito(respuesta) {
while (respuesta!= "0"){
    let opcion = prompt("Podemos ofrecerte: remeras, busos, jeans y camperas. Elegí uno para continuar")
    let precio = 0

    if (opcion == "remeras" || opcion == "Remeras") {
        console.log("¿Querés la remera lisa o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            precio = 700
            producto = "Remera Lisa"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})

        }else if (diseño == 0){
            precio = 900
            producto = "Remera Estampada"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})

        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(opcion == "busos" || opcion == "Busos"){
        console.log("¿Querés el buso liso o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            precio = 2900
            producto = "Buso Liso"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else if (diseño == 0){
            precio = 3200
            producto = "Buso Estampado"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(opcion == "jeans" || opcion == "Jeans"){
        console.log("¿Querés jeans clásicos o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            precio = 3500
            producto = "jean Liso"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else if (diseño == 0){
            precio = 4000
            producto = "Jean Estampado"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(opcion == "camperas" || opcion == "Camperas"){
        console.log("¿Querés camperas lisas o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            precio = 3500
            producto = "Campera lisa"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else if (diseño == 0){
            precio = 3900
            producto = "Campera estampada"
            let unidades = parseInt(prompt("cuantas unidades queres llevar?"))
            carrito.push({producto, unidades, precio})
        }else{
            console.log("Ingrese una opción válida.");
        }
    }else{
        alert("Ingrese una opción válida.");
    }

        console.log(carrito);

        alert("¿Querés seguir comprando?");
        respuesta = parseInt(prompt(`Para seguir ingresá "1". Para finalizar ingresá "0".`)) 
}
            carrito.forEach((carritoFinal) => {
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, precio: ${carritoFinal.precio}`);
            })
            console.log("¡Gracias por su compra!");
}


//==============================================================================================

saludo()
alert("Para continuar por favor registre los siguientes datos:")
let exito = registro()
console.log(usuario);
acceso()
const total = carrito.reduce((acc,el)=> acc + el.precio* el.unidades, 0)
console.log(`el total a pagar es $${total}`)
console.log("¡Vuelva pronto!");


