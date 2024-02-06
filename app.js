const searchButton = document.querySelector(".search");
const searchBar = document.querySelector(".search-option");
const searchBarWrapper = document.querySelector(".search-bar-wrapper");
const searchBarInput = document.querySelector(".search-bar-input");
const loginButton = document.querySelector(".login-button");
const heroSection = document.querySelector(".hero");
const loginPage = document.querySelector(".login-page");
const landingPage = document.querySelector(".background");
const loginError = document.querySelector(".login-error");
const blogButton = document.querySelector(".blog-button");
const blogPost = document.querySelector(".blog-post-wrapper");
const arrowButton = document.querySelector(".arrow-button");
const blogPostText = document.querySelector(".blog-post-text");
const shopBtn = document.querySelector(".shop");
const date = document.getElementById("date");

searchButton.addEventListener("mouseover", function () {
  searchBar.classList.add("visible");
});

searchBarWrapper.addEventListener("mouseleave", function () {
  setTimeout(function () {
    searchBar.classList.remove("visible");
  }, 1000);
});

document.onkeydown = function (event) {
  console.log(searchBarInput.value.length);
  if (event.key === "Enter" && searchBarInput.value.length >= 0) {
    window.open("http://127.0.0.1:5501/error.html", "_blank");
    searchBarInput.value = "";
  }
};

loginButton.addEventListener("click", () => {
  loginButton.classList.toggle("active");
  heroSection.classList.toggle("invisible");
  showLogin();
  setTimeout(() => {}, 500);
  landingPage.classList.toggle("blur");
});

function showLogin() {
  loginPage.classList.toggle("block");
}

loginError.addEventListener("click", () => {
  window.open("http://127.0.0.1:5502/error.html", "_blank");
});

blogButton.addEventListener("click", () => {
  blogButton.classList.toggle("active");
  heroSection.classList.toggle("invisible");
  blogPost.classList.toggle("show-post");
});

arrowButton.addEventListener("click", function () {
  blogPostText.classList.toggle("show-post");
});

shopBtn.addEventListener("click", () => {
  window.open("http://127.0.0.1:5502/shop.html", "_blank");
});

date.innerHTML = new Date().getFullYear();
