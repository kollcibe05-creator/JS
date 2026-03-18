// When javascript code runs, the JS engine sets aside a place in memory to store references to the variables and functions defined at the global level ~ global execution 
// In addition, for every function invoked, a space is set aside for the function execution context 

// Execution context ~ The full set of variables and methods available, locally or via the scope chain at the time the code is executed.

        // THIS - a special object that is part of the current execution context
                //Determined based on how and where the function is invoked

        // CALL - a method on a function that calls the function just like ()
                //The first argument, traditionally called thisArg, is the object that should be used as the value of this when the function is invoked.
                //An invocation of call looks like this: Calculator.sum.call(multilingualMessages, 1, 2)

        //APPLY - similar to CALL only that it allows additional arguments which are to be sent as an array after the thisArg
                //Calculator.sum.apply(multilingualMessages, [1, 2])

        //BIND - returns a copy of a function it's called on, but with execution context set to the argument that's passed to it.        


//Record Oriented Programming ~ a style of programming based on accessing records and processing them so that they are updated(map-like) or so that their information is aggregated(reduce-like).


                                //*****HOW JAVASCRIPT IMPLICITLY SETS EXECUTION CONTEXT****//

                        // 1. 'bare' functions.
                       // 2. calling a function expression that is a property of an object

                                                            //***********************2**********************//

// JS objects can be primitive values(SVGAnimatedNumberList, strings) or data structures(arrays, objects), but can also be *functions*.

//NB: when functions are defined as expressions  inside an object they are called `````methods````. Example ~ array methods.

// The *this* object for a *method* is simply the object on which the function is called i.e the object to the left of the dot

const collo = {
        name: "Collins Kibet", 
        age: 18,
        talk: function () {
                console.log(this)
        }, 
        foo: function () {
                console.log(`Hi. I am ${this.name}, aged ${this.age}.`)
        }

}

console.log(collo.talk())
console.log(collo.foo())

//SUMMARY: Anytime you call someObject.someFunction(), the *this* object inside of someFunction will be the thing to the left of the `.` : `someObject` 

const maryAnne = {name: "Mary Anne"}
const lucy = {name: "Lucy Graing"}
const speakLike = function () {
        return `We ni G but unabonga kama ${this.name}`      
}
maryAnne.speakLike = speakLike
lucy.speakLike  = speakLike

console.log(maryAnne.speakLike())
console.log(lucy.speakLike())
console.log(lucy.speakLike === maryAnne.speakLike) //returns true as they have the same property

                                                                //**************************1**********************************//

// what happens if we call a function not defined inside an Object?

function globalContext() {
        return this
}
console.log(globalContext())

// when no object is to the left of the function, javascript invisibly adds the ````global object```````.
//in the Browser-based runtime the global object is called ````window```` and in NodeJS _ ````global````.

console.log(globalContext() === global)

// Example in chrome 

const location = function () {
        return this.location.host
}

//It is worth noting that for a function inside of another, it's default context is still the global object.


                        //`````````````````````PREVENTING IMPLICITLY SETTING GLOBAL OBJECT IN FUNCTION CALLS WITH *use strict*

// It works either to all functions(if used at the top of the file) or inside a function if used in it.

function strictContext () {
        'use strict'
        return this
}
console.log(strictContext())


                                        //************SPECIAL CASE: IMPLICITLY-SET context in OOP**********// 
// An important place where this happens is when new instances of classes are created.
// A class describes a group or category of some sort and specifies the characteristics (properties) that all instances of the class are expected to have. 
// The specific instances are created using a function known as a ````constructor````````.

class GentleMan{
        constructor(name, pronoun) {
                this.name = name
                this.pronoun = pronoun
                this.bravado = "Excellent Bravado", 
                this.specialTrait = "Sheer Discipline."                
        }
        examination () {
                return `All the ${this.pronoun} ${this.name} you'll ever hear should have an ${this.bravado} and without question ${this.specialTrait}`
        } //Initially: GentleMan.prototype.examination = function () {}  //short-hand function def. introduced in ES6     // DEMERITS: Non-numerable, Strict-mode(defaults to "use strict"), No *new* keyword on it.
}

const collins = new GentleMan("Collins", "Mr")
console.log(collins.examination())


                                                    //************************CONTEXT AND EXPLICIT SETTING****************************//

// JavaScript provides other means for specifying what we want the context object to be. These are the *explicit* methods of setting the context object: **call**, **apply**, and **bind**.


                                                    //**************************EXPLICITLY OVERRIDE CONTEXT WITH call and apply***************//

// call and apply are methods on functions that provide an alternate way to call the function and enable us to override the default context Object.

// normally; 
const gentlepeople = [
        {
                name: "Collins Kibet", 
                age: 55
        },
        {
                name: "Scarlet Foxx", 
                age: 66
        },
]

function sensibleFoo (person, line) {
    return `A person called ${person.name} aged ${person.age} cannot say ${line}`
}  

const line = "I give up!"
console.log(sensibleFoo(gentlepeople[0], line))

//EXplicit way;
function gentlePhrase (line) {
    return `A person called ${this.name} aged ${this.age} cannot say ${line}`
}

const withCall = gentlePhrase.call(gentlepeople[0], line)

console.log(withCall)

const withApply = gentlePhrase.apply(gentlepeople[0], [line])

console.log(withApply)


                                    //``````````````````````Explicitly lock Context for a function with bind```````````````````````````//

//*bind* basically allows one to create a copy of a function in which context is permanently bound("hard set") to a specific object

const withBind = gentlePhrase.bind(gentlepeople[1])
const phraseWithBind = withBind("Ssup Wassup")
console.log(phraseWithBind)

//the bind method returns a new function that needs to be called, which we've saved into a variable('withBind').
