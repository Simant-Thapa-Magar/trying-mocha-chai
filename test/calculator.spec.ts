import { expect } from "chai"
import Calculator from "../src/calculator"

describe("test calculator class", () => {
    it("test add", () => {
        // arrange
        const calc = new Calculator()
        // act
        const result = calc.add(1,2)
        // assert
        expect(result).to.equal(3)
    })

    it("test subtract", () => {
        // arrange
        const calc = new Calculator()
        // act
        const result = calc.subtract(5,1)
        // assert
        expect(result).to.equal(4)
    })

    it("test multiply", () => {
        // arrange
        const calc = new Calculator()
        // act
        const result = calc.multiply(4,2)
        // assert
        expect(result).to.equal(8)
    })

    it("test divide", () => {
        // arrange
        const calc = new Calculator()
        // act
        const result = calc.divide(6,3)
        // assert
        expect(result).to.equal(2)

        expect(() => calc.divide(10,0)).to.throw("Cannot divide by 0")
    })
})
