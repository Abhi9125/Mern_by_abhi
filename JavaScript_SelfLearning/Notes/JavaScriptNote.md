# 1. Getting Started

## <u>1. What is js</u>

JavaScript is a programming language initially designed to interact with elements of web pages.
In web browsers, JavaScript consists of three main parts:

- ECMAScript provides the core functionality.
- The Document Object Model (DOM) provides interfaces for interacting with elements on web pages
- The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

## <u>2. print Hello word</u>

```javascript
console.log("Hello World);
```

## 3. <u>Add JavaScript by using script, async, defer</u>

### <u>Add script only script tag</u>

When the browser loads HTML and comes across a <script>...</script> tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts <script src="..."></script>: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

That leads to two important issues:

Scripts can’t see DOM elements below them, so they can’t add handlers etc.
If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:

```javascript
<p>...content before script...</p>

<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- This isn't visible until the script loads -->
<p>...content after script...</p>
```

There are some workarounds to that. For instance, we can put a script at the bottom of the page. Then it can see elements above it, and it doesn’t block the page content from showing:

```javascript
<body>
  ...all content is above the script...
  <script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
</body>
```

But this solution is far from perfect. For example, the browser notices the script (and can start downloading it) only after it downloaded the full HTML document. For long HTML documents, that may be a noticeable delay.

Such things are invisible for people using very fast connections, but many people in the world still have slow internet speeds and use a far-from-perfect mobile internet connection.

Luckily, there are two script attributes that solve the problem for us: defer and async

### <u>defer</u>

The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

Here’s the same example as above, but with defer:

```javascript
<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

In other words:

- Scripts with defer never block the page.
- Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

```javascript
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
</script>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<p>...content after scripts...</p>
```

- The page content shows up immediately.
- DOMContentLoaded event handler waits for the deferred script. It only triggers when the script is downloaded and executed.

> > Deferred scripts keep their relative order, just like regular scripts.

Let’s say, we have two deferred scripts: the long.js and then small.js:

```javascript
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
```

### <u>async</u>

async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded. As simple, as it can get, right?

Here’s an example similar to what we’ve seen with defer: two scripts long.js and small.js, but now with async instead of defer.

They don’t wait for each other. Whatever loads first (probably small.js) – runs first:

```javascript
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...content after scripts...</p>
```

- The page content shows up immediately: async doesn’t block it.
- DOMContentLoaded may happen both before and after async, no guarantees here.
- A smaller script small.js goes second, but probably loads before long.js, so small.js runs first. Although, it might be that long.js loads first, if cached, then it runs first. In other words, async scripts run in the “load-first” order.

> > Async scripts are great when we integrate an independent third-party script into the page: counters, ads and so on, as they don’t depend on our scripts, and our scripts shouldn’t wait for them:

` Note --> defer and async both use only for externale js file.`

## Summary

defer and async both not block the HTML page rendring.
But the main diffrence b/w both of them is:
In defer script load in backgroud when HTML page rendering and exicute in last of full HTML rendering.if in HTML have any DOM Listner that will exicute after the exicution script.
In async it also load in background but after loading it execute immeditly.if multiple HTML file have multiple script they excuted in async type.
[Readmore more about defer and async click on link](https://javascript.info/script-async-defer);

# 2. Fundamentals

## Syntex

### Statements

A statement is a code that declares a variable or instructs the JavaScript engine to do a task. A simple statement is terminated by a semicolon (;).
`(;) in js semicolon is optional`

````javascript
let message = "Welcome to JavaScript";
console.log(message);```
````

### Block

A block is a sequence of zero or more simple statements. A block is delimited by a pair of curly brackets {}. For example:

```javascript
if (window.localStorage) {
  console.log("The local storage is supported");
}
```

### Identifiers

Name of the variable, function , object, classes is know as identifers.It only contain (a-z),(A-Z),(\_),(0-9),($) never start with number(0-9)

### Comments

Comments are two type

- Single-line comments -- By using // This is a single - line comment
- Multiline cooments -- /_ This is a block comment _/

### Expressions

An expression is a piece of code that evaluates to a value. For example: 2 + 1

### Keywords & Reserved words

JavaScript defines a list of reserved keywords that have specific uses. Therefore, you cannot use the reserved keywords as identifiers or property names by rules.

### Summary

Use whitespace including carriage return, space, newline, and tab to format the code. The JavaScript engine ignores the whitespace.
Use a semicolon (;) to terminate a simple statement.
Use the curly braces ({}) to form a block that groups one or more simple statements.
A single-line comment starts with // followed by a text. A block comment begins with /_ and ends with _/. The JavaScript engine also ignores the comments.
Identifiers are names that you choose for variables, functions, classes, etc.
Do not use the reserved keywords and reserved words for identifiers.

