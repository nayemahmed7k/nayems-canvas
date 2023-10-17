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


/* HTML Javascript Page */
function fun1() {
    document.getElementById('t1').innerHTML= "Did you notice that?";
}
function fun3() {
    document.getElementById('t3').style.backgroundColor= "green";
}
function color(codE) {
    if(codE==0) {
        document.getElementById('t2').style.color= "red";
    }
    else if(codE==1) {
        document.getElementById('t2').style.color= "green";
    }
    else if(codE==2) {
        document.getElementById('t2').style.color= "blue";
    }
}

function fun4(sw) {
    if(sw==1) {
        document.getElementById('light').src= "/resources/pictures/lighton.png";
    }
    else if(sw==0) {
        document.getElementById('light').src= "/resources/pictures/lightoff.png";
    }
}
function hBarF(sz) {
    if(sz==0) {
        document.getElementById('hBar').style.width= "50%";
    }
    else if(sz==1) {
        document.getElementById('hBar').style.width= "100%";
    }
    else if(sz==3) {
        document.getElementById('hBar').style.display= "none";
        document.getElementById('hBarButtons').style.display= "none";
        document.getElementById('hBarPview').style.display= "block";
    }
    else if(sz==4) {
        document.getElementById('hhBar').innerHTML= "Horizontal Bar";
        document.getElementById('hhBar').style.width= "100%";
        document.getElementById('hhBar').style.backgroundColor= "whitesmoke";
        document.getElementById('hhBar').style.borderStyle= "ridge";
        document.getElementById('hhBar').style.color= "gray";
        document.getElementById('hhBar').style.padding= "10px";
        document.getElementById('hhBar').style.textAlign= "center";
    }
}
