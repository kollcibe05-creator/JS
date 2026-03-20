                            //*******INSTALLATION********//
// npm install date-fns --save                            
// Or
// yarn add date-fns

//You can also use date-fns in the browser too!
// To your HTML;
    {/* <script>
        import * as dateFns from "https://cdn.jsdelivr.net/npm/date-fns/+esm';
    </script> */}

const {format, compareAsc, parse, addDays, subDays, addMonths, subMonths, subYears, differenceInDays, formatDistanceToNow, isValid} = require("date-fns")
// const {zonedTimeToUtc, utcToZonedTime, fromZonedTime} = require("date-fns-tz") (for legacy syntax)
const { fromZonedTime, toZonedTime } = require("date-fns-tz")



console.log(format(new Date(2024, 11, 2), "MM/dd/yyyy"))

const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
]

console.log(dates.sort(compareAsc)) //compares and arranges dates in ascending order

                            //********Formatting Dates********//
//MMMM ~ full month name                            
//MMM ~ Shortened name.
//a ~ AM/PM indicator
// E  ~ Day of week(shortened) eg. Mon, Tue
//EEEE  ~ Day of week(full name) eg. Monday, Tuesday
//h ~ 12-hr clock system.
//H ~ 24-hr clock, 1 digit
//H ~ 24-hr clock, 2 digit

const today = new Date()
console.log(today)
const formattedToday = format(today, 'E yyyy/MMM/dd hh:mm:a')
console.log(formattedToday)

// ---------------------------------------------------------------------------|
// Unit	                          | Placeholder      |Result Example          |
// ---------------------------------------------------------------------------|
// Calendar year (2 digits)	      |  yy	             |   23                   |
// Calendar year (4 digits)	      |  yyyy	         |   2023                 |
// Month (1 digit) 	              |  M	             |   7                    |
// Month (2 digits) 	          |  MM	             |   07                   |  
// Month (short name)	          |  MMM	         |   Jan, Feb, Dec        |  
// Month (full name)	          |  MMMM	         |   January, February    |
// Day of month (1 digit)	      |  d	             |   5, 23                |  
// Day of month (2 digits)	      |  dd	             |   05, 23               |  
// Day of week (shortened)	      |  E	             |   Mon, Tue, Wed        |
// Day of week (full name)	      |  EEEE	         |   Monday, Tuesday      |
// AM, PM	                      |   a	             |   AM, PM               |
// Hour (12-hour clock, 1 digit)  | 	             |   h	1, 2, 10          |
// Hour (12-hour clock, 2 digits) |	 hh	             |   01, 02, 10           |
// Hour (24-hour clock, 1 digit)  |	 H	             |   1, 2, 10, 23         |
// Hour (24-hour clock, 2 digit)  |	 HH	             |   01, 02, 10, 23       |
// Minute (1 digit)	              |   m	             |   1, 2, 3, 25, 30, 58  |
// Minute (2 digit)	              |   mm	         |   01, 02, 03, 24, 56   |
// Second (1 digit)	              |   s	             |   1, 2, 3, 10, 58      |
// Second (2 digit)	              |   ss	         |   01, 02, 10, 45       |
// ---------------------------------------------------------------------------|


                            //***********PARSING DATES**********//
//ARGS: 
        // 1. dateString                              
        // 2. formatString
        // 3. referenceDate ~ A base date is needed for calculating the parsed date
const parsedDate = parse('2023-07-15', 'yyyy-MM-dd', new Date())                            
const anotherParsedDate = "July 1, 2025"
const parsedAnotherDate = format(anotherParsedDate, 'dd MMMM, yyyy', new Date())
console.log(parsedDate)
console.log(parsedAnotherDate)
//date-fns documentation. Note that date-fns uses a strict parsing approach, so the input string must exactly match the provided format string.
//For parsing ISO 8601 strings, date-fns also provides a dedicated, simpler function called ``parseISO```. 

                            //*******ADDING AND SUBTRACTING DATES************//
const d1 = new Date('2025-03-20T09:34:19+03:00')                            
const d2 = new Date()

const fourDaysLater = addDays(d2, 4)
console.log(fourDaysLater)

const fiveDaysEarlier = subDays(d2, 5)
console.log(fiveDaysEarlier)

const fiveMonthsLater = addMonths(d2, 5)
console.log(fiveMonthsLater)

const fiveMonthsEarlier = subMonths(d2, 5)
console.log(fiveMonthsEarlier)

const aDecadeAgo = subYears(d1, 10)
console.log(aDecadeAgo)

//When manipulating dates, it's essential to be aware of edge cases.

//For example, when subtracting months or years, the resulting date might not exist (e.g. February 30), 
    // and date-fns handles such cases intelligently by adjusting the date.

const startDate = new Date(2023, 0, 31); // January 31, 2023 
const oneMonthLater = addMonths(startDate, 1);
console.log('One Month Later:', oneMonthLater); // Output: Date object representing February 28, 2023


                            //*********FINDING THE DIFFERENCE BETWEEN DATES***********//

// differenceInMilliseconds()	//Get the number of milliseconds between the given dates.
// differenceInSeconds()	    //Get the number of seconds between the given dates.
// differenceInMinutes()	    //Get the number of minutes between the given dates.
// differenceInHours()	        //Get the number of hours between the given dates.
// differenceInBusinessDays()	//Get the number of business days between the given dates.
// differenceInDays()	        //Get the number of full days between the given dates.
// differenceInMonths()	    //Get the number of months between the given dates.
// differenceInYears()	        //Get the number of years between the given dates.                            
// Massive additionals here,,,,,

//FORMAT: differenceInDays(endDate, startDate)

const diff = differenceInDays(d2, d1)
console.log(diff)

                            //*****************WORKING WITH TIME ZONES**************//
//Date-fns makes it easier with functions like utcToZonedTime() and formatDistanceToNow().                            
                            //````Heads Up````````//
// I. Time zones' methods are not part of the core date-fns library.                            
//It actually belongs to a companion package called ``date-fns-tz```
//You need to install the helper package and import it specifically.

// npm install date-fns-tz

// const {zonedTimeToUtc, utcToZonedTime} = require("date-fns-tz") (for legacy syntax)
//const {fromZonedTime, toZonedTime} = require("date-fns-tz")

// II. In The latest version of date-fns-tz(V3.0.0 and above), the library underwent a major update to align with date-fns V3.
//The functions were renamed to be more descriptive and consistent 
    // utcToZonedTime => toZonedTime
    // zonedTimeToUtc => fromZonedTime
// To use the old syntax, you will have to specify, the installation;    
        // npm install date-fns-tz@2.0.0
const utcDate = new Date(Date.UTC(2024, 6, 15, 12, 0, 0))
console.log(utcDate)
const timezone = 'America/New_York';

// const zonedDate = utcToZonedTime(utcDate, timezone)
const zonedDate = toZonedTime(utcDate, timezone)
console.log(zonedDate)

console.log(formatDistanceToNow(zonedDate))

// const utCDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin')
const utCDate = fromZonedTime('2018-09-01 18:01:36.386', 'Europe/Berlin')
console.log(utCDate)

                            //******HANDLING INVALID DATES*******//
// date-fns provides the ```isValid()``` function for that purpose.                            
const validDate = new Date(2006, 10, 14)
const invalidDate = new Date(NaN)

console.log(isValid(validDate))
console.log(isValid(invalidDate))










//New Intl syntax 

