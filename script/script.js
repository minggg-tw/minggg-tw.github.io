window.oncontextmenu = function () { return false; }
    window.onkeydown = window.onkeyup = window.onkeypress = function () {
    window.event.returnValue = false;
    return false;
}

var h = window.innerHeight, w = window.innerWidth;
window.onresize = function () {
    if (h != window.innerHeight || w != window.innerWidth) {
        var banner = document.querySelector('.banner');
        banner.style = "display: none";
        var phone = document.querySelector('.phone');
        phone.style = "display: flex";
    }
}