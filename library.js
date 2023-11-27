const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read == "yes") {
      return `${title} by ${author}, ${pages} pages, finished reading`
    } else {
      return `${title} by ${author}, ${pages} pages, not read yet`
    }
  }
}


function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayToPage() {
  let i = 0;
  while (i < myLibrary.length) {
    console.log(myLibrary[i].info());
    i++;
  }
}

addBookToLibrary('bla', 'blabla', 56, false);
addBookToLibrary('lab', 'lubdub', 79, true);

displayToPage();
// console.log(book1.info());