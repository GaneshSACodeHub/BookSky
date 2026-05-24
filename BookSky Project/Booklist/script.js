// Selecting Popup Box
var popupoverlap = document.querySelector(".popup-overlapping");
var popupbox = document.querySelector(".popup-box");
var popupaddbutton = document.getElementById("add-popup");



popupaddbutton.addEventListener("click", function () {
    popupoverlap.style.display = "block"
    popupbox.style.display = "block"
})

var closepopup = document.getElementById("Bookcancel-button");
closepopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlap.style.display = "none"
    popupbox.style.display = "none"
})


// Selecting samplebox , Bookadd-button , Bookname-input , Author-input , Description-input

var samplebox = document.querySelector(".samplebox");
var bookaddbutton = document.getElementById("Bookadd-button");
var Booknameinput = document.getElementById("Bookname-input");
var authorinput = document.getElementById("Author-input");
var descriptioninput = document.getElementById("Description-input");

bookaddbutton.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "Book-samplebox");
    div.innerHTML = 
    `<h1>${Booknameinput.value}</h1>
    <h5>${authorinput.value}</h5>
    <p>${descriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    samplebox.append(div);
    popupoverlap.style.display = "none"
    popupbox.style.display = "none"

    Booknameinput.value = "";
    authorinput.value = "";
    descriptioninput.value = "";
});

function deletebook(event)
{
    event.target.parentElement.remove();
}
