// script.js

let displayValue = ''; // Текущее значение на дисплее
let operator = ''; // Текущий оператор
let firstOperand = null; // Первый операнд
let secondOperand = null; // Второй операнд

function appendNumber(number) {
    displayValue += number; // Добавляем число к текущему значению
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue === '') return; // Если дисплей пустой, ничего не делаем

    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue); // Устанавливаем первый операнд
    } else if (operator) {
        secondOperand = parseFloat(displayValue); // Устанавливаем второй операнд
        firstOperand = calculate(); // Выполняем вычисление и обновляем первый операнд
    }

    operator = op; // Сохраняем оператор
    displayValue = ''; // Очищаем дисплей для ввода второго операнда
}

function calculate() {
    if (firstOperand === null || operator === '') return; // Если нет операндов или оператора, ничего не делаем
    if (displayValue !== '') {
        secondOperand = parseFloat(displayValue); // Устанавливаем второй операнд
    }

    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand === 0 ? 'Error' : firstOperand / secondOperand;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = result;
    secondOperand = null;
    updateDisplay();
    return result;
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0'; // Обновляем дисплей
}
