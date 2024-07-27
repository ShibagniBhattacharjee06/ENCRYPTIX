// Function to append clicked button value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform calculation
function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue); // Using eval() for simplicity (not recommended for production due to security risks)
    document.getElementById('display').value = result;
}
