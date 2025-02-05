let popupbox = document.querySelector(".popupbox");
let overlypopup = document.querySelector(".overlypopup");

function popupopen() {
    popupbox.style.display = "block";
    overlypopup.style.display = "block";
}

function closepopup() {
    popupbox.style.display = "none";
    overlypopup.style.display = "none";
}

let container = document.getElementById("container");
let booktittle = document.getElementById("booktittle");
let bookauthor = document.getElementById("bookauthor");
let description = document.getElementById("description");
let addbook = document.getElementById("add-book");

addbook.addEventListener("click", function (event) {
    event.preventDefault(); 

    let div = document.createElement("div");
    div.setAttribute("class", "book-entry");
    div.innerHTML = `<h1>${booktittle.value}</h1>
                     <h3>${bookauthor.value}</h3>
                     <p>${description.value}</p>
                    <button type="button" onclick="this.parentElement.remove()">Remove</button>`
                     container.after(div); 

    
    booktittle.value = "";
    bookauthor.value = "";
    description.value = "";

    
    closepopup();
});
