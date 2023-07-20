// call shortuniqueId function
var uid = new ShortUniqueId();

// Returns the first element that matches selectors.
const addBtn = document.querySelector(".add-btn");
// console.log(addBtn);
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".textarea-cont");

const colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length-1]; // Give bydefault balce color
const mainCont = document.querySelector(".main-cont");

// this will give all priority color in an array
const allPriorityColors = document.querySelectorAll(".priority-color");
console.log(allPriorityColors);

var isModalPresent = false;
// jb bhi koi event happen hota hai to wo eek object la ke deta hai jisme sari imfomation hoti hai about event.
addBtn.addEventListener("click", function (event) {
  console.log(event);
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
  // console.log(e);
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
function createTicket(ticketColor, data){
  // generate uid 
  let id = uid();
let ticketCont = document.createElement("div");
// Attribute use to give the class name to tag.
ticketCont.setAttribute("class", "ticket-cont");

ticketCont.innerHTML = 
`
<div class = "ticket-color ${ticketColor}"></div>
<div class = "ticket-id">#${id}</div>
<div class = "ticket-area">${data}</div>
<div class = "ticket-lock">
  <i class="fa-solid fa-lock"></i>
</div>
 ` ;

 mainCont.appendChild(ticketCont);
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




