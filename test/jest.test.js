const {person} = require("./testcases")
const {add, multiply} = require("./tryingtests")
//MATCHERS
test("toBe()", () => {
    
        expect(person.name).toBe("Collins Kibet")

}) 
test("not.toBe()", () => {
    
        expect(person.name).not.toBe("Shrek")

}) 
test("toEqual(), toStrictEqual()", () => {
    
        expect(person.children.length).toEqual(2)
        //toEqual ignores object keys with undefined props, sparseness or object type mismatch.To take them into account use toStrictEqual instead
        expect(person.children.length).toStrictEqual(2)

})       

//Truthiness
test("toBeNull", () => {
        const nullValue = null
        expect(nullValue).toBeNull()

}) 
test("toBeUndefined", () => {

        expect(person.color).toBeUndefined()

}) 
test("toBeTruthy", () => {
        const nullValue = null
        expect(nullValue === null).toBeTruthy()

}) 

//ToBeFalsy()
//ToBeDefined()


//NUMBERS
test("toBeGreaterThan", () => {

        expect(6).toBeGreaterThan(4)

}) 
test("toBeLessThan", () => {

        expect(2).toBeLessThan(4)

}) 
test("toBeGreaterThanOrEqual", () => {

        expect(6).toBeGreaterThanOrEqual(4)

}) 
test("toBeLessThanOrEqual", () => {

        expect(5).toBeLessThanOrEqual(5.5)

}) 
//For the case of Floats, it is wise to use toBeCloseTo instead of toEqual due to tiny rounding errors
test("toBeLessThanOrEqual", () => {
        const sum = 0.1 + 1.6
        expect(sum).toBeCloseTo(1.7)

}) 


//STRINGS   ~ to check strings along regular expressions use toMatch
test("not.toMatch should not contain a letter not in the word", () => {
        const team = 'team'
        expect(team).not.toMatch(/o/)

}) 
test("toMatch should contain at least  a letter in the word", () => {
        const team = 'team'
        expect(team).toMatch(/a/)
}) 


//ARRAYS AND ITERABLES ~ You can confirm if an array contains an item using toContain()

test("toContain should contain the item in the list", () => {
        const greatMen = ["Collins", "Da Vinci", "William James"]
        expect(greatMen).toContain("Collins")
}) 

//EXCEPTIONS    ~ toThrow() is used to test whether a particular function throws an error
test("toThrow() Testing if an error will be thrown", () => {
        console.log(sum(3, 3))

        // expect(() => add("One", "Two")).toThrow()

        //WELL REALLY Throw works if specification of it executing is made in the functions, I didn't!
        // function that throws an exception needs to be invoked within a wrapping function otherwise toThrow() will not work
        
})
