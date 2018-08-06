var current = new Date();
document.writeln("<h1>String representations and valueOf</h1>");
document.writeln("toString: " + current.toString() + "<br/>ToLocaleString: " + current.toLocaleString() +
"<br/>toUTCString: " + current.toUTCString() + 
"<br/>valueOf: " + current.valueOf());

document.writeln("<h1>Get methods for local time zone</h1>");
document.writeln("getDate: " + current.getDate() +
    "<br/>getDay: " + current.getDay() +
    "<br/>getMonth: " + current.getMonth() +
    "<br/>getFullYear: " + current.getFullYear() +
    "<br/>getTime: " + current.getTime() +
    "<br/>getHours: " + current.getHours() +
    "<br/>getMinutes: " + current.getMinutes() +
    "<br/>getSeconds: " + current.getSeconds() +
    "<br/>getMilliseconds: " + current.getMilliseconds() +
    "<br/>getTimezoneOffset: " + current.getTimezoneOffset());
    
    document.writeln("<h1>Specifying arguments for a new Date</h1>");
    var anotherDate = new Date(2007, 2, 18, 1, 5, 0, 0);
    document.writeln("Date: " + anotherDate);
    document.writeln("<h1>Set methods for local time zone</h1>");
    anotherDate.setDate(31);
    anotherDate.setMonth(11);
    anotherDate.setFullYear(2007);
    anotherDate.setHours(23);
    anotherDate.setMinutes(59);
    anotherDate.setSeconds(59);
    document.writeln("Modified date: " + anotherDate);
