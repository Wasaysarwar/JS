var name1= prompt("enter your name")
var s= name1; 
var urdu= +prompt("Enter Your Urdu Marks")  
var s1= urdu;
var english =+prompt("Enter Your English Marks")  
var s2 = english;
var math =+prompt("Enter Your Math Marks")  
var s3 = math;
var physics =+prompt("Enter Your Physics Marks")  
var s4 = physics;
var chemistry =+prompt("Enter Your Chemistry Marks")  
var s5 = chemistry;
var  t= s1 + s2 + s3 + s4 + s5;
var total = t;
var p =(total/500)*100;
var percentage = p;

// var gpa = 0;

if(percentage > 80 && percentage < 100){
    var gpa = 4
}else if(percentage > 70 && percentage < 80){
    var gpa = 3
}else if(percentage > 60 && percentage <70 ){
    var  gpa = 2
}

document.write(

    "<table border='3px'>"+
"<tr>"+
"<th>"+"Name"+"</th>"+
"<th>"+"Urdu"+"</th>"+
"<th>"+"English"+"</th>"+
"<th>"+"Math"+"</th>"+
"<th>"+"Pyhsics"+"</th>"+
"<th>"+"Chemistry"+"</th>"+
"<th>"+"Total Marks"+"</th>"+
"<th>"+"Percentage"+"</th>"+
"<th>"+"GPA"+"</th>"



+"</tr>"+
"<td>"+
name1
+"</td>"+
"<td>"+
  s1
+"</td>"+
"<td>"+
  s2
+"</td>"+
"<td>"+
  s3
+"</td>"+
"<td>"+
  s4
+"</td>"+
"<td>"+
  s5
+"</td>"+
"<td>"+
  total
+"</td>"+
"<td>"+
  percentage
+"</td>"+
"<td>"+
  gpa
+"</td>"


+"</table>"
)



// var userinp =prompt("enter city name");
// var arr= ['karachi', 'lahore', 'islamabad', 'peshwaer', 'quetta']
// var match = false


// for(var i=0; i<=arr.length;i++){
//     if (userinp==arr[i]){
//         match=true
//         alert("city found ")
//         break;
//     }
    
// }
