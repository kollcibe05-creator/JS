//It is a *proposal*API  in the third stage  of TC39 process(close to FinalizationRegistry.)
// Temporal fixes problems: 
    //1. Providing easy-to-use APIs for date and time computations
    //2. First-class support for all time zones, including DST-safe arithmetic
    //3. Dealing only with objects representing fixed dates and times
    //4. Parsing a strictly specified string format
    //5. Supporting non-Gregorian calendars

//Temporal provides separate ECMAScript classes for date-only, time-only, and other scoped use cases.
//This makes code more readable and prevents bugs caused by incorrectly assuming 0, UTC, or the local time zone for values that are actually unknown.


        //*******FEATURES*********//
//The Temporal API follows a convention of using types whose names start with "Plain" for objects which do not have na associated time zone.
Temporal.plainDate
Temporal.plainTime
Temporal.plainDateTime
//Converting btwn such types and exact time types; 
Temporal.Instant 
Temporal.ZonedDateTime
    //can be ambiguous because of time zones and daylight saving time.

        //~~~~~Temporal.Now~~~~~~~~~//
Temporal.Now.Instant() //get the current system exact time
Temporal.Now.timeZoneId() //get the current system time zone
Temporal.Now.ZonedDateTimeISO() //get the current date and wall-clock time in the system time zone and ISO-8601 calendar.
Temporal.Now.plainDateISO() //get the current date in the system time zone and ISO-8601 calendar.
Temporal.Now.plainTimeISO() //get the current wall-clock time in the system time zone and ISO-8601 calendar.
Temporal.Now.plainDateTimeISO() //same as above, but return the DateTime in the ISO-8601 calendar.

        //~~~~~~~Temporal.Instant~~~~~~~//
//It represents a fixed point in time(called 'exact time') without regard to calendar or location. eg. JUly 20, 1969, at 20:17 UTC
// For a human-readable local calendar date or clock time, 
    // use a time zone and calendar identifier 
    // to obtain a Temporal.ZonedDateTime or 
    // Temporal.PlainDateTime.
Temporal.Instant.from("2020-01-01T00:00+05:30")    

//Temporal.Instant stores an integer count of nanoseconds since the Unix epoch of January 1, 1970 at 00:00 UTC, ignoring leap seconds.
instant = Temporal.Instant.from('2020-01-01T00:00+05:30'); 
instant.epochNanoseconds

// `Temporal.Instant` lacks properties that depend on time zone or calendar
instant.year; // => undefined
zdtTokyo.year; // => 2020

zdtTokyo = instant.toZonedDateTimeISO('Asia/Tokyo')
zdtTokyo.toPlainDate(); // => 2020-01-01

// Temporal.Instant also offers conversion properties and methods for seconds, milliseconds, or microseconds since epoch. 
// A Temporal.Instant can also be created from an ISO 8601 / RFC 3339 string like '2020-01-23T17:04:36.491865121-08:00' or '2020-01-24T01:04Z'.
// Like Unix time, Temporal.Instant ignores leap seconds.

// Temporal.Instant is the easiest way to interoperate between Temporal objects and code using Date.
// Because Date and Temporal.Instant both use a time-since-epoch data model, conversions between them are zero-parameter method calls that are lossless (except sub-millisecond precision is truncated when converting to Date).
instant = Temporal.Instant.from('2020-01-01T00:00:00.123456789+05:30');
                                                           // => 2019-12-31T18:30:00.123456789Z
date = new Date(instant.epochMilliseconds);
date.toISOString();                                        // => 2019-12-31T18:30:00.123Z

// Convert from `Date` to `Temporal.Instant`
sameInstant = date.toTemporalInstant();

// A Date that's been converted to a Temporal.Instant can be easily converted to a Temporal.ZonedDateTime object by providing a time zone. 
// From there, calendar and clock properties like day or hour are available. 
// Conversions to narrower types like Temporal.PlainDate or Temporal.PlainTime are also provided.

date = new Date(2019, 11, 31, 18, 30);  // => Tue Dec 31 2019 18:30:00 GMT-0800 (Pacific Standard Time)
instant = date.toTemporalInstant();     // => 2020-01-01T02:30:00Z
zonedDateTime = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
                                        // => 2019-12-31T18:30:00-08:00[America/Los_Angeles]
