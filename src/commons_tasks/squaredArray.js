/**
 * Дан массив целых чисел в порядке возрастая
 * [-4, -1, 0, 3, 10]
 * Нужно возвести каждое число в квадрат
 * при исловии, что сортировка останется по возрастанию
 * сделать это нужно за 1 проход
 */

function nSquared(arr) {
    let left = 0
    let right = arr.length - 1
    const squaredArray = []

    while (left <= right) {
        const leftSqared = arr[left] ** 2
        const rightSqared = arr[right] ** 2

        if (leftSqared > rightSqared) {
            squaredArray.unshift(leftSqared)
            left++
        } else {
            squaredArray.unshift(rightSqared)
            right--
        }
    }

    return squaredArray
}

const myArray = [-4, -1, 0, 3, 10]

console.log(nSquared(myArray))
