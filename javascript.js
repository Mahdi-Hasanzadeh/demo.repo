function designedName(){
    var name = document.getElementById("name").value;
    if(name != ""){
        document.getElementById("example").innerHTML = name;
    }
}