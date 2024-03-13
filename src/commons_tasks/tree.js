/**
 * Нужно обойти дерево n-ой размерности и посчитать
 * сумму его узлов
 *
 *                              0
 *                      /               \
 *                     5                 5
 *              /     |    \
 *             5      10    11
 *             |
 *            11
 *
 * sum = 47
 */

const tree = [
    {
        v: 5,
        c: [
            {
                v: 5,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 10,
            },
            {
                v: 11,
            },
        ],
    },
    {
        v: 5,
    },
    {
        v: 10,
    },
    {
        v: 11,
    },
]

function sumAllLeafs(tree) {
    if (!tree.length) return 0

    let sum = 0
    const stack = []
    tree.forEach((node) => stack.push(node))

    while (stack.length) {
        let node = stack.pop()
        if (node.c) {
            node.c.forEach((n) => stack.push(n))
        }

        sum += node.v
    }

    return sum
}

console.log(sumAllLeafs(tree))
