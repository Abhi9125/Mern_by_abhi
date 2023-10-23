# DOM_MANIPULATION

## Learning in dom

- Seleting the element
- Css styling using Dom
- how to do style on multiple element with same id/class/name
  - Creating Element using Dom
  - Difference B/w append and appendChild
  - How to Modify the text
  - how to set/get/remove attribute in element
  - how to remove element from HTML
  - Difference b/w innerText/innerHTML/textContent
- Travesh the DOM
- parent node travesal -- parentNode/parentElement Traversal
- how to find grand parent
- child node traveral -- childNodes/firstChild/lastChild/children/fristElemnetChild/lastElementChild
- Sibling node Travesal -- previousElementSibling/nextElementSibling/previousSibling/nextSibling
- Dom EventListner
- Event Propagation
- Event Delegation

> HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1 id="main-heading">Favourite Movies Franchise</h1>
      <ul>
        <li class="list-items">
          <spam>Neo</spam>
          The Matrix
        </li>
        <li class="list-items">Star Wars</li>
        <li class="list-items">Harry Potter</li>
        <li class="list-items">Lord of the Ring</li>
        <li class="list-items">Marvel</li>
      </ul>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

```CSS
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    color: #E9B824;
    height: 60%;
    width: 50%;
    border: 4px solid #065741;
    border-radius: 5px;
    padding:10px;
}

.list-items{
    height: 50%;
    color:black;
    background-color: white;
    padding: 10px;
    border: 5px solid #93cadb;
    margin: 5px;
    list-style-type: none;
}
```

## Seleting the element

```JavaScript

// Dom Manipulation

// 1. Seleting the element

// getElementbyId
// const heading = document.getElementById("main-heading");
// console.log(heading);

// getElementByclassname
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

// getElementsByTagName
// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

/* querySelector() --> return first maching element in the html.
 */
// const listItems = document.querySelector("div");
// console.log(listItems);

/* querySelectorAll("div") --> this return all div tag that are present in html in an array;
 */
// const listItems = document.querySelectorAll("div");
// console.log(listItems); //NodeList(2) [div.container, div.container]
// Most of the developer use queryselecter, queryseleterAll, for selecting html elements

// --------------------------------------------------------------------------
/* 2. Css styling using Dom */

// const title = document.querySelector("#main-heading");

// // syntex for changing style using dom --> when we do style using dom it is happning as inline styling inline styling happing only on tag.
// title.style.color = "red";
// console.log(title);

// //Agar hame multiple element pr style krna hai to hame loop ka use krna hota hai

// const listItem = document.querySelectorAll(".list-items");

// console.log(listItem); // return an NodeList

// for (let i = 0; i < listItem.length; i++) {
//   listItem[i].style.fontSize = "2rem";
// }

// ---------------------------------------------------------------
/* 3. Creating Element using Dom
 */

// const ul = document.querySelector("ul");

// // create element
// const li = document.createElement("li");

// console.log(ul);

// // append element.
// ul.append(li);

// diffrence between append() and appendchild() --> append() is more faxible that add multiple element andd text at one go, but appenschild() add only one element in html

// // Modifying the text
// li.innerText = "X-Men";

// Modifying attributes & Classes

// // addAttribute
// li.setAttribute("id", "main-heading");
// //removeAttribute
// li.removeAttribute("id");
// // getAttribute
// const heading = document.getElementById("main-heading");
// console.log(heading.getAttribute("id"));

// Add Class Attribute
// li.classList.add("list-items");
// // remove class Attribute
// li.classList.remove("list-items");

// console.log(li.classList.contains("list-items")); //false

// // remove an element from HTML
// li.remove();

/* diffrence between innerHTML, textcontent, innerText
const firstListItem = document.querySelector(".list-items");

console.log(firstListItem.innerHTML);  /*<spam>Neo</spam>
                                         The Matrix*/
//console.log(firstListItem.textContent); /* Neo
// The Matrix*/
//console.log(firstListItem.innerText);   /*Neo The Matrix*/

// mostly use innerText for modifing content, innerHTML -- security issue, textContent -- give same content

/*5 Travesh the DOM */

// Parent node traversal
// const ul = document.querySelector("ul");
// const html = document.querySelector("html");

// //parentNode hamesh akuch na kuch return krta hai.
// console.log(ul.parentNode); //body
// console.log(html.parentNode); // document, Dom hi dege return me
// //parentElement hamesha search element ka parent element deta hai.
// console.log(ul.parentElement); //body
// console.log(html.parentElement); // null

// // find grandparent
// console.log(ul.parentNode.parentNode);

// console.log(ul.parentElement.parentElement);

/*Child Node Traversal*/

// const ul = document.querySelector("ul");

// children -- return all tag inside a tag, but childNode  -- return all thing inside the tag including text note .
// console.log(ul.childNodes);
// console.log(ul.firstChild); // text
// console.log(ul.lastChild); // text

// console.log(ul.childNodes[0]); //text

// // children
// console.log(ul.children);  //retunr all child of ul
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling node Traversal

const ul = document.querySelector("ul");

console.log(ul.previousElementSibling); //return previous sibling element
console.log(ul.nextElementSibling); // retrun nxt sibling element

console.log(ul.previousSibling); // return any thing that is privious to that element, like text, comment
console.log(ul.nextSibling); // return any thing that is next to that element, like text, comment
```

