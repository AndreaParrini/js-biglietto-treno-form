document.getElementById('calcola').addEventListener('click', function(){

    const userFullName = document.getElementById('userfullname').value;
    console.log(userFullName);

    const userKm = parseInt(document.getElementById('userkm').value);
    console.log(userKm);

    const userAge = document.getElementById('userage').value;
    console.log(userAge);
})



//document.querySelector(".d-none").classList.remove('d-none');












document.getElementById('annulla').addEventListener('click', function(){

    document.getElementById('userfullname').value = "";

    document.getElementById('userkm').value = "";

    document.getElementById('userage').value = "";
})