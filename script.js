//home page
function leaveFun(){
    alert("You're about to leave my personal website");
}
var a = document.getElementById('h_panel1');
var count = 0;
function showStudyF(){
    if(count==0){
        a.style.display = "block";
        count++;
    } else{
        a.style.display = "none";
        count--;
    }
}
