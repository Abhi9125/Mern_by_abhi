// DOM manipulation (Document object model)

// 1. getElementById
// const heading = document.getElementById('heading');
// console.log(heading);
//2. getElementsByTagName
// const heading = document.getElementsByTagName('h1');
// 3. getElementsByClassName
// const heading = document.getElementsByClassName('heading');
// 4. querySelector
// const heading = document.querySelector('.heading');
// console.log(heading);
// 5. querySelectorAll
// const heading = document.querySelectorAll('.heading');
// console.log(heading);


// Traverse in Dom 
// 1. parentNode

// const child = document.querySelector(".child");
// const parent = child.parentNode;
// console.log(parent);

// 2.childNodes
// const parent = document.querySelector(".parent");
// console.log(parent.childNodes);

// 3.nextElementsibling
// const heading = document.querySelector(".child2");
// console.log(heading.nextElementSibling);

// 4.previousElemntsibling
// const heading = document.querySelector(".child2");
// console.log(heading.previousElementSibling);


// Manipulation 
// const heading = document.querySelector(".child1");
// heading.innerHTML = "Hello abhi who r u";
// heading.style.color = "red";
// heading.style.fontSize = "100px";
// // use for add a class name 
// heading.classList.add("first"); //class = "child1 first"
// //remove class name 
// heading.classList.remove("child1");

// // crete elements
// const para = document.createElement("p");
// para.innerHTML = "alsjdflkdsjflljdlsjjdlsjdlskjfljflkj";
// para.classList.add("para1");
// const parent = document.querySelector('.parent');
// // Add at the place
// // parent.appendChild(para);

// //Add a perticular place
// const child2 = document.querySelector('.child2'); 
// child2.insertAdjacentElement('afterend',para); 

// Project bulb swich on - off
const btn = document.querySelector('.btn');
const bulb = document.querySelector('.bulb');

btn.addEventListener('click', function() {
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src = './bulb-on.gif';
        btn.innerHTML = 'Trun Off';
        btn.style.color = 'red';
    }else{
        bulb.src = './bulb-off.gif';
        bulb.innerHTML = 'Turn On';
        btn.style.color = 'green';
    }
});
