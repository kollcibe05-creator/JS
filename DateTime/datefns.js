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

//Global Standards: ISO  and UTC
  //````UTC````(Coordinated Universal Time)
// This is the primary time standard by which the world regulates clocks and time.  
// It is not a time zone itself, but the baseline for all of them.
  //````ISO 8601`````
// This is the international standard for the format of dates and TimeRanges.  
// In JSON, toISOString() produces a string like;
            // 2026-03-20T19:26:58.000Z
    // `T`: separates the date from the time        
    // `Z`: stands for `Zulu Time`(esentially UTC+0)

        //Other common times include
            // Alpha through Mike (A–M): These represent the time zones East of the Prime Meridian (UTC+1 to UTC+12). Note: The letter "J" (Juliet) is skipped to avoid confusion.       
            // November through Yankee (N–Y): These represent the time zones West of the Prime Meridian (UTC-1 to UTC-12).
            // Zulu (Z): The center point (UTC+0).
                    //Why "Zulu"? In the NATO phonetic alphabet, 'Z' is pronounced 'Zulu'. Since it sits at zero degrees longitude, it’s the "Zero" time. 


//You should almost always store and move data in ISO/UTC.
//It's unambigous, sortable and understood by every database on the planet.

//The Legacy: GMT (GreenWich Mean Time)
// Historically, this was the time standard based on the Royal Observatory in London.
// The Diff: Technically, GMT is a time zonedDate, whereas UTC is a time standard.
//For most programming purposes, they are interchangeable(UTC = GMT + 0)
// IN JS, ``````toGMTString()````` is actually deprecated(though it still works for compatibility), use ````toUTCString()```` instead

// Method / Term       Format Type                         Primary Use Case
// ISO 8601            YYYY-MM-DDTHH:mm:ss.sssZ            Storing in databases; API communication.
// UTC                 Standard (Baseline)                 Calculating time differences globally.


            //**********CIVIL TIMES********//
//These are the names we use in daily life. They are often defined by political boundaries rather than strict lines of longitude.
// Standard vs. Daylight Time
// Most regions shift between two "times" depending on the season:

// Standard Time: The "natural" time for that zone (e.g., EST - Eastern Standard Time, which is UTC-5).

// Daylight Time: The adjusted time for summer (e.g., EDT - Eastern Daylight Time, which is UTC-4).

            //**********IANA TIME ZONE DATABASE**********//
// In JavaScript, if you want to be precise, you use IANA identifiers. These are strings like America/New_York or Europe/London.
            //*******Offset Time*********//
// In programming, you will often see "times" expressed purely as a numerical offset from UTC.
// This is common in ISO strings when the time isn't in Zulu.
    // 2026-03-21T10:00:00+05:30 (This is India Standard Time, which is 5 hours and 30 minutes ahead of UTC).
    // 2026-03-21T10:00:00-08:00 (This is Pacific Standard Time, 8 hours behind UTC).


// Context                 Recommended "Time"              Example
// Databases/Logs          Zulu (UTC)2026-03-21T10:16:51   Z
// Scheduling an Event     IANA Location                   Africa/Nairobi
// Military/Aviation       Phonetic Letter                 1016Z (Zulu) or 1116A (Alpha)
// User Interface          Local Civil                     Time10:16 AM    

// When you use new `````Date().getTimezoneOffset()````, JavaScript returns the difference in minutes.
// If you are in New York (West), it returns a positive number (e.g., 300).
// If you are in Nairobi or Tokyo (East), it returns a negative number (e.g., -180 or -540).
// It’s a bit counter-intuitive, but in JS, the offset is "how many minutes do I add to local time to get to UTC?"


                            //****************************ISO/GMT/UTC****************************//

            //*********ISO(The Gold Standard)**********//

    //Advantages:
// Lexicographical Sorting: Because it goes from Largest unit to Smallest (Year -> Month -> Day), you can sort these strings alphabetically, and they will be in correct chronological order.
// Universal Support: Every modern language (Python, Java, JS) and every database (PostgreSQL, MongoDB) understands this format natively.
// Unambiguous: There is no "Is it Month/Day or Day/Month?" confusion. It is always YYYY-MM-DD.

    //Disadvantages: 
// It’s slightly longer (more bytes) than a raw number (timestamp), but the readability is usually worth it.

            //***********UTC (The Concept)********//

// UTC isn't a format; it’s the time itself.
// When people say "Store it as UTC," they usually mean "Store the ISO string with a Z at the end" or "Store the Unix Timestamp."

// Advantages: 
// It eliminates the "Daylight Savings" nightmare. UTC never jumps forward or backward.

// Disadvantages: 
// If you store only UTC, you lose the "context" of where the event happened. If a user schedules a 9:00 AM meeting in New York, and you only store the UTC equivalent, you might struggle if New York changes its Daylight Savings laws next year.


            //************GMT (The Legacy Format)*******//
