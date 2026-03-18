                                            //***********Method types***********//
            // I. The standard 'instance' method already expounded                                            
            // II. Static                                            
            // III. Getter  
            // Iv. Setter                                            

const common = require("mocha/lib/interfaces/common")

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

