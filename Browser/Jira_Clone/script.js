// call shortuniqueId function
var uid = new ShortUniqueId();

// Returns the first element that matches selectors.
const addBtn = document.querySelector(".add-btn");
// console.log(addBtn);
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".textarea-cont");

const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length-1]; // set by default balck color

const mainCont = document.querySelector(".main-cont");

// This will give all priority color in an array
const allPriorityColors = document.querySelectorAll(".priority-color");
console.log(allPriorityColors);

// toolBoxColors contains all color
const toolBoxColors = document.querySelectorAll(".toolbox-color-cont>*");
console.log(toolBoxColors);

// create [] that help to local storage. 
let ticketsArr = [];
var isModalPresent = false;

const removeBtn = document.querySelector(".fa-xmark");

// jb bhi koi event happen hota hai to wo eek object la ke deta hai jisme sari imfomation hoti hai about event.
addBtn.addEventListener("click", function (event) {
  // console.log(event);
  //    case 1 -> if modal is not present
  //              then display modal
  if (!isModalPresent) {
    // display modal
    // Agar hme CSS ko access krna ho to .style ka use krte hai.
    modalCont.style.display = "flex";
  }

  // case 2 -> if modal is Present
  //           then hide modal
  else if (isModalPresent) {
    // display none
    modalCont.style.display = "none";
  }
  // Toggel the modal. 
  isModalPresent = !isModalPresent;
});

// keydown is a event jb bhi hm koi key dbayege to ye chalega.
modalCont.addEventListener("keydown", function(e){
  console.log(e);
  if(e.key == "Shift"){
    //1. call createTicket()
    // textArea.value give the textarea content 
    console.log(textArea.value);
    createTicket(modalPriorityColor,textArea.value);

    // 2. alter dispaly and update isModalPresent
    modalCont.style.display = "none";
    isModalPresent = false;
    textArea.value = "";
  }
});

// create ticket function
function createTicket(ticketColor, data, ticketId){
  // generate uid 
  let id = ticketId || uid();
let ticketCont = document.createElement("div");
// Attribute use to give the class name to tag.
ticketCont.setAttribute("class", "ticket-cont");

ticketCont.innerHTML = 
`
<div class = "ticket-color ${ticketColor}"></div>
<div class = "ticket-id">#${id}</div>
<div class = "task-area">${data}</div>
<div class = "ticket-lock">
  <i class="fa-solid fa-lock"></i>
</div>
 ` ;

 mainCont.appendChild(ticketCont);

//  If ticket is generated for the frist time save it in local strage.
if(!ticketId){
  ticketsArr.push({
    ticketId : id,
    ticketColor,
    ticketTask : data,
  });
// agar hm bina stringify kiye object ko add karege local storage me to [object,object] show karege,
// so isliye hame stirngify krna pd rha hai.
  localStorage.setItem("tickets",JSON.stringify(ticketsArr));
}

// Call the function remove when click on the X 
handleRemove(ticketCont, id);
handlePriorityColor(ticketCont, id);
handleLock(ticketCont, id);
}

// getting data from localstorage, for re rendering of tickets.
// when re render the browser ticketsArr[] empty ho jayega then again hm localstorage se data get kr ke store krege.
if(localStorage.getItem("tickets")){
  ticketsArr = JSON.parse(localStorage.getItem("tickets"));
  ticketsArr.forEach(ticketObj => createTicket(ticketObj.ticketColor,
    ticketObj.ticketTask, ticketObj.ticketId));
}

// By this code we set the priority color  
allPriorityColors.forEach(colorElement => {
  colorElement.addEventListener("click", function(){
    allPriorityColors.forEach(element => {
      element.classList.remove("active");
    })
    colorElement.classList.add("active");
    modalPriorityColor = colorElement.classList[0];
  })
});

