let lvlEnergy;
let stateOfWeather;
let howManyWork;
let countDay = 0;
const quantityDays = [];
let optExit;
let registerMore = true;

function toQuestion(message) {
  let answer = prompt(message).toLowerCase();
  if (answer === 'undefined') {
    answer = undefined;
  } else if (answer === 'null') {
    answer = null;
  } else if (!isNaN(Number(answer))) {
    answer = Number(answer);
  }
  return answer;
}

function recommend(energy, weather, work) {
  if (!energy) {
    return `Tu nivel de energia es bajo, tomate el dia para descansar`;
  } else if (energy && !work && weather) {
    return `El clima esta perfecto y no hay mucho trabajo, Puedes salir a correr`;
  } else if (energy && !weather) {
    return `El clima no es el ideal, puedes quedarte a trabajar o realizar proyectos personales`;
  } else {
    return `Tienes bastante trabajo, al lio. Se responsable`;
  }
}

while (registerMore) {
  lvlEnergy = toQuestion(
    '¿Con que nivel de energia te sientes hoy?\nEquivalencia de respuestas\nUndefined\nnull\nSin respuesta -> 0\nRespuesta de solo espacios -> 0'
  );

  stateOfWeather = toQuestion(
    '¿Como esta el clima hoy?\nEquivalencia de respuestas\nUndefined\nnull\nSin respuesta -> 0\nRespuesta de solo espacios -> 0'
  );

  howManyWork = toQuestion(
    '¿Tienes mucho trabajo?\nEquivalencia de respuestas negativas\nUndefined\nnull\nSin respuesta -> 0\nRespuesta de solo espacios -> 0'
  );

  quantityDays.push({
    energy: lvlEnergy,
    weather: stateOfWeather,
    work: howManyWork,
  });

  do {
    optExit = prompt(
      'Deseas continuar recibiendo recomendaciones por dia? y:si || n:no'
    );
  } while (optExit !== 'y' && optExit !== 'n');

  if (optExit === 'n') {
    registerMore = false;
  }
}

// console.log(quantityDays);

alert('Revisa la consola para tus resultados');

const recommends = quantityDays.map(
  (element) => (reco = recommend(element.energy, element.weather, element.work))
);

recommends.forEach((element) => {
  countDay++;
  console.log(`Dia ${countDay} -> Recomendacion: ${element}`);
});

// console.log(recommends);
