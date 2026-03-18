                                        //****"THE LOST COTEXT BUG"********/
                                            //****Scenario */

const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent:
    "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
    Thor: "Admiration, respect, and love",
    Loki: "Your son",
  },
  signatories: ["Thor", "Loki"],
};                                    

const printCard  = function () {
    console.log(this.frontContent)
    console.log(this.insideContent)

    this.signatories.forEach(function (signatory) {
            const message = `${this.closing[signatory]}, ${signatory}`
            console.log(message)
    });
}

// console.log(printCard.call(messageConfig)) 

//It won't work due to the common over the head fact that function expressions and declarations inside of other functions *do not automatically* use the same context as the outer function. 


                                        //**********DEBUGGING THE NATURE OF THE LOST CONTEXT BUG********//

const printCardDebug = function () {
    console.log(this.frontContent);
    console.log(this.insideContent);

    console.log("Debug before forEach: "+  this)

     this.signatories.forEach(function (signatory) {
        console.log("Debug Inside forEach: " + this);
    // const message = `${this.closing[signatory]}, ${signatory}`
    // console.log(message)
    });


}                            
console.log(printCardDebug.call(messageConfig))

//Result;
        // Debug before forEach: [object Object]
        // Debug Inside forEach: [object global]
        // Debug Inside forEach: [object global]

//Remember, rules of function invocation: A function defaults to the global execution context when it is called without "anything to the left of the dot"

// There are many ways programmers use to solve this problem, the most common are:

                    //1.  ``````````Explicitly specifying the context by either passing thisArg or using *bind* 
                    //1.  ``````````Use a closure 
                    //1.  ``````````Use an arrow function expression

                                                        //1. USE thisArg TO AVOID THE LOST CONTEXT BUG/

// I.
//Per the forEach Documentation we could pass *thisArg* argument to the forEach as the second argument, after the function expression.
//This explicitly provides a context for the function used inside forEach, thus fixing our bug.
//ASIDE: This pattern works for forEach as well as map and other collection-processing methods.

const thisArgWay = function () {
        console.log(this.frontContent);
        console.log(this.insideContent);

        this.signatories.forEach(function (signatory) {
            const message = `${this.closing[signatory]}, ${signatory}`
            console.log(message)
        }, this)
}                                                        
console.log(thisArgWay.call(messageConfig))

// II.
// A slight variation on this idea would be to invoke *bind* on the function expression in the forEach

const bindWay = function () {
        console.log(this.frontContent);
        console.log(this.insideContent);

        this.signatories.forEach(function (signatory) {
            const message = `${this.closing[signatory]}, ${signatory}`
            console.log(message)
        }.bind(this))
}  
console.log(bindWay.call(messageConfig))



                                                        //2. USE A CLOSURE TO REGAIN ACCESS TO THE LOST CONTEXT/
//We could achieve this by assigning that value to a variable and leverage function-level scope and closures to regain access to the outer context.                                                       
//Many devs define the variable by the name *self* in anyway, the inner function encloses as a closure
const closureWay = function () {
    console.log(this.frontContent);
    console.log(this.insideContent);

    const outerContext = this
    this.signatories.forEach(function (signatory) {
        const message = `${outerContext.closing[signatory]}, ${signatory}`
        console.log(message)
    })
}
console.log(closureWay.call(messageConfig))

                                                        //3. USING AN ARROW FUNCTION EXPRESSION TO CREATE A FUNCTION EXPRESSION WITHOUT ITS OWN CONTEXT/ 
//The most important difference from 'old style' function expression is that arrow functions ```are automatically bound to it's parent context and does not create a context of its own.```.                                                        
//Many programmers think arrow functions are much more predictable since they do not create their own this during execution and instead "absorb" the context of their enclosing environment.
//Since the whole point of an arrow function is to not have its own execution context, we should not use call, bind or apply when executing them. Most if the time you'll see them used as anonymous functions passed as first-class data into another function


const arrowWay = function () {
    console.log(this.frontContent);
    console.log(this.insideContent);

    this.signatories.forEach( (signatory) =>  {
        const message = `${this.closing[signatory]}, ${signatory}`
        console.log(message)
    })
}

console.log(arrowWay.call(messageConfig))