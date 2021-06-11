var global;
function details(val) {
    var data = document.getElementById("calScreen")
    data.value += val;
    global = eval(data.value);
    return global;
}

function display() {
    var display = document.getElementById("calScreen")
    if (global != undefined) {
        display.value = global;
    }
    else {
        display.value = "";
    }
}

function clearScr() {
    var clr = document.getElementById("calScreen")
    clr.value = "";
    global = "";
}