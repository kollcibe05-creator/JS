// Below is a single helper file which uses @babel/register so that one can write modern code and have mocha understand in instantly.

// helpers.js
const { JSDOM } = require('jsdom');
const chai = require('chai');
const spies = require('chai-spies');

                        //**********************MODERN SETUP******************************//
// 1. SETUP: Enable Modern JS Features
// This allows Mocha to read 'import/export' even if the Node version is older.
require('@babel/register')({
  presets: ['@babel/preset-env']
});

// 2. SETUP: The Virtual Browser (JSDOM)
// We create a fake HTML environment so 'document' doesn't return 'undefined'.
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost', // Necessary for tests involving localStorage or Cookies
  pretendToBeVisual: true
});

// 3. SETUP: Global Variables
// We attach the virtual window/document to Node's 'global' object.
// This means you can type 'document' in your test without importing it.
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
global.Node = dom.window.Node;

// 4. SETUP: Assertions & Spies
// 'expect' is the most popular way to write assertions.
chai.use(spies);
global.expect = chai.expect;
global.spy = chai.spy;

// Exporting for use in specific test files if needed
module.exports = { dom };

                          //*****************************OUR PREVIOUS SCENARIOS********************************//
        //``````Testing DOM Variables (The "Scuber" Instance)``````````//
require('./oldvsnewhelperswithtests.js'); // 1. Load the stage manager
const fs = require('fs');
const path = require('path');

describe('Variable Instance', () => {
  it('should exist in the global scope', () => {
    // 2. Load the actual file into the global memory
    require('../index.js'); 
    
    // 3. Test the value
    expect(window.companyName).to.equal('Scuber');
  });
});

// Why require('./helpers.js') Without it, window.companyName would throw an error because window wouldn't exist.
//Why require('../index.js')? This executes your code inside the JSDOM "browser" we created in the helper.


        //``````````````Testing DOM Manipulation (The UI Instance)````````````````//
require('./oldvsnewhelperswithtests.js');

describe('UI Instance', () => {
  it('updates the heading text', () => {
    // 1. Setup the "Prop" (The HTML element)
    document.body.innerHTML = '<h1 id="title">Old Text</h1>';
    
    // 2. Run the function from the source code
    const { updateTitle } = require('../index.js');
    updateTitle();
    
    // 3. Verify the change
    const title = document.getElementById('title');
    expect(title.innerText).to.equal('New Updated Text');
  });
});

// The helpers.js provided the document.body so we could inject the <h1> tag before running the test.


            //````````````Testing API Calls (The Fetch Instance)```````````````````````//
require('./oldvsnewhelperswithtests.js');
const { setupServer } = require('msw/node'); // Modern mocking
const { rest } = require('msw');

// 1. Setup the Mock Server (The "Fake Internet")
const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'Hello World' }));
  })
);

describe('API Instance', () => {
  before(() => server.listen()); // Start the fake internet
  after(() => server.close());   // Turn it off
  
  it('renders API data to the screen', async () => {
    const { fetchDataAndRender } = require('../index.js');
    
    await fetchDataAndRender(); // Wait for the "network"
    
    expect(document.body.innerHTML).to.include('Hello World');
  });
});

// Helper Role: It provides the window.fetch polyfill (standard in modern Node, but JSDOM ensures it behaves like a browser fetch).
