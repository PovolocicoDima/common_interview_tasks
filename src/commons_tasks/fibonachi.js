/**
 * Sum of 2 prev numbers
 * 1 1 2 3 5 8 13 21 34 ...
 */

function fibonachi(idx) {
    if (idx <= 2) return 1
    return fibonachi(idx - 2) + fibonachi(idx - 1)
}

console.log(fibonachi(7))

function iterationFib(idx) {
    if (idx <= 0) {
        return 0
    }
    if (idx <= 2) {
        return 1
    }

    let prev = 1
    let result = 1

    for (let i = 0; i < idx - 2; i++) {
        let tmp = result
        result += prev
        prev = tmp
    }

    return result
}

console.log(iterationFib(7))
