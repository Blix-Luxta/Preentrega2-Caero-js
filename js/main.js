// let ingreseNombre = prompt("¿Cómo te llamás?");
// alert(`¡Bienvenido/a ${ingreseNombre} al Simulador de carrito de compras!`);

// let remeraLisa = 700;
// let remeraEstampada = 900;
// let busoLiso = 1900;
// let busoEstampado = 2200;
// let jeanLiso = 3000 ;
// let jeanEstampado = 3500;
// let camperaLisa = 2500;
// let camperaEstampada = 2900;
// let precio = 0;


let productos = prompt("Podemos ofrecerte: remeras, busos, jeans y camperas. Elegí uno para saber más")

function compra(producto) {
    if (producto == "remeras" || producto == "Remeras") {
        console.log("¿Querés la remera lisa o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${remeraEstampada}. Se agrega al carrito.`);
            precio =+ remeraEstampada
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${remeraLisa}. Se agrega al carrito.`);
            precio =+ remeraLisa
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(producto == "busos" || producto == "Busos"){
        console.log("¿Querés el buso liso o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${busoEstampado}. Se agrega al carrito.`);
            precio =+ busoEstampado
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${busoLiso}. Se agrega al carrito.`);
            precio =+ busoLiso
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(producto == "jeans" || producto == "Jeans"){
        console.log("¿Querés el jeans clásicos o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${jeanEstampado}. Se agrega al carrito.`);
            precio =+ jeanEstampado
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${jeanLiso}. Se agrega al carrito.`);
            precio =+ jeanLiso
        }else{
            console.log("Ingrese una opción válida.");
        }
    } else if(producto == "camperas" || producto == "Camperas"){
        console.log("¿Querés el camperas lisas o con diseño?");
        let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
        if(diseño == 1){
            console.log(`El pecio unitario seria de $${camperaEstampada}. Se agrega al carrito.`);
            precio =+ camperaEstampada
        }else if (diseño == 0){
            console.log(`El pecio unitario seria de $${camperaLisa}. Se agrega al carrito.`);
            precio =+ camperaLisa
        }else{
            console.log("Ingrese una opción válida.");
        }}
        else{
        console.log("Ingrese una opción válida.");
    }
}

compra (productos)


console.log("¿Querés seguir comprando?");
let respuesta1 = parseInt(prompt(`Para seguir ingresá "1". Para finalizar ingresá "0".`)) 

function agregarAlCarrito(respuesta) {
    
    while (respuesta != 0) {
        producto = prompt("Podemos ofrecerte: remeras, busos, jeans y camperas. Elegí uno para continuar")
            if (producto == "remeras" || producto == "Remeras") {
                console.log("¿Querés la remera lisa o con diseño?");
                let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
                if(diseño == 1){
                    console.log(`El pecio unitario seria de $${remeraEstampada}. Se agrega al carrito.`);
                    precio =+ remeraEstampada
    
                }else if (diseño == 0){
                    console.log(`El pecio unitario seria de $${remeraLisa}. Se agrega al carrito.`);
                    precio =+ remeraLisa
    
                }else{
                    console.log("Ingrese una opción válida.");
                }
            } else if(producto == "busos" || producto == "Busos"){
                console.log("¿Querés el buso liso o con diseño?");
                let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís lisa `))
                if(diseño == 1){
                    console.log(`El pecio unitario seria de $${busoEstampado}. Se agrega al carrito.`);
                    precio =+ busoEstampado
    
                }else if (diseño == 0){
                    console.log(`El pecio unitario seria de $${busoLiso}. Se agrega al carrito.`);
                    precio =+ busoLiso
    
                }else{
                    console.log("Ingrese una opción válida.");
                }
            } else if(producto == "jeans" || producto == "Jeans"){
                console.log("¿Querés el jeans clásicos o con diseño?");
                let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
                if(diseño == 1){
                    console.log(`El pecio unitario seria de $${jeanEstampado}. Se agrega al carrito.`);
                    precio =+ jeanEstampado
    
                }else if (diseño == 0){
                    console.log(`El pecio unitario seria de $${jeanLiso}. Se agrega al carrito.`);
                    precio =+ jeanLiso
    
                }else{
                    console.log("Ingrese una opción válida.");
                }
            } else if(producto == "camperas" || producto == "Camperas"){
                console.log("¿Querés el camperas lisas o con diseño?");
                let diseño = parseInt(prompt(`Ingresá "1" si querés con estampado o "0" si preferís clásicos `))
                if(diseño == 1){
                    console.log(`El pecio unitario seria de $${camperaEstampada}. Se agrega al carrito.`);
                    precio =+ camperaEstampada
    
                }else if (diseño == 0){
                    console.log(`El pecio unitario seria de $${camperaLisa}. Se agrega al carrito.`);
                    precio =+ camperaLisa
    
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

agregarAlCarrito(respuesta1)
