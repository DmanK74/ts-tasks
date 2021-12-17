import { assert } from 'chai'
import { describe } from 'mocha'
import { fib, minDivisor, whichRookThreatens } from '@flx-learn-ts/tasks'

describe('task2', () => {
    it('minDivisor()', () => {
        assert.strictEqual(2, minDivisor(2))
        assert.strictEqual(3, minDivisor(75))
        assert.strictEqual(5, minDivisor(75 / 3))
        assert.strictEqual(97, minDivisor(97))
        assert.strictEqual(7, minDivisor(49))
        assert.strictEqual(17, minDivisor(8653))
        assert.strictEqual(2124679, minDivisor(2124679))
        // assert.strictEqual(1073676287, minDivisor(1073676287))
        // assert.strictEqual(Number.MAX_VALUE, minDivisor(Number.MAX_VALUE))
    })

    it("fib()", () => {
        assert.strictEqual(1, fib(1))
        assert.strictEqual(1, fib(2))
        assert.strictEqual(2, fib(3))
        assert.strictEqual(5, fib(5))
        assert.strictEqual(21, fib(8))
        assert.strictEqual(102334155, fib(40))
        assert.strictEqual(1134903170, fib(45))
        assert.strictEqual(1836311903, fib(46))
    })
    
    it("whichRookThreatens()", () => {
        assert.strictEqual(0, whichRookThreatens(1, 2, 3, 4, 5, 6))
        assert.strictEqual(1, whichRookThreatens(5, 3, 7, 3, 4, 8))
        assert.strictEqual(2, whichRookThreatens(6, 8, 8, 6, 6, 3))
        assert.strictEqual(3, whichRookThreatens(3, 7, 8, 7, 3, 5))
    })
})
