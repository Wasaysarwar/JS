//1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.




//Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var userInput = prompt("Enter Your Favorite Mobile Phone Name");

// var length = userInput.length

// document.write("length of your Mobile Name is "+ userInput.length)

// var favoriteModel = prompt("What is your favorite mobile phone model?");

// / // Find the length of the user's input
// var inputLength = favoriteModel.length;

// // Display the length in the browser
// document.write("The length of your input is: " + inputLength);

//3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var input =  prompt("Enter Word That You Want To Find");
// var check = prompt("Enter indx you find");

// document.write(input.indexOf(check));


// var input = "wasaysarwarllsl"
// document.write("last index of l is"+input.lastIndexOf("l"));

// var str = "pakistani";
// document.write("The letter in third index in Pakistan is "+str[3])


// 6. Repeat Q1 using string concat() method.
// var firstName = prompt("Enter Your First Name");

// var lastName = prompt("Enter Your Last Name");

// document.write("Welcome on Our Site Mr."+firstName.concat(lastName));

// var hy = "hyberabad"
// var is= hy.replace("hyber" , "islam")

// document.write(is)

// var str = "Ali and Sami are best friends They play cricket and football"

// var change = str.replace(/and/g, "&")
// document.write(change)


// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replacedMessage = message.replace(/and/g, "&");

// document.write("Original message: " + message + "<br>");
// document.write("Replaced message: " + replacedMessage);


// var inputString = "capitalize the first letter of each word";


// var words = inputString.split(" ");

// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }

// var capitalizedString = words.join(" ");

// document.write(capitalizedString);


// var str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam repudiandae incidunt quos sint tempora nesciunt. Dolorem accusantium unde alias eum molestias, ea sunt ab tenetur laborum, adipisci magni. Odit!"

// var capitalize = str.split(" ");

// for(var i = 0; i<capitalize.length;i++){
//     capitalize[i] = capitalize[i].charAt(0).toUpperCase()+capitalize[i].slice(1)+" ";
// }
// var join = capitalize.join("")
// document.write(join)


// var str = "472";

// var num = parseInt(str);

// // Display the value and type in the browser
// document.write("Original string: " + str + "<br>");
// document.write("Converted number: " + num + "<br>");
// document.write("Type of converted number: " + typeof num);

//10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var input = prompt("Enter Word That you Want In Capital Letter");

// document.write(input.toUpperCase())

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var input = "javascript"

// var cap = (input[0].toUpperCase())
// document.write(cap+input.slice(1))


// var str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam repudiandae incidunt quos sint tempora nesciunt. Dolorem accusantium unde alias eum molestias, ea sunt ab tenetur laborum, adipisci magni. Odit!"

// var capitalize = str.split(" ");

// for(var i = 0; i<capitalize.length;i++){
//     capitalize[i] = capitalize[i].charAt(0).toUpperCase()+capitalize[i].slice(1)+" ";
// }
// var join = capitalize.join("")
// document.write(join)

// var str= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam repudiandae incidunt quos sint tempora nesciunt. Dolorem accusantium unde alias eum molestias, ea sunt ab tenetur laborum, adipisci magni. Odit!"

// var capitalize = str.split(" ");

// for ( var i = 0; i < capitalize.length; i++){
//     capitalize[i] = capitalize[i].charAt(0).toUpperCase()+capitalize[i].slice(1);
// }

// var join = capitalize.join(" ");
// document.write(join)

// var num = 43;

// var str = num.toString();

// document.write(typeof str)


// var num = 34.45;

// var str = num.toString().replace("." , "");

// document.write(str)

// 

// var input = "pakistani"
// document.write(input.indexOf(input))

// var userName = prompt("Enter Username");
// var character = ["@","!" , "#" , ".", ","];
// flag = false

// for(var i = 0; i<userName.length;i++){
//     if(userName.indexOf(character[i])!== -1){
//         flag = true
//     }
// }
// if(flag){
//     document.write("Please Enter A Valid Username");
// }
// else{
//     document.write("Your Username Is Successfully Pass")
// }
// var userInput = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut repellendus, sint laboriosam voluptatibus vel laudantium quos earum quis dolores minus totam velit error fuga sequi, at voluptatum sunt nobis!"

