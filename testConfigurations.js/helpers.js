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


const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});



/////////////////////////////////////////////////////////////////////////////////////
//Scene 2
const chai = require("chai");
global.expect = chai.expect;
const jsdom = require("mocha-jsdom");

jsdom({});


// Then in indexTest.js
require("./helpers.js");

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
require ( './helpers.js' );

require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );
//chai-spies acts like a detective. It watches for functions(like fetch) to see if it was calles, how many times and with what arguments.
const nock = require( 'nock' );
// ```nock```: Intercepts any outgoing HTTP calls. It prevents the test from actually hitting a real Server(which is slow and unreliable). Instead it says: 'If the code tries to hit /users, give it this fake JSON response back.'

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
require ( './helpers.js' );

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
