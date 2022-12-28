
const remeraLisa = new producto (1,"Remera Lisa",700, 20)

const remeraEstampada = new producto (2, "Remera Estampada", 900,  20)

const busoLiso = new producto (3, "Buso Liso", 2900,  16,)

const busoEstampado = new producto (4, "Buso Estampado",  3200,  12)

const jeanLiso = new producto (5, "jean Liso", 4000, 19)

const jeanEstampado = new producto (6, "jean Estampado", 4500, 11)

const camperaLisa = new producto (7, "Campera Lisa", 3500, 20)

const camperaEstampada = new producto (8, "Campera Estampada", 3900, 10)

const gorraBordada = new producto (9, "Gorra Bordada", 3000, 10)

const GorraSeleccion = new producto (10, "Gorra con el Escudo de la AFA", 4000, 30)

const CamisetaSeleccion = new producto (11, "Camiseta de la Selecion con las 3 estrellas", 6000, 10)


let precio = []

function producto (id, nombre, precio, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.stock = parseInt(stock);
    this.stockDisponible = (cantidadProductos) => {
        if (cantidadProductos <= this.stock){
            this.stock = stock - cantidadProductos
        }else{
            alert("Supera el stock disponible")
        }
    }
}
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

function compra(producto) {
    if (producto == "remeras" || producto == "Remeras") {
        console.log("¿Querés la remera lisa o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${remeraEstampada.precio}. Se agrega al carrito.`);

            //no pude hacer que la cantidad de la compra se multiplique con el precio unitario para acumularlo en la variabel precio

            // let cantidadProductos = remeraEstampada.stockDisponible(parseInt(prompt("¿Cuantas queres comprar?")))
            // precio.push(remeraEstampada.precio*parseInt(cantidadProductos))
            
            // console.log(precio);
            // let cantidadProductos = remeraEstampada.stockDisponible(parseInt(prompt("¿Cuantas queres comprar?")))
            // precio =+ (remeraEstampada.precio * cantidadProductos)
            // console.log(precio);
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${remeraLisa.precio}. Se agrega al carrito.`);

            //no pude hacer que la cantidad de la compra se multiplique con el precio unitario para acumularlo en la variabel precio

            // let cantidadProductos = remeraLisa.stockDisponible(parseInt(prompt("¿Cuantas queres comprar?")))
            // precio =+ (remeraLisa.precio * cantidadProductos)
            // console.log(precio);
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(producto == "busos" || producto == "Busos"){
        console.log("¿Querés el buso liso o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${busoEstampado.precio}. Se agrega al carrito.`);
            precio =+ busoEstampado.precio
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${busoLiso.precio}. Se agrega al carrito.`);
            precio =+ busoLiso.precio
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(producto == "jeans" || producto == "Jeans"){
        console.log("¿Querés el jeans clásicos o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${jeanEstampado.precio}. Se agrega al carrito.`);
            precio =+ jeanEstampado.precio
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${jeanLiso.precio}. Se agrega al carrito.`);
            precio =+ jeanLiso.precio
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(producto == "camperas" || producto == "Camperas"){
        console.log("¿Querés el camperas lisas o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${camperaEstampada.precio}. Se agrega al carrito.`);
            precio =+ camperaEstampada.precio
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${camperaLisa.precio}. Se agrega al carrito.`);
            precio =+ camperaLisa.precio
        }else{
            console.log("Ingrese una opción válida.");
        }}
        else{
        console.log("Ingrese una opción válida.");
    }
}

function agregarAlCarrito(respuesta) {
    
    while (respuesta != 0) {
        producto = prompt("Podemos ofrecerte: remeras, busos, jeans y camperas. Elegí uno para continuar")
        if (producto == "remeras" || producto == "Remeras") {
            console.log("¿Querés la remera lisa o con diseño?");
            let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
            if(diseño == 1){
                console.log(`El pecio unitario seria de $${remeraEstampada.precio}. Se agrega al carrito.`);
                
                //no pude hacer que la cantidad de la compra se multiplique con el precio unitario para acumularlo en la variabel precio
    
                // let cantidadProductos = remeraEstampada.stockDisponible(parseInt(prompt("¿Cuantas queres comprar?")))
                // precio =+ (remeraEstampada.precio * cantidadProductos)
                // console.log(precio);
            }else if (diseño == 0){
                console.log(`El pecio unitario seria de $${remeraLisa.precio}. Se agrega al carrito.`);
    
                //no pude hacer que la cantidad de la compra se multiplique con el precio unitario para acumularlo en la variabel precio
    
                // let cantidadProductos = remeraLisa.stockDisponible(parseInt(prompt("¿Cuantas queres comprar?")))
                // precio =+ (remeraLisa.precio * cantidadProductos)
                // console.log(precio);
            }else{
                console.log("Ingrese una opción válida.");
            }
        } else if(producto == "busos" || producto == "Busos"){
            console.log("¿Querés el buso liso o con diseño?");
            let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
            if(diseño == 1){
                console.log(`El pecio unitario seria de $${busoEstampado.precio}. Se agrega al carrito.`);
                precio =+ busoEstampado.precio
            }else if (diseño == 0){
                console.log(`El pecio unitario seria de $${busoLiso.precio}. Se agrega al carrito.`);
                precio =+ busoLiso.precio
            }else{
                console.log("Ingrese una opción válida.");
            }
        } else if(producto == "jeans" || producto == "Jeans"){
            console.log("¿Querés el jeans clásicos o con diseño?");
            let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
            if(diseño == 1){
                console.log(`El pecio unitario seria de $${jeanEstampado.precio}. Se agrega al carrito.`);
                precio =+ jeanEstampado.precio
            }else if (diseño == 0){
                console.log(`El pecio unitario seria de $${jeanLiso.precio}. Se agrega al carrito.`);
                precio =+ jeanLiso.precio
            }else{
                console.log("Ingrese una opción válida.");
            }
        } else if(producto == "camperas" || producto == "Camperas"){
            console.log("¿Querés el camperas lisas o con diseño?");
            let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
            if(diseño == 1){
                console.log(`El pecio unitario seria de $${camperaEstampada.precio}. Se agrega al carrito.`);
                precio =+ camperaEstampada.precio
            }else if (diseño == 0){
                console.log(`El pecio unitario seria de $${camperaLisa.precio}. Se agrega al carrito.`);
                precio =+ camperaLisa.precio
            }else{
                console.log("Ingrese una opción válida.");
            }}
            else{
            console.log("Ingrese una opción válida.");
        }
            console.log("¿Querés seguir comprando?");
        respuesta = parseInt(prompt(`Para seguir ingresá "1". Para finalizar ingresá "0".`)) 
    }
            console.log("¡Gracias por su compra!");
}

function acceso(){
    if(exito){
        let opcion = prompt("Podemos ofrecerte: remeras, busos, jeans y camperas. Elegí uno para saber más")
        compra(opcion)
    }else{
        alert("No quedan más intentos. Gracias por utilizar nuestros servicios.")
    }
}


//==========================Esta asi por ahora===========================================

saludo()
alert("Para continuar por favor registre los siguientes datos:")
let exito = registro()
console.log(exito);
acceso()
console.log(usuario);
console.log("¿Querés seguir comprando?");
let respuesta1 = parseInt(prompt(`Para seguir ingresá "1". Para finalizar ingresá "0".`)) 
agregarAlCarrito(respuesta1)

//=====================================================================
//========================== Esto funca ========================================

// function filtrarPorNombre(arr, filtro){
//     return arr.filter((producto)=>{
//         return producto.nombre.includes (filtro)
//     })
// }
// let busqueda = prompt("Ingresa el nombre del producto")
// let prodEncontrado = filtrarPorNombre(productos, busqueda)

// function filtrarPorPrecio(arr, filtro){
//     return arr.filter((producto)=>{
//         return producto.precio <= parseFloat (filtro)
//     })
// }

// let buscarPrecio = prompt("Ingresa el precio del producto")
// let precioEncontrado = filtrarPorPrecio(productos, buscarPrecio)

// console.log(precioEncontrado);
// console.log(prodEncontrado);

//=====================================================================