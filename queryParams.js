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