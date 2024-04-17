//Reto 2: Tipos de Souvenirs

let souvenir;
let cost;
let boolAvailable;
let registerMore = true;
const souvenirs = [];

alert('Creemos el registro de souvenirs');

while (registerMore) {
  souvenir = prompt('Nombre del souvenir');

  if (!isNaN(souvenir)) {
    alert('tipo de dato incorrecto, ingresa una opcion valida');
  } else {
    alert('tipo de dato correcto');
  }

  // const souvenirs = [
  //   { name: `${souvenir}`, cost: `${cost}`, available: `${boolAvailable}` },
  // ];

  // console.log(souvenirs[0]);
}
