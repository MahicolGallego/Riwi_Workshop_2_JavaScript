// Reto 2: Calculadora de Presupuesto
let budgetUser;
let spenGoToEat;
let spendBooks;
let minSaveMoney;
let MainSpend;
let opts;
let optExit = false;

//functions
function askTypeNumberWithNanVerify(message) {
  let dato = NaN;
  while (isNaN(dato) || !dato) {
    dato = prompt(message).trim();
    // console.log(Boolean(dato));
    if (isNaN(Number(dato)) || !dato || Number(dato) < 0) {
      alert('Por favor completa con un valor numerico positivo valido');
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

alert('Hola Julian, Vamos a ayudarte a Calculador tu presupuesto diario');
budgetUser = askTypeNumberWithNanVerify('Ingresar tu presupuesto diario $');

minSaveMoney = askTypeNumberWithNanVerify(
  'Ingresar el minimo de dinero obligatorio para ahorrar por dia $'
);

if (minSaveMoney <= budgetUser) {
  opts = confirm('Deseas realizar un gasto');
  if (opts) {
    while (!optExit) {
      do {
        opts = askTypeString(
          '¿Que en que deseas gastar?\n1 -> Comprar libro\n2 -> Comer afuera\nNo te preocupes, luego podras escoger si realizar el otro gasto'
        );
      } while (!['1', '2'].includes(opts));

      if (opts === '1') {
        spendBooks = askTypeNumberWithNanVerify(
          '¿Cual es el precio del libro?'
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
          spenGoToEat = askTypeNumberWithNanVerify(
            '¿Cuanto costara la comida?'
          );

          if (budgetUser - spenGoToEat >= minSaveMoney) {
            alert(
              `Puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
                budgetUser - spenGoToEat
              }\nTu cuota de ahorro minimo: ${minSaveMoney}\nAun cumples con la cuota minima de ahorro`
            );
          } else {
            alert(
              `No puedes realizar el gasto\nPresupuesto que quedaria restante despues del gasto: $${
                budgetUser - spenGoToEat
              }\nTu cuota de ahorro minimo: ${minSaveMoney}\nNo cumples con la cuota minima de ahorro`
            );
          }

          if (
            spenGoToEat &&
            spendBooks &&
            budgetUser - spenGoToEat - spendBooks >= 0
          ) {
            alert(
              `Puedes realizar ambas cosas\n\nTotal gastos: $${
                spenGoToEat + spendBooks
              }\nPresupuesto restante despues de los gastos: $${
                budgetUser - spenGoToEat - spendBooks
              }\nTu cuota de ahorro minima: $${minSaveMoney}\n`
            );
          }
        } else {
          alert('Ok, que tengas un buen dia');
        }
      } else {
      }
    }
  } else {
    alert('Eso es todo, que tengas buen dia. Adios');
  }
} else {
  alert(
    'No cuentas ni con el dinero suficiente para el ahorro minimo por dia. Ahorra todo pobre'
  );
}
