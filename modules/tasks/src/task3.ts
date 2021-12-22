import { assert } from 'chai';
import { Pair, TODO } from '@flx-learn-ts/utils'

/// Рассчитать среднее арифметическое элементов списка list. Вернуть 0.0, если список пуст
export function mean(list: number[]): number {
    let listSum = 0

    if(list.length == 0) return 0.0

    for(let item of list) listSum += item
    
    return listSum/list.length
}

//  Найти в заданном списке повторяющиеся элементы и вернуть
//  ассоциативный массив с информацией о числе повторений
//  для каждого повторяющегося элемента.
//  Если элемент встречается только один раз, включать его в результат
//  не следует.
/// 
/// Например:
/// extractRepeats(listOf("a", "b", "a")) -> mapOf("a" to 2)
export function extractRepeats(list: string[]): Map<string, number> {
    let arr = new Map<string, number>()
   
    let value = 0

    for (let count1 = 0; count1 < list.length; count1++)
    {
        for (let count2 = count1 + 1; count2 < list.length; count2++) {

            if(list[count1] == list[count2])
            {
                value ++
                arr.set(list[count1].toString(), value)
            } 
        }
    }

      return arr
}


/// Для заданного списка неотрицательных чисел и числа определить,
/// есть ли в списке пара чисел таких, что их сумма равна заданному числу.
/// Если да, верните их индексы в виде Pair<Int, Int>;
/// если нет, верните пару Pair(-1, -1).
/// 
/// Индексы в результате должны следовать в порядке (меньший, больший).
/// 
/// Постарайтесь сделать ваше решение как можно более эффективным,
/// используя то, что вы узнали в данном уроке.
/// 
/// Например:
/// findSumOfTwo([1, 2, 3], 4) -> Pair(0, 2)
/// findSumOfTwo([1, 2, 3], 6) -> Pair(-1, -1)
export function findSumOfTwo(list: number[], number: number): Pair<number, number> {
    throw TODO
}
