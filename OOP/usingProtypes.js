function User(name, email) {
  this.name = name;
  this.email = email;
  this.sayHello = function () {
    console.log(`Hello everybody, my name is ${this.name} whom you've been
mailing at ${this.email}!`);
  };
}

const lauren = new User("lauren", "lauren@gmail.com");
console.log(lauren.sayHello());

//With an increase of users spanning to millions, the memory usage shrinks since each instance property takes up some bytes.

//The key to gaining efficiency is the prototype.
//In our example the names vary, so we can't economize there. The emails vary, so we can't economize there either.
//But the method, sayHello is the same in every instance: "in my current context return a template string with this current context's values."
//We would like to tell all instances of User that they have a shared place to find methods. That place is called the "prototype."

                                                    //********Recognize the Prototype as a Means for Reducing Inefficiency**************//
function Ceo(name, company, quality) {
    this.name = name
    this.company = company
    this.quality = quality
}

Ceo.prototype.sayHi = function () {
        return `Hello everyone! My name is ${this.name}, a very ${this.quality} lad who is the CEO of  ${this.company}.`
    }
Ceo.prototype.command = function () {
    return `I am ${this.name}, the CEO of ${this.company} and I command you to leave!`
}
const collo = new Ceo("Collins Kibet", "Netflix", "rational and pragmatic")
const elon = new Ceo("Elon Musk", "Tesla", "tactical")
console.log(collo.sayHi())
console.log(elon.sayHi())                                                    

//The prototype is just a JS object.
console.log(Ceo.prototype)
console.log(typeof Ceo.prototype)

//To prove the efficiency of sharing methods via prototype:
console.log(elon.command === collo.command)


