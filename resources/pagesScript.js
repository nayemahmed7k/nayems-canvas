//practice List codes
function ttest(sw) {
    var a=document.getElementById('ttest1');
    if(sw==0){
        a.style.textTransform= "uppercase";
        a.style.borderColor= "red";
    }
    else if(sw==1){
        a.style.textTransform= "lowercase";
        a.style.borderColor= "green";
    }
    else if(sw==2){
        a.style.textTransform= "capitalize";
        a.style.borderColor= "blue";
    }
}

function wrapped(sa){
    var b=document.getElementById('ttest5');
    if(sa==0){
        b.style.whiteSpace= "nowrap";
    }
    else if(sa==1){
        b.style.whiteSpace= "wrap";
    }
}

function shadow(sb){
    var c=document.getElementById('ttest6');
    if(sb==0){
        c.style.textShadow= "3px 3px 5px red";
    }
    else if(sb==1){
        c.style.textShadow= "3px 3px 5px green";
    }
    else if(sb==2){
        c.style.textShadow= "3px 3px 5px blue";
    }
}

