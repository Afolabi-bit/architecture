const burger = document.querySelector(".burger");
const container = document.querySelector(".container");
const scrollButton = document.querySelector(".scroll-btn");
const links = document.getElementsByClassName("menu-item");
const body = document.querySelector("body");
const root = document.querySelector("html");

//DISPLAY SPINNER
window.onload = () => {
  setTimeout(() => {
    body.classList.add("display");
  }, 4000);
};
//toggle sidebar
burger.addEventListener("click", () => {
  container.classList.toggle("change");
});
//add smooth scroll behaviour onclick, remove after 1000ms
scrollButton.addEventListener("click", () => {
  root.style.scrollBehavior = "smooth";
  setTimeout(() => {
    root.style.scrollBehavior = "unset";
  }, 1000);
});
//close sidebar when link is clicked
var i;
for (i = 0; i < links.length; i++)
  links[i].addEventListener("click", () => {
    container.classList.remove("change");
    root.style.scrollBehavior = "smooth";
    setTimeout(() => {
      root.style.scrollBehavior = "unset";
    }, 1000);
  });
