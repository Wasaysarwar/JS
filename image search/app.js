const accessKey = "MDg5mP4kzkGW-9NtyqN_Qnv9hmOuKoq6_ixFQcM3NxA";

const searchValue = document.getElementById("search-input");
const searchBtn = document.getElementById("searchBtn"); // Fixed the ID selector
// const show = document.querySelector(".show");
const form = document.getElementById("form");
const mainContainer = document.getElementById("main");
const showMore = document.getElementById("showmore");

let inputData = "";
let page = 1;

searchBtn.addEventListener("click", () => {
  searchImg();
});

async function searchImg() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  inputData = searchValue.value;
  // console.log(`search ka result ${inputData}`);

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  console.log("data ka result", results);

  results.map((result) => {
    mainContainer.innerHTML += `<div class="search-result">
    <img class="abx" src="${result.urls.raw}" alt="walk">
    <p>${result.alt_description}
    </p>
    
</div>`;
  });
  page++;
}

showmore.addEventListener("click", () => {
  searchImg();
});

// async function searchImages() {
//   inputData = inputEl.value; // Corrected variable name
//   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   const results = data.results;

//   if (page === 1) {
//     searchResults.innerHTML = "";
//   }

//   results.map((result) => {
//     const imageWrapper = document.createElement("div");
//     imageWrapper.classList.add("search-result");
//     const image = document.createElement("img"); // Changed "image" to "img" for the image element
//     image.src = result.urls.small; // Changed "result.url.small" to "result.urls.small"
//     image.alt = result.alt_description;
//     const imageLink = document.createElement("a");
//     imageLink.href = result.links.html;
//     imageLink.target = "_blank";
//     imageLink.textContent = result.alt_description;

//     // child

//     imageWrapper.appendChild(image);
//     imageWrapper.appendChild(imageLink);
//     searchResults.appendChild(imageWrapper);
//   });
//   page++;

//   if (page > 1) {
//     show.style.display = "block"; // Corrected "diplay" to "display"
//   }
// }

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   page = 1;
//   searchImages();
// });

// show.addEventListener("click", () => {
//   searchImages();
// });