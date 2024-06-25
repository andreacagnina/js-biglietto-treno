let km = prompt(`Inserire il numero di chilometri che si vogliono percorrere`);
console.log(km)
let age = prompt(`Inserire l'età del passeggero`);
console.log(age)

const euroKm = 0.21;
console.log(euroKm)

let euroTicket = euroKm * km;
console.log(euroTicket)

let discount = 0;


if (age < 18) {
    discount = 20;
}

else if (age > 65) {
    discount = 40;
}
console.log(discount)

let discountValue = euroTicket * discount / 100;


let discountedTicket = euroTicket - discountValue
console.log(discountedTicket)

document.getElementById('ticketCost').innerHTML = ' '