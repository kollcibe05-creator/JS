        // Asynchronous Testing: Promises & APIs
// Classic: Used a done() callback which was prone to "hanging" if you forgot to call it.
// Modern: Uses async/await. Mocha automatically handles the promise.

import { expect } from 'chai';

describe('Async API', () => {
  it('should fetch user data correctly', async () => {
    const response = await fetch('https://api.example.com/user/1');
    const data = await response.json();
    
    expect(data).to.have.property('id'); // Verify the object structure
    expect(data.name).to.be.a('string'); // Verify the data type
  });
});

        // DOM Testing: UI & Elements
//Tests how your code interacts with HTML.
// Since Node.js doesn't have a screen, we use JSDOM to create a "fake" browser in memory.
// Classic: Manually reading .html files and using global.document = ....
// Modern: Using a "Setup Hook" to automatically create the environment for all tests.

// hooks.js ~Setup

import { JSDOM } from 'jsdom';

// Before any tests run, create a global browser environment
export const mochaHooks = {
  beforeAll() {
    const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;
  }
};

// ui.test.js ~ The Test
import { expect } from 'chai';

describe('DOM Interaction', () => {
  it('should change text when button is clicked', () => {
    const root = document.getElementById('root');
    root.innerHTML = '<button id="btn">Click Me</button>';
    
    // Simulate your app logic
    const btn = document.getElementById('btn');
    btn.onclick = () => { root.innerHTML = 'Clicked!'; };
    
    btn.click(); // Trigger the click
    expect(root.innerHTML).to.equal('Clicked!');
  });
});

        // Integration Testing: Mocking the Server
// This tests how your app handles server responses without actually hitting a real server (which keeps tests fast and private).        

// Classic: Used nock, which intercepted Node's internal http module.
// Modern: Uses MSW (Mock Service Worker), which intercepts at the "Network Level" and works identically in browsers and Node.
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// 1. Create a "Fake Server"
const server = setupServer(
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.json({ name: 'John Doe' })); // Return fake data
  })
);

describe('Integration', () => {
  before(() => server.listen()); // Start the fake server
  after(() => server.close());   // Shut it down after tests

  it('displays the username from the API', async () => {
    const name = await getUserName(); // Your app function
    expect(name).to.equal('John Doe');
  });
});


