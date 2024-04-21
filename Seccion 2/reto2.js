// Reto 2: Calculadora de Presupuesto
let budgetUser;
let spendGoToEat;
let spendBooks;
let minSaveMoney;
let MainSpend;
let opts;
let optExit = false;

//functions
function askTypeNumberWithNanVerify(message) {
  let dato = NaN;
  while (isNaN(dato) || !dato || Number(dato) < 0) {
    dato = prompt(message).trim();
    // console.log(Boolean(dato));
    if (isNaN(Number(dato)) || !dato || Number(dato) < 0) {
      alert("Por favor completa con un valor numerico positivo valido");
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

alert("Hola Julian, Vamos a ayudarte a Calculador tu presupuesto diario");
budgetUser = askTypeNumberWithNanVerify("Ingresar tu presupuesto diario $");

minSaveMoney = askTypeNumberWithNanVerify(
  "Ingresar el minimo de dinero obligatorio para ahorrar por dia $"
);

if (minSaveMoney < budgetUser) {
  opts = confirm("Deseas realizar gastos hoy");
  if (opts) {
    while (!optExit) {
      do {
        opts = askTypeString(
          "¿Que en que deseas gastar hoy?\n1 -> Comprar libro\n2 -> Comer afuera\nNo te preocupes, luego podras escoger si realizar el otro gasto"
        );
      } while (!["1", "2"].includes(opts));

      if (opts === "1") {
        spendBooks = askTypeNumberWithNanVerify(
          "¿Cual es el precio del libro?"
        );
        if (budgetUser - spendBooks >= minSaveMoney) {
          alert(
            `Puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
              budgetUser - spendBooks
            }\nTu cuota de ahorro minimo: ${minSaveMoney}\nAun cumples con la cuota minima de ahorro`
          );
        } else {
          alert(
            `No puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
              budgetUser - spendBooks
            }\nTu cuota de ahorro minimo: ${minSaveMoney}\nNo cumples con la cuota minima de ahorro`
          );
        }

        opts = confirm(`¿Deseas salir a comer afuera?`);

        if (opts) {
          spendGoToEat = askTypeNumberWithNanVerify(
            "¿Cuanto costara la comida?"
          );

          if (budgetUser - spendGoToEat >= minSaveMoney) {
            alert(
              `Puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
                budgetUser - spendGoToEat
              }\nTu cuota de ahorro minimo: ${minSaveMoney}\nAun cumples con la cuota minima de ahorro`
            );
          } else {
            alert(
              `No puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
                budgetUser - spendGoToEat
              }\nTu cuota de ahorro minimo: ${minSaveMoney}\nNo cumples con la cuota minima de ahorro`
            );
          }
        }
      } else {
        spendGoToEat = askTypeNumberWithNanVerify("¿Cuanto costara la comida?");
        if (budgetUser - spendGoToEat >= minSaveMoney) {
          alert(
            `Puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
              budgetUser - spendGoToEat
            }\nTu cuota de ahorro minimo: ${minSaveMoney}\nAun cumples con la cuota minima de ahorro`
          );
        } else {
          alert(
            `No puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
              budgetUser - spendGoToEat
            }\nTu cuota de ahorro minimo: ${minSaveMoney}\nNo cumples con la cuota minima de ahorro`
          );
        }

        opts = confirm(`¿Deseas comprar un libro?`);

        if (opts) {
          spendBooks = askTypeNumberWithNanVerify(
            "¿Cual es el precio del libro?"
          );

          if (budgetUser - spendBooks >= minSaveMoney) {
            alert(
              `Puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
                budgetUser - spendBooks
              }\nTu cuota de ahorro minimo: ${minSaveMoney}\nAun cumples con la cuota minima de ahorro`
            );
          } else {
            alert(
              `No puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
                budgetUser - spendBooks
              }\nTu cuota de ahorro minimo: ${minSaveMoney}\nNo cumples con la cuota minima de ahorro`
            );
          }
        }
      }

      if (
        spendGoToEat &&
        spendBooks &&
        budgetUser - spendGoToEat - spendBooks >= minSaveMoney
      ) {
        alert(
          `Puedes realizar ambas cosas\n\nTotal gastos: $${
            spendGoToEat + spendBooks
          }Presupuesto restante despues de los gastos: $${
            budgetUser - spendGoToEat - spendBooks
          }\nTu cuota de ahorro minima: $${minSaveMoney}`
        );
      } else if (
        spendGoToEat &&
        spendBooks &&
        budgetUser - spendGoToEat > minSaveMoney &&
        budgetUser - spendBooks > minSaveMoney &&
        budgetUser - spendGoToEat - spendBooks < minSaveMoney
      ) {
        alert(
          `Lo siento, no puedes realizar ambos gastos\nCosto libro: $${spendBooks}\nPresupuesto restante despues del gasto: $${
            budgetUser - spendBooks
          }\nCumplirias con tu cuota de ahorro minima: $${minSaveMoney}\n\nCosto Salir a comer: $${spendGoToEat}\nPresupuesto restante despues del gasto: $${
            budgetUser - spendGoToEat
          }\nCumplirias con tu cuota de ahorro minima: $${minSaveMoney}\n\Ambos gastos: $${
            spendBooks + spendBooks
          }\nPresupuesto restante despues de ambos gastos: $${
            budgetUser - spendBooks - spendGoToEat
          }\nNo cumplirias con tu cuota de ahorro minima: $${minSaveMoney}\n\nPor lo visto, te recomendamos priorizary solo realizar uno de los 2 gastos`
        );
      } else if (
        spendGoToEat &&
        spendBooks &&
        budgetUser - spendGoToEat < minSaveMoney &&
        budgetUser - spendBooks < minSaveMoney
      ) {
        alert(
          `Lo siento, no puedes realizar ninguno de estos gastos\nCosto libro: $${spendBooks}\nPresupuesto restante despues del gasto: $${
            budgetUser - spendBooks
          }\nNo cumplirias con tu cuota de ahorro minima: $${minSaveMoney}\n\nCosto Salir a comer: $${spendGoToEat}\nPresupuesto restante despues del gasto: $${
            budgetUser - spendGoToEat
          }\nNo cumplirias con tu cuota de ahorro minima: $${minSaveMoney}\n`
        );
      }

      optExit = confirm(
        "¿Deseas salir y no continuar presupuestando mas dias?"
      );

      if (optExit) {
        alert("Eso es todo, que tengas buen dia. Adios");
        spendBooks = 0;
        spendGoToEat = 0;
      }
    }
  } else {
    alert("Eso es todo, que tengas buen dia. Adios");
  }
} else {
  alert(
    "No cuentas ni con el dinero suficiente o tienes lo justo para el ahorro minimo por dia. Ahorra todo. pobre"
  );
}
