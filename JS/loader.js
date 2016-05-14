var loadicon = document.getElementById("loadicon");
var deg = 0;
function adddeg() {
    deg += 1;
    loadicon.style.transform = "rotate(" + deg + "deg)";
    console.log(loadicon.style.transform);
    if (!(document.readyState === "complete")) {
        window.setTimeout(adddeg, 1);
    }
}
adddeg();