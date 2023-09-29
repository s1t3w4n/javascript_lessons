/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']
const cityInfo = (name, index) => `${name} is at the index ${index} in the myCities array`
for (let index = 0; index < myCities.length; index++) {
    console.log(cityInfo(myCities[index], index))
}
//inline
myCities.forEach((city, index) => console.log(cityInfo(city, index)))