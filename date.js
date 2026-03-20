//NOW
const date = new Date ()

//TO GENERATE YOUR OWN DATE AND TIME

    // 1. new Date(year, month, day, hour, minute, second, ms)
    //MOnths are 0-indexed; December is 11

    const ownDate = new Date(2007, 10, 25, 4, 25, 59, 200)
    console.log(ownDate.toLocaleString())

    // 2. parsing a Date String
        //The most reliable format for consistent results across browsers is ISO 8601 format(YYYY-MM-DDTHH:mm:ss.sssZ)
        const dateString = new Date("2023-12-25T10:00:00")
        //You can parse a short string with year, month and date then the rest will default to 0.
        const january = new Date("2026-01-05") //getMonth() will return '0'?
        console.log(dateString)
    // 3. From a timestamp    
        //Dates in JS are fundamentally stored as the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC)
        // You can create a Date object by passing this number of milliseconds to the constructor.
        const timestampDate = new Date(1672531200000)
        console.log(timestampDate)
    // 4. If you only need the timestamp for calculations or comparisons and don't need a full date, use the static Date.now()
        const timestamp = Date.now()
        console.log(timestamp)
    // 5. Date.UTC() 
    const utcTimestamp = Date.UTC(1991, 0, 1)
    console.log(utcTimestamp)

        
//MANIPULATING OUTPUT
console.log(date.toDateString()) //returns date details only, including day of the week
console.log(date.toLocaleString())
console.log(date.toLocaleDateString()) //returns date details only
console.log(date.toLocaleTimeString()) //returns date details only
console.log(date.toISOString()) 
console.log(date.toUTCString()) //The most reliable way to work with data.


//SETTING DATE
ownDate.setFullYear(2024)
ownDate.setMonth(11)
ownDate.setDate(15)
// ownDate.setDay(2)  //dOES NOT EXIST
ownDate.setHours(15)
ownDate.setMinutes(35)
ownDate.setSeconds(44)
ownDate.setMilliseconds(400)




//ACCESSING INDIVIDUAL VALUES
const year = ownDate.getFullYear()
console.log(year)
const month = ownDate.getMonth()
console.log(month)
const dateOfTheMonth = ownDate.getDate()
console.log(dateOfTheMonth)
const day = ownDate.getDay()
console.log(day)  //Displays the num of day of the week.
const hours = ownDate.getHours()
console.log(hours)
const minutes = ownDate.getMinutes()
console.log(minutes)
const seconds = ownDate.getSeconds()
console.log(seconds)
const milliseconds = ownDate.getMilliseconds()
console.log(milliseconds)

const time = ownDate.getTime()
console.log(time)  //returns a numeric timestamp



//DATE MANIPULATION AND COMPARISON

//NOTE: To see which date comes first, you cannot compare date objects directly
        //dateA === dateB will almost always be false because they are different objects in memory)

//COMPARISON 
    // LEGACY       
const d1 = new Date("2026-03-20")
const d2 = new Date("2026-03-25")

console.log(d1.getTime())
if(d2.getTime() > d1.getTime()) {
    console.log("d1 is earlier than d2")
}

    // MODERN(Temporal API)
//const p1 = Temporal.PlainDate.from('2026-03-20')
//const p2 = Temporal.PlainDate.from('2026-03-25')
//Temporal.PlainDate.compare(p1, p2)


//FINDING DURATION
    // LEGACY
const jan1 = new Date("2026-01-01")    
const jan5 = new Date("2026-01-05")      
const diff = jan5 - jan1 
console.log(diff) //returns the timeDiff in ms 
const diffInDays = diff/(1000 * 60 * 60 * 24)
console.log(diffInDays)

    // MODERN WAY(.since and .until)
// const start = Temporal.PlainDate.from('2026-03-01');
// const end = Temporal.PlainDate.from('2026-03-20');

// const duration = start.until(end); 
// console.log(duration.days);


// SUMMING TO DATES
    // MODERN
// const jan = Temporal.plainDate.from('2026-01-31')
// const feb = jan.add({months: 1})
// const twoWeeksLater = today.add({ days: 14 });
// console.log(feb.toString())

    // LEGACY
const today = new Date()
console.log(today)
today.setDate(today.getDate() + 14)
console.log(today)
//WARNING: This mutates (changes) the original today variable. If you need the original date later, you must clone it first.

//SUBSTRACTING FROM DATES
    // LEGACY
const anotherToday = new Date()
console.log(anotherToday)
anotherToday.setDate(anotherToday.getDate() - 14)
console.log(anotherToday)
    // MODERN
//const today = Temporal.Now.plainDateISO();
//const lastMonth = today.subtract({ months: 1 });


// ***********************************************************
//USING BUILT-IN TEMPORAL(Node.js 22+) 
//However, in CommonJS files, you might still need to check if the global object is populated.
const {Temporal} = globalThis;
if (!Temporal) {
  console.log("Temporal is not supported in this Node version. Use a polyfill.");
} else {
  const now = Temporal.Now.plainDateISO();
  console.log(`Today is: ${now.toString()}`);
}
    //**Use a Polyfill (The most Reliable way)**//
//If you are working on a project that needs to run on older servers or environments where Temporal isn't native yet, you should use the ````@js-temporal/polyfill`````.`    
            // 1. Install the package
    //npm install @js-temporal/polyfill 
            // Require it in your CommonJS file   
    //require("@js-temporal/polyfill")        

//KEY DIFFS BETWEEN LEGACY AND MODERN    
//1. Immutability: Unlike the old Date object, Temporal objects cannot be changed. In CommonJS logic, this means you must always assign the result of a calculation to a new variable.
//2. String Basics: 
// CommonJS modules often exchange data via JSON. Use .toString() to convert a Temporal object into an ISO 8601 string for database storage or API responses.

//Handling Time Zones in CommonJS
//One of the best reasons to use Temporal in a Node.js backend is handling specific time zones without heavy libraries like Moment.js.

// ****************************************
require('@js-temporal/polyfill');

// Get the current time in Nairobi specifically
const nairobiTime = Temporal.Now.zonedDateTimeISO('Africa/Nairobi');

console.log(nairobiTime.toString()); 
// Output: 2026-03-20T09:34:19+03:00[Africa/Nairobi]

// **************************************
