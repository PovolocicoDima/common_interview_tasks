/**
 * 
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function mult() {}
function divide() {}

    сделать так, чтобы функции вкладывались друг в друга:
    one(plut(three())) // 4
    four(mult(three())) // 12
 */

/**
 *
 * @param {Function} cb
 * получаем либо коллбэк либо ничего
 * если коллбэк есть, то вызываем его с
 * аргументом числа функции. Это число
 * будет заполнено через замыкание
 */
function one(cb) {
    return cb ? cb(1) : 1
}
function two(cb) {
    return cb ? cb(2) : 2
}
function three(cb) {
    return cb ? cb(3) : 3
}
function four(cb) {
    return cb ? cb(4) : 4
}
function five(cb) {
    return cb ? cb(5) : 5
}
function six(cb) {
    return cb ? cb(6) : 6
}
function seven(cb) {
    return cb ? cb(7) : 7
}
function eight(cb) {
    return cb ? cb(8) : 8
}
function nine(cb) {
    return cb ? cb(9) : 9
}

/**
 *
 * @param {Number} num1 так как функции с числами передают коллбэк
 * то мы можем эти коллбэки обработать через замыкание
 * @returns {number}
 */
function plus(num1) {
    return (num2) => num1 + num2
}
function minus(num1) {
    return (num2) => num2 - num1
}
function mult(num1) {
    return (num2) => num1 * num2
}
function divide(num1) {
    return (num2) => num2 / num1
}

console.log(one(plus(three())))
console.log(four(mult(three())))
console.log(four(divide(two())))
console.log(four(minus(three())))
console.log(three(mult(four())))
console.log(nine(divide(three())))
