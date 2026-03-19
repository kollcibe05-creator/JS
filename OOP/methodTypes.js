                                                    //***********Method types***********//
            // I. The standard 'instance' method already expounded                                            
            // II. Static                                            
            // III. Getter  
            // Iv. Setter                                            

                                                    //**********Standard methods****************//
// Used by most classes already created by me                                            
//These methods are available to any instance of the class they belong to
//Methods can be called from inside other methods just like properties.

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength
    }
    area() {
        return this.sideLength * this.sideLength
    }
    areaMessage() {
        return `The area of this square is ${this.area()}`
    }
}
                                                //**************Static Methods******************//
// Static methods are class-level methods ~ they are not callable on instances of a class, only the class itself.                                  
//These are often `````'utility classes'``````: classes that encapsulates a set of related methods but don't need to be made into instances.
// Example; 
class CommonMath {
    static triple(number) {
        return number * number * number
    }
    static findHypotenuse(a, b) {
        return Math.sqrt(a * a + b * b)
    }
} 
const num = CommonMath.triple(9)
console.log(num)
const c = CommonMath.findHypotenuse(5, 6)

//This sort of class might be useful in different ways but we don't ever need an instance of it.

                                                //``Define *get* Keyword in JS Class Context```//
//Introduced in modern JS.
//Used in classes for methods which server the specific purpose of retrieving data from an instance.                                            
//The *get* keyword turns a method into a `pseudo-property`; it allows us to write a method that interacts like a property.

class Measurements {
    constructor(width, lenght){
        this.lenght = lenght
        this.width = width
    }
    get area () {
        return this.lenght * this.width
    }
}
const rectangle = new  Measurements(5, 7)
// rectangle.width = 4
// rectangle.lenght = 6
//Then you can access the value by;
console.log(rectangle.area)

//If you try to use `this.area()`, you will receive a typeError - area is no longer considered a  function!
//Of course you can achieve the same result by including the area in the constructor but what we've done is load our constructor with more calculations.
//The main benefit of using get is that your area claculation isn't actually run until it is accessed.
//The 'cost' of calculation is offset and may not be called at all.
//If area is included in the constructor, it will be called every time a new instance of a class is created. ~ decreased performance for a large data.
//Using get, an expensive process can be delayed - only run when we need it, distributing the workload more evenly.
//Even if your process is not expensive, using get is useful in general when deriving or calculating data from properties. Since properties can change, any values dependent on them should be calculated based on the current property values, otherwise inaccuracy will be inevitable if modification is made to the data.

//  DEMERIT: Cannot take arguments.

                                                    //``Define *set* Keyword in JS Class Context```//
//Using set is only half of the story, we need set to change the data.                                            
//The set keyword allows us to write a method that interacts like a property being assigned a value.
//By adding it in conjunction with a *get*, we can create a 're-assignable' pseudo-property.

class NewSquare {
    constructor(sideLength){
        this.sideLength = sideLength
    }
    get area() {
        return this.sideLength * this.sideLength
    }
    set area (newArea) {
        this.sideLength = Math.sqrt(newArea)
    }
}

const square = new NewSquare(4)


//We can now 'set' the pseudo-property, area, and modify this.sideLength based on a reverse of the calculation we used in get

square.area = 81   //We can set square area here
console.log(square.area)
console.log(square.sideLength)

// We can now interact with area as though it is a modifiable property, even though it is derived.
//From outside it looks like a property is being set but behind the scenes, we can define what we want to happen, including applying conditional statements.

class NewSquareSet {
    constructor(sideLength){
        this.sideLength = sideLength
    }
    get area() {
        return this.sideLength * this.sideLength
    }
    set area (newArea) {
        if(newArea <= 0) {
            console.warn("Area cannot be less than Zero!!")
        }else{
        this.sideLength = Math.sqrt(newArea)
        }
    }
}

const anotherSquare = new NewSquareSet(11)
anotherSquare.area = 0
console.log(anotherSquare.area)

                                                        //***********USING SET AND GET WITH PRIVATE FIELDS***************//
//In JS, properties are public. But with get and set we can define the public facing methods for updating a private property.                                                        
//Moreover, with our private field in place, we can write code to ensure the property is always valid; during instanteation and modification.
class Name {
    #name
    constructor(name) {
        if(name.length > 1) {
            this.#name = name
        }else{
            throw new Error("Name must have more than a letter.")
        }
    }
    get name () {
        return this.#name
    }
    set name(newName) {
        if (newName.length > 1) {
            this.#name = newName
        }else {
            throw new Error("Name must have more than a letter.")
        }
        this.#name = newName
    }
}


const shiko = new Name("Shiko") 
// shiko.name = "I"
console.log(shiko.name)

//A more elaborate example is of a Student class which takes in first and last name and making sure they do not have any non-alphanumeric 
// characters except for those that appear in names: ```saniting text```.

class Student {
    #firstName
    #lastName
    constructor(firstName, lastName){
        this.#firstName = this.sanitize(firstName)
        this.#lastName = this.sanitize(lastName)
    }
    get firstName () {
        return this.capitalize(this.#firstName)
    }
    set firstName(firstName) {
        this.#firstName = this.sanitize(firstName)
    }
    get lastName () {
        return this.capitalize(this.#lastName)
    }
    set lastName(lastName) {
        return this.sanitize(lastName)
    }
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    sanitize(string) {
        //remove any non alphanumeric characters except dash and single quotes (apostrophe)
        return string.replace(/[^A-Za-z0-9-']+/g, "")
    }

}


const student1 = new Student("m@ark", "Barasa*")
const student2 = new Student("Hea@)@(!$)ther", "H!itler")
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student2.firstName)
console.log(student2.lastName)


                                                    //````When to use Mehtods over get and set````````//
//With set and get we don't gain any sort of extra functionality, we gain the ability to differentiate between behaviours.                                                    
//We can use get and set whenever we are handling input or output of a class. We are in essence, creating the *public interface of the class*.



