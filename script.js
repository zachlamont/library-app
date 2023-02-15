let bookArray = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.index = bookArray.length; // assign unique index to each book
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

const addNew = document.getElementById("add-new");
const submitModal = document.getElementById("submit-modal");
const modal = document.getElementById("modal");
const bookContainer = document.getElementById("book-container");

addNew.addEventListener("click", function () {
  modal.style.display = "block";
});

submitModal.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the form from submitting

  validateForm();
});

function addBook() {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("quantity").value;
  let isRead = document.getElementById("is-read").checked;

  let newBook = new Book(title, author, pages, isRead); //construct a new Book object
  bookArray.push(newBook);

  let bookDiv = document.createElement("div");
  let titleDiv = document.createElement("div");
  let authorDiv = document.createElement("div");
  let pagesDiv = document.createElement("div");
  let isReadDiv = document.createElement("div");

  bookDiv.classList.add("book");
  titleDiv.classList.add("item", "title");
  authorDiv.classList.add("item", "author");
  pagesDiv.classList.add("item", "pages");
  isReadDiv.classList.add("item", "isRead");

  if (isRead) {
    isReadDiv.classList.add("green");
  }

  titleDiv.innerText = title;
  authorDiv.innerText = author;
  pagesDiv.innerText = pages;
  isReadDiv.innerText = isRead ? "Read" : "Not Read";

  isReadDiv.addEventListener("click", () => {
    let book = bookArray[newBook.index]; //get the book based on index
    book.isRead = !book.isRead; // toggle the isRead property
    isReadDiv.innerText = book.isRead ? "Read" : "Not Read"; // update the text
    isReadDiv.classList.toggle("green"); //toggle the colour
  });

  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);
  bookDiv.appendChild(isReadDiv);

  bookContainer.appendChild(bookDiv);

  modal.style.display = "none"; //hide the modal
}

function validateForm() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const quantity = document.getElementById("quantity").value;

  if (author === "" || title === "" || quantity === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  if (quantity < 1) {
    alert("Number of pages must be at least 1.");
    return false;
  }

  addBook();
}