zonedDateTime.day;                      // => 31
dateOnly = zonedDateTime.toPlainDate(); // => 2019-12-31

// Bugs in Date=>Temporal conversions can be caused by picking the wrong time zone when converting from Temporal.Instant to Temporal.ZonedDateTime.
// For example, the example above constructs the Date using local-timezone parameters, so it uses the system time zone: Temporal.Now.timeZoneId().
// But if the Date had been initialized with a string like '2019-12-31', then getting the same date back in a Temporal.PlainDate would require using the 'UTC' time zone instead.


                //**********CONVERSION********//
Temporal.Instant.fromEpochMilliseconds(epochMilliseconds)
instant = Temporal.Instant.from('2019-03-30T00:45Z');
new Date(instant.epochMilliseconds); // => 2019-03-30T00:45:00.000Z

// If you need epoch seconds data:
epochSecs = Math.floor(instant.epochMillieconds / 1000); // => 1553906700

// ``instant.epochNanoseconds`` as it suggests needs to be passes to 
new Temporal.Instant()

// Then;
ns = instant.epochNanoseconds;
epochMicros = ns / 1000n + ((ns % 1000n) < 0n ? -1n : 0n);

// Converting a specific exact time to a calendar date / wall-clock time
timestamp = Temporal.Instant.fromEpochMilliseconds(1553993100_000);
timestamp.toZonedDateTimeISO('Europe/Berlin'); // => 2019-03-31T01:45:00+01:00[Europe/Berlin]
timestamp.toZonedDateTimeISO('UTC'); // => 2019-03-31T00:45:00+00:00[UTC]
timestamp.toZonedDateTimeISO('-08:00'); // => 2019-03-30T16:45:00-08:00[-08:00]

// What time was the Unix epoch (timestamp 0) in Bell Labs (Murray Hill, New Jersey, USA) in the Gregorian calendar?
epoch = Temporal.Instant.fromEpochMilliseconds(0);
epoch.toZonedDateTimeISO('America/New_York').withCalendar('gregory');
  // => 1969-12-31T19:00:00-05:00[America/New_York][u-ca=gregory]

// What time was the Unix epoch in Tokyo in the Japanese calendar?
zdt = epoch.toZonedDateTimeISO('Asia/Tokyo').withCalendar('japanese');
  // => 1970-01-01T09:00:00+09:00[Asia/Tokyo][u-ca=japanese]
console.log(zdt.eraYear, zdt.era);
  // => '45 showa'


                //~~~~~~~~~~~instant.subtract(duration: Temporal.Duration | object | string)~~~~~~~~~~//  
// The duration argument is an object with properties denoting a duration, such as { hours: 5, minutes: 30 }, or a string such as PT5H30M, or a Temporal.Duration object.
//  If duration is not a Temporal.Duration object, then it will be converted to one as if it were passed to Temporal.Duration.from().
// The years, months, weeks, and days fields of duration must be zero.
// Temporal.Instant is independent of time zones and calendars, and so years, months, weeks, and days may be different lengths depending on which calendar or time zone they are reckoned in. 
// To subtract those units, convert the Temporal.Instant to a Temporal.ZonedDateTime by specifying the desired calendar and time zone, subtract the duration, and then convert it back.
// Temporal.Instant representing this time an hour ago
Temporal.Now.instant().subtract({ hours: 1 });
oneHour = Temporal.Duration.from({ hours: 1 });
Temporal.Now.instant().subtract(oneHour);

                //~~~~~~~~~~~~instant.until(other: Temporal.Instant | string, options?: object)~~~~~~~~~//
