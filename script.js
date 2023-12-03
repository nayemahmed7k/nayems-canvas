//Universal functions
function notRes(){
    alert("This page may not responsible for small screen/device");
}
function newWeb(){
    alert("We are moving to another website");
}
function newWebNotRes(){
    alert("Moving to a another website and it may not be responsive for smaller screen");
}
function underM(){
    document.getElementById("underM").innerHTML = "This Page is under construction";
    /*
    <h1 id="underM"></h1>
        <script>
           underM();
        </script>
    */
}
function leaveFun(){
    alert("You're about to leave my personal website");
}


//about page
var abA= 0;
function panelFun2(){
    var abB=document.getElementById('hPanel2');
    var abC=document.getElementById('hPanel2B');
    if(abA==0){
        abB.style.display= "block";
        abC.innerHTML= "Hide";
        abC.style.backgroundColor= "blue";
        abC.style.color= "white";
        abA++;
    }
    else{
        abB.style.display= "none";
        abC.innerHTML= "Contents";
        abC.style.backgroundColor= "#eee";
        abC.style.color= "black";
        abA--;
    }
}


//homepage
var a= 0;
function panelFun(){
    var b=document.getElementById('h_panel');
    var c=document.getElementById('angle');
    if(a==0){
        b.style.display= "block";
        c.src= "/media/angle3.png";
        a++;
    }
    else{
        b.style.display= "none";
        c.src= "/media/angle2.png";
        a--;
    }
}


