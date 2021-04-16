const allInputs = document.querySelectorAll(".all-inputs");
const nameInput = document.querySelector(".name");
const authorInput = document.querySelector(".author");
const statusDiv = document.querySelectorAll(".status-div");
const submitBtn = document.querySelector(".submit-btn");
const library = document.querySelector(".library");

submitBtn.addEventListener("click", addBook);
//   FOR STATUS BUTTON

function addBook(e) {
  //MAKING A DIV
  let libraryDiv = document.createElement("div");
  // ADD THIS DIV TO THE MAIN LIBRARY
  library.appendChild(libraryDiv);

  // FOR SOME STYLING
  libraryDiv.classList.add("library-div");

  // FOR NAME OF BOOK
  let Name = document.createElement("H4");
  Name.innerText = nameInput.value;
  //ADD TO DIV
  libraryDiv.appendChild(Name);
  console.log(libraryDiv);

  //FOR AUTHOR OF BOOK
  let Author = document.createElement("H4");
  Author.innerText = authorInput.value;
  //ADD TO DIV
  libraryDiv.appendChild(Author);
  console.log(libraryDiv);

  //TO CLEAR THE VALUE OF ALL INPUTS AFTER SUBMITING
}
