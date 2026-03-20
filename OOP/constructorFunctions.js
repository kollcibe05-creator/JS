//JavaScript is sometimes a bit confusing. It has a native type *Object*.
//How does that relate to Object-Orientation? And how does the desire to avoid repeating ourselves relate to them both? 
//we'll work with plain old JavaScript Objects, and slowly transition to one of the key elements of OO, the constructor function and its partner, new.

                                                            //************Creating a Constructor Function***********************//
//It's sometime handy to represent data with objects, which gives us key/value pairs.                                                            
//Now imagine that we had a couple of them.
//Note, that with both objects sharing exactly the same keys, and only the values differing, we are repeating ourselves
//We would like a mechanism to construct objects with the same attributes (that is, keys), while assigning different values to those keys.
//The name for what kind of function does this varies across many popular programming languages, but we'll call it a `````factory function``` because it spits out new instances.

function FactoryUser(name, age, hometown) {
    return {
        name,  // don't forget ES6 power-tools, this is the same as `name: name`
        age, 
        hometown
    };
}
const habibi = FactoryUser("Habibi", 20, "Guadalupe")
console.log(habibi)
console.log(habibi.age)

//Interestingly, typeof confirms habibi is an Object.
console.log(typeof habibi)
//However, something is not quite clear, as we might like it to be. If we ask habibi what made it....:
console.log(habibi.constructor) //[Function: Object]
//habibi is certainly an Object but it's more specific than that: it's a User.
//We'd really like for this special kind of object to be reflected when we ask it what it is. We'd like for a mystical process to come along and say you are not merely an Object, you are a User.
//We tell JavaScript to bless the thing created by the constructor function into being something more specific than Object by using the keyword new.
//Using ````new```` requires that we evolve our factory function into a ````constructor function`````. It's the same idea, but with a few subtle additions.


                                                    //**********Explain What is `new` and How it Works With the Constructor Function**************//
//Lets create a constructor function. Constructor functions must be paired with the new keyword(not yet implemented below.)                                                    
function User(name, email) {
    this.name = name;
    this.email = email
}
//`this` refers to the ``function's context```.
//Since functions in JavaScript are also Objects, a function can say "on me, set a property."
//As we read this function we might think 
    // "OK, so you're going to run a function that will set properties on itself. 
    // That's not doing anything useful." 
    // We would be right.
//What we really want to say is something like 
    // "Hey, constructor function, when you run, 
    // create a new copy of yourself, 
    // leaving the original unchanged 
    // and on that particular copy, 
    // set the properties based on the arguments passed into the function. 
//The keyword ``new`` tells the constructor function just to do that    
// Example below with detailed comments;

function User(name, email) {
  this.name = name; // [2] Set my context's property name to what
  //     came in in the first argument (name)
  this.email = email; // [3] Set my context's property email to what
  //     came in in the second argument (email)
}

// [1] Create a new "context", that's what `new` does
// Use _that_ new context inside of the execution of the `User` function
// also pass two parameters, "Greyson" and "greyson@example.com"

// [4]: Assign the new context thing with its this properties set to the
// variable `greyson`
const greyson = new User("Greyson", "greyson@example.com");

// [5]: Ask the new context for what's in its `.name` property
console.log(greyson.name); //=> [6] "Greyson"

const mamoush = new User("Mamoush", "mamoushtu@gmail.com")
console.log(mamoush)
console.log(mamoush.email)

//You can ask interesting questions about the mamoush variable.
console.log(typeof mamoush)
console.log(mamoush.constructor)

//Since we know one OO pattern, we might be wondering how to add methods to the User instances.
//It should be obvious that if we can set a property to point to a value like "greyson" or "greyson@example.com", we should be able to set an anonymous function to a property. 
//That function would have access to the `this` context created when the instance was `new`'d into existence.

function Ceo(name, company, quality) {
    this.name = name
    this.company = company
    this.quality = quality
    this.sayHi = function () {
        return `Hello everyone! My name is ${this.name}, a very ${this.quality} lad who is the CEO of  ${this.company}.`
    }
}

const collo = new Ceo("Collins Kibet", "Netflix", "rational and pragmatic")
console.log(collo)
console.log(collo.sayHi())

//There's one problem with this design. It's incredibly memory inefficient.

    
