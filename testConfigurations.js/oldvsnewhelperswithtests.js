//We must set a virtual Browser since Node.js doesn't have a *document* or *window*.
const chai = require('chai')
global.expect = chai.expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
//jsdom creates a 'headless' browser in memory. It allows one to run code like ``document.querySelector`` inside Node.
const path = require('path')
const babel = require('babel-core');
//babel-core translates modern JS(ES6+) into a version that the test runner(Mocha) can understand

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
// ```fs.readFileSync```: Literally reads index.html or index.js file and "injects" into the virtual browser so that the test can interact with.
                          // It literally opens index.html and turns the whole thing into one giant string of text.

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code
//Takes the modern Javascript(ES6) and turns it into older JS that the current version of JSDOM can understand.

jsdom({
  html, src
  // html ~ the UI the test sees
  // src ~ the logic the test runs
  // jsdom ~ the 'Virtual Browser' factory.
});
//Creates a fake window.
// Puts the HTML string inside that window.
// Runs the Javascript string against that HTML
// Result: A fully functioning 'website' living entirely inside my Computer's RAM

// 1. The "Pollution" Strategy (Global Mutation)
// When you call jsdom({ html, src }), the library doesn't just create a virtual browser; it force-injects that browser's properties into Node.js's global object.
// It effectively performs this logic behind the scenes:

// Inside the mocha-jsdom library
global.window = createdVirtualWindow;
global.document = createdVirtualWindow.document;
global.navigator = createdVirtualWindow.navigator;

// Because it attaches these to global, any file that runs after that configuration file can see document and window as if they were built-in keywords (like console or Array).

//2.  The Execution Order (The require Chain)
// The reason your test file (indexTest.js) can access the HTML elements is because of the order of operations. Look at the top of the test file:

// indexTest.js
require("./oldvsnewhelperswithtests.js"); // <--- STEP 1: Run the setup

describe("Testing my app", () => {
  it("has a button", () => {
    // STEP 2: Access the global document created in Step 1
    expect(document.querySelector('button')).to.exist; 
  });
});

// I. require("./helpers.js"): Node flies over to your helper file and executes every line. It reads the HTML, compiles the JS src, and calls jsdom()
// II. Global Injection: jsdom "pollutes" the global scope with the virtual browser.
//III.  The Test Runs: Now, when the it block runs, the "environment" is already prepared.

//3. How the src is accessed
jsdom({
  html: '...',
  src: 'const companyName = "Scuber";' 
});

// JSDOM treats that src string exactly like a <script> tag in a real browser. It executes that code inside the virtual window.
// If your index.js defines a variable like var x = 10, it becomes window.x.
// Because mocha-jsdom links the virtual window to the global object, you can just type x or window.x in your test, and it will work.


// The reason modern testing (like Vitest or Playwright) moved away from this is exactly because Global Mutation is dangerous.
// It makes it hard to track where document came from.
// If one test changes the document, it might "leak" into the next test and cause a failure.
// In Modern Testing, we explicitly import what we need:
// Modern approach
import { JSDOM } from 'jsdom';
const dom = new JSDOM(html);
const document = dom.window.document; // Explicit, not global!


/////////////////////////////////////////////////////////////////////////////////////
//Scene 2
const chai = require("chai");
global.expect = chai.expect;
const jsdom = require("mocha-jsdom");

jsdom({});


