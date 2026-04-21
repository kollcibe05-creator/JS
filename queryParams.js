// fetch('http://localhost:3001/sushis?limit=4&offest=4')  OR
// fetch('http://localhost:3001/sushis?_limit=4&_offest=4') //using _ is common for JSON servers

//EMBED ~ used when one's json server has two relational data that can be synced upon a GET request, for instance:
// http://localhost:3000/quotes?_embed=likes

// OFFSET - indicates the number of items to skip before returning the given limit of values
        //In our case it will start at 4 then 4 + 4 = 8  then 8 + 4 = 12.....

// http://localhost:3001/sushis?limit=4&start=0      OR    
// http://localhost:3001/sushis?_limit=4&_start=0         

// START - almost similar to Offset, only that it does not repeat.

//For Rate-limited APIs, you may have a query Param like: 
// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g


// Filtering

// GET /tickets?state=open 

//For APIs like GitHub's, filtering logics may take the forms;
// https://api.github.com/search/users?q=octocat  GET all users names octocat
// https://api.github.com/users/octocat/repos Repos endpoint for all users named octocat


//Sorting
//For a descending order of priority

// GET /tickets?sort=-priority, created_at  //with older tickets displayed first

// GET /tickets?sort=-updated_at // recently updated tickets

//GET /tickets?state=closed&sort=-updated_at   //Retrieve currently closed tickets

// GET /tickets?q=returns&state=open&sort=-priority, created_at //Retrieve highest priority open tickets mentioning the word 'return'

//Sorting by a field
// http://localhost:3000/quotes?_sort=author

// LIMIT WHICH FIELDS ARE BEING RETURNED USING,,,,

//GET /tickets?fields=id, subject, updated_at&state=open&sort=-updated_at
//GET /tickets?embed=customer&fields=id, customer.id, customer.name


//LIMIT AND PAGE
// _limit=[number] - limit the number of monsters returned
// _page=[number] - offset your request for monsters to some page (must specify a limit)

// example:

// GET http://localhost:3000/monsters/?_limit=20&_page=3

//Start/ End date

// Start/End Dates: Frequently used to define a range for fetching data, e.g., 
                // ?start_date=2023-01-01&end_date=2023-01-31

//CLAIM ~ Adding pretty-true in URL defaults output to pretty-print
//?pretty=true

// use whitespaces with gzip to cut up on space ~ ensure it is supported

// Apis pagination generally fall into two categories  
        //1. Offset-based
        //2. Cursor-based
                //````````Offset-based`````````//        
//Most common for simple applications.                 
// `start` (or `offset`): The number of items to skip before starting to return results.  
// `end`: Occasionally used to specify a hard stop point, though less common than a 'limit'
// `offsets`: Usually a plural reference to the index points. In a db query, this translates to: 
                        //SELECT * FROM products LIMIT 10 OFFSET 20
        // GET /api/products?limit=20&offset=40                        
        // SELECT * FROM products ORDER BY id LIMIT 20 OFFSET 40;
// Pro: Easy to implement and allows users to jump to a specific page (e.g., Page 5).
// Con: It gets slower as the dataset grows because the database still has to "count" through all the skipped rows.

                //````````Cursor-based`````````// 
// This is often where ``next`` comes into play. Instead of skipping a set number of rows, the API provides a "pointer" to the last item seen.                
// ``next``: A unique identifier( or "cursor") that tells the server exactly where to pick up for the next quest. 
// When you fetch the first 10 items, the API response includes a next_cursor (like a hashed string or a timestamp). You pass that string back in your next query.
// URL Example: Fetch 20 items following the product ID 500 (cursor=500).
                // GET /api/products?limit=20&cursor=eyJpZCI6NTAwfQ==

//SQL Equivalent:                 
                // SELECT * FROM products WHERE id > 500 ORDER BY id ASC LIMIT 20;
//Example Scenario                
// Page 1: GET /users?limit=10
// Response: { "data": [...], "next_cursor": "ZTEyMw==" }
// Page 2: GET /users?limit=10&cursor=ZTEyMw==
// Note: Cursors are often base64 encoded.                  
//      Parameter               Type                 Purpose 
//      start / offset          Offset-based         Defines the numerical index where the data slice begins.
//      next                    Cursor-based         A token representing the "bookmark" for the next set of results.
//      end                     Range-based          Defines the upper boundary of the requested data.
//      limit                   Both                 (Often paired with these) Defines how many items to return per "page."

// Use Offset (start): If your data is relatively static and you need "jump-to-page" functionality (like a product catalog).
// Use Cursor (next): If your data changes frequently (like a social media feed or real-time logs) to avoid seeing the same item twice if a new record is added while the user is scrolling.



// 415 unsupported media type
// 410 - Gone
// 429 - Too many Requests
// 304 Not Modified
// 405 - Method Not Allowed

