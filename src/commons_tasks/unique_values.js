/**
 * Написать функцию, которая удалит числа, которые повторяются
 * Оставит только уникальные
 * [1, 1, 2, 2, 3, 4, 5, 5] => [3, 4]
 * Сложность O(N + N) => O(2N)
 */

function uniqueValues(arr) {
    const hash = {}
    const res = []
    arr.map((num) => {
        hash[num] = (hash[num] || 0) + 1
    })

    for (const [key, value] of Object.entries(hash)) {
        if (value === 1) res.push(key)
    }

    return res
}

console.log(uniqueValues([1, 1, 2, 2, 3, 4, 5, 5]))