// If other is not a Temporal.Instant object, then it will be converted to one as if it were passed to Temporal.Instant.from().
// The largestUnit option controls how the resulting duration is expressed. The returned Temporal.Duration object will not have any nonzero fields that are larger than the unit in largestUnit
// A difference of two hours will become 7200 seconds when largestUnit is "seconds", for example. However, a difference of 30 seconds will still be 30 seconds even if largestUnit is "hours".
// A value of 'auto' means 'second', unless smallestUnit is 'hour' or 'minute', in which case largestUnit is equal to smallestUnit.
//By default, the largest unit in the result is seconds.
//Weeks, months, years, and days are not allowed, unlike the difference methods of other Temporal types.
// This is because months and years can be different lengths depending on which month is meant, and whether the year is a leap year, which all depends on the start and end date of the difference. 
// You cannot determine the start and end date of a difference between Temporal.Instants, because Temporal.Instant has no time zone or calendar.
// In addition, weeks can be different lengths in different calendars, and days can be different lengths when the time zone has a daylight saving transition.
//To calculate the difference in days or larger units between two Temporal.Instants, first convert both (using the toZonedDateTimeISO or toZonedDateTime methods) to Temporal.ZonedDateTime objects in the same time zone and calendar. 
// You can round the result using the smallestUnit, roundingIncrement, and roundingMode options. These behave as in the Temporal.Duration.round() method. The default is to do no rounding.
//Take care when using milliseconds, microseconds, or nanoseconds as the largest unit. For some durations, the resulting value may overflow Number.MAX_SAFE_INTEGER and lose precision in its least significant digit(s).

startOfMoonMission = Temporal.Instant.from('1969-07-16T13:32:00Z');
endOfMoonMission = Temporal.Instant.from('1969-07-24T16:50:35Z');
missionLength = startOfMoonMission.until(endOfMoonMission, { largestUnit: 'hour' });
  // => PT195H18M35S
missionLength.toLocaleString();
  // example output: '195 hours 18 minutes 35 seconds'

// Rounding, for example if you don't care about the minutes and seconds
approxMissionLength = startOfMoonMission.until(endOfMoonMission, {
  largestUnit: 'hour',
  smallestUnit: 'hour'
});
  // => PT195H

// A billion (10^9) seconds since the epoch in different units
epoch = Temporal.Instant.fromEpochMilliseconds(0);
billion = Temporal.Instant.fromEpochMilliseconds(1e9);
epoch.until(billion);
  // => PT1000000000S
epoch.until(billion, { largestUnit: 'hour' });
  // => PT277777H46M40S
ns = epoch.until(billion, { largestUnit: 'nanosecond' });
  // => PT1000000000S
ns.add({ nanoseconds: 1 });
  // => PT1000000000S
  // (lost precision)

// Calculate the difference in years, eliminating the ambiguity by
// explicitly using the corresponding calendar date in UTC:
epoch.toZonedDateTimeISO('UTC').until(
  billion.toZonedDateTimeISO('UTC'),
  { largestUnit: 'year' }
);
  // => P31Y8M8DT1H46M40S

                //~~~~~~~~~~~~instant.since(other: Temporal.Instant | string, options?: object)~~~~~~~~~~//
//The following options are recognized:
    // 1. ``largestUnit (string):``` The largest unit of time to allow in the resulting Temporal.Duration object. 
    //                                 Valid values are 'auto', 'hour', 'minute', 'second', 'millisecond', 'microsecond', and 'nanosecond'. 
    //                                 The default is 'auto'.
    // 2. ``smallestUnit (string):``` The smallest unit of time to round to in the resulting Temporal.Duration object. 
    //                                 Valid values are the same as for largestUnit. 
    //                                 The default is 'nanosecond', i.e., no rounding.
    // 3. ``roundingIncrement (number):``` The granularity to round to, of the unit given by smallestUnit. 
    //                                     The default is 1.
    // 4. ``roundingMode (string):``` How to handle the remainder, if rounding. 
    //                                 Valid values are 'ceil', 'floor', 'expand', 'trunc', 'halfCeil', 'halfFloor', 'halfExpand', 'halfTrunc', and 'halfEven'. 
    //                                 The default is 'trunc', which truncates any remainder towards zero.
// This method does the same thing as the Temporal.Instant.prototype.until() method, but reversed. 
// The outcome of instant1.since(instant2) is the same as instant1.until(instant2).negated().
epoch = Temporal.Instant.fromEpochSeconds(0);
billion = Temporal.Instant.fromEpochSeconds(1e9);
billion.since(epoch); // => PT1000000000S


                //~~~~~~~~~~~~~~~~~~instant.round(roundTo: string | object) : Temporal.Instant~~~~~~~~~~~~~~~~~~~~//
