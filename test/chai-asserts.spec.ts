import { assert, expect, should } from "chai"

describe("try-chai-asserts", () => {
    it("chai-expect", () => {
        const name: string = "John"
        const age: number = 25
        const eligibleToVote: boolean = true
        const address: object = {
            country: "USA",
            state: "Texas"
        }
        const luckyNumbers: Array<number> = [1,7,9]

        // string tests
        // expect name variable to not be null/undefined
        expect(name).to.be.ok
        // expect type to be a string
        expect(name).to.be.a("string")
        // expect value
        expect(name).to.be.equal("John")
        // expect value not to be
        expect(name).to.not.be.equal("Harry")

        // number tests
        expect(age).to.be.ok
        expect(age).to.be.a("number")
        expect(age).to.be.equal(25)

        // boolean tests
        expect(eligibleToVote).to.be.ok
        expect(eligibleToVote).to.be.a("boolean")
        expect(eligibleToVote).to.be.equal(true)

        // object tests
        expect(address).to.be.ok
        expect(address).to.be.a("object")
        expect(address).to.have.property("country")
        expect(address).to.have.property("state").that.is.equal("Texas")

        // array tests
        expect(luckyNumbers).to.be.ok
        expect(luckyNumbers).to.be.a("array")
        expect(luckyNumbers).to.be.lengthOf(3)
        expect(luckyNumbers).that.includes(9)
    })

    it("chai-should", () => {
        const name: string = "John"
        const age: number = 25
        const eligibleToVote: boolean = true
        const address: object = {
            country: "USA",
            state: "Texas"
        }
        const luckyNumbers: Array<number> = [1,7,9]

        should()
        // string tests
        // expect name variable to not be null/undefined
        name.should.be.ok
        // expect type to be a string
        name.should.be.a("string")
        // expect value
        name.should.be.equal("John")
        // expect value not to be
        name.should.not.be.equal("Harry")

        // number tests
        age.should.be.ok
        age.should.be.a("number")
        age.should.be.equal(25)

        // boolean tests
        eligibleToVote.should.be.ok
        eligibleToVote.should.be.a("boolean")
        eligibleToVote.should.be.equal(true)

        // object tests
        address.should.be.ok
        address.should.be.a("object")
        address.should.have.property("country")
        address.should.have.property("state").that.is.equal("Texas")

        // array tests
        luckyNumbers.should.be.ok
        luckyNumbers.should.be.a("array")
        luckyNumbers.should.be.lengthOf(3)
        luckyNumbers.should.includes(1)
    })

    it("chai-assert", () => {
        const name: string = "John"
        const age: number = 25
        const eligibleToVote: boolean = true
        const address: object = {
            country: "USA",
            state: "Texas"
        }
        const luckyNumbers: Array<number> = [1,7,9]

        // string tests
        // expect name variable to not be null/undefined
        assert.isOk(name)
        // expect type to be a string
        assert.typeOf(name, "string")
        // expect value
        assert.equal(name, "John")
        // expect value not to be
        assert.notEqual(name, "Harry")

        // number tests
        assert.isOk(age)
        assert.typeOf(age, "number")
        assert.equal(age, 25)

        // boolean tests
        assert.isOk(eligibleToVote)
        assert.typeOf(eligibleToVote, "boolean")
        assert.equal(eligibleToVote, true)

        // object tests
        assert.isOk(address)
        assert.typeOf(address, "object")
        assert.deepEqual(address, {
            country: "USA",
            state: "Texas"
        })

        // array tests
        assert.isOk(luckyNumbers)
        assert.typeOf(luckyNumbers, "array")
        assert.lengthOf(luckyNumbers, 3)
        assert.include(luckyNumbers, 7)
    })
})
