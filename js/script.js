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


document.getElementById('ticketCost').innerHTML = discountedTicket.toFixed(2) + '&euro;' + ' ' + ' e grazie alla nostra promo <em>"Young&Senior"</em> dedicata a Giovani e Anziani hai risparmiato ben' + ' ' + discountValue.toFixed(2) + '&euro;!' + ' ' + '<br><br><p class="text-center text-warning"> Ricorda di esibire un documento di identità valido prima della partenza! Buon Viaggio!</p>';
