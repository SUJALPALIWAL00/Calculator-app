let inputfield = document.getElementById("inputfield");

let allclear = document.getElementById("allclear");
let clear = document.getElementById("clear");
let nine = document.getElementById("nine");
let eight = document.getElementById("eight");
let seven = document.getElementById("seven");
let six = document.getElementById("six");
let five = document.getElementById("five");
let four = document.getElementById("four");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");

inputfield.value = "";

nine.addEventListener("click", function () {
    inputfield.value += "9";
})
eight.addEventListener("click", function () {
    inputfield.value += "8";
})
seven.addEventListener("click", function () {
    inputfield.value += "7";
})
six.addEventListener("click", function () {
    inputfield.value += "6";
})
five.addEventListener("click", function () {
    inputfield.value += "5";
})
four.addEventListener("click", function () {
    inputfield.value += "4";
})
three.addEventListener("click", function () {
    inputfield.value += "3";
})
two.addEventListener("click", function () {
    inputfield.value += "2";
})
one.addEventListener("click", function () {
    inputfield.value += "1";
})
zero.addEventListener("click", function () {
    inputfield.value += "0";
})
dot.addEventListener("click", function () {
    inputfield.value += ".";
})
plus.addEventListener("click", function () {
    inputfield.value += "+";
})
minus.addEventListener("click", function () {
    inputfield.value += "-";
})
multiply.addEventListener("click", function () {
    inputfield.value += "*";
})   
divide.addEventListener("click", function () {
    inputfield.value += "/";
})
equal.addEventListener("click", function () {
    inputfield.value = eval(inputfield.value);
})
allclear.addEventListener("click", function () {
    inputfield.value = "";
})
clear.addEventListener("click", function () {
    inputfield.value = inputfield.value.slice(0, -1);
})













