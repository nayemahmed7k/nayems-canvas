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
function changeF() {
    document.getElementById('t1').innerHTML= "Did you notice that?";
}
function backGF() {
    document.getElementById('t3').style.backgroundColor= "skyblue";
}
function color(codE) {
    var ca, cb, cc;
    ca= document.getElementById('red');
    cb= document.getElementById('green');
    cc= document.getElementById('blue');
    if(codE==0) {
        document.getElementById('t2').style.color= "red";
        ca.style.color= "red";
        cb.style.color= "black";
        cc.style.color= "black";
    }
    else if(codE==1) {
        document.getElementById('t2').style.color= "green";
        cb.style.color= "green";
        ca.style.color= "black";
        cc.style.color= "black";
    }
    else if(codE==2) {
        document.getElementById('t2').style.color= "blue";
        cc.style.color= "blue";
        ca.style.color= "black";
        cb.style.color= "black";
    }
}
function lightF(sw) {
    if(sw==1) {
        document.getElementById('light').src= "/media/lighton.png";
    }
    else if(sw==0) {
        document.getElementById('light').src= "/media/lightoff.png";
    }
}
function hideF(){
    document.getElementById('hideOut').style.display= "none";
    document.getElementById('h_b1').style.display= "none";
    document.getElementById('h_b2').style.display= "block";

}
function unHide(){
    document.getElementById('hideOut').style.display= "block";
    document.getElementById('h_b2').style.display= "none";
    document.getElementById('h_b1').style.display= "block";
}
function hBarF(sz) {
    if(sz==0) {
        document.getElementById('hBar').style.width= "25%";
    }
    else if(sz==1) {
        document.getElementById('hBar').style.width= "50%";
    }
    else if(sz==2) {
        document.getElementById('hBar').style.width= "98%";
    }
}
function p_hide(){
        document.getElementById('hBar').style.display= "none";
        document.getElementById('hBarButtons').style.display= "none";
        document.getElementById('hBarPview').style.display= "block";
}
function p_view(){
        document.getElementById('hBar').style.display= "block";
        document.getElementById('hBarPview').style.display= "none";
        document.getElementById('hBarButtons').style.display= "block";
}



//html multimedia page
function playPause() {
    var myVideo= document.getElementById('video2');
    if(myVideo.paused)
    myVideo.play();
    else
    myVideo.pause();
}
function makeSmall() {
    var myVideo= document.getElementById('video2');
    myVideo.style.width= "25%";
}
function makeNormal() {
    var myVideo= document.getElementById('video2');
    myVideo.style.width= "35%";
}
function makeBig() {
    var myVideo= document.getElementById('video2');
    myVideo.style.width= "45%";
}
