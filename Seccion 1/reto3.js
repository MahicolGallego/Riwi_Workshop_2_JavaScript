let budgetUser;
let costHome;
let costTransport;
let costFood;
let tripDuration;
let umbralAllowedForExtraSpends;

function askWithNanVerify(message) {
let dato = NaN;
while (isNaN(dato) || !dato) {
    dato = Number(prompt(message));
    // console.log(Boolean(dato));
    if (isNaN(dato) || !dato) {
    alert('Por favor completa con un valor numerico');
    } else {
    return dato;
    }
}
}

budgetUser = askWithNanVerify("El total de su presupuesto inicial");
costHome = askWithNanVerify("Costo alojamiento por dia");
costTransport = askWithNanVerify("Costo transporte por dia");
costFood = askWithNanVerify("Costo de alimentacion por dia");
tripDuration = askWithNanVerify("Dias de duracion del viaje");


budgetUser = budgetUser - ((costHome + costTransport + costFood) * tripDuration);

if(budgetUser > 0){
    umbralAllowedForExtraSpends = askWithNanVerify("Cual es tu umbral mínimo necesario para gastos imprevistos o emergencias");
    alert(`Umbral para extras o emergencias: $${umbralAllowedForExtraSpends}\nTu presupuesto despues de los gastos del viaje$: ${budgetUser}`);

    if(budgetUser >= umbralAllowedForExtraSpends){
        alert("Estas en rango para considerar realizar una compra extra")
    }else{
        alert("Estas muy justo evite gastos adicionales para no sobrepasar su presupuesto")
    }

} else{
    alert(`Tu dinero restante es: $${budgetUser}. Revisa tus finanzas. Adios`)
}



