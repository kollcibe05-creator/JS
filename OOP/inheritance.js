class Animals {
    constructor(name, breed, age) {
        this.name = name
        this.age = age
        this.breed = breed
    }
    intro() {
        return `Hi! I\'m ${this.name} aged ${this.age}.My familia is ${this.breed}`
    }
}
class Bird extends Animals{
    // constructor(name, breed, age, canFly) {
    constructor(canFly, ...args) {
        // super(name, breed, age, canFly)
        super(...args)
        this.canFly = canFly
    }
    log(){
        console.log(this)
    }
}
class Dog extends Animals {
    sound () {
        return `Woof!`
    }
}
class Cat extends Animals {
    sound () {
        return `Meow!`
    }
}
const chihuahua = new Dog("Bosko", "Chihuahua", 5)

console.log(chihuahua.intro())

const weaver = new Bird("Beaver", "Long Neck", 2, false)
console.log(weaver.log())

                                                    //**********CLASS EXTENSIONS AND INHERITANCE********//
                                                                    //`````Use the extends Keyword``````//                                                    
//To get started with inheriting class functionality, we utilize the extends keyword.                                                                    
//extends is used in class declarations to create a class which is a child of another class.
//In addition to inheriting the functionality of the Parent class, each "child" class extends the functionality of the parent.
//Each child can then have additional methods unique to it.


                                                    //**************`super` method************//
                                                        //```````Recognize how to use `super` Method```````//        
//In a child class constructor, super is used as a method and calls the parent class constructor before continuing with the child.                                                         
//If we need to define custom behavior in a child constructor, we can do so without having to override or ignore the parent.
//The example above is more than sufficient to depict this.

                                                        //`````Recognize how to use the `super` Object`````//
//Outsid of the constructor, the super keyword is also used, but this time, as an **object**.                                                        
//When used, it refers to parent's class' properties or methods.

// Rough example; 
class Measurement {
    constructor(radius) {
        this.radius = radius
    }
    get diameter () {
        return this.radius *2
    }
}
class Circle extends Measurement{
    get circumference () {

        return super.diameter * Math.PI //call of the parent method directly
    }
}

const measurement = new Measurement(15)
const circle = new Circle(12)
console.log(circle.circumference)

//Another example;
class Pet {
  constructor(name) {
    this.name = name;
    this.owner = "IownThem Hall";
  }

  speak() {
    return `${this.name} speaks.`;
  }
}

class DomesticDog extends Pet {
    constructor(name, breed) {
        super(name) 
        this.breed = breed
    }
    get info () {
        console.log(this)
        return `${this.name} is a ${this.breed}. ${super.speak()}. Owner -____(${this.owner})`
    }
}

const creature = new Pet("The Pet");
const dog = new DomesticDog("Scott", "Foxhound");
console.log(dog.info)

//In the above code, we've added an info getter that uses super.speak() to call the speak method in the parent class.
//However, since instance methods and properties are already inherited, this will be the same as using this.speak().
//Using super as an object is useful in situations where a parent class contains a **static** method that we want to expand on in a child class.

class AnotherPet {
  constructor(name) {
    this.name = name;
    this.owner = null;
  }

  static definition() {
    return `A pet is an animal kept primarily for a person's company.`;
  }
}

class AnotherDogs extends AnotherPet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  static definition() {
    return (
      super.definition() + " AnotherDogss are one of the most common types of pets."
    );
  }
}

const pet = new AnotherPet("The Thing");
const aDog = new AnotherDogs("Spot", "foxhound");

console.log(AnotherPet.definition());
console.log(AnotherDogs.definition());
