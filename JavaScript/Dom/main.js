const createUser = (event) => {
    event.preventDefault();
    let price = +document.querySelector("#price").value;
    let count = +document.querySelector("#count").value;
    
    let finalPrice = +price * +count;
    showResult(finalPrice);
};

const showResult = (result) => {
    document.querySelector("#result").innerHTML = result;
}

document.querySelector("#productForm").addEventListener("submit", createUser)