//es5 = ecma script 5 
//es6 = ecma script 6
// Ecma script = core features of javascript(European computer manufacturers association)

/*Datatypes in Js
>>Strings : "10" , "AS" ,'me' ,'10' , `here`
>>Number : 100 , 230.4 ,4500.00 
>>Boolean : true false */

String And Number
/*
var a = "me"
var b = 100
var c = true
var d = "10"

typeof(a)
'string'

typeof(b)
'number'

typeof(c)
'boolean'

typeof(d)
'string'

a+b
30

a-b
-10

b-a
10

a*b
200

a/b
0.5

4%2 (gives remainder)
0
5%2
1
5%3
2
2%3
2
2%4
2

var a = "Hiii"
var b = "JavaScript"

a+b (only suitable in addition (+) not in other operators)
'HiiiJavaScript'

a-b
NaN (Not a number)

a*b
NaN

a/b
NaN

"hii"+10
'hii10'

10+"hii"
'10hii'

*/

/*Rules

string + string = string 
string + number = string 
number + string = string 
number + number = number 

--Interview Important Questions--
"10"+20+30
"1020"+30
'102030'

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30-1 (in order they are calculated)
102029
10+"20"+30-1
102029
10+20+"30"-1
3029


"10"-1 (string - number = number , by js rule they are subtracted)
9
20-"50" (number-string = number)
-30
20+"50" (addition results in connecting all these in one string)
'2050'

"10"*"20" 
200
"10"/"20"
0.5
"10a"/"20" (string with a character and a number cant be divided)
NaN

*/

BOOLEAN
/*
true
false 

true is equal to 1
false is equal to 0

true + true
2
true + false
1

10+true
11

10/false
Infinity

"10"+true
'10true'

"10"-true
9

var a = "10"
var b = "20"

a+b
'1020'

parseInt(a) (shows the value if it is a number)
10

var c = "a"
parseInt(c)
NaN

parseInt(a)+parseInt(b)
30

var a = "10.12"
var b = "20.11"
parseInt(a)+parseInt(b) -->took the number values at first
30

parseInt(a+b) --> not valid like this
10

parseFloat(a)+parseFloat(b)
30.229999999999997

var a = "10Ab"
var b = "Ab10"

parseInt(a) -->took the 1st number of the string
10

parseInt(b) -->there was no number but a string so it results to not a number
NaN */

ES6 = Ecma script 6
/*

var a = "10"
var b = "20"
Number(a)+Number(b) -->number adds all the values if it is a number
30

var a = "10.12"
var b = "20.11"
Number(a)+Number(b)
30.229999999999997

var a = "10Ab"
var b = "Ab10"

Number(a)+Number(b) --> number cant add strings 
NaN
Number(a)
NaN

*/
Difference b/w Number() And parseInt()
-->Parse Int takes only 1st values to add and if its a number it will add, if its a string it wont add

-->Number() adds all the numbers either float or Integer, but cant add a string.