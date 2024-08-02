function sign_inF(){
    var un = document.getElementById('username1').value;
    var psw = document.getElementById('psw').value;
    if(un!=="" || psw!==""){
        alert("Your username is '" + un + "' And your password is '" + psw + "' .");
    } else{
        alert('Write something to test this form')
    }
}
function sign_upF(){
    var fname = document.getElementById('fname').value;
    var eP = document.getElementById('emailPhone').value;
    var un = document.getElementById('username2').value;
    var psw = document.getElementById('psw2').value;
    if(fname!=="" || eP!=="" || un!=="" || psw!==""){
        alert("Name : " + fname + " , Email/Phone : " + eP + " , Gender : --, Username : " + un + " , Password : " + psw + " .");
    } else{
        alert("Write something to test this form");
    }
}
