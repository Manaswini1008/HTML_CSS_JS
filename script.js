function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    var display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    var display = document.getElementById('result');
    display.value += character;
}

function calculateResult() {
    var display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression');
        clearDisplay();
    }
}
