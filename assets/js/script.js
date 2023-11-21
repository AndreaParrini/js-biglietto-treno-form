document.getElementById('calcola').addEventListener('click', function(){

    const userFullName = document.getElementById('userfullname').value;
    console.log(userFullName);

    const userKm = parseInt(document.getElementById('userkm').value);
    console.log(userKm);

    const userAge = document.getElementById('userage').value;
    console.log(userAge);

    let ticketPrice  = userKm * 0.21;
    console.log(ticketPrice.toFixed(2));

    let ticketDiscount = 0;

    if (userAge == "minorenne"){

        ticketDiscount = ticketPrice * 0.20 ;
        let ticketFullPrice = ticketPrice - ticketDiscount;
        console.log(ticketFullPrice.toFixed(2));

        document.getElementById("username").innerHTML = userFullName;
        document.getElementById("discount").innerHTML = "Biglietto Under 18";

        let carrozza = Math.round(Math.random()*10)+1;
        console.log(carrozza);
        document.getElementById("carrozza").innerHTML = carrozza;

        let codiceCp = Math.round(Math.random()*10000)+1;
        console.log(codiceCp);
        document.getElementById("codicecp").innerHTML = codiceCp;

        document.getElementById("ticketprice").innerHTML = `${ticketFullPrice.toFixed(2)}€`;

        document.getElementById("sectionTicket").classList.remove('d-none');
    } else if (userAge == "over"){

        ticketDiscount = ticketPrice * 0.40 ;
        let ticketFullPrice = ticketPrice - ticketDiscount;
        console.log(ticketFullPrice.toFixed(2));

        document.getElementById("username").innerHTML = userFullName;
        document.getElementById("discount").innerHTML = "Biglietto Over 65";

        let carrozza = Math.round(Math.random()*10)+1;
        console.log(carrozza);
        document.getElementById("carrozza").innerHTML = carrozza;

        let codiceCp = Math.round(Math.random()*10000)+1;
        console.log(codiceCp);
        document.getElementById("codicecp").innerHTML = codiceCp;

        document.getElementById("ticketprice").innerHTML = `${ticketFullPrice.toFixed(2)}€`;

        document.getElementById("sectionTicket").classList.remove('d-none');

    } else if ( userAge == "maggiorenne"){

        let ticketFullPrice = ticketPrice - ticketDiscount;
        console.log(ticketFullPrice.toFixed(2));

        document.getElementById("username").innerHTML = userFullName;
        document.getElementById("discount").innerHTML = "Biglietto Standard";

        let carrozza = Math.round(Math.random()*10)+1;
        console.log(carrozza);
        document.getElementById("carrozza").innerHTML = carrozza;

        let codiceCp = Math.round(Math.random()*10000)+1;
        console.log(codiceCp);
        document.getElementById("codicecp").innerHTML = codiceCp;

        document.getElementById("ticketprice").innerHTML = `${ticketFullPrice.toFixed(2)}€`;

        document.getElementById("sectionTicket").classList.remove('d-none');

    } else {
        document.getElementById("sectionDates").classList.add('d-none');
        document.getElementById("sectionErrorAge").classList.remove('d-none');
        document.getElementById("sectionErrorAge").classList.add('d-flex');
    }
})


document.getElementById('annulla').addEventListener('click', function(){

    document.getElementById('userfullname').value = "";

    document.getElementById('userkm').value = "";

    document.getElementById('userage').value = "";
})


document.getElementById('esci').addEventListener('click', function(){

    document.getElementById("sectionDates").classList.remove('d-none');
    document.getElementById("sectionErrorAge").classList.add('d-none');
    document.getElementById("sectionErrorAge").classList.remove('d-flex');
})