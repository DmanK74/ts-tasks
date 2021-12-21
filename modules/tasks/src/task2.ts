import { TODO } from '@flx-learn-ts/utils'

/// Для заданного числа n > 1 найти минимальный делитель, превышающий 1
export function minDivisor(number: number): number {
    let i = 2
    while (number % i != 0){
        i ++
    }
    return i
}

/// Найти число Фибоначчи из ряда 1, 1, 2, 3, 5, 8, 13, 21, ... с номером n.
/// Ряд Фибоначчи определён следующим образом: fib(1) = 1, fib(2) = 1, fib(n+2) = fib(n) + fib(n+1)
export function fib(number: number): number {
    let prev = 0, next = 1

    for(let i = 0; i < number; i++){
      let temp = next

      next += prev
      prev = temp
    }

    return prev
}
function targetPiece(king: number, rook: number): boolean {
    if(king == rook) return true;
    else return false;
}
/// Нa шахматной доске стоят черный король и две белые ладьи (ладья бьет по горизонтали и вертикали).
/// Определить, не находится ли король под боем, а если есть угроза, то от кого именно.
/// Вернуть 0, если угрозы нет, 1, если угроза только от первой ладьи, 2, если только от второй ладьи,
/// и 3, если угроза от обеих ладей.
/// Считать, что ладьи не могут загораживать друг друга.
export function whichRookThreatens(kingX: number, kingY: number, rookX1: number, rookY1: number, rookX2: number, rookY2: number): number {
    
    if ((targetPiece(kingX, rookX1) || targetPiece(kingY, rookY1))
     && (targetPiece(kingX, rookX2) || targetPiece(kingY, rookY2))) return 3
    
    else if(targetPiece(kingX, rookX1) || targetPiece(kingY, rookY1)) return 1

    else if(targetPiece(kingX, rookX2) || targetPiece(kingY, rookY2)) return 2

    else return 0
}
