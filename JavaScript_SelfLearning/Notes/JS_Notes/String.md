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
