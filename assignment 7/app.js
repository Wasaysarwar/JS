// var today = new Date();
// var days = ["sun", "monday" , "Tuesday" , "wednesday" , "Thusday" ,"friday" , "saturday"];

// document.write(days[today.getDay()]+"<br>")

// document.write(today.getDate()+"<br>")

// document.write(today.getFullYear()+"<br>")

// document.write(today.getHours()+"<br>")

// document.write(today.getMinutes()+"<br>")

// var dob = prompt("Enter Your Birth Date");

// var BirthDate = new Date(dob);

// var currentYear = new Date();

// var age = currentYear.getFullYear() - BirthDate.getFullYear();

// document.write(age);

// User-provided birthdate as a string (format: yyyy-mm-dd)
// const birthdateString = prompt("Enter Your Age");
// const birthdate = new Date(birthdateString);
// const currentDate = new Date();

// // Calculate the difference in milliseconds
// const timeDifference = currentDate - birthdate;

// // Calculate seconds, minutes, hours, days, and years
// const seconds = Math.floor(timeDifference / 1000);
// const minutes = Math.floor(seconds / 60);
// const hours = Math.floor(minutes / 60);
// const days = Math.floor(hours / 24);
// const years = Math.floor(days / 365);



// document.write(`You are ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.`);


// var dobstring = prompt("Enter Your Date Of Birth");
// var dateOfBirth = new Date(dobstring);
// var currentDate = new Date();


// var age = currentDate.getFullYear() - dateOfBirth.getFullYear()

// var age1 = currentDate - dateOfBirth
// // document.write(age1)


// var seconds = Math.floor(age1 / 1000);
// var minutes = Math.floor(seconds / 60);
// var hours = Math.floor(minutes / 60);
// var days = Math.floor(hours / 24);
// var years = Math.floor(days / 365);


// document.write("You are "+years+" old"+"<br>" ,"Days from your birth "+ days+"<br>" ,"hours from your birth "+ hours+"<br>" ,"Minutes from your Birth"+ minutes+"<br>" ,"Seconds from your birth"+ seconds)


// var dob = prompt("Enter Your Date Of Birth");
// var dobDate = new Date(dob);
// var currentDate = new Date();

// var age = currentDate.getFullYear() - dobDate.getFullYear();
// // document.write(age)

// var age1 = currentDate - dobDate;

// var seconds = Math.floor(age1/1000);
// var minutes = Math.floor(seconds/60);
// var hours = Math.floor(minutes/60);
// var days = Math.floor(hours/24);
// var years = Math.floor(days/365);

// document.write("You are "+years+" old "+"Days From Your Birth is "+days+ " Hours From Your Birth "+hours+" Minutes From your Birth "+minutes+" Seconds From Your Birth "+seconds);


// var str = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi itaque rerum perspiciatis a temporibus dolorum numquam mollitia! Perspiciatis dolorum delectus consectetur, magni quibusdam officiis deserunt fuga quod dignissimos similique!";
// var capitalize = str.split(" ");

// for(var i = 0; i<capitalize.length;i++){
//     capitalize[i] = capitalize[i].charAt(0).toUpperCase()+capitalize[i].slice(1);

// }
// var join = capitalize.join(" ");
// document.write(join)