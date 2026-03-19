//It applies to inheritance and extension

                                                    //*********Recognize the Meaning of Strong Behavioral Sub-typing********//
// Liskov's substitution principle  a.ka. strong behavioral sub-typing, is the 'L' in ````SOLID````, a popular set of OO design principles.                                                    
// Liskov's substitution principle: An instance of a parent class should be replacable with an instance of a child class.
//If we follow this principle, the consequence is that properties and methods that exist on the parent will never be modified in any child.
//Child classes can expand upon what they inherited, adding methods or extra properties, do not modify what they inherited.
//If you need to modify a child's inherited properties or methods, why are we inheriting them in the first place?

// One that violates; 
class Reptile {
  constructor(name) {
    this.name = name;
  }
  get move() {
    return `${this.name} crawls away`;
  }
}

// Lizard inherits `move` because it crawls
class Lizard extends Reptile {}

//  Snake overrides `move` because it cannot crawl
class Snake extends Reptile {
  get move() {
    return `${this.name} slithers away`;
  }
}

//The Snake class is a subtype of class Reptile, but overrides the move getter because the original doesn't apply. If we created an instance of Reptile:
let tricky = new Reptile("Tricky");
//and an instance of Snake:
let hissy = new Snake("Hissy Elliot");
//We see that tricky cannot be replaced with hissy without changing behavior:

console.log(tricky.move); 
console.log(hissy.move); 

                                                    //**********Upholds Substitution Principle*********//
//We can either choose to not inherit from the same parent, or we can create a grandparent Reptile class.                                                    
//This grandparent class can still contain all shared data and behavior for all parent and child classes.
class Reptile {
  constructor(name) {
    this.name = name;
  }
}

// legless reptiles slither
class LeglessReptile extends Reptile {
  move() {
    return `${this.name} slithers away`;
  }
}

// legged reptiles crawl
class LeggedReptile extends Reptile {
  move() {
    return `${this.name} crawls away`;
  }
}

class Lizard extends LeggedReptile {}
class Snake extends LeglessReptile {}


                                                    //``````Recognize the Benefits of Upholding Liskov's Substitution Principle````````//
//Both of the above examples work.                                                     
//There is no syntax error if you choose to ignore Liskov's substitution principle.
//This is considered a purely *semantic* design choice.
//The benefit of following this principle is that no matter how complicated inheritance gets, you can always assume that whatever a parent class has, a child class will have too.
//If we have chains of inheritance where children fundamentally change the data and behaviors they inherit, we can potentially introduce bugs.
//As per LSP, a child class may include more properties or use the data differently.
//Note: In general, when dealing with inheritance, the fewer levels of inheritance, the better. 
//Upholding Liskov's substitution principle limits what we can do with inheritance, discouraging larger chains of inherited classes.
//As a side effect, our code is easier to understand and change later on.


                                                        //*****************SOLID******************//
//S -  Single-Responsibility Principle(SRP)
    //-states that there should be more than on reason for a class to change.
    //-In other words, every class should have only one responsibility.
        //- PERKS
        //1.  Maintainability(easier to understand and modify), 
        //2.  Testability(Easier t0 write unit tests with a single focus) 
        //3.  Flexibilty(a change in a responsibility don't affect unrelated parts of the sys.))
//O -  Open-Closed Principle(OCP)
    //-states that software entities should be open for extension, but closed for modification.
    //-In other words, every class should have only one responsibility.
    //- PERKS
        //1.  Extensibility(New feature can be added without modifying existing code.), 
        //2.  Stability(Reduce the risk of introducing bugs when making changes.) 
        //3.  Flexibilty(Adapts to changing requirements more easily.))
//L -  Lisokov Substitution Principle
    //-states that functions that use pointers or references to base classes must be able to use pointers or references of derived classes without knowing it.
    //-In other words, every class should have only one responsibility.
    //- PERKS
        //1.  Polymorphism( Enables the use of polymorphic behavior, making code more flexible and reusable.), 
        //2.  Reliability(Ensures that subclasses adhere to the contract defined by the superclass.) 
        //3.  Predictability(Guarantees that replacing a superclass object with a subclass object won't break the program.))
//I -  Interface Segregation Principle(ISP)
    //-states that clients should not be forced to depend upon interfaces that they do not use.
    //-In other words, every class should have only one responsibility.
    //- PERKS
        //1.  Decoupling(Reduces dependencies between classes, making the code more modular and maintainable.), 
        //2.  Flexibility(Allows for more targeted implementations of interfaces.) 
        //3.  Avoids unnecessary dependencies(Clients don't have to depend on methods they don't use.))
//D -  Dependency Inversion Principle(DIP)
    //-states to depend upon abstractions, not concretes..
    //-In other words, every class should have only one responsibility.
    //- PERKS
        //1.  Loose coupling(Reduces dependencies between modules, making the code more flexible and easier to test.), 
        //2.  Flexibility(Enables changes to implementations without affecting clients.) 
        //3.  Maintainability(Makes code easier to understand and modify.))

// Other common OOP principles are GRASP(9 in Number.)
      