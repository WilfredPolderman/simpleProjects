const display = document.getElementById('display')

function append(value) {
    display.value += value
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = 'Error'
    }
}

function clearDisplay() {
    display.value = ''
}

function backspace() {
    display.value = display.value.slice(0, -1)
}