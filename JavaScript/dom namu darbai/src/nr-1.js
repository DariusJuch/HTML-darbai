                        // NR.1

// 1. Create a `div` element with the text "Hello, DOM!".
// 2. Add a class of `greeting` to the `div`.
// 3. Append the `div` to the body of the document.

const para = document.createElement("p");
let node = document.createTextNode("Hello, DOM!`");
para.appendChild(node)
let divElement = document.createElement("div");
divElement.appendChild(para)
divElement.setAttribute("class", "greeting" )
document.body.appendChild(divElement);

                        // NR.2


// 1. Select the `div` you created in Exercise 1.
// 2. Change its background color to lightblue.
// 3. Set its text color to darkblue and add some padding (e.g., `10px`).

const divBg = document.querySelector(".greeting")
console.log(divBg);
divBg.style = "background: #c2ebea; height: 10vh; color: #4984d1; padding: 2rem;";

                // **Exercise 3: Create a List**
// 1. Create an unordered list (`ul`) and append it to the body.
// 2. Using a loop, create and append 5 `li` elements to the `ul`.
// 3. Set the text of each `li` to "Item 1", "Item 2", ..., "Item 5".

const unorderListUl = document.createElement("ul");
// let liList;
for (let i = 0; i < 5; i++){
   const listli = document.createElement("li");
   listli.textContent = `Item ${1 + i}`;
   unorderListUl.appendChild(listli);
}

document.body.appendChild(unorderListUl)


                // ### **Exercise 4: Event Listener**
// 1. Add a button with the text "Click Me" to the body.
// 2. Add an event listener to the button that logs "Button Clicked!" to  the console when it is clicked

const btn = document.createElement("button");
let textBtn = document.createTextNode("Click Me");
btn.appendChild(textBtn);
document.body.appendChild(btn);

const clickButton = (e) => {
   console.log("Buttom Click!")
}
btn.addEventListener("click", clickButton);
                  
               // ### **Exercise 5: Delete an Element**
// 1. Add another button with the text "Remove Item".
// 2. Add an event listener to the button that removes the last `li` from the list created in Exercise 3.

const removeBtn = document.createElement("button");
let removeTextBtn = document.createTextNode("Remove Item");
removeBtn.appendChild(removeTextBtn);
document.body.appendChild(removeBtn);
unorderListUl.setAttribute("id", "myList" );


const removeButtom = (e) => {
   const ulList = document.getElementById("myList");
   if (ulList && ulList.lastElementChild) {
      ulList.removeChild(ulList.lastElementChild);
   } else {
      console.log("No items to remove");
   }
}
removeBtn.addEventListener("click", removeButtom );


               // ### **Exercise 6: Input and Output**
// 1. Add a text input (`input`) and a button with the text "Add Item" to the body.
// 2. When the button is clicked, get the value from the input field and add it as a new `li` to the list.
// 3. Clear the input field after adding the item.

const inputDiv = document.createElement("div")
const fieldInput = document.createElement("input");
fieldInput.setAttribute("type", "text");
fieldInput.setAttribute("placeholder", "Enter Item")
const addButtom = document.createElement("button");
const addetText = document.createTextNode("Add Item!");
addButtom.appendChild(addetText);
inputDiv.appendChild(fieldInput);
inputDiv.appendChild(addButtom);
document.body.appendChild(inputDiv);

let addItemInputed = (e) => {
const inputValue = fieldInput.value.trim();
if (inputValue) {
   const addListItem = document.createElement("li");
   addListItem.textContent = inputValue;
   unorderListUl.appendChild(addListItem);
   fieldInput.value = "";
} else {
   alert ("Please enter a Item!")
}
  
}
addButtom.addEventListener("click", addItemInputed);


            // ### **Exercise 7: Modify Existing Elements**
// 1. Create a `p` element with some placeholder text and append it to the body.
// 2. Add a button with the text "Change Text".
// 3. When the button is clicked, change the text of the `p` element to "The text has been changed!".

const articleSection = document.createElement("section");
const someText = document.createElement("p");
const placeholderText = document.createTextNode("Hello I'm Darius!");
const change = document.createElement("button");
const changeText = document.createTextNode("Change Text");
change.appendChild(changeText);
someText.appendChild(placeholderText);
articleSection.appendChild(someText);
articleSection.appendChild(change);
document.body.appendChild(articleSection);

let addNewText = (e) => {
      const newText = document.createTextNode("The text has been changed!");
      someText.textContent = "";
      someText.appendChild(newText);
}

change.addEventListener("click", addNewText);

            // ### **Exercise 8: Toggle Classes**
// 1. Add a `div` with some text and a class of `box`. Style `.box` in your CSS to have a visible border and some padding.
// 2. Add a button with the text "Toggle Highlight".
// 3. When the button is clicked, toggle a class of `highlight` on the `div`. Style `.highlight` to change the background color of the `div`.

const divWithText = document.createElement("div");
const textInDiv = document.createElement("h2");
const h2Text = document.createTextNode("Hello junior");
divWithText.setAttribute("class", "box");
// divWithText.style = "padding: 2rem; border: 2px solid black; margin: 2rem;";
textInDiv.appendChild(h2Text);
divWithText.appendChild(textInDiv);
document.body.appendChild(divWithText);

const buttomToChangeBg = document.createElement("button");
const buttomText = document.createTextNode("Toggle Highlight");
buttomToChangeBg.appendChild(buttomText);
divWithText.appendChild(buttomToChangeBg);

let setBg = (e) => {
   divWithText.setAttribute("class", "highlight");
   // divWithText.setAttribute("class", "highlight");
     
   
}

buttomToChangeBg.addEventListener("click", setBg);

            // ### **Exercise 9: Dynamic Table**
// 1. Create a button labeled "Add Row".
// 2. Create a table with a header row (e.g., "Name", "Age").
// 3. When the button is clicked, add a new row to the table with dummy data.


const divTable = document.createElement("div")
divTable.setAttribute("class", "my-table")
const addRow = document.createElement("button");
addRow.textContent = "Add Row";
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
const ageHeader = document.createElement("th");
nameHeader.textContent = "Name";
ageHeader.textContent = "Age"
headerRow.appendChild(nameHeader);
headerRow.appendChild(ageHeader);
table.appendChild(headerRow);
divTable.appendChild(table);
divTable.appendChild(addRow)
document.body.appendChild(divTable);




let addTableRow = (e) => {
    let newRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = "Darius";
    const ageCell = document.createElement("td");
    ageCell.textContent = "25";
    
    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    table.appendChild(newRow);
}

addRow.addEventListener("click", addTableRow);


            // ### **Exercise 10: Interactive Counter**
// 1. Add a `span` to display a number (starting at 0).
// 2. Add two buttons: "Increase" and "Decrease".
// 3. When "Increase" is clicked, increment the number in the `span`. When "Decrease" is clicked, decrement the number.