const {person}= require("../test/testcases")

////ASSERT SETUP/////////
// const assert = require("assert") commented out for the sake of chai's
    const {assert} = require("chai")
/////////////////////////////////




//SHOULD SETUP//////////// 
//const {should} = require("chai")
const {should: loadShould} = require("chai") //Should should work directly as the commented lines suggest but to use the Should extras you should extend the Object.prototype  
// should()   //actually call it up here
const should = loadShould() //For the sake of the extras
/////////////




//EXPECT SETUP///////////
const {expect} = require("chai")
//////////////

describe.skip("Testing the individual attributes of a person (SHOULD)", () => {
    it('Name of the individual should be a string', () => {
        person.name.should.be.a("string") //can work without assert    //an for Nouns
    })
    it('Age should equal 5', () => {
        person.age.should.equal(5)
    }) 
    it('List should have a length of 2', () => {
        person.children.should.have.lengthOf(2)
    }) 
    it('Testing property (combinator stuff)', () => {
        person.should.have.property("children").with.lengthOf(2)
    })
    //SHOULD EXTRAS
    it('should not exist property', () => {
        should.not.exist(person.color)
    })
    it('should exist property', () => {
        should.exist(person.name)
    })
    it('should equal property', () => {
        person.name.should.equal("Collins Kibet")
    })
    it('should be of type object as a case', () => {
        person.should.be.an("object")
    })

    it.skip('should Throw an error (works for functions)', () => {
        const expr = person.color
        expr.should.Throw()
    })
})



describe.skip("Testing the individual attributes of a person (ASSERT)", () => {
        it("Name of person should be a string (without options)",() => {
            assert.typeOf(person.name, "string")
        })
        it("Name of person should be a string (with options)",() => {
            assert.typeOf(person.name, "string", "Nah Dawg!")
        })
        it("To Equal Something(with options)",() => {
            assert.equal(person.name, "Collins Kibet", "Nah Dawg!")
        })
        it("lengthOf() children",() => {
            assert.lengthOf(person.children, 2, "Nah Dawg!")
        })
})


describe("Testing the individual attributes of a person (EXPECT)", () => {
        it("Name of person should be a string",() => {
            expect(typeof(person.name)).to.be.a("string")
        })
        it("Name of person should be THAT specified",() => {
            expect(person.name).to.equal("Collins Kibet")
        })
        it("lengthOf() children",() => {
            expect(person.children).to.have.lengthOf(2)
        })
        it("property and lengthOf() children (combinator stuff)",() => {
            expect(person).to.have.property("children").with.lengthOf(2)
        })
        //Expect also allows arbitrary comments
        it("Name of person should be THAT specified, else log an error with MY message",() => {
            expect(person.name, 'Haven\'t digested your stuff["Beep", "Beep"]').to.equal("Collins Kibet")
        })
})