// Then in indexTest.js
require("./oldvsnewhelperswithtests.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});

////////////////////////////////////////////
// Scene 3
const chai = require( 'chai' )
global.expect = chai.expect
const fs = require( 'fs' )
const jsdom = require( 'mocha-jsdom' )
const path = require( 'path' )
const babel = require( 'babel-core' );

const html = fs.readFileSync( path.resolve( __dirname, '..', 'index.html' ), 'utf-8' )

const babelResult = babel.transformFileSync(
  path.resolve( __dirname, '..', 'index.js' ), {
    presets: [ 'env' ]
  }
);

const src = babelResult.code

jsdom( {
  html,
  src,
  url: "http://localhost"
} );
// Then in indexText.js
require ( './oldvsnewhelperswithtests.js' );

require( './oldvsnewhelperswithtests.js' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );
//chai-spies acts like a detective. It watches for functions(like fetch) to see if it was called, how many times and with what arguments.
const nock = require( 'nock' );
// ```nock```: Intercepts any outgoing HTTP calls. It prevents the test from actually hitting a real Server(which is slow and unreliable). 
              // Instead it says: 'If the code tries to hit /users, give it this fake JSON response back.'

chai.use( spies );

const rando = Math.ceil( Math.random() * 1000 )

describe( "submitData()", () => {
  let xhr, requests
  beforeEach( function () {
    window.fetch = require( 'node-fetch' );



    chai.spy.on( window, 'fetch' );
    window.onerror = undefined;

  } );

  it( "makes a POST request to /users with a name and email", async () => {
    let reqBody
    let headers
    nock( 'http://localhost:3000' )
      .post( '/users' )
      .reply( 201, function ( uri, requestBody ) {
        reqBody = requestBody
        headers = this.req.headers
        return {
          id: rando,
          ...requestBody
        }
      } );

    let name = "Steve"
    let email = "steve@steve.com"

    await submitData( name, email )
    expect( window.fetch, "A fetch to the API was not found" )
      .to.have.been.called.with( 'http://localhost:3000/users' );
    expect( window.fetch )
      .to.have.been.called.exactly( 1 );
    expect( headers[ 'content-type' ][ 0 ] )
      .to.equal( 'application/json' )
    expect( headers[ 'accept' ][ 0 ] )
      .to.equal( 'application/json' )
    expect( Object.keys( reqBody ), "The request body should only have 'name' and 'email' key/value pairs" )
      .to.deep.equal( [ "name", "email" ] )
    expect( reqBody.name, "The 'name' property was not found in the request body" )
      .to.eq( "Steve" )
    expect( reqBody.email, "The 'email' property was not found in the request body" )
      .to.eq( "steve@steve.com" )
  } )

  it( "handles the POST request response, retrieves the new id value and appends it to the DOM", async function () {
    nock( 'http://localhost:3000' )
      .post( '/users' )
      .reply( 201, function ( uri, requestBody ) {
        return {
          id: rando,
          ...requestBody
        }
      } );

    let name = "Sam"
    let email = "sam@sam.com"

    await submitData( name, email )

    expect( document.body.innerHTML )
      .to.include( rando )
  } );

  it( "handles a failed POST request using catch, appends the error message to the DOM", async function () {
    let message = 'Unauthorized Access'
    nock( 'http://localhost:3000' )
      .post( '/users' )
      .replyWithError( {
        message: message,
        code: '401',
      } )

    let name = "Jim"
    let email = "jim@jim.com"

    await submitData( name, email )
    expect( document.body.innerHTML )
      .to.include( message )
  } )
} )

//In another test example.
require ( './oldvsnewhelperswithtests.js' );

const fs = require('fs')
const path = require('path')
const { Server } = require('http')

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber'); // Tests the result.It checks if the variable exists in the global memory of the virtual dom.
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
    });
  });
});


// In modern set-up most of the steps are simplistic with some key improvements including;

//1.  Babel: Replace the ancient babel-core with @babel/core and @babel/register.

//2.  Environment: Instead of manually reading files with fs, use Mocha’s built-in --require flag to load your environment once for all tests.

//3.  Mocking: Replace nock with MSW (Mock Service Worker). It’s more robust and mimics real networking much better.


const { JSDOM } = require('jsdom');
const { register } = require('@babel/register');

// 1. Auto-compile all JS files using modern Babel
register({
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
});

// 2. Setup Global Browser Environment
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;

// 3. Modern Assertion Setup
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
global.expect = chai.expect;

// scene 3
// In the  original, nock was used. In the modern version, we use msw because it doesn't "pollute" the Node.js global fetch as aggressively and handles errors more gracefully.


const { setupServer } = require('msw/node');
const { rest } = require('msw');

// 1. Define the API behavior (The "Mock")
const server = setupServer(
  rest.post('http://localhost:3000/users', (req, res, ctx) => {
    const { name } = req.body;
    if (name === 'Jim') return res(ctx.status(401), ctx.json({ message: 'Unauthorized' }));
    
    return res(ctx.status(201), ctx.json({ id: 999, ...req.body }));
  })
);

describe("submitData() Modern", () => {
  before(() => server.listen());   // Start mocking
  afterEach(() => server.resetHandlers()); // Clean up between tests
  after(() => server.close());    // Stop mocking

  it("appends the new ID to the DOM on success", async () => {
    // We can now use the actual function from our source code directly
    const { submitData } = require('../index.js'); 
    
    await submitData("Steve", "steve@steve.com");
    
    expect(document.body.innerHTML).to.include("999");
  });
});

// In the test using fs.readFileSync to check if a variable was a const. While that works, the modern way is to use Static Analysis (checking the code structure) rather than just "searching for text."


const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.resolve(__dirname, '../index.js'), 'utf8');

describe('Code Quality Checks', () => {
  it('uses const for the company name', () => {
    // Regex is still fine for simple scripts, but ensure it handles whitespace!
    expect(code).to.match(/const\s+companyName\s*=/);
  });

  it('sets companyName to Scuber', () => {
    // Instead of reading the file, we actually require it to check the value
    const index = require('../index.js');
    expect(index.companyName).to.equal('Scuber');
  });
});
