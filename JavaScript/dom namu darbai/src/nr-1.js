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
   unorderListUl .appendChild(listli);
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