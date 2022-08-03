function designedName(){
    var name = document.getElementById("name").value;
    if(name != ""){
        document.getElementById("ex").innerHTML = name;
    }
}
function changeFont(){
    var selectedFont = document.getElementById("fontSelection").value;
   // alert(typeof selectedFont);
    document.getElementById("ex").style.fontFamily = selectedFont;
    document.getElementById("label").innerHTML = selectedFont + " Font";
    if(selectedFont == "AligotDeMirabelle"){
        document.getElementById("ex").style.fontSize = '25vh';
    }
    else{
        document.getElementById("ex").style.fontSize = '9vh';
    }
}