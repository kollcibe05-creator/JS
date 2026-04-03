// fetch('http://localhost:3001/sushis?limit=4&offest=4')  OR
// fetch('http://localhost:3001/sushis?_limit=4&_offest=4') //using _ is common for JSON servers

// OFFSET - indicates the number of items to skip before returning the given limit of values
        //In our case it will start at 4 then 4 + 4 = 8  then 8 + 4 = 12.....

// http://localhost:3001/sushis?limit=4&start=0      OR    
// http://localhost:3001/sushis?_limit=4&_start=0         

// START - almost similar to Offset, only that it does not repeat.

//For Rate-limited APIs, you may have a query Param like: 
// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g


// Filtering

// GET /tickets?state=open

//Sorting
//For a descending order of priority

// GET /tickets?sort=-priority, created_at  //with older tickets displayed first

// GET /tickets?sort=-updated_at // recently updated tickets

//GET /tickets?state=closed&sort=-updated_at   //Retrieve currently closed tickets

// GET /tickets?q=returns&state=open&sort=-priority, created_at //Retrieve highest priority open tickets mentioning the word 'return'

// LIMIT WHICH FIELDS ARE BEING RETURNED USING,,,,

//GET /tickets?fields=id, subject, updated_at&state=open&sort=-updated_at
//GET /tickets?embed=customer&fields=id, customer.id, customer.name

//CLAIM ~ Adding pretty-true in URL defaults output to pretty-print
//?pretty=true

// use whitespaces with gzip to cut up on space ~ ensure it is supported

// 415 unsupported media type
// 410 - Gone
// 429 - Too many Requests
// 304 Not Modified
// 405 - Method Not Allowed