// In JS, ````toGMTString()```` or ```toUTCString()```` gives you: Sat, 21 Mar 2026 10:34:15 GMT.

    // Advantages: 
// Very human-readable.

    // Disadvantages: 
// * Hard to Sort: "Friday" comes before "Monday" alphabetically, but not chronologically.
// Hard to Parse: Machines have a harder time "reading" this string compared to the rigid structure of ISO.
// Regional Variance: Different systems might format the day/month abbreviations differently.


// Feature         ISO 8601 (UTC)          GMT String          Unix Timestamp (ms) 
// Readability     High                    Very High           Low (Just a number)
// Sortability     Perfect                 Poor                Perfect
// JS Method       toISOString()           toUTCString()       getTime()
// Best For        APIs & Databases        Email Headers       High-speed Math


//For an app like Google calendar, you shouldn't store the UTC. 
//You'll have to store the Local Time + IANA TimeZone: 2026-03-21T09:00:00, Europe/London
// Storing for IANA is a two-part process. You don't just store a "time"; you store a Local Wall Clock Time and a Timezone Identifier.
// In JavaScript, there isn't a single toDateIANAString() method. Instead, we use the Intl (Internationalization) API to bridge the gap.

                                //**************How to Generate the IANA ID*********//

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(userTimeZone); // Output: "Africa/Nairobi"

//he browser looks at the Operating System's settings. If the user is using a VPN or has manually changed their clock, this value will follow the OS, not necessarily their physical GPS location.

        //`````How to Store "Future-Proof" Dates``````//
// If you are building a calendar or an alarm clock, you should not store just the UTC time.
// If the government changes Daylight Savings rules, your UTC timestamp will suddenly be an hour off.
// Store a "Composite" object or two separate columns in your database:
    //1.  Local Time: 2026-06-01T09:00:00 (Notice: No Z at the end!)
    //2.  IANA ID: Europe/London

                                //*********How to Format a Date for a Specific IANA Zone********//    
// If you have a UTC date but want to see what time that is in, say, Tokyo, you use the Intl.DateTimeFormat object.

const uTcDate = new Date("2026-03-21T10:48:38Z");

const tokyoTime = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tokyo',
  dateStyle: 'full',
  timeStyle: 'long'
}).format(uTcDate);

console.log(tokyoTime); 
// Output: Saturday, March 21, 2026 at 7:48:38 PM GMT+9

                    //```````````Why IANA is better than "Offsets"``````````//
// Offsets (+05:30) are static. IANA IDs are dynamic.
// Offset: If you store +01:00 for Paris, it’s only correct in the Winter. In the Summer, Paris moves to +02:00.
// IANA: If you store Europe/Paris, the computer looks up the internal "Timezone Database" (tzdb) and automatically knows whether to apply the Summer or Winter offset based on the specific date.


// The Exchange Flow

//      Direction            Format               Implementation
//      JS ->  Python        ISO 8601             date.toISOString() sends a Zulu string.
//      Python ->  DB        UTC Timestamp        Python's datetime.now(ZoneInfo("UTC")).
//      DB -> Python         UTC Object           Keep it "Aware" (not naive).
//      Python -> JS         ISO 8601             dt.isoformat() sends it back as a string.
//      JS -> User           Locale String        dt.toLocaleString() formats it for their screen.

                                            //********************Converting Zulu to GMT*******************//
// In JavaScript:
const zulu = "2026-03-21T11:15:00Z";
const date = new Date(zulu);
console.log(date.toUTCString()); // "Sat, 21 Mar 2026 11:15:00 GMT"
// In Python:
    // from datetime import datetime
    // dt = datetime.fromisoformat("2026-03-21T11:15:00+00:00")
    // print(dt.strftime('%a, %d %b %Y %H:%M:%S GMT'))

                                            //*********************Converting Zulu to IANA**************//
// In JavaScript (Using Intl):
const Zulu = "2026-03-21T11:15:00Z";
const Date = new Date(Zulu);

const tokyo = Date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
const ny = Date.toLocaleString("en-US", { timeZone: "America/New_York" });

console.log(tokyo); // "3/21/2026, 8:15:00 PM"
console.log(ny);    // "3/21/2025, 7:15:00 AM" (NY is behind)

// In Python (Using zoneinfo):
    // from datetime import datetime
    // from zoneinfo import ZoneInfo

    // utc_dt = datetime.fromisoformat("2026-03-21T11:15:00+00:00")
    // tokyo_dt = utc_dt.astimezone(ZoneInfo("Asia/Tokyo"))

    // print(tokyo_dt) # 2026-03-21 20:15:00+09:00








//New Intl syntax 

