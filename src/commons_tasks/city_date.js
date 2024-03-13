/**
 * Дан словарь из городов и дат выступлений группы
 *
 * Надо преобразовать словарь в массив из названий городов
 * Вывод городов должен быть в хронологическом порядке
 * Города, в которых концерт уже прошёл надо исключить
 * Результат ["Казань", "Питер", "Калининград"]
 *
 */

const concerts = {
    Москва: new Date('2020-04-01'),
    Казань: new Date('2024-07-02'),
    Владивосток: new Date('2020-04-21'),
    Калининград: new Date('2024-07-15'),
    Омск: new Date('2020-04-18'),
    Питер: new Date('2024-07-10'),
}

function sortCitiesByConcertDate(concerts) {
    return Object.keys(concerts)
        .filter((city) => concerts[city] > new Date())
        .sort((a, b) => concerts[a].getTime() - concerts[b].getTime())
}

console.log(sortCitiesByConcertDate(concerts))
