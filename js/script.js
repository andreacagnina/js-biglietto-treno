let km = prompt(`Inserire il numero di chilometri che si vogliono percorrere`);

let age = prompt(`Inserire l'età del passeggero`);


const euroKm = 0.21;


let euroTicket = euroKm * km;


let discount = 0;


if (age < 18) {
    discount = 20;
}

else if (age > 65) {
    discount = 40;
}


let discountValue = euroTicket * discount / 100;


let discountedTicket = euroTicket - discountValue


document.getElementById('ticketCost').innerHTML = discountedTicket.toFixed(2) + '&euro;' + ' ' + 'invece di' + ' ' + euroTicket.toFixed(2) + '&euro;' + ' ' + '<br><br><p class="text-center"> Grazie per il tuo acquisto!</p>';
