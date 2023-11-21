document.getElementById('calcola').addEventListener('click', function(){

    userFullName = document.getElementById('userfullname').value;
    console.log(userFullName);

    userKm = parseInt(document.getElementById('userkm').value);
    console.log(userKm);

    userAge = parseInt(document.getElementById('userage').value);
    console.log(userAge);
})














document.getElementById('annulla').addEventListener('click', function(){

    document.getElementById('userfullname').value = "";

    document.getElementById('userkm').value = "";

    document.getElementById('userage').value = "";
})