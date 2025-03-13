// Function to append value to the display
function appendValue(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Function to calculate the result
function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value); // Use eval to compute the result
  } catch (error) {
    display.value = "Error"; // Display "Error" if the input is invalid
  }
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = ""; // Clear the display
}

// Function to calculate SquareRoot

function calculateSquareRoot() {
  const display = document.getElementById("display");
  try {
    const value = parseFloat(display.value);
    if (value < 0) {
      display.value = "Error";
    } else {
      display.value = Math.sqrt(value);
    }
  } catch (error) {
    display.value = "Error";
  }
}

// Funtion of backspace
function backspace() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}



// Add keyboard support
document.addEventListener("keydown", function(event) {
  const display = document.getElementById("display");

  // Handle numeric and operator keys
  if (event.key >= 0 && event.key <= 9 || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.' || event.key === '%') {
      appendValue(event.key);
  }

  // Handle Enter key for calculation
  if (event.key === "Enter") {
      calculate();
  }

  // Handle Backspace key
  if (event.key === "Backspace") {
      backspace();
  }

  // Handle Escape key for reset
  if (event.key === "Escape") {
      clearDisplay();
  }
});