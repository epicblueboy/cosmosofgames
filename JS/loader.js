var loadicon = document.getElementById("loadicon");
var deg = 0;
function adddeg() {
    deg += 1;
    loadicon.style.transform = "rotate(" + deg + "deg)";
    console.log(loadicon.style.transform);
    window.setTimeout(adddeg, 5);
}
adddeg();