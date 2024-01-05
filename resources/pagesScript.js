//About Page
var a_count= 0;
function a_hF1(){
    var a=document.getElementById('a_hPanel');
    var b=document.getElementById('a_hBt');
    if(a_count==0){
        a.style.display= "block";
        b.innerHTML= "Hide";
        b.style.backgroundColor= "blue";
        b.style.color= "white";
        a_count++;
    }
    else{
        a.style.display= "none";
        b.innerHTML= "Contents";
        b.style.backgroundColor= "#eee";
        b.style.color= "black";
        a_count--;
    }
}
