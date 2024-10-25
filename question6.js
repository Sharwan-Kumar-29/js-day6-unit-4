// Step 1: Define the calculate function
function calculate(num1, num2) {
    
    // Step 2: Define the operation function inside calculate
    function operation(num1, num2, callback) {
        // Step 3: Call the callback function with num1 and num2 to perform an arithmetic operation
        return callback(num1, num2);
    }

    // Step 4: Define the addition and multiplication callbacks
    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;

    // Call operation function with addition
    const additionResult = operation(num1, num2, add);
    console.log(`Addition of ${num1} and ${num2} is:`, additionResult);

    // Call operation function with multiplication
    const multiplicationResult = operation(num1, num2, multiply);
    console.log(`Multiplication of ${num1} and ${num2} is:`, multiplicationResult);
}

// Test the calculate function
calculate(5, 3);
