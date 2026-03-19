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

        
//MANIPULATION
console.log(date.toDateString()) //returns date details only, including day of the week
console.log(date.toLocaleString())
console.log(date.toLocaleDateString()) //returns date details only
console.log(date.toLocaleTimeString()) //returns date details only

