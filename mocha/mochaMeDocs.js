// const assert = require("node:assert")
const assert = require("assert")    //BOTH WORK

//INSTALLATION

// npm i -D mocha

//RUN 

// npx mocha

// including the test script in package.json

//  "scripts": {
//     "test": "mocha"
//   },

// will allow you to use the cmd to run the tests

// npm run test

// Or better

// npm test

// The test files created should be in test/ directory with a format example.test.js if multiple or test.js if a single file is to be used


//Of course you can test specific file

// npm test test/example.test.js


//CLI HELP

// npx mocha --help


describe("Array", function () { 
    describe("#indexOf()", function () {
        it("should return -1 when the value is not present", function () {
            // assert.equal([1, 2, 3].indexOf(4), -1)
            assert.strictEqual([1, 2, 3].indexOf(4), -1)
        })
    })
})


// For exclusive tests use the .only() keyword They affect the whole tests
//ALL NESTED SUITES will still run
//To specify the suites to run you will have to add .only to each of 'em

// describe.only()
// Or
// it.only()

//On the contrary, using .skip() reverses the .only ethic, It is termed the best practice instead of commenting out the test suite
//To avoid complicating oneself, use conditionals to determine which suite to skip 
//Skipped tests are marked as pending


// you can specify the number of retries to a function
// use this.retries(retries)

// Using arrow functions(lambdas) lexically binds *this* the tests and therefore affects context. 


//Mocha supports libraries such as *chai*, expect.js, should.js, unexpectes and better-assert for Assertions


                            //CHAI
//expect(), assert(), should                           

//INSTALLATION

// npm install chai



// Should                                                   Expect                                                     Assert     
// foo.should.be.a('string');                               expect(foo).to.be.a('string');                             assert.typeOf(foo, 'string');
// foo.should.equal('bar');                                 expect(foo).to.equal('bar');                               assert.typeOf(foo, 'string');
// foo.should.have.lengthOf(3);                             expect(foo).to.have.lengthOf(3);                           assert.lengthOf(foo, 3)
// tea.should.have.property('flavors').with.lengthOf(3);    expect(tea).to.have.property('flavors').with.lengthOf(3);  assert.property(tea, 'flavors');
// should.not.exist(person.color)                                                                                      assert.lengthOf(tea.flavors, 3);
// should.exist(person.name)                                                                                                                       
// person.should.be.an("object")
// expr.should.Throw()         





// //Asynchronous Code
// // Add an argument(usually named done to a test callback)
// // This callback accepts both an Error instance or a falsy validateHeaderValue, anything else throws a falsy value 

// describe("User", function () {
//   describe("#save()", function () {
//     it("should save without error", function (done) {
//       var user = new User("Luna");
//       user.save(function (err) {
//         if (err) done(err);
//         else done();
//       });
//     });
//   });
// });

// //ALternatively you can use the done() callback directly  which will handle an error argument, if it exists
// describe("User", function () {
//   describe("#save()", function () {
//     it("should save without error", function (done) {
//       var user = new User("Luna");
//       user.save(done);
//     });
//   });
// });

// //Working with promises
// //Instead of using done() return a Promise /Useful if API you are testing return promises instead of taking callbacks
// beforeEach(function () {
//   return db.clear().then(function () {
//     return db.save([tobi, loki, jane]);
//   });
// });

// describe("#find()", function () {
//   it("respond with matching records", function () {
//     return db.find({ type: "User" }).should.eventually.have.length(3);
//   });
// });

// //Using async/await
// beforeEach(async function () {
//   await db.clear();
//   await db.save([tobi, loki, jane]);
// });

// describe("#find()", function () {
//   it("responds with matching records", async function () {
//     const users = await db.find({ type: "User" });
//     users.should.have.length(3);
//   });
// });

// //Synchronous code
// // When testing them, omit the callback and Mocha will automatically continue to the next
// describe("Array", function () {
//   describe("#indexOf()", function () {
//     it("should return -1 when the value is not present", function () {
//       [1, 2, 3].indexOf(5).should.equal(-1);
//       [1, 2, 3].indexOf(0).should.equal(-1);
//     });
//   });
// });



// //Timeout
// //Suite-level
// //Suite-level timeouts may be applied to entire test “suites”, or disabled via this.timeout(0). This will be inherited by all nested suites and test-cases that do not override the value.
// describe("a suite of tests", function () {
//   this.timeout(500);

//   it("should take less than 500ms", function (done) {
//     setTimeout(done, 300);
//   });

//   it("should take less than 500ms as well", function (done) {
//     setTimeout(done, 250);
//   });
// });

// //Test level
// //Test-specific timeouts may also be applied, or the use of this.timeout(0) to disable timeouts all together
// it("should take less than 500ms", function (done) {
//   this.timeout(500);
//   setTimeout(done, 300);
// });

// //Hook level
// describe("a suite of tests", function () {
//   beforeEach(function (done) {
//     this.timeout(3000); // A very long environment setup.
//     setTimeout(done, 2500);
//   });
// });
