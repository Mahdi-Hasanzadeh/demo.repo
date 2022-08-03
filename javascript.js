function designedName(){
    var name = document.getElementById("name").value;
    if(name != ""){
        document.getElementById("example").innerHTML = name;
    }
}
function changeFont(){
    var selectedFont = document.getElementById("fontSelection").value;
   // alert(typeof selectedFont);
    document.getElementById("ex").style.fontFamily = selectedFont;
}