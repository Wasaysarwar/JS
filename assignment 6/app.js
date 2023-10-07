// var num = Number (prompt("Enter Numer"));

// document.write(num)

// var num = +prompt("Enter Number");
// document.write("The Given Number Is"+num+"<br>")

// var roundOff = Math.round(num);
// document.write("Round Off " +roundOff+"<br>");

// var floor = Math.floor(num);
// document.write("Floor " +floor+"<br>");

// var ceil = Math.ceil(num);
// document.write("Ceil Value " +ceil);

// var num = +prompt("Enter Number TO Verify The Absolute Number");

// var ab = Math.abs(num);
// document.write("Absoulte value is "+ab);

// var dice = Math.random()*6;
// var value = Math.round(dice);
// document.write("Random Dice Value "+value);

// var random = Math.random()*100;
// var round = Math.round(random);
// document.write("The Random Value Is "+round);

// var weight = Number(prompt("Enter Your Weight"));

// document.write("Your Weight Is "+weight+" Kilogram")

// var num = Math.random()*10;
// var value = Math.round(num)
// var user =  +prompt("Guess Number");

// if(user == value){
//     document.write("Win");
// }else{
//     document.write("lose")
// }


// var password = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()><?/");
// var create = Math.random(password)*password;
// // var round = Math.round(create);
// document.write("Your Password Is "+create);

// function generateRandomPassword(length) {
//     const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//     let password = "";
  
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       password += charset.charAt(randomIndex);
//     }
  
//     return password;
//   }
  
//   const password = generateRandomPassword(10);
//   document.write(password);


// const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
// let password = "";

// for (let i = 0; i < 10; i++) {
//   const randomIndex = Math.floor(Math.random() * charset.length);
//   password += charset.charAt(randomIndex);
// }

// document.write(password);

// var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
// var password = "";

// for(var i = 0; i<10;i++){
//     var randomIndex = Math.floor(Math.random()*charset.length);
//     password +=charset.charAt(randomIndex); 
// }
// document.write(password)


// var user = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eveniet! Provident nostrum, ipsam est dicta et consequuntur molestias eius doloremque quas cumque perferendis facilis in eum eligendi deleniti magni inventore?";
// var capitalize = user.split(" ");

// for(var i =0;i<capitalize.length;i++){
//     capitalize[i] = capitalize[i].charAt(0).toUpperCase()+ capitalize[i].slice(1);
// }
// var join = capitalize.join(" ");
// document.write(join)

var arr = [1 , 2 , 3];
document.write(arr.reverse().join(""))