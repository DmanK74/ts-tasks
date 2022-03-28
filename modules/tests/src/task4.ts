import { assert } from 'chai'
import { describe, it } from 'mocha'
import { checkDate, dateDigitToStr, timeSecondsToStr } from '@flx-learn-ts/tasks'

describe('task4', () => {
    it('timeSecondsToStr()', () => {
        assert.strictEqual("10:00:00", timeSecondsToStr(36000))
        assert.strictEqual("11:34:45", timeSecondsToStr(41685))
        assert.strictEqual("23:59:59", timeSecondsToStr(86399))
    })

    it("checkDate()", () => {
        assert.strictEqual(false, checkDate(""))
        assert.strictEqual(true, checkDate("12.11.2021"))
        assert.strictEqual(true, checkDate("23.11.2001"))
        assert.strictEqual(false, checkDate("23.11. 2001"))
        assert.strictEqual(false, checkDate("23.11,2001"))
        assert.strictEqual(false, checkDate("  23.11.2001"))
        assert.strictEqual(false, checkDate("23.11.2001   "))
        assert.strictEqual(false, checkDate("233.11.2001"))
        assert.strictEqual(false, checkDate("23.11.21"))
    })
    
    it("dateDigitToStr()", () => {
        assert.strictEqual("15 июля 2016", dateDigitToStr("15.07.2016"))
        assert.strictEqual("", dateDigitToStr("01.02.20.19"))
        assert.strictEqual("", dateDigitToStr("28.00.2000"))
        assert.strictEqual("3 апреля 2011", dateDigitToStr("03.04.2011"))
        assert.strictEqual("", dateDigitToStr("ab.cd.ef"))
        assert.strictEqual("", dateDigitToStr("32.09.2011"))
        assert.strictEqual("", dateDigitToStr("29.02.1993"))
    })
})