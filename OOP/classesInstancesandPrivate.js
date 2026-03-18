                                                //OBJECT ORIENTATION IN JS//
//Object Orientation grants us the ability to write code that structurally establishes the relationships between data and functions.                                              
//class syntax was introduced in ECMAScript 2015
//All JavaScript objects inherit properties and methods from a prototype. This includes standard objects like functions and data types.






class GentleMan {
    constructor(name, pronoun) {
        this.name = name          //property
        this.pronoun = pronoun  //also a property and are assigned when a new instance of the GentleMan class is created
        this.qualities = []
    }
    greet() {
        console.log(`Hello ${this.pronoun} ${this.name}`)
    }
    addQuality(quality){
        this.qualities.push(quality)
    }
    logQualities() {
        this.qualities.forEach(this.logOne)
    }
    logOne = (quality) =>  {
        console.log(`Logging quality '${quality}' for ${this.name}`)
    }
}

const collo = new GentleMan("Collins", "Mr.")

// console.log(collo.greet())
collo.addQuality("Humble")
collo.addQuality("Intuitive")
collo.addQuality("inquistive")
collo.addQuality("industrious")
collo.addQuality("Pragmatic")

console.log(collo.logQualities())

//With our data and methods captured in the GentleMan instance, we have `````encapsulated````` all the info and behaviours that represent a person in our code.
//Two class instances are ````unique```` even though they have no info enscapulated within them.

                        //***BENEFITS OF  OO*****/
    //Easier to change                       
    //Offers better data control   ~ by enscapulating our data, we can protect that data from unexpected changes. And also control how it is used.           
    //Easy to replicate                      
    //Improves understanding and add meaning. ~ OOP enscapulates info and behaviour which makes sense to us as humans and it deems well in organizing real world systems in code; hence easy to comprehend.                      


                                            //************PRIVATE PROPERTIES***********//
// it is possible to alter the properties of a class instance directly which is undesirable for sensitive data                                            

collo.name = "Luka"

//Historically JS has not provided any way to make a property private - all objects were exposed as above.
//The only option available was to follow a common convention, to indicate that properties are not intended to be accessed from outside the class.

class Transaction {
    constructor(amount, date, memo) {
        this._amount = amount
        this._date = date
        this._memo = memo
    }
    log() {
        console.log(`Amount ${this._amount} was withdrawn.\n${this._memo}\n${this._date}`)
    }
}

const transOne = new Transaction(45000, new Date(), "WJSHDHDKHDJDHJJ COLLINS KIBET 0757486557")

console.log(transOne.log())

//The prepended underscore above has no effect but an indication to other programmers.

//Recently, however, the ability to create private properties and methods in JS classes have been added.
//A private field is created by prefixing its name with `````````#````````````.
//For this to work, the fields must first be declared at the top of the class definition. After declaring them, you can access them and assign values in methods within your class.

class Transfer {
    #amount;
    #date;
    #memo;
    constructor(amount, date, memo) {
        this.#amount = amount
        this.#date = date
        this.#memo = memo
    }
    log() {
        this.#amount = 88000   //Value can be altered here
        console.log(`Amount ${this.#amount} was withdrawn.`)
    }
}

const transferOne = new Transfer(45000, new Date(), "WJSHDHDKHDJDHJJ COLLINS KIBET 0757486557")

console.log(transferOne.log())

//If you try to assign values to the private properties in the constructor without declaring them first, you will get a syntax error
//Private elements declared using the # syntax cannot be accessed or changed from outside the class,

// transferOne.#amount = 88000             //SyntaxError: Private field '#amount' must be declared in an enclosing class

//While private class features are relatively new in js, they are widely supported by all major browsers.