// var capitalize = userInput.split(" ");

// for(var i = 0; i<capitalize.length;i++){
//     capitalize[i] = capitalize[i].charAt(0).toUpperCase()+capitalize[i].slice(1)
// }
// var join = capitalize.join(" ");
// document.write(join);

// var str= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consectetur tempore distinctio dolor aperiam aliquid ratione error voluptatum officiis ex earum vitae, quibusdam perspiciatis voluptas recusandae non ipsam magnam et?";
// var flag = false

// for(var i = 0;i<str.length;i++){
//     if(str.slice(i,i+8) === "voluptas"){
//         flag = true
//         break;
//     }   
// }
// if(flag){
//     document.write("found")
// }else{
//     document.write("not found")
// }


// var input = prompt("Enter Word That You find");

// var str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consectetur tempore distinctio dolor aperiam aliquid ratione error voluptatum officiis ex earum vitae, quibusdam perspiciatis voluptas recusandae non ipsam magnam et?"

// var flag = false;

// for(var i = 0; i<str.length;i++){
//     if(str.slice(i,i+input.length)===input){
//         flag = true
//     }
// }
// if (flag ==true ){
//     document.write("found")
// }else{
//     document.write('Not Found')
// }

// document.write(str.lastIndexOf(str).charAt(str))
// document.write(a.charAt(a));

// var word = "Hello paksidfjnjnf efjnrnf";
// var lastChar = word[word.length - 1];
// document.write(lastChar); 


// var userName = prompt("Enter Username");

// var arr = ["@" , "!" , "," , "."];

// var flag = false
// for (var i = 0; i<userName.length;i++){
//     if(userName.indexOf(arr[i]) !== -1 ){
//         flag = true
//     }
// }
// if(flag){
//     document.write("please Enter A Valid Password")
// }else{
//     document.write("valid username")
// }

// var userInput = prompt("Enter what You Want From Our Bakery");

// var lower = userInput.toLowerCase();

// var arr = ["cake" , "apple pie", "apple" , "mango" , "chips" , "patties"];

// flag = false

// for(var i = 0; i<arr.length;i++){
//     if(lower==arr[i]){
//         flag = true
//     }
// }
// if(flag){
//     document.write(userInput+" is available at index "+arr.indexOf(lower)+" in our bakery");
// }else{
//     document.write("We are Sorry. "+userInput+" is not available in Our Bakery")
// }

// var Password = parseInt( prompt("Enter Password"));

// var length = Password.length;

// if (length >= 6) {
//  if()
// }


// var university = "university of karachi"
// var split = university.split(" ");
// for(var i = 0; i<university.length;i++){
//     document.write(university[i]+"<br>")
// }

// var user = prompt("Enter any number to known the last letter")
// var lastChar = user[user.length-1];
// document.write(lastChar)

// var user = prompt("Enter the word of occurance");
// var stringSearch = "the";

// var lower = user.toLowerCase().split(" ");

// var count =0;

// for(var i = 0;i<lower.length;i++){
//     if(lower[i]===stringSearch){
//       count++;
//     }
    
// }
// document.write(count)

// var user = prompt("Enter Password");

// var length = user.length

// if(length >= 6){
    
//     if(!isNaN(user.charAt(0))){
//         document.write("your Password is wrong")
//     }
//     else{
//         document.write("Valid Password")
//     }

// }else{
//     document.write("Password must be at least 6 characters long.")
// }






// var inputString = prompt("Enter a string:");

// // Check if the first character is not a number
// if (!isNaN(inputString.charAt(0))) {
//   document.write("The string starts with a number.");
// } else {
//   document.write("The string does not start with a number.");
// }


// var user = prompt("Enter Password");
// var length = user.length;

// if(length>=6){
//   if(!isNaN(user.charAt(0))){
//     document.write("Your Password Is Wrong")
//   }else{
//     document.write("Valid Password")
//   }
// }else{
//     document.write("Enter 6 digit password")
// }

