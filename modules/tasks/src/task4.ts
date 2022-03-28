import { TODO } from '@flx-learn-ts/utils'

/// Дано seconds -- время в секундах, прошедшее с начала дня.
/// Вернуть текущее время в виде строки в формате "ЧЧ:ММ:СС".
export function timeSecondsToStr(digital: number): string {
    
    let hours = Math.floor(digital / 3600).toString()
        if (Number(hours) < 10) hours += "0"

    let minutes = Math.floor((digital % 3600) / 60).toString()
        if (Number(minutes) < 10) minutes += "0"

    let seconds = Math.floor(digital % 60).toString()
        if (Number(seconds) < 10) seconds += "0"

    return hours + ':' + minutes + ':' + seconds
}

/// На вход функции передается дата формата 15.07.2016.
/// Используя Regex проверить, дата соответствует формату или нет.
/// Вохвратить true если соответствует.
export function checkDate(digital: string): boolean {
    let fornat = /^(\d{2}\.\d{2}\.\d{4})$/
    
    return fornat.test(digital)
}

/// Дата представлена строкой вида "15.07.2016".
/// Перевести её в строковый формат вида "15 июля 2016".
/// При неверном формате входной строки вернуть пустую строку
/// 
/// Обратите внимание: некорректная с точки зрения календаря дата (например, 30 февраля 2009) считается неверными
/// входными данными.
const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
                    "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export function dateDigitToStr(digital: string): string {
    let fornat = /^(\d{2}\.\d{2}\.\d{4})$/
    
    if (!fornat.test(digital)) return ""

    let day = Number.parseInt(digital.substring(0, 2))
    let month = Number.parseInt(digital.substring(3, 5))
    let year = Number.parseInt(digital.substring(6, 11))

    if (month > 12 || month < 1) return ""
    if (day > 31 || day < 1) return ""
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        if (month == 2 && day > 29) return ""  
    } else {
        if (month == 2 && day > 28) return ""
    }

    let monthesStr = monthNames[Number(month) - 1]
    
    return `${day} ${monthesStr} ${year}`
}