// If a string is provided, the resulting Temporal.Instant object will be rounded to that unit. Valid values are 'hour', 'minute', 'second', 'millisecond', 'microsecond', and 'nanosecond'
// A string parameter is treated the same as an object whose smallestUnit property value is that string.
// If an object is passed, the following properties are recognized:
    // ``smallestUnit (required string):``` The unit to round to. 
    //                                     Valid values are 'hour', 'minute', 'second', 'millisecond', 'microsecond', and 'nanosecond'.
    // ```roundingIncrement (number):``` The granularity to round to, of the unit given by smallestUnit. 
    //                                 The default is 1.
    // ```roundingMode (string):``` How to handle the remainder. 
    //                             Valid values are 'ceil', 'floor', 'expand', 'trunc', 'halfCeil', 'halfFloor', 'halfExpand', 'halfTrunc', and 'halfEven'. 
    //                             The default is 'halfExpand'.
instant = Temporal.Instant.from('2019-03-30T02:45:59.999999999Z');

// Round to a particular unit
instant.round({ smallestUnit: 'second' }); // => 2019-03-30T02:46:00Z
// Round to an increment of a unit, e.g. an hour:
instant.round({ roundingIncrement: 60, smallestUnit: 'minute' });
  // => 2019-03-30T03:00:00Z
// Round to the same increment but round down instead:
instant.round({ roundingIncrement: 60, smallestUnit: 'minute', roundingMode: 'floor' });
  // => 2019-03-30T02:00:00Z


                //~~~~~~~~~~~~~~~~~~~~~instant.equals(other: Temporal.Instant | string) : boolean~~~~~~~~~~~~~~~~~~~~~~~~~~//  
// Parameters: other (Temporal.Instant or value convertible to one): Another exact time to compare.
// This function exists because it's not possible to compare using instant == other or instant === other, due to ambiguity in the primitive representation and between Temporal types.
// If you don't need to know the order in which the two times occur, then this function may be less typing and more efficient than Temporal.Instant.compare.
//If other is not a Temporal.Instant object, then it will be converted to one as if it were passed to Temporal.Instant.from().
one = Temporal.Instant.fromEpochMilliseconds(1.0e12);
two = Temporal.Instant.fromEpochMilliseconds(1.1e12);
one.equals(two); // => false
one.equals(one); // => true

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~instant.toString(options?: object) : string~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // ```timeZone (string or Temporal.ZonedDateTime)```: the time zone to express instant in, as a string identifier, or a Temporal.
    //                                                     ZonedDateTime object whose time zone will be used. 
    //                                                     The default is to use UTC.
    // ```fractionalSecondDigits (number or string):``` How many digits to print after the decimal point in the output string. 
    //                                                 Valid values are 'auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9. 
    //                                                 The default is 'auto'.
    // ```smallestUnit (string):``` The smallest unit of time to include in the output string. 
    //                             This option overrides fractionalSecondDigits if both are given. 
    //                             Valid values are 'minute', 'second', 'millisecond', 'microsecond', and 'nanosecond'.
    // ```roundingMode (string):```How to handle the remainder. Valid values are 'ceil', 'floor', 'expand', 'trunc', 'halfCeil', 'halfFloor', 'halfExpand', 'halfTrunc', and 'halfEven'. 
    //                             The default is 'trunc'.
// Returns: a string in the ISO 8601 date format representing instant.                                
// This method overrides the Object.prototype.toString() method and provides a convenient string representation of instant. 
// The string can be passed to Temporal.Instant.from() to create a new Temporal.Instant object.
// The output precision can be controlled with the fractionalSecondDigits or smallestUnit option.
//  If no options are given, the default is fractionalSecondDigits: 'auto', which omits trailing zeroes after the decimal point.
// The value is truncated to fit the requested precision, unless a different rounding mode is given with the roundingMode option, as in Temporal.ZonedDateTime.round(). Note that rounding may change the value of other units as well.

