const assert = require("node:assert")
const {add, multiply} = require("../test/tryingtests.js")
describe("Operations functions test", () => {
    it("Addition", () => {
            assert(add(1, 2) === 3)
    })
    // it.only("Multiplication", () => {
    it("Multiplication", () => {
        assert(multiply(3, 2) === 6)
    })
    //use of .skip()
    it.skip("Delayed Multiplication", () => {
        assert(multiply(3, 2) === 6)
    })

    // describe('Testing on retries', () => {
    //     this.retries(5)
        
    //     beforeEach(function () {
    //         assert(multiply(3, 2) === 6)
    //     })
    //     it.retries("it should succed by retry 2", () => {
    //         this.retries(2)
    //         assert(multiply(3, 2) === 6)
    // })
    // })
    
})

