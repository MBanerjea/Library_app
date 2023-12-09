const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // this.toggleRead = function () {
  //   this.read = !this.read;
  // }
  // this.info = function () {
  //   if (read == "yes") {
  //     return `${title} by ${author}, ${pages} pages, finished reading`
  //   } else {
  //     return `${title} by ${author}, ${pages} pages, not read yet`
  //   }
  // }
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
}

const addBook = document.querySelector("#addBook");
addBook.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
  newBookForm.style.display = "none";
})

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  // console.log(myLibrary);
  displayToPage();
}

function displayToPage() {
  const cards = document.querySelector(".cards");
  cards.textContent = "";
  let i = 0;
  while (i < myLibrary.length) {
    const newdiv = document.createElement("div");
    newdiv.dataset.num = i;

    let bookInLibrary = myLibrary[i];
    newdiv.innerHTML = `
    <p>${bookInLibrary.title}</p>
    <p>${bookInLibrary.author}</p>
    <p>${bookInLibrary.pages}</p>
    <p>Read: ${bookInLibrary.read ? "Read" : "Not Read Yet"}</p>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', function () {
      console.log(`result: ${bookInLibrary}`);
      console.log(newdiv.dataset.num);
      removeBook(newdiv.dataset.num);
      displayToPage();
    })

    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Read/Unread";
    toggleButton.addEventListener('click', function () {
      bookInLibrary.toggleRead();
      displayToPage();
    })

    cards.appendChild(newdiv);
    newdiv.appendChild(toggleButton);
    newdiv.appendChild(removeButton);

    // console.log(myLibrary[i]["title"]);
    i++;
  }
}


// displayToPage();
// console.log(book1.info());

const newBookButton = document.querySelector("#new_book");
newBookButton.addEventListener('click', (e) => showForm());

function showForm() {
  const newBookForm = document.querySelector("#newBookForm");
  newBookForm.style.display = "block";
  // newBookForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   console.log("i'm here");
  // })
}

function removeBook(identifier) {
  myLibrary.splice(identifier, 1);
}