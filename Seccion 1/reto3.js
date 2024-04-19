// Variables

let budgetUser;
let costHome;
let costTransport;
let costFood;
let tripDuration;
let umbralAllowedForExtraSpends;
let askRegisterProduct;
let nameProduct;
let priceProduct;
let listProducts = [];

// Funciones

function askTypeNumberWithNanVerify(message) {
  let dato = NaN;
  while (isNaN(dato) || !dato) {
    dato = Number(prompt(message).trim());
    // console.log(Boolean(dato));
    if (isNaN(dato) || !dato) {
      alert('Por favor completa con un valor numerico');
    } else {
      return dato;
    }
  }
}

function askTypeString(message){

  let dato;

  do{
    dato = prompt(message).trim();
  }while(dato !== "")

  return dato;
}

function constructorAndPushProduct(name, price,list){
  const product = {
    name: name,
    price: price
  }

  list.shift(product)

  return list

}

budgetUser = askTypeNumberWithNanVerify('El total de su presupuesto inicial');
costHome = askTypeNumberWithNanVerify('Costo alojamiento por dia');
costTransport = askTypeNumberWithNanVerify('Costo transporte por dia');
costFood = askTypeNumberWithNanVerify('Costo de alimentacion por dia');
tripDuration = askTypeNumberWithNanVerify('Dias de duracion del viaje');

budgetUser = budgetUser - (costHome + costTransport + costFood) * tripDuration;

if (budgetUser > 0) {
  umbralAllowedForExtraSpends = askTypeNumberWithNanVerify(
    'Cual es tu umbral mínimo necesario para gastos imprevistos o emergencias'
  );
  alert(
    `Umbral para extras o emergencias: $${umbralAllowedForExtraSpends}\nTu presupuesto despues de los gastos del viaje$: ${budgetUser}`
  );

  if (budgetUser >= umbralAllowedForExtraSpends) {
    alert('Estas en rango para considerar realizar una compra extra');
    
    askRegisterProduct = confirm("Quieres registrar los productos que pretendes comprar")
    
    if(askRegisterProduct){
      while (askRegisterProduct) {
        nameProduct = askTypeStringWithNanVerify('Nombre del producto')
        priceProduct = askTypeNumberWithNanVerify('Precio del producto')
        
        listProducts = constructorAndPushProduct(nameProduct, priceProduct, listProduct)

        if(priceProduct <= umbralAllowedForExtraSpends){
          listProducts = constructorAndPushProduct(nameProduct, priceProduct, listProduct)
          alert("Registro exitoso")
        }else{
          alert("El producto supera tu capacidad. No se registro")
        }
        askRegisterProduct = confirm("¿Deseas registrar mas productos?")
      }

      if(listProducts[0]){
        const cheapestProduct = listProducts.reduce((cheapest, currentProduct) => {
          if(currentProduct.price < cheapest.price){
            cheapest = currentProduct;
          }
          return cheapest;
        }, {name: "falso", price: 1000000});

        alert(`Te recomiendo comprar el producto mas barato\nProducto: ${cheapestProduct.name}\nPrecio: $${cheapestProduct.price}\n\nUn gusto ayudarte. Adios`)
        
      }
      else{
        alert("Lo siento no has registrado nigun producto. Adios")
      }
    }

    else{
      alert("Un placer ayudarte. Que tengas buen dia. Adios")
    }

  } else {
    alert(
      'Estas muy justo evite gastos adicionales para no sobrepasar su presupuesto'
    );
  }
} else {
  alert(`Tu dinero restante es: $${budgetUser}. Revisa tus finanzas. Adios`);
}
