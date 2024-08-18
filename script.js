const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const booklist = document.querySelector("#book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (title.value == "" && author.value == "" && year.value == "") {
        alert("Please fill the form ")
    } else {
        const newEle = document.createElement("section");

        const newTitle = document.createElement("div");
    
        newTitle.innerHTML = title.value;
        newEle.appendChild(newTitle);

        const newAuthor = document.createElement("div");
        newAuthor.innerHTML = author.value;
        newEle.appendChild(newAuthor);

        const newYear = document.createElement("div");
        newYear.innerHTML = year.value;
        newEle.appendChild(newYear);

        booklist.appendChild(newEle);

    }

})