// getting ticket on the basis of ticketcolor on single click
for(let i = 0; i < toolBoxColors.length; i++){
  toolBoxColors[i].addEventListener("click",function(){
    let currColor = toolBoxColors[i].classList[0];
    let filteredTickets = ticketsArr.filter(ticketObj => 
      ticketObj.ticketColor == currColor);

      //  remove all the tickets 
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach(ticket => ticket.remove());

    // display filtered ticket/or display selected ticket
    filteredTickets.forEach(ticket => createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId));
  });

  // display all the ticket of all priority on double clicking any priorityColor 
  toolBoxColors[i].addEventListener("dblclick", function(){

    // remove ticket of specific color from ui
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach(ticket => ticket.remove());

    // display all tickets

    ticketsArr.forEach(ticket => createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId));
  });
}


// work for remove btn active and deactive 
// toggling the remove btn 
var isRemoveBtnAction = false;

removeBtn.addEventListener("click", function(){
  // case1 -- if removeBtn is not active then 
  // mark it active and do it's color red.
  if(!isRemoveBtnAction){
    removeBtn.style.color = "red";
  }

  // case 2 --> if removeBtn is active then make it inactive and make it's color white 
  else if(isRemoveBtnAction){
    removeBtn.style.color = "white";
  }

  // toggle the remove btn
  isRemoveBtnAction = !isRemoveBtnAction;
});

// Remove ticket after clicking on the ticket when X acctivated 
function handleRemove(ticketCont, id){
  ticketCont.addEventListener("click", function(){
    if(!isRemoveBtnAction) return;

    // remove ticket from ticketArr 
    let idx = getTicketIdx(id);
    ticketsArr.splice(idx, 1);

    // set or update the local storage after removing the ticket 
    localStorage.setItem("ticket",JSON.stringify(ticketsArr));

    // Remove from the UI/Frontend
    // remove is use to remove node(means ticketcont)
    ticketCont.remove();
  });
}

// this function return idx of the ticket present in ticketsArr
function getTicketIdx(id) {
  // findIndex() == return the idx when it meet the condition.
  let idx = ticketsArr.findIndex(ticketObj => {
    return ticketObj.ticketID == id;
  });
  return idx;
}

// change the priority color of the ticketColor in ticketCont when clicking on ticketCont color
function handlePriorityColor(ticketCont, id){
  let ticketColor = ticketCont.querySelector(".ticket-color");

  // addevent listener of type click on ticketColor
  ticketColor.addEventListener("click", function() { 
  
    let currTicketColor = ticketColor.classList[1];
    let currTicketColorIdx = colors.indexOf(currTicketColor);
    console.log(currTicketColorIdx);
    let newTicketColorIdx = (currTicketColorIdx + 1)% colors.length;
    let newTicketColor = colors[newTicketColorIdx];
    // Remove currcolor from classlist 
    ticketColor.classList.remove(currTicketColor);
    // Adding newColor in classlist
    ticketColor.classList.add(newTicketColor);

    // Update local storage with newColor 
    let idx = getTicketIdx(id);
    // Update the newticketcolor in ticketArr
    ticketsArr[idx].ticketColor = newTicketColor;
    // set in Local Storage 
    localStorage.setItem("tickets",Json.stringify(ticketsArr));
  });
}

// Unlock class -> fa-lock-open
const unlock = "fa-lock-open";
function handleLock(ticketCont, id){

  let ticketLock = ticketCont.querySelector(".ticket-lock");
  let lock = ticketLock.children[0].classList[1];
  let ticketTaskArea = ticketCont.querySelector(".task-area");

  ticketLock.addEventListener("click", function(){
    if(ticketLock.children[0].classList.contains(lock)){
      // remove lock class
      ticketLock.children[0].classList.remove(lock);
      // add unlock class
      ticketLock.children[0].classList.add(unlock);

      //make content editable 
      ticketTaskArea.setAttribute("contenteditable", "true");
    }

    else if(ticketLock.children[0].classList.contains(unlock)){
      // remove unlock class
      ticketLock.children[0].classList.remove(unlock);

      // Add lock class
      ticketLock.children[0].classList.add(lock);
      // remove unlock class
      // ticketLock.children[0].classList.remove(unlock);

      // Make content editable
      ticketTaskArea.setAttribute("contenteditable", "false");
    }

    // Update local storage 
    let idx = getTicketIdx(id);
    ticketsArr[idx].ticketTask = ticketTaskArea.textContent; // we can also use innerHTML at place textContent.
    localStorage.setItem("tickets",JSON.stringify(ticketsArr));
  });
}







