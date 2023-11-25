let userFullName = "";
let userKm = "";
let userAge = "";
let ticketDiscount = 0;
let ticketPrice = 0;
let ticketFullPrice = 0;

document.getElementById('calcola').addEventListener('click', function () {

    userFullName = document.getElementById('userfullname').value;
    console.log(userFullName);

    userKm = parseInt(document.getElementById('userkm').value);
    console.log(userKm);

    userAge = document.getElementById('userage').value;
    console.log(userAge);

    ticketPrice = userKm * 0.21;
    console.log(ticketPrice.toFixed(2));

    if (userAge == "minorenne") {

        ticketDiscount = ticketPrice * 0.20;

        document.getElementById("discount").innerHTML = "Biglietto Under 18";

    } else if (userAge == "over") {

        ticketDiscount = ticketPrice * 0.40;

        document.getElementById("discount").innerHTML = "Biglietto Over 65";

    } else if (userAge == "maggiorenne") {

        ticketFullPrice = ticketPrice - ticketDiscount;

        document.getElementById("discount").innerHTML = "Biglietto Standard";

    } else {
        document.getElementById("sectionDates").classList.add('d-none');
        document.getElementById("sectionErrorAge").classList.remove('d-none');
        document.getElementById("sectionErrorAge").classList.add('d-flex');
    }

    ticketFullPrice = ticketPrice - ticketDiscount;
    console.log(ticketFullPrice.toFixed(2));

    document.getElementById("username").innerHTML = userFullName;

    let carrozza = Math.round(Math.random() * 10) + 1;
    console.log(carrozza);
    document.getElementById("carrozza").innerHTML = carrozza;

    let codiceCp = Math.round(Math.random() * 10000) + 1;
    console.log(codiceCp);
    document.getElementById("codicecp").innerHTML = codiceCp;

    document.getElementById("ticketprice").innerHTML = `${ticketFullPrice.toFixed(2)}€`;

    document.getElementById("sectionTicket").classList.remove('d-none');

})



document.getElementById('annulla').addEventListener('click', function () {

    document.getElementById('userfullname').value = "";

    document.getElementById('userkm').value = "";

    document.getElementById('userage').value = "";

    document.getElementById("sectionTicket").classList.add('d-none');
})


document.getElementById('esci').addEventListener('click', function () {

    document.getElementById("sectionDates").classList.remove('d-none');

    document.getElementById("sectionErrorAge").classList.add('d-none');

    document.getElementById("sectionErrorAge").classList.remove('d-flex');

})