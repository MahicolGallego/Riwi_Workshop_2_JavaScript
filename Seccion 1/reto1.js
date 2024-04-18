// Reto 1: El Viaje de Julian
alert('Hola Julian, planeemos tu viaje');

const tripDestiny = prompt('Lugar de destino del viaje');

let dataCorrect = false;
let tripDurationDays;
let tripBudget;
let costPerDay;

while (!dataCorrect) {
  tripDurationDays = Number(prompt('Indica la duracion en dias del viaje'));
  if (isNaN(tripDurationDays)) {
    alert('Por favor, indica la duracion en un valor numerico');
  } else {
    dataCorrect = true;
  }
}

dataCorrect = false;

while (!dataCorrect) {
  tripBudget = Number(prompt('Indica tu presupuesto para el viaje en numero'));

  if (isNaN(tripBudget)) {
    alert('Por favor, indica el presupuesto en un valor numerico');
  } else {
    dataCorrect = true;
  }
}

dataCorrect = false;

while (!dataCorrect) {
  costPerDay = Number(
    prompt('Indica el costo de actividades y alimentos por dia')
  );

  if (isNaN(costPerDay)) {
    alert('Por favor, indica estos valores en un valor numerico');
  } else {
    dataCorrect = true;
  }
}

// console.log(costPerDay * tripDurationDays);

alert(
  `${
    costPerDay * tripDurationDays <= tripBudget
      ? 'Tienes el dinero suficiente para realizar tu viaje'
      : 'Lo sentimos, no cuentas con el dinero suficiente. Prueba a el presupuesto o la duracion del viaje'
  }`
);