## Variable

### Declare a variable

Variable names are case-sensitive. This means that the message and Message are different variables.

```javascript
var message; // declare
```

### Initialize a variable

```javascript
var message = "Hello"; // Inisialize
```

#### Undefined vs. undeclared variables

When a variable declare but not inisialize value it give undefine, But us a variable not declare it give refrenceError not defined

```javascript
var a;
console.log(a); // undefined
console.log(c); //Not defined
```

## Variable

> JavaScript has the primitive data types:

1. null
2. undefined
3. boolean
4. number
5. string
6. symbol – available from ES2015
7. bigint – available from ES2020

> Javascript has the Non - primitive datatype
> Non-primitive values are mutable data types. The value of an object can be changed after it gets created. like array, object.

### undefined type

The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.

```javascript
let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined
```

### null type

The null type is the second primitive data type that also has only one value null. For example:

```javascript
let obj = null;
console.log(typeof obj); // object
//in js null is equla to undefiend
console.log(null == undefined); // true
```

### Number

JavaScript uses the number type to represent both integer and floating-point numbers.

> To get the range of the number type, you use Number.MIN_VALUE and Number.MAX_VALUE. We can also use Infinity and -Infinity place MIN_VALUE and MAX_VALUE

> NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns NaN
> The NaN has two special characteristics:
> Any operation with NaN returns NaN.
> The NaN does not equal any value, including itself.

> JavaScript numeric separator
> The numeric separator allows you to create a visual separation between groups of digits by using underscores (\_) as separators.
> For example

```javascript
let num = 100;
let price = 12.5;
let discount = 0.05;
console.log(num);
console.log(discount);
console.log(Number.MIN_VALUE);
console.log(-Infinity); // same as MIN_VALUE
console.log(Infinity); // Same as MAX_VALUE
console.log(Number.MAX_VALUE);
// NaN -- Not a Number this indicate invalid number
console.log("a" / 2); //NaN bcz string not devided by number
console.log(NaN / NaN); // NaN
console.log(NaN == NaN); // false --> The NaN does not equal any value, including itself.

// numeric separator(_) --> allows you to create a visual separation between groups of digits by using underscores (_) as separators.
// it also increase readability
const budget = 10000000000;
const numericSeparator = 10_000_000_000; // incerase readibility
console.log(numericSeparator); //10000000000
```

### boolean

The boolean type has two literal values: true and false in lowercase.

```javascript
// Boolean Type -- return true and false value
let inProcess = true;
let complete = false;
console.log(typeof complete);

b = 30;
console.log(typeof b); // number

b = "hello";
console.log(typeof b); //string

b = true;
console.log(typeof b); //boolean

b = null;
console.log(typeof b); //object

console.log(typeof b); //undefined

// we can conver other types of variable into boolean true or false with the help of Boolean method Boolean().
console.log(Boolean("Hi")); //true
console.log(Boolean(" ")); //false
console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); //false
console.log(Boolean(0)); // true
console.log(NaN); //false
console.log(Boolean({ foo: 100 })); // true if object is non empty
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

let error = "An error occurred";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
let error = " ";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
```

> `Boolean() use  -- >` This table is important because some statements automatically cast a non-boolean value to a boolean value using the Boolean() function.
> For example, the if statement executes a block if a condition is true. If you use a non-boolean value, it’ll use the Boolean() function to implicitly cast that value to a boolean value.

```javascript
let error = "An error occurred";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
```

In this example, since the error variable holds a non-empty string, the if statement evaluates its value to true. Therefore, it executes the console.log(error) to output the error to the console.
If you change the value of the error variable to an empty string (""), you won’t see anything in the output because the if statement evaluates it as false:

```javascript
let error = " ";

if (error) {
  // read above for clearification
  console.log(error); // An error occurred
}
```

# String

String are asequence of character.

## String Topics

1. string
2. string length
3. Accessing
4. Concatenation
5. Converting
6. comparing Stirng
7. search()
8. indexOf()
9. lastIndexOf()
10. includes()
11. trim()
12. trimstart()
13. trimEnd()
14. split()
15. substring()
16. slice()
17. concat()
18. Template Literals
19. replace(replace by, want to replace);
20. toLowerCase()
21. toUpperCase()

