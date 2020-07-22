function table(){
    var a = prompt("ENTER A NUMBER FOR WHICH YOU NEED THE TABLE TO BE DISPLAYED.");
    var display ="";
    for (i=1;i<=50;i++){
        var multiplier=a;
        var result = i*a;

        display += multiplier  +  "    X    "  +  i  +  "    =    "  +  result  +  "<br>";

    }
    document.getElementById("outputDiv").innerHTML=display;
}