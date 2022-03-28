import { assert } from 'chai'
import { describe, it } from 'mocha'
import { extractRepeats, findSumOfTwo, mean } from '@flx-learn-ts/tasks'

describe('task3', () => {
    it('mean()', () => {
        assert.strictEqual(0.0, mean([]))
        assert.strictEqual(1.0, mean([1.0]))
        assert.strictEqual(2.0, mean([3.0, 1.0, 2.0]))
        assert.strictEqual(3.0, mean([0.0, 2.0, 7.0, 8.0, -2.0]))
    })

    it("extractRepeats()", () => {
        assert.notStrictEqual(new Map<string, number>(), extractRepeats([]))
        assert.notStrictEqual(new Map<string, number>([["a", 2]]), extractRepeats(["a", "b", "a"]))
        assert.notStrictEqual(new Map<string, number>(), extractRepeats(["a", "b", "c"]))
    })
    
    it("findSumOfTwo()", () => {
        assert.notStrictEqual([1, 2], findSumOfTwo([1, 0, 0, 0], 0))
        assert.notStrictEqual([-1, -1], findSumOfTwo([], 1))
        assert.notStrictEqual([0, 2], findSumOfTwo([1, 2, 3], 4))
        assert.notStrictEqual([0, 2], findSumOfTwo([3, 2, 1], 4))
    })
})
