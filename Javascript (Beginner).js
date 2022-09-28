var number = 5; // in-line comment

/* I am 
testing out
multi-line comments
as well as
making sure I understand the difference between
in-line comments
and multi-comments.
It makes sense (from what I'm grasping)! 
Basically, in-line comment can be used for a single line of text (such as a side note or comment for yourself or other coders to see).
When it comes to multi-line comments, these can be used throughout multiple lines instead of just one.
Just have to make sure you start with a slash-star 
and end it with star-slash to let the program know this is where your multi-line comments ends.
Such as Ln16 below. 
*/
number = 9;

var myName = "Dre"

myName = 8

let ourName = "TEST"; // The "let" is a new alternative to use instead of "var" but has a specific use. More information on that later!

const pi = 3.14 // The "const" is also a new alternative, that can never be changed. (Refer to Ln19-Ln21). Changing can result in error. More information on that later!

var a; // In the Debug Console below, it should show as "null" or "undefined" since we did not assign var "a" to "7" this early on.
var b = 2; // We are declaring "var b" as our variable, and "= 2" means we are assigning "2" to "b". The "=" is our "assign" key.
console.log(a)
a = 7; // We are able to just input "a = 7" without the "var" first since it was already declared in Ln27.

b = a; // We can also assign "b" to "a", connecting the variables together.

console.log(a) //In the Debug Console below, it should show as a "7" since we assigned "a" to "7"

//This is practice to get the hang of assigning variables with numbers, as well as making sure we end the appropiate line with a semicolon, as well as checking the console log to make sure the number was assigned correctly to the variable.
var c;
console.log(c)
var d = 20;

c = 25;
d = c;
console.log(c)


var e;
console.log(e)
var f = 29;

e = 30;

f = e;

console.log(e)


var g;
console.log(g)
var h = 40;

g = 35;

h = g;
console.log(g)

var i = 45; // We can declare a variable right away as well, without having to leave it as "undefined" or "null"


var j;
var k = 60;
console.log(j)

j = 55;
k = j; 
console.log(j)


var l;
var m = 65;
console.log(l)

l = 70;
m = l;
console.log(l)

var n;
var m = 80;
console.log(n)


n = 75;
m = n;
console.log(n)

var o;
var p = 90;
console.log(o)

o = 85;
p = o;
console.log(o)