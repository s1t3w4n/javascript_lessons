/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const mult = ({ x, y, z }) => x * y * z

const objectWithNumbers = {
    x: 5,
    y: 20,
    z: 3,
}

// Создайте функцию здесь

const result = mult(objectWithNumbers)
console.log(result)
// 300