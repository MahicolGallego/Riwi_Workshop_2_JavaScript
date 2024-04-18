//Reto 2: Tipos de Souvenirs

let currentBudget;
let souvenir;
let cost;
let boolAvailable;
let registerMore = true;
let askOut;
let showSouvenirsAvailableMssg = '';
let indexSouvenirsAvailable = [];
let payOpt = true;
const souvenirs = [];

function isNanVerify(message) {
  let dato = NaN;
  // console.log(isNaN(dato));
  while (isNaN(dato) || !dato) {
    dato = Number(prompt(message));
    if (isNaN(dato) || !dato) {
      alert('Por favor completa con un valor numerico');
    } else {
      return dato;
    }
  }
}

alert('Creemos el registro de souvenirs');

while (registerMore) {
  askOut = true;

  do {
    souvenir = prompt('Nombre del souvenir');
    // console.log(!isNaN(souvenir));
  } while (!isNaN(souvenir));
  // console.log(!isNaN(souvenir));
  alert('tipo de dato correcto');

  do {
    cost = prompt('Indica el costo del souvenir en numeros');
  } while (isNaN(cost));

  cost = Number(cost);

  alert('tipo de dato correcto');

  do {
    boolAvailable = prompt(
      'Disponibilidad de compra del producto: \ndisponible: 1\nno disponible: 0'
    );
  } while (isNaN(boolAvailable) || (boolAvailable != 1 && boolAvailable != 0));

  boolAvailable = Boolean(Number(boolAvailable));

  alert('tipo de dato correcto');

  //Insertar registro

  // console.log(typeof souvenir, typeof cost, typeof boolAvailable)

  souvenirs.push({ name: souvenir, cost: cost, available: boolAvailable });
  console.log(souvenirs);

  alert('Registro agregado con exito');

  while (askOut) {
    askOut = prompt('Deseas registrar mas souvenirs \n1: si\n0: no');
    if (askOut === '1') {
      askOut = false;
    } else if (askOut === '0') {
      askOut = false;
      registerMore = false;
    }
  }
}

currentBudget = isNanVerify('Por favor indica tu presupuesto actual');

souvenirs.forEach((element,index) => {
  if (element.available === true) {
    showSouvenirsAvailableMssg += `${index}. Souvenir: ${element.name}\nCosto: ${element.cost}\nDisponiblidad: ${element.available}\n\n`;
  }
});

while (payOpt) {
  payOpt = confirm('Deseas comprar algun souvenir');

  switch (payOpt) {
    case true:

      productBuy = isNanVerify(
        `Disponibles para comprar\n\n${showSouvenirsAvailableMssg}\n\nTu presupuesto actual: $${currentBudget}\nIndica el producto que deseas comprar por el numero con el que aparecen en la lista mostrada`
      );

      if (souvenirs[productBuy] &&
        souvenirs[productBuy].available === true &&
        souvenirs[productBuy].cost <= currentBudget
      ) {
        currentBudget -= souvenirs[productBuy].cost;
        alert(`Producto comprado con exito\n${souvenirs[productBuy].name}`);
      }else{
        alert("No tienes el dinero suficiente para comprar el producto / La seleccion fue errada / El producto no esta disponible para su compra")
      }

      break;

    case false:
      alert('Programa terminado. Adios');
      break;

    default:
      break;
  }
}
