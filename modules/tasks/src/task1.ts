import { TODO } from '@flx-learn-ts/utils'

/// Найти длину отрезка, соединяющего точки на плоскости с координатами (x1, y1) и (x2, y2).
/// Например, расстояние между (3, 0) и (0, 4) равно 5.
export function trackLength(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

/// Пользователь задает целое число, большее 100 (например, 3801).
/// Определить третью цифру справа в этом числе (в данном случае 8).
export function getThirdDigit(number: number): number {
    let numStr = number.toString()
    let numLen =  numStr.length
    let numThr = numStr[numLen - 3]
    return Number.parseInt(numThr)
}

/// Человек положил в банк сумму в s рублей под p% годовых (проценты начисляются в конце года).
/// Сколько денег будет на счету через 3 года (с учётом сложных процентов)?
/// Например, 100 рублей под 10% годовых превратятся в 133.1 рубля.
export function amountAfterThreeYears(initial: number, percent: number): number {
    for (let i = 0; i < 3; i++) initial += initial/100*percent
    return initial
}