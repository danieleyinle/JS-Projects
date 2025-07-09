const display = document.getElementById('display');

    function append(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        let expression = display.value;

        // Replace ^ with ** for exponentiation
        expression = expression.replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');

        // Evaluate the expression
        let result = eval(expression);

        display.value = result;
      } catch (e) {
        display.value = "Error";
      }
}