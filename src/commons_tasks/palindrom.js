/**
 * String witch can be read the same
 * as from beginning to the end
 * as from the end to the beginning
 *
 * 'engne'   ==== 'engne'
 * 'test' !== 'tset'
 */

function palindrom(str) {
    const middle = Math.floor(str.length / 2)
    const even = str.length % 2 === 0
    const left = str.slice(0, middle).split('')
    let right = str
        .slice(even ? middle : middle + 1)
        .split('')
        .reverse()

    return left.join('') === right.join('')
}

function palindromWithForIn(str) {
    str = str.toLowerCase()

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    }

    return true
}

function palindromWithSplitReverse(str) {
    str = str.toLowerCase()
    const reversed = str.split('').reverse().join('')
    return reversed === str
}

console.log(palindrom('test'))
console.log(palindromWithForIn('test'))
console.log(palindromWithSplitReverse('test'))