```javascript
//1. string -- string are squence of character it writen in "" , '' , ``  backtricks -> use for access variable value in js
let greeting = "Hi";
let message = "Bye Bye";
// Bye<space>Bye
// 012  3    678

//2. Both are diffrent str, bcz in js string are immutable.
let str = "JavaScript";
str = str + " String";
console.log(str); // JavaScript String
// length of string
console.log(str.length);

//3.Accessing the character []
let s = "JavaScript";
console.log(s[0]); // J
// string in js is immutable
s[0] = "j"; // access and change the character
console.log(s); //JavaScript , Not javascript

// 4. Concatenation string
let name = "abhi";
let lastname = "singh";
let fullname = name + " " + lastname;
console.log(fullname);

/*5. Converting values to string--> to convert non string value to string we can use following 
1. String(n);
2. "" + n;
3. n.toString();
*/
let stat = 10;
console.log(typeof stat); //number
let converstat = stat.toString(); // we can also use ""+status
console.log(typeof converstat); // string

/*6. comparing String --> To compare two strings, you use comparison operators such as >, >=, <, <=, and == operators.
string are compare on its aynsii values
*/

let result = "a" < "b";
console.log(result); // true;

/*7. search() --> use to search and return first maching string index */
let str1 = "JavaScript Learning";
console.log(str1.search("S")); //4
console.log(str1.search("ar")); //13

/*8.  indexOf() --> Use to return the index number of a string or character if string or character present in it 
otherwise return -1*/

let str2 = "Focus on Goal";
console.log(str2.indexOf("o")); //1 give first occurance
console.log(str2.indexOf("cu")); // 2
console.log(str2.indexOf("zs")); //-1, not in str2

/*9. lastIndexOf() --> This is same as index of only difference is it return index of last occurance 
of string or character take the above example*/
console.log(str2.lastIndexOf("o")); // 10 --> return last index of 'o'
console.log(str2.lastIndexOf("zs")); // -1

/*10. includes() --> includes() check, is string contains a perticular substring or character
if cotain retrurn true otherwise return false*/
let email = "abhi.singh3333@gmail.com";
console.log(email.includes("@")); // true

/*11. trim() method --> removes all the starting whitespaces and ending whitespaces of a String
trimStart() --> remove whitespaces from beginning
trimEnd() --> remove whitespace from last.
*/
let str3 = "        Hello             World        ";
console.log(str3.length); // 39

console.log(str3.trim().length); //23

console.log(str3.trimStart()); //Hello             World

console.log(str3.trimEnd()); //        Hello             World
//No change in atual string
console.log(str3);

/*12. split() method --> Split a string into substrings using the specified separator and return them as an array.*/

let str4 = "JavaScript String split()";

// The following example uses the split() method to split the string into words:
let substrings = str4.split(" ");

console.log(substrings); //["JavaScript", "String", "split()"] remove space str4.

// Returning a limited number of substrings example
console.log(str4.split(" ", 2)); //['JavaScript', 'String']

/*13. substring() method --> same as slice string_name.substring(start,end) -> starting index is inclusive & end idx is exclusive*/
let str5 = "JavaScript SubString";

let subString = str5.substring(4, 9);
console.log(subString); //Scrip

// getting substring not from starting
console.log(str5.substring(5)); //cript SubString

/*14. slice() method --> string_name.slice(start,end) -> slice() return a substring, it have two parameter start, end. 
start -- include and end -- excude  
take above example 
*/
let slicestr = str5.slice(3, 7);
console.log(slicestr); //aScr

// prints starting to end
console.log(str5.slice(8)); //pt SubString

// If the end is negative, the slice() method treats it as str.length + end. For example:
console.log(str5.slice(0, -5)); //JavaScript SubS

/*16. concat() -->concat() method accepts a list of strings and returns a new string that contains the combined strings */
let str6 = "hi";
let concatMsg = str6.concat(" ", "Abhi");

console.log(concatMsg);

/*17. JavaScript Template Literals --> Use the backtick to create a string literal for string interpolation(means use varibale inside the string).*/

let firstName1 = "John";
let lastName1 = "Doe";

let greeting1 = `Hi ${firstName1}, ${lastName1}`;
console.log(greeting1); // Hi John, Doe

/*18.replace() --> This is use for replacing the string and character from a string.
let newStr = str.replace(substr, newSubstr);
*/
let str7 = "JS will, JS will rock you!";
let newStr7 = str.replace("JS", "JavaScript");

console.log(newStr7); //JavaScript will, JS will rock you!

/*19. replaceAll() --> ES2021 introduced the String replaceAll() method that returns a new string with all matches of a pattern replaced by a replacement:
 */
let str8 = "JS will, JS will, JS will rock you.";
let newStr8 = str.replaceAll("JS", "JavaScript");

console.log(newStr8); //JavaScript will, JavaScript will, JavaScript will rock you.

/*20. toLowerCase --> use for lower case 
toUpperCase --> use for upper case*/

let str9 = "javascript";
console.log(str9.toUpperCase()); //JAVASCRIPT
console.log(str9.toLowerCase()); //javascript
```
