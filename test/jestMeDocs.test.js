//**********INSTALLATION********

const { expect } = require("chai")

        // npm i --save-dev jest

//``````To have an interactive installation run`````

        //npm init jest@latest

//```Jest files need not necessarily to be in a folder test/

//***********TO RUN****************

         //npm test


//````If globally available

        // npm install jest --global
// ```you can run Jest directly from the CLI using

//      jest my-test --notify --config=config.json

// ````````Using Babel```````````

// 1. Install required dependencies

        // npm install --save-dev babel-jest @babel/core @babel/preset-env

// 2. Configure Babel to target your current version of Node by creating a babel.config.js file in the root dir of your project


// //babel.config.js
// module.exports = {
//     presets: [['@babel/preset-env', {targets: {node: 'current'}}]]
// }

//````````````ESLint```````````````
//Jest can be used with ESLint without any further configuration as long as you import the Jest global helpers (describe, it, etc.) from @jest/globals before using them in your test file. This is necessary to avoid no-undef errors from ESLint, which doesn't know about the Jest globals.
// If you'd like to avoid these imports, you can configure your ESLint environment to support these globals by adding the jest environment

// import {defineConfig} from 'eslint/config';
// import globals from 'globals';

// export default defineConfig([
//   {
//     files: ['**/*.js'],
//     languageOptions: {
//       globals: {
//         ...globals.jest,
//       },
//     },
//     rules: {
//       'no-unused-vars': 'warn',
//       'no-undef': 'warn',
//     },
//   },
// ]);

// Or use eslint-plugin-jest, which has a similar effect:

// {
//   "overrides": [
//     {
//       "files": ["tests/**/*"],
//       "plugins": ["jest"],
//       "env": {
//         "jest/globals": true
//       }
//     }
//   ]
// }





//******************COMMON********************

toBe()
not.toBe()
toEqual()
toStrictEqual()


//*****************TRUTHINESS***************

toBeNull() 
toBeUndefined() 
toBeDefined()  
toBeTruthy() 
toBeFalsy() 

//*****************NUMBERS**************************
toBeGreaterThan(3)
expect(value).toBeGreaterThanOrEqual(anotherValue)
expect(value).toBeLessThan(anotherValue)
expect(value).toBeLessThanOrEqual(anotherValue)
expect(value).toBe(anotherValue)
expect(value).toEqual(anotherValue)
expect(Float).toBeCloseTo(anotherFloat) //KEY


//****************STRINGS***************************

expect('team').not.toMatch(/I/)
expect('Christoph').toMatch(/stop/)

//***************ARRAYS AND ITERABLES**************

expect(list).toContain(item)


//***************EXCEPTIONS************************
expect(() => compileAndroidCode()).toThrow()
expect(() => compileAndroidCode()).toThrow(Error)
expect(() => compileAndroidCode()).toThrow(/Err/)
expect(() => compileAndroidCode()).toThrow(/^you are wrong!$/)


//Jest allows Mocha terms to set up tests, for instance *describe()* and *it()*
//toEqual ignores object keys with undefined props, sparseness or object type mismatch.To take them into account use toStrictEqual instead
//For the case of Floats, it is wise to use toBeCloseTo instead of toEqual due to tiny rounding errors
//WELL REALLY Throw works if specification of it executing is made in the functions, I didn't!
// function that throws an exception needs to be invoked within a wrapping function otherwise toThrow() will not work

//************Asynchronous Code**********
test('the return value is pokemon API', async () => {
    return fetchData().then(data => {
        expect(data).toBe("pokemon api")
    })
})

//Async/await
// test("the return value are bots", () => {
//     await expect(fetchData()).resolves.toBe("pokemon API")

// })
// test("The fetch fails with an error", async () => {
//     await expect(fetchData()).rejects.toMatch("error")
// })

//Be sure to return (or await) the promise - if you omit the return/await statement, your test will complete before the promise returned from fetchData resolves or rejects.

// If you expect a promise to be rejected, use the .catch method.
test("fetch with catch", () => {
    expect.assertions(1)
    return fetchData().catch(error => expect(error).toMatch("error"))
})

//Callbacks
// If you don't use promises, you can use callbacks.

// By default, Jest tests complete once they reach the end of their execution. That means this test will not work as intended:

//WRONG
// Don't do this!
// test('the data is peanut butter', () => {
//   function callback(error, data) {
//     if (error) {
//       throw error;
//     }
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });
// The problem is that the test will complete as soon as fetchData completes, before ever calling the callback.


// There is an alternate form of test that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called done
//  Jest will wait until the done callback is called before finishing the test.

// test('the data is peanut butter', done => {
//   function callback(error, data) {
//     if (error) {
//       done(error);
//       return;
//     }
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });
// If done() is never called, the test will fail (with timeout error), which is what you want to happen.


//***********SETUP AND TEARDOWN******************
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

//SCOPING
// The top level before* and after* hooks apply to every test in a file. The hooks declared inside a describe block apply only to the tests within that describe block.

beforeAll()
beforeEach()
afterEach()
afterAll()

//JEST also has the .only() functionality


//*******MOCK FUNCTIONS************
// Allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.
// There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a manual mock to override a module dependency.

//USING A MOCK FUNCTION

export function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

import {forEach} from './forEach';

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

// The .mock property also tracks the value of this for each call, so it is possible to inspect this as well
const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]

// These mock members are very useful in tests to assert how these functions get called, instantiated, or what they returned:
// The function was called exactly once
expect(someMockFunction.mock.calls).toHaveLength(1);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe('return value');

// The function was called with a certain `this` context: the `element` object.
expect(someMockFunction.mock.contexts[0]).toBe(element);

// This function was instantiated exactly twice
expect(someMockFunction.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(someMockFunction.mock.instances[0].name).toBe('test');

// The first argument of the last call to the function was 'test'
expect(someMockFunction.mock.lastCall[0]).toBe('test');

//Mock Return Values
// Mock functions can also be used to inject test values into your code during a test:
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

// ,,,,,,more on mock yet