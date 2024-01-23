function sign_inF(){
    var un = document.getElementById('username1').value;
    var psw = document.getElementById('psw').value;
    if(un!=="" || psw!==""){
        alert("Your username is '" + un + "' And your password is '" + psw + "' .");
    } else{
        alert('Write something to test this form')
    }
}
