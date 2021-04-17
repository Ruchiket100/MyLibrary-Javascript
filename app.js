const allInputs = document.querySelectorAll(".all-inputs");
const nameInput = document.querySelector(".name");
const authorInput = document.querySelector(".author");
const statusBtn = document.getElementsByClassName("staus-btn");
const btn = document.getElementsByTagName("button");
const submitBtn = document.querySelector(".submit-btn");
const library = document.querySelector(".library");

submitBtn.addEventListener("click", addBook);

function addBook(e) {
  //MAKING A DIV
  let libraryDiv = document.createElement("div");
  // ADD THIS DIV TO THE MAIN LIBRARY
  library.appendChild(libraryDiv);

  // FOR SOME STYLING
  libraryDiv.classList.add("library-div");

  // ADD DECORATIVE IMAGE
  let Image;
  Image = document.createElement("div");
  libraryDiv.appendChild(Image);
  Image.classList.add("Image");
  // FOR NAME OF BOOK
  let Name = document.createElement("H4");
  Name.innerText = nameInput.value;
  //ADD TO DIV
  libraryDiv.appendChild(Name);
  console.log(libraryDiv);
  Name.classList.add("nameInput");

  //FOR AUTHOR OF BOOK
  let Author = document.createElement("H4");
  Author.innerText = authorInput.value;
  //ADD TO DIV
  libraryDiv.appendChild(Author);
  Author.classList.add("authorInput");

  // MAKE STATUS BUTTONS
  //reading
  let Reading = document.createElement("button");
  Reading.innerText = "Reading";
  Reading.classList.toggle("Reading");
  libraryDiv.appendChild(Reading);
  //add function when click
  Reading.addEventListener("click", function () {
    WantList.classList.toggle("ReadingPressed");
    Completed.classList.toggle("ReadingPressed");
  });

  //Want-List
  let WantList = document.createElement("button");
  WantList.innerText = "Want-List";
  WantList.classList.toggle("Want-List");
  libraryDiv.appendChild(WantList);

  WantList.addEventListener("click", function () {
    Reading.classList.toggle("ReadingPressed");
    Completed.classList.toggle("ReadingPressed");
  });

  //Completed
  let Completed = document.createElement("button");
  Completed.innerText = "Completed";
  Completed.classList.toggle("Completed");
  libraryDiv.appendChild(Completed);

  Completed.addEventListener("click", function () {
    WantList.classList.toggle("ReadingPressed");
    Reading.classList.toggle("ReadingPressed");
  });

  //To Clear the value of input
  nameInput.value = "";
  authorInput.value = "";
}

// function Reading() {
//   console.log("You Read!!");
//   let tag = document.createElement("H5");
//   TimeRanges.innerText = "Reading";
//   tag.classList.toggle("Reading");
//   libraryDiv.appendChild(tag);
// }

//LOCAL STORAGE
localStorage.setItem("name", "jay");

//for getting
let x = localStorage.getItem("name");
console.log(x);
