import Sinon, { SinonMock, SinonSpy, SinonStub } from "sinon"
import Calculator from "../src/calculator"
import { expect } from "chai"

describe.only("spy, stub and mock test", () => {
    var calc:Calculator
    var spy:SinonSpy
    var stub:SinonStub
    var mock:SinonMock

    before(() => {
        calc = new Calculator() 
    })

    afterEach(() => {
        if (spy) {
            spy.restore()
        }
        if (stub) {
            stub.restore()
        }
        if (mock) {
            mock.restore()
        }
     })

    it("spy-test", () => {
        spy = Sinon.spy(calc, "add")
        const result = calc.add(2,5)
        expect(result).to.be.equal(7)

        // expect the add function to be called once with params 2 & 5 using spy
        expect(spy.calledOnceWith(2,5)).to.be.ok
    })

    it("stub-test", () => {
        stub = Sinon.stub(calc, "generateRandomNumber").returns(5)
        const notLuckyNumber = calc.isThisALuckNumber(13)
        expect(notLuckyNumber).to.be.equal(false)

        const luckNumber = calc.isThisALuckNumber(5)
        expect(luckNumber).to.be.equal(true)
    })

    it("mock-test", () => {
        mock = Sinon.mock(calc)
        mock.expects("generateRandomNumber").returns(2)
        const expectation = mock.expects("logMessage").exactly(1).withArgs("lucky method called")

        const result = calc.isThisALuckNumber(2)
        expect(result).to.be.equal(true)

        expectation.verify()
    })
})