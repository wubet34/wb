function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        // change topnav to 
    } else {
        x.className = "topnav";
    }
}