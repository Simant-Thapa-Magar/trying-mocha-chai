import { expect } from "chai"
import Calculator from "../src/calculator"

describe("hooks", () => {
    var calculator:Calculator
    before(() => {
        console.log("this runs one time before test")
        calculator = new Calculator()
    })
    beforeEach(() => {
        console.log("this runs before every test case")
    })
    afterEach(() => {
        console.log("this runs after each test case")
    })
    after(() => {
        console.log("this runs one time after test")
    })

    describe("nested-plus-minus", () => {
        it("add-test-2", () => {
            const result = calculator.add(2,3)
            expect(result).equal(5)
        })
    
        it("test-minus-2", () => {
            const result = calculator.subtract(5,1)
            expect(result).equal(4)
        })
    })

    describe("nested-multiply-divide", () => {
        it("multiply-test", () => {
            const result = calculator.multiply(4,5)
            expect(result).equal(20)
        })

        it("divide-test", () => {
            const result = calculator.divide(9,3)
            expect(result).equal(3)
        })
    })
})