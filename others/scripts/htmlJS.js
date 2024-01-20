// Page : html Javascript codes here
var changeI = 0;
function changeInner(){
    var a = document.getElementById('hJs-p1');
    if(changeI==0){
        a.innerHTML = "Did you notice anything?";
        changeI++;
    }
    else if(changeI==1){
        a.innerHTML = "Javascript can change inner text of any element";
        changeI--;
    }
}
function color(sw){
    var b = document.getElementById('hJs-p2');
    var red = document.getElementById('red');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');
    if(sw==0){
        b.style.color = "red";
        red.style.color = "red";
        green.style.color = "black";
        blue.style.color = "black";
    }
    else if(sw==1){
        b.style.color = "green";
        green.style.color = "green";
        red.style.color = "black";
        blue.style.color = "black";
    }
    else{
        b.style.color = "blue";
        blue.style.color = "blue";
        red.style.color = "black";
        green.style.color = "black";
    }
}
var Hide = 0;
function hideF(){
    var c = document.getElementById('hJs-p6');
    var d = document.getElementById('hJs-hide');
    if(Hide==0){
        c.style.visibility = "hidden";
        d.innerHTML = "Undo!";
        Hide++;
    }
    else{
        c.style.visibility = "visible";
        d.innerHTML = "Hide!";
        Hide--;
    }
}
