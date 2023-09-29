var arr = ["blueray" , "upchuk"];
var arr1 = ["zzz" , "burp"];

for (var i = 0; i<arr.length;i++){
    for(var j = 0; j<arr1.length;j++){
        document.write(arr[i]+arr1[j]+"<br>")
    }
}

var input = prompt("Enter palinwords ");

var str = prompt("Enter Palinwords");

var splitstr = str.split("").reverse().join("");


if(str===splitstr){
    document.write("Yes It's a Palinword")
}else{
    document.write("No It's Not a Palinword")
}





var str = prompt("Enter Word");

var splitstr = str.split("").reverse().join("");

if (str === splitstr){
    document.write(true)
}else{
    document.write(false)
}


for(var i = 1 ; i <= 5;i++){
   
    for(var j = 1; j <=i; j++){
        document.write(j)
    }
   document.write("<br>")
}




var age = 18;
alert (age);




var birthYear = 2005;
document.write("My birth year is " +birthYear);



var productTittle = 'T-shirts';
var visitorName = 'wasay';
var Quantity = "5 t-shirts"

document.write(visitorName,productTittle,Quantity)




var num2 = 5 ;
var num1 = 3;
var sum = num1 + num2;

document.write("sum of "+num1+" and "+num2+" is "+sum)
Q3
var intialValue=5;
document.write(intialValue );

document.write(++intialValue);
document.write(intialValue + 7);
document.write(--intialValue+7);

document.write(intialValue%2)



var NumberOfTicket = "5";
var movieTicket = "600";
var totalAmount = movieTicket * NumberOfTicket



document.write("Total cost to buy 5 tickets is "+totalAmount+"PKR")



document.write(4 * 2 + "<br>");
document.write(4 * 1 + "<br>" );
document.write(4 * 3 + "<br>");

document.write(4 * 4 + "<br>") ;
document.write(4 * 5 + "<br>");
document.write(4 * 6 + "<br>");+
document.write(4 * 7 + "<br>");
document.write(4 * 8 + "<br>");
document.write(4 * 9 + "<br>");
document.write(4 * 10+  "<br>");



var CelsiusTemperature ;

var Fahrenheit = 25;

var calculate = (Fahrenheit*9/5)+32;

document.write(calculate);

var Celsius = 70;

var calculate = (Celsius-32)*5/9;

document.write(calculate)




var priceOfItem1 = 650;
var priceOfItem2 = 100;

var ShippingCharge = 100;


document.write("Price Of Item 1 " +priceOfItem1 +"<br>");
document.write("Quantity of Item 1"+" "+ +priceOfItem1*3 +"<br>")

document.write("Price of Item 2"+" "+ +priceOfItem2 +"<br>")

document.write("Quantity Of Item 2" +" "+ +priceOfItem2*7 +"<br>")
document.write("Shipping Charges"+" "+ +ShippingCharge)
var quantityOfItem1 = priceOfItem1 * 3;
document.write("price of Item 1 for 3 quantity" +quantityOfItem1+"<br>")
var QuantityOfItem2 = priceOfItem2 * 7;

document.write("price of Item 2 for 7 quantity "+QuantityOfItem2 +"<br>")
var ShippingCharge;
document.write("Shipping charges is "+ShippingCharge+"<br>")
var totalCost = quantityOfItem1  + QuantityOfItem2  + ShippingCharge;
document.write("total coast is " +totalCost);



var totalMarks = 980;
document.write("Total Marks"+" "+ +totalMarks+"<br>")
var marksObtain = 804;

document.write("Marks Obtained"+" "+ +marksObtain+"<br>")
var percntage = (marksObtain/totalMarks)*100;
document.write("Percentage You get"+" "+  +percntage)




var RiyalToPkr = 28;
var usdtToPkr = 104.80;
var usdt = 10;

var Riyals = 25;    
var TotalCurrencyInPkr = ((usdt * usdtToPkr)+ (Riyals*RiyalToPkr))




var num = 30;


var result=(((num+5)*10)/2);

document.write(result);



var currentYear = 2023;
document.write("Current year is "+currentYear+"<br>");
var birthYear = 2005;

document.write("Birth year is "+birthYear+"<br>");
var age = currentYear - birthYear;


document.write("Your age is"+age)+"<br>";


var radius = 20;
document.write("The radius is "+" "+radius+"<br>")
var circumference = radius*2*3.142;
document.write("Circumference of the circle is: "+circumference+"<br>" );