var Name = document.getElementById('res-name');
var Email = document.getElementById('res-email');
var Gender = document.getElementById('res-gender');
var Psw = document.getElementById('res-psw');
var Country = document.getElementById('res-country');

function showOutput(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="Gender"]:checked').value;
    var psw = document.getElementById('psw').value;
    var country = document.getElementById('country').value;

    if(name!=="" && email!=="" && gender!=="" && psw!=="" && country!==""){
        Name.innerHTML = name;
        Email.innerHTML = email;
        Gender.innerHTML = gender;
        Psw.innerHTML = "******";
        Country.innerHTML = country;
    } else{
        alert("Write something to test this form");
    }
}
