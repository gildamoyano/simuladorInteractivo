alert("Bienvenid@ a CeluWorld")

const carrito = [];

class producto {
    constructor(marca, precio) {

    this.marca = marca;
    this.precio = precio;
    }

};

const totalCarrito = () => {
    let sumaTotal = 0;
    carrito.forEach((item) => {
      sumaTotal += item.precio;
    });
    return sumaTotal;
  };

const mensaje = (marcaElegida) => {
  switch (marcaElegida) {
    case "iphone":
      console.log(`${marcaIphone.nombre} Agregado al carrito`);
      break;
    case "samsung":
      console.log(`${marcaSamsung.nombre} Agregado al carrito`);
      break;
    case "xiaomi":
      console.log(`${marcaXiaomi.nombre} Agregado al carrito`);
      break;
    case "motorla":
      console.log(`${marcaMotorola.nombre} Agregado al carrito`);
      break;
    case "lg":
      console.log(`${marcaLg.nombre} Agregado al carrito`);
      break;
    default:
      break;
  }
};  

 

const marcaIphone = new producto("iphone", 1, 160000);
const marcaSamsung = new producto("samsung", 1, 120000);
const marcaXiaomi = new producto("xiaomi", 1, 110000);
const marcaMotorola = new producto("motorola", 1, 115000);
const marcaLg = new producto("lg", 1, 105000);


const productos = [
  marcaIphone,
  marcaSamsung,
  marcaXiaomi,
  marcaMotorola,
  marcaLg,
];

const agregarProducto = () => {
  const productoElegido = prompt(`Elija su producto:
                            ${marcaIphone.nombre}
                            ${marcaSamsung.nombre}
                            ${marcaXiaomi.nombre}
                            ${marcaMotorola.nombre}
                            ${marcaLg.nombre}`);
  if (productoElegido != null) { 
    mensaje(productoElegido);
   
    switch (productoElegido) {
      case "iphone":
        carrito.push(marcaIphone);
        break;
      case "samsung":
        carrito.push(marcaSamsung);
        break;
      case "xiaomi":
        carrito.push(marcaXiaomi);
        break;
      case "motorola":
        carrito.push(marcaMotorola);    
        case "lg":
        carrito.push(marcaLg);
        break;
      default:
        alert("Escribir correctamente el modelo del producto");
        break;
    }

    let continuar = confirm("¿Quiere agregar más productos?");
    if (continuar) {
      agregarBikini(); 
    } else {
      console.log(`Total a pagar $${totalCarrito()}`); 
    }
  } else { 
    let buscar =
      prompt(`Puedes buscar tu celular por marca")`);
    if(buscar != null){
        const buscarMarca = producto.filter((producto) => producto.nombre.includes(buscar));

        if(buscarMarca.length > 1){ 
            if(confirm(`Podrías elegir marca ${(buscarMarca[Iphone].nombre).toUpperCase()} O marca ${(buscarMarca[samsung].nombre).toUpperCase()} Agrega al carrito`)){
                agregarProducto();
            }else{
                alert("Gracias por su visita");
            }
        }else{ 
            if((confirm(`Te podría llegar a interesar ${(buscarTalle[0].nombre).toUpperCase()} Agrega al carrito`))){
                agregarBikini();
            }else {
            alert("Gracias por su visita");
          }
        }    
      }else{
          alert("Gracias por su visita")
      }
    };
}

agregarProducto()