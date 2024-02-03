const searchButton = document.querySelector(".search");
const searchBar = document.querySelector(".search-option");
const searchBarWrapper = document.querySelector(".search-bar-wrapper");
const searchBarInput = document.querySelector(".search-bar-input");
const loginButton = document.querySelector(".login-button");
const heroSection = document.querySelector(".hero");
const loginPage = document.querySelector(".login-page");
const landingPage = document.querySelector(".background");
const loginError = document.querySelector(".login-error");

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
    window.open("http://127.0.0.1:5500/error.html", "_blank");
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
  window.open("http://127.0.0.1:5500/error.html", "_blank");
});
