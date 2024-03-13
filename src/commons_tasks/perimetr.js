/**
 * Посчитать область закрашенных фигур, т.е. тех фигур
 * которые составлены из Х. О - это пустоты
 * 
 * 
[
    'X O O X O',
    'X O O X O',
    'O O O X O',
    'X X O X O',
    'O X O O O',
]
*/

function calculatePerimeter(board) {
    const rows = board.length
    const cols = board[0].length
    let perimeter = 0

    // Функция для проверки, является ли клетка на границе фигуры
    function isBoundary(row, col) {
        return (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] === 'O'
        )
    }

    // Перебираем каждую клетку доски
    for (let i = 0; i < rows; i++) {
        // O(N)
        for (let j = 0; j < cols; j++) {
            // O(N)
            if (board[i][j] === 'X') {
                // Проверяем каждое направление от текущей клетки
                if (isBoundary(i - 1, j)) perimeter++ // Верх
                if (isBoundary(i + 1, j)) perimeter++ // Низ
                if (isBoundary(i, j - 1)) perimeter++ // Лево
                if (isBoundary(i, j + 1)) perimeter++ // Право
            }
        }
    }

    return perimeter // O(N * N)
}

const board = ['XXXXX', 'XXXXO', 'XXXXO', 'XXOOO', 'XXOOO']

let perimeter = calculatePerimeter(board)
console.log('Периметр фигур составляет: ' + perimeter)
