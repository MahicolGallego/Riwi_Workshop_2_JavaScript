//Reto 3: Planificación del Itinerario

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
let productExist;
const listProducts = [];

// Functions

function askTypeNumberWithNanVerify(message) {
  let dato = NaN;
  while (isNaN(dato) || !dato) {
    dato = prompt(message).trim();
    // console.log(Boolean(dato));
    if (isNaN(Number(dato)) || !dato) {
      alert('Por favor completa con un valor numerico');
    } else {
      return Number(dato);
    }
  }
}

function askTypeString(message) {
  let dato;

  do {
    dato = prompt(message).trim().toLocaleLowerCase();
  } while (dato === '');

  return dato;
}

function constructorAndPushProduct(name, price, list) {
  const product = {
    name: name,
    price: price,
  };

  list.unshift(product);

  return list;
}

function checkIfTheProductExist(nameProduct, list) {
  alert('Comprobemos si el producto ya existe');

  if (list[0]) {
    for (const valueList of list) {
      if (valueList.name === nameProduct) {
        alert('El producto ya existe en el registro');
        return true;
      }
    }
  }
  alert('El producto no existe en el registro, puedes registrarlo');
  return false;
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

    askRegisterProduct = confirm(
      'Quieres registrar los productos que pretendes comprar'
    );

    console.log(askRegisterProduct);

    if (askRegisterProduct) {
      while (askRegisterProduct) {
        nameProduct = askTypeString(
          'Nombre del producto\n(La respuesta no debe estar vacia o contener solo espacios)'
        );
        priceProduct = askTypeNumberWithNanVerify('Precio del producto');

        productExist = checkIfTheProductExist(nameProduct, listProducts);

        if (!productExist && priceProduct <= budgetUser) {
          listProducts = constructorAndPushProduct(
            nameProduct,
            priceProduct,
            listProducts
          );
          console.log(listProducts);
          alert('Registro exitoso');
        } else if (!productExist && priceProduct >= budgetUser) {
          alert('El producto supera tu capacidad. No se registro');
        }

        askRegisterProduct = confirm('¿Deseas registrar mas productos?');
      }

      if (listProducts[0]) {
        const cheapestProduct = listProducts.reduce(
          (cheapest, currentProduct) => {
            if (currentProduct.price < cheapest.price) {
              cheapest = currentProduct;
            }
            return cheapest;
          },
          { name: 'falso', price: 1000000 }
        );

        alert(
          `Te recomiendo comprar el producto mas barato\nProducto: ${cheapestProduct.name}\nPrecio: $${cheapestProduct.price}\n\nUn gusto ayudarte. Adios`
        );
      } else {
        alert('Lo siento no has registrado ningun producto. Adios');
      }
    } else {
      alert('Un placer ayudarte. Que tengas buen dia. Adios');
    }
  } else {
    alert(
      'Estas muy justo evite gastos adicionales para no sobrepasar su presupuesto'
    );
  }
} else {
  alert(`Tu dinero restante es: $${budgetUser}. Revisa tus finanzas. Adios`);
}
