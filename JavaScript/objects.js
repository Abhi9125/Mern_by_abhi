//-------------------- empty object----------------------------
var obj = {};
console.log(obj);

// ------------------Declare an objects ------------------------------------
// An object can be created with figure brackets {…} with an optional list of properties.
//  A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
var person ={
    name : "Abhishek",
    age : "23",
    phone : "9999999",
    ismale : true,
    "School Name" : "St. Xavier school"
}

console.log(person);

// ------------------dot Notation --> use to get key and value in object---------------------------------
console.log(person.name);
console.log(person.age);

// -----------------Square bracket --> also use to get key and value --------------------------------
console.log(person["phone"]);
console.log(person["school name"]);

// ----------------nesting of objects---------------------------------------------
var captainAmerica ={
    firstname : "Steve",
    Lastname : "Rogers",
    friends : ["Bucky","Tony Stark","Bruce Barner"],
    isAvenger : true,
    address:{
        state : "Manhatain",
        city : "New York",
        country : "USA"
    },
    sayhi : function(){
        console.log(`hello my name is ${captainAmerica.firstname}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[1]);
console.log(captainAmerica["friends"][0]);

// ------------------------nested object accesing ---------------------------
console.log(captainAmerica.address.state);
console.log(captainAmerica["address"]["city"]);


//---------------------- Travesing in object --------------------------------
// for in loop   -- > gives key 
for(let key in captainAmerica){
    console.log(key);  // only key print  output == fristname,Lastname, friend,...
    console.log(captainAmerica[key]);  // print value of the key
}


// -------------------------deleting a key from an object --------------------------
    delete captainAmerica.age;
    console.log(captainAmerica);


// -----------------------------Adding a key in object -----------------------------------------
captainAmerica.height = "180";
console.log(captainAmerica);


// ---------------------------------Difference b/w (.) DOT and [] square notation -----------------------------
var user = {
    name : "Sandeep",
    age : "30",
};
let abc = "age";
console.log(user.name);
console.log(user.abc); // output --> undefined
console.log(user["age"]);
console.log(user[abc]);


let fruit = prompt("Which fruit to buy?"); // value substitute
let bag = {
    [fruit] : 5, // the name of the property is taken from the variable fruit
};
console.log(bag.fruit);// output --> undefined 
console.log(bag[fruit]);  // output --> 5
console.log(bag["fruit"]); // output --> undefined
// Square brackets are much more powerful than dot notation. 
// They allow any property names and variables. 
// But they are also more cumbersome to write.


let fruitName = "apple";
//expression evaluate like string me jaise hoti h ${1+1}
let items = {
    [fruitName + "computers"]: 4
};
console.log(items);

// -----------------------------property vakue shorthand use for when key and value both are same -----------------
var computerbrand = "apple";
var processor = "M2 sillion";
var ram = "16GB";

var specification ={
    computerbrand : computerbrand, // computerbrand :"apple"
    processor : processor,
    ram : ram
};
console.log(specification.computerbrand);
console.log(specification["processor"]);

// Instead of name:name we can just write name, like this:
var specification ={
    computerbrand, // computerbrand :"apple"
    processor,
    ram
};
console.log(specification.computerbrand);



//-------------- Property names limitations---------------

// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:

// these properties are all right
var obj = {
  for: 1,
  let: 2,
  return: 3
};
console.log( obj.for + obj.let + obj.return );  // 6

// In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).
// Other types are automatically converted to strings.
// For instance, a number 0 becomes a string "0" when used as a property key:

var obj = {
  0: "test" // same as "0": "test"
};
// both alerts access the same property (the number 0 is converted to string "0")
console.log( obj["0"] ); // test
console.log( obj[0] ); // test (same property)


//-=--------------------------- Property existence test, “in” operator-------------
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. 
// There will be no error if the property doesn’t exist!
// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

var user = {

}; // empty object 
console.log(user.nosuchproperty == undefined); //output -- true 


// There’s also a special operator "in" for that.
// The syntax is: "key" in object
// For instance:
var user = { name: "John", age: 30 };
console.log( "age" in user ); // true, user.age exiss
console.log( "blabla" in user ); // false, user.blabl doesn't exist


var computerBrand= "apple";
var processor = "M2 sillicon";
var ram = "16GB"

var specification = {
    computerBrand,
    processor,
      ram,
      ssd: "512GB",
    abc:undefined
};

console.log(specification);
console.log("ram" in specification); //true
if (specification["ram"]){  // 16gb
    console.log(true);
};
console.log(specification.abc);


console.log("abc" in specification); //true
if (specification.abc) { //bcz undefned is a false value so isliye ye true nhi chala 
    console.log(true);
}
else {
    console.log(false);
}



// -------------------Ordered like an object----------------
// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.
var codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
console.log(codes); // 1,41,44,49
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }

// 2.
var person ={
    name : "Abhishek",
    age : "23",
    phone : "9999999",
    ismale : true,
    "School Name" : "St. Xavier school"
}

console.log(person);  // same as jaise object me input hai 
for(let key in person){
    console.log(key);
}



// Summary

// Objects are associative arrays with several special features.

// They store properties (key-value pairs), where:

// Property keys must be strings or symbols (usually strings).
// Values can be of any type.
// To access a property, we can use:

// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
// Additional operators:

// To delete a property: delete obj.prop.
// To check if a property with the given key exists: "key" in obj.
// To iterate over an object: for (let key in obj) loop.