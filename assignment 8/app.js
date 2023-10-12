// 1. Write a program that displays current date and time in
// your browser.

// var today = new Date();
// document.write(today)

//Write a program that alerts the current month in words.
// For example December.

// var month = ["january" , "Feburary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

// var current = new Date();
// // document.write(current)
// var monthindex = current.getMonth();
// var month = month[monthindex];

// document.write(month);

// var week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];


// var now = new Date();
// var dayName = week[now.getDay()];
// document.write(dayName.slice(0,3));


// var week = ["sun" , "mon" , "Tue" , "wed" , "thu" , "fri" , "sat"];

// var now = new Date();
// var dayName = week[now.getDay()];
// document.write(dayName)


// var week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];


// var now = new Date();
// var dayName = week[now.getDay()];

// if(week[now.getDay()]=== "Friday"){
//     document.write("Its Fun Day")
// }else{
//     document.write("Its Normal Day  ")
// }

// var cuurentdate = new Date();

// var currentDay = cuurentdate.getDate();

// // document.write(currentDay);

// if(currentDay <= 16){
//     document.write("First Fiffteen Days")
// }
// else{
//     document.write("Last 15 Days Started")
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var todayDate = new Date();
// document.write(todayDate+"<br>");

// var janDate = todayDate.getTime();
// document.write(janDate+"<br>");

// var minutes = janDate/60;
// document.write(Math.floor(minutes))

//Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var time = new Date();
// time.getHours();
// // document.write(time);
// if (time < 12) {
//     alert("It's AM");
// }else{
//     alert("It's PM");
// }

// var dec = new Date("dec 31 2020");
// document.write(dec)


// var ramadan = new Date("june 18 2015");
// var currentDate = new Date();

// var time = currentDate - ramadan
// // document.write(ramadan.getTime());

// var second = Math.floor(time /1000);
// var minutes = Math.floor(second/60);
// var hours =Math.floor(minutes/60);
// var Days = Math.floor(hours/24);
// var year = Math.floor(Days/365);

// document.write(year + " years " + Days + " days " + hours  + " hours " + minutes  + " minutes " + second + " seconds"+"<br>");





// var ramadan = new Date("June 18, 2015");
// var currentDate = new Date();

// var timeDifference = currentDate - ramadan;

// var millisecondsInSecond = 1000;
// var secondsInMinute = 60;
// var minutesInHour = 60;
// var hoursInDay = 24;
// var daysInYear = 365.25; // Approximate number of days in a year, accounting for leap years

// var seconds = Math.floor(timeDifference / millisecondsInSecond);
// var minutes = Math.floor(seconds / secondsInMinute);
// var hours = Math.floor(minutes / minutesInHour);
// var days = Math.floor(hours / hoursInDay);
// var years = Math.floor(days / daysInYear);

// document.write(years + " years " + days + " days " + hours % hoursInDay + " hours " + minutes % minutesInHour + " minutes " + seconds % secondsInMinute + " seconds");


// var week = ["sun","mon" , "tues" , "wed" , "Thur" , "Fri" ,"Sat"];

// var aj = week[new Date().getDay()-1]
// // document.write(aj)

// if(aj === "Fri"){
//     document.write("It's Fun Day")
// }else{
//     document.write("It's Normal Day")
// }

var ab = new Date();
document.write(ab.getTimezoneOffset())