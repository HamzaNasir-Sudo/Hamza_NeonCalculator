            return "Error: Division by zero";
          } else {
            return num1 / num2;
          }
      }
    }

    function clearDisplay() {
      currentInput = '';
      operator = null;
      previousInput = null;
      display.textContent = '';
    }
