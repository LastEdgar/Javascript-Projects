const Calculator = { //Make object to track values
    Display_Value: '0', //displays 0 on the screen
    First_Operand: null, //Holds the first operand for expressions, null to begin
    Wait_Second_Operand: false, //Checks for a second input
    operator: null, //holds operator, blank for now
};

function Input_Digit(digit) { //modifies values every time button is clicked
    const { Display_Value, Wait_Second_Operand } = Calculator; //Check if Wait_Second_Operand is true and set Display_Value to key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit; //Overwrites Display_Value if current value is 0, otherwise adds to it
    }
}

function Input_Decimal(dot) { //this handles decimal points
    if (Calculator.Wait_Second_Operand === true) return; //ensures that accidental clicking of decimal point doesnt cause bugs in operations
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot; //If display_value doesnt have a decimal we want to add one
    }
}

function Handle_Operator(Next_Operator) { //Handles operators
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value); //When operator is pressed we convert current number on screen to a number then store result in calculator.First_operand if it isnt there already 
    if (operator && Calculator.Wait_Second_Operand) { //Checks if operator already exists and Wait_Second_Operand is true, then updates operator and exits function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //Checks if operator exists already
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); //If operator exists, looks up property in Perform_Calc object and function that matches operator executes
        result = Number(result).toFixed(9) //Adds fixed amount of numbers after decimal
        result = (result * 1).toString() //Removes trailing zeroes
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
    
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { //Function updates screen with contens of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys'); //This area monitors for button clicks
keys.addEventListener('click', (event) => {
    const { target } = event; //the target var is an object that represents the element that was clicked
    if (!target.matches('button')) { //If what was clicked wasnt a button, exit function
        return;
    }
    if (target.classList.contains('operator')) { //If its an operator, handle it and update
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains("decimal")) { //If decimal, handle that and update display
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) { //If all clear, reset calc and update display
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value); 
    Update_Display();
})

