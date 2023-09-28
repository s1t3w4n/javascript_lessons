/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
    console.log("Оригинал")
    if (inputArray.length > 0) {
        return 'Массив не пустой'
    } else {
        return 'Массив пустой'
    }
}

function isArrayEmpty1(inputArray) {
    console.log("Без else")
    if (inputArray.length > 0) {
        return 'Массив не пустой'
    }
    return 'Массив пустой'
}

function isArrayEmpty2(inputArray) {
    console.log("Тернарный")
    return inputArray.length > 0
        ? 'Массив не пустой'
        : 'Массив пустой'
}

const arrayF = (array) =>
    array.length > 0
        ? 'Массив не пустой'
        : 'Массив пустой'


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))
console.log(isArrayEmpty1([1, 3]))
console.log(isArrayEmpty1([]))
console.log(isArrayEmpty2([1, 3]))
console.log(isArrayEmpty2([]))
console.log("Стрелочныеы")
console.log(arrayF([1, 3]))
console.log(arrayF([]))