/**
 * Есть строка со множеством повторяющихся символов
 * необходимо её сократить до формата:
 *  AAAABBBCCCDDXYZZEEEBBBB
 * A4B3C3D2XYZ2E3B4
 */

const reduceString = (input) => {
    let compressedString = ''
    let count = 1

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count += 1
        } else {
            compressedString += input[i] + count
            count = 1
        }
    }

    return compressedString
}

const s = 'AAAABBBCCCDDXYZZEEEBBBB'

console.log(reduceString(s))