instant = Temporal.Instant.fromEpochMilliseconds(1574074321816);
instant.toString(); // => '2019-11-18T10:52:01.816Z'
instant.toString({ timeZone: 'UTC' });
// => '2019-11-18T10:52:01.816+00:00'
instant.toString({ timeZone: 'Asia/Seoul' });
// => '2019-11-18T19:52:01.816+09:00'

instant.toString({ smallestUnit: 'minute' });
// => '2019-11-18T10:52Z'
instant.toString({ fractionalSecondDigits: 0 });
// => '2019-11-18T10:52:01Z'
instant.toString({ fractionalSecondDigits: 4 });
// => '2019-11-18T10:52:01.8160Z'
instant.toString({ smallestUnit: 'second', roundingMode: 'halfExpand' });
// => '2019-11-18T10:52:02Z'

                //~~~~~~~~~~~~~~~~~~~~~~~~~~instant.toLocaleString(locales?: string | array<string>, options?: object) : string~~~~~~~~~~~~~~~~~~~~~~~~//
// Parameters:
//         1. ```locales (optional string or array of strings):``` A string with a BCP 47 language tag with an optional Unicode extension key, or an array of such strings.
//         2. ```options (optional object):``` An object with properties influencing the formatting.

// Returns: a language-sensitive representation of instant.
// This method overrides Object.prototype.toLocaleString() to provide a human-readable, language-sensitive representation of instant.
// The locales and options arguments are the same as in the constructor to Intl.DateTimeFormat.
// Because Temporal.Instant does not carry a time zone, the time zone used for the output will be the timeZone property of options, if present; and otherwise, 
        // the current time zone from the environment, which is usually the system's time zone.
// This is identical to how the time zone is determined in legacy Date's toLocaleString method.
// NOTE: Be careful when calling this method in a server environment, where the server's time zone may be set to UTC.

instant = Temporal.Instant.from('2019-11-18T11:00:00.000Z');
instant.toLocaleString(); // example output: '2019-11-18, 3:00:00 a.m.'
instant.toLocaleString('de-DE'); // example output: '18.11.2019, 03:00:00'
instant.toLocaleString('de-DE', {
  timeZone: 'Europe/Berlin',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'long'
}); // => '18.11.2019, 12:00 Mitteleuropäische Normalzeit'
instant.toLocaleString('en-US-u-nu-fullwide-hc-h12', {
  timeZone: 'Asia/Kolkata'
}); // => '１１/１８/２０１９, ４:３０:００ PM'


                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~instant.toJSON() : string~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Returns: a string in the ISO 8601 date format representing instant, in the UTC time zone.
// This method is like instant.toString() but always produces a string in UTC time.
// It is usually not called directly, but it can be called automatically by JSON.stringify().
// The reverse operation, recovering a Temporal.Instant object from a string, is Temporal.Instant.from(), but it cannot be called automatically by JSON.parse()
// f you need to rebuild a Temporal.Instant object from a JSON string, then you need to know the names of the keys that should be interpreted as Temporal.Instants.
//  In that case you can build a custom "reviver" function for your use case.


const meeting = {
  id: 355,
  name: 'Budget review',
  location: 'https://meet.jit.si/ObjectiveTomatoesJokeSurely',
  startInstant: Temporal.Instant.from('2020-03-30T15:00-04:00[America/New_York]'),
  endInstant: Temporal.Instant.from('2020-03-30T16:00-04:00[America/New_York]')
};
const str = JSON.stringify(meeting, null, 2);
console.log(str);
// =>
// {
//   "id": 355,
//   "name": "Budget review",
//   "location": "https://meet.jit.si/ObjectiveTomatoesJokeSurely",
//   "startInstant": "2020-03-30T19:00Z",
//   "endInstant": "2020-03-30T20:00Z"
// }

// To rebuild from the string:
function reviver(key, value) {
  if (key.endsWith('Instant')) return Temporal.Instant.from(value);
  return value;
}
JSON.parse(str, reviver);

                //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~instant.valueOf()~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// This method overrides Object.prototype.valueOf() and always throws an exception.
// This is because it's not possible to compare Temporal.Instant objects with the relational operators <, <=, >, or >=. 
// Use Temporal.Instant.compare() for this, or instant.equals() for equality.










