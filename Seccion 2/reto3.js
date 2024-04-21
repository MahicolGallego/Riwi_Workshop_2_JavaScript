let weather;
let weightLimit;
let spaceAvailable = 100;
let answerUser;
let elementsRecommend;
let elementExist;
let elementOpts = [];
let elementsSelected = [];

const elementsRainyDay = [
  { element: "paraguas", weight: 1, space: 25, priority: "alta" },
  {
    element: "chaqueta impermeable",
    weight: 0.8,
    space: 30,
    priority: "moderada",
  },
  { element: "botas impermeables", weight: 2, space: 40, priority: "baja" },
];

const elementsSunnyDay = [
  { element: "paraguas", weight: 1, space: 25, priority: "moderada" },
  {
    element: "bloqueador solar",
    weight: 0.5,
    space: 10,
    priority: "alta",
  },
  { element: "botella de agua", weight: 2, space: 20, priority: "moderada" },
];

const elementsExtras = [
  { element: "camara", weight: 2, space: 25, priority: "alta" },
  {
    element: "tripode",
    weight: 3,
    space: 60,
    priority: "baja",
  },
  { element: "balon", weight: 1.5, space: 15, priority: "baja" },
  {
    element: "almohada para el viaje",
    weight: 1.5,
    space: 20,
    priority: "baja",
  },
];

//----------------------------------------------

function askTypeNumberWithNanVerify(message) {
  let dato = NaN;
  while (isNaN(dato) || !dato || Number(dato) < 0) {
    dato = prompt(message).trim();
    // console.log(Boolean(dato));
    if (isNaN(Number(dato)) || !dato || Number(dato) < 0) {
      alert("Por favor completa con un valor numerico valido");
    } else {
      return Number(dato);
    }
  }
}

function askTypeString(message) {
  let dato;

  do {
    dato = prompt(message).trim().toLocaleLowerCase();
  } while (dato === "");

  return dato;
}

function menuAndAskForAction() {
  let dato;

  while (![1, 2, 3, 4, 5].includes(dato)) {
    dato = askTypeNumberWithNanVerify(
      `¿Que deseas realizar?\n1 -> Elegir elemento necesario para el clima\n2 -> Elegir elemento opcional\n3 -> Quitar elemento del equipaje\n4 -> Ver los elementos en el equipaje\n5 -> salir`
    );
  }

  return dato;
}

function showList(list) {
  let message = "";

  if (list[0]) {
    list.forEach((value) => {
      message += `\nElemento: ${value.element}\nPeso: ${value.weight}kg\nEspacio que ocupa: ${value.space}%\nPrioridad: ${value.priority}\n`;
    });
  } else {
    alert("No hay elementos en el registro");
  }
  return message;
}

function verifyExistElement(list, nameElement) {
  let confirm = false;
  list.forEach((value) => {
    if (nameElement === value.element) {
      confirm = value;
    }
  });
  if (!confirm) {
    alert("El elemento no esta en la lista, indique una opcion valida");
  }
  return confirm;
}

function registerElementAndUpdateData(
  list,
  newElement,
  weightLimit,
  spaceAvailable
) {
  if (
    weightLimit - newElement.weight >= 0 &&
    spaceAvailable - newElement.space >= 0
  ) {
    list.push(newElement);
    weightLimit -= newElement.weight;
    spaceAvailable -= newElement.space;
    alert("Agregado con exito a tu seleccion");
    return [list, weightLimit, spaceAvailable];
  }
  alert(
    "Si se registrase superaria las capacidades de peso posible o espacio posible restante.No se realizo el registro"
  );
  return [list, weightLimit, spaceAvailable];
}

function deleteElementAndUpdateData(
  list,
  elementForDelete,
  weightLimit,
  spaceAvailable
) {
  indexElement = list.indexOf(elementForDelete);
  console.log(indexElement);
  list.splice(indexElement, 1);
  weightLimit += elementForDelete.weight;
  spaceAvailable += elementForDelete.space;
  alert("Eliminado con exito");

  return [list, weightLimit, spaceAvailable];
}

//-----------------------------------------------------------

do {
  weather = askTypeString(
    "Como esta pronosticado el clima para el lugar al que vas a viajas\n\n*Soleado\n*Lluvioso"
  );
} while (!["soleado", "lluvioso"].includes(weather));

weightLimit = askTypeNumberWithNanVerify(
  "Indica el peso en Kg disponible para los elementos que te resta para llegar al peso limite"
);

if (weather === "soleado") {
  elementOpts = elementsSunnyDay;
} else {
  elementOpts = elementsRainyDay;
}

while (true) {
  answerUser = menuAndAskForAction();

  if (answerUser === 1) {
    answerUser = askTypeString(
      `Capacidad de peso disponible: ${weightLimit}kg\nEspacio disponible: ${spaceAvailable}%\n\nElementos aconsejables de acuerdo al clima ${weather}\n${showList(
        elementOpts
      )}\nEscribe el nombre del elemento que deseas llevar?`
    );

    elementExist = verifyExistElement(elementOpts, answerUser);

    if (elementExist) {
      [elementsSelected, weightLimit, spaceAvailable] =
        registerElementAndUpdateData(
          elementsSelected,
          elementExist,
          weightLimit,
          spaceAvailable
        );
      console.log(elementsSelected, weightLimit, spaceAvailable);
    }
  } else if (answerUser === 2) {
    answerUser = askTypeString(
      `Capacidad de peso disponible: ${weightLimit}kg\nEspacio disponible: ${spaceAvailable}%\n\nElementos extras:\n${showList(
        elementsExtras
      )}\nEscribe el nombre del elemento que deseas llevar?`
    );

    elementExist = verifyExistElement(elementsExtras, answerUser);

    if (elementExist) {
      [elementsSelected, weightLimit, spaceAvailable] =
        registerElementAndUpdateData(
          elementsSelected,
          elementExist,
          weightLimit,
          spaceAvailable
        );
    }
  } else if (answerUser === 3) {
    answerUser = askTypeString(
      `Capacidad de peso disponible: ${weightLimit}kg\nEspacio disponible: ${spaceAvailable}%\n\nElementos en el equipaje actualmente: ${weather}\n${showList(
        elementsSelected
      )}\nEscribe el nombre del elemento que deseas Eliminar?`
    );

    elementExist = verifyExistElement(elementsSelected, answerUser);

    if (elementExist) {
      [elementsSelected, weightLimit, spaceAvailable] =
        deleteElementAndUpdateData(
          elementsSelected,
          elementExist,
          weightLimit,
          spaceAvailable
        );
    }
  } else if (answerUser === 4) {
    elementExist = showList(elementsSelected);

    console.log(elementExist);

    if (elementExist) {
      alert(`Elementos en el equipaje actualmente:\n${elementExist}`);
    }
  } else {
    elementExist = showList(elementsSelected);

    if (elementExist) {
      alert(
        `Elementos que llevas;\n${elementExist}\nQue disfrutes de tu viaje\nAdios`
      );
    } else {
      alert(`Que disfrutes de tu viaje\nAdios`);
    }

    break;
  }
}