## DOM EventListner

> HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 style="text-align: center">Evet Listner</h1>
    <div class="container">
      <div class="div1">
        <h1>Example 1</h1>
        <button class="btn1">Enter</button>
      </div>
      <div class="div2">
        <h1>Example 2</h1>
        <button class="btn2">Enter</button>
      </div>
      <div class="div3">
        <h1>Example 3</h1>
        <button class="btn3">Enter</button>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

> CSS CODE

```CSS
*{
    margin: 0%;
    padding : 0%;
    box-sizing: border-box;
}
html, body{
    height: 100%;
    background-color:darkkhaki
}

.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}

.div1{
    height: 30%;
    width: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: lightslategrey;
    border: 5px, solid black;
}


.div2{
    height: 30%;
    width: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: lightslategrey;
    border: 5px, solid black;
}

.div3{
    height: 30%;
    width: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: lightslategrey;
    border: 5px, solid black;
}
```

> JS CODE

```js
// Add event listener on btn 2

const buttonTwo = document.querySelector(".btn2");

function alertBtn() {
  alert(
    "JavaScript use name JAvaScript bcz at that time java is very popullar language"
  );
}

// onclick and click are diffrent, onclick use n HTML and click use in js
buttonTwo.addEventListener("click", alertBtn);

const buttonThree = document.querySelector(".div3");

function overdiv3() {
  buttonThree.style.backgroundColor = "green";
}

buttonThree.addEventListener("mouseover", overdiv3);
```

## Event Propagation

- Capturing Phase: Events are captured from the root to the target element. handler argument for capturing is true.
- Target Phase: The event reaches the target element.
- Bubbling Phase: Events bubble up from the target element to the root. Handler argument for bubbling if false

> HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Propgation</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="outer">
        <div class="inner">
          <a href="" class="button"> click </a>
        </div>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

> CSS CODE

```CSS
*{
    margin: 0%;
    padding : 0%;
    box-sizing: border-box;
}
html, body{
    height: 100%;
}

.container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
}

.outer{
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    background-color: bisque;
}


.inner{
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    background-color: chartreuse;
}
```

> JS CODES

```JS
window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);
document.querySelector(".container").addEventListener(
  "click",
  function () {
    console.log("Container");
  },
  false
);
document.querySelector(".outer").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation(); // use for stop propagation, in capturing
    // window --> documant --> container --> outer
    console.log("Outer");
  },
  false
);

document.querySelector(".inner").addEventListener(
  "click",
  function () {
    console.log("Inner");
  },
  { once: true } // only single time run
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    // console.log(e); //window --> document --> container --> outer --> Innner --> e object
    // console.log(e); // in bubbling --> clicked --> Inner --> Outer --> Container --> Document --> Window
    // console.log(e.target); //give target button
    console.log((e.target.innerText = "Clicked!"));
  },
  false
);

// for anchor tag --> Jb hm link pe work krte hai to to ptabagation show nhi hota output me bcz link kisi ar jagah redirect kart hai.
// but agar hm preventdefault() use karte hai to show hone lagta hai.
document.querySelector(".button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    // console.log(e); //window --> document --> container --> outer --> Innner --> e object
    // console.log(e); // in bubbling --> clicked --> Inner --> Outer --> Container --> Document --> Window
    // console.log(e.target); //give target button
    console.log((e.target.innerText = "Clicked!"));
  },
  false
);
```

## EventDelegation

Event Delegation --> Event Delegation ka use hm tb karte hai jb hame kisi single parent se mutiple child ke liye
handler lagana ho

> HTML CODE

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=ul, initial-scale=1.0" />
    <title>Evnet Delegation</title>
  </head>
  <body>
    <ul id="category">
      <li id="laptop">laptop</li>
      <li id="mobile">Mobile</li>
      <li id="camera">Camera</li>
      <li id="fashion">Fashion</li>
    </ul>
    <script src="./script.js"></script>
  </body>
</html>
```

> CSS CODE

```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.category{
    width: 100%;
}
```

> JS CODE

```JS
document.querySelector("#category").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id"));
  //   window.location.href = "/" + e.target.getAttribute("id");
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.getAttribute("id");
  }
});
```
