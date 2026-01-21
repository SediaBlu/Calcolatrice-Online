const display = document.getElementById("display");

function appendValue(val) {
display.value = display.value + val;
}

function clearDisplay() {
display.value = "";
}

function calculate() {
display.value = eval(display.value);
}
