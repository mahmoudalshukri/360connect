const headerId = document.getElementById("header");
const imageId = document.getElementById("imageId");
const scrolblack = document.getElementById("scrolblack");

window.addEventListener("scroll", () => {
  if (window.scrollY > 15) {
    headerId.classList.remove("bg-dark");
    headerId.classList.add("bg-light");
    headerId.classList.remove("navbar-dark");
    headerId.classList.add("navbar-light");

    imageId.src = "image/dark-logo.svg";
    scrolblack.classList.add("black-color-scrol");
  } else {
    headerId.classList.remove("bg-light");
    headerId.classList.add("bg-dark");
    headerId.classList.remove("navbar-light");
    headerId.classList.add("navbar-dark");
    imageId.src = "image/logo.svg";
    scrolblack.classList.remove("black-color-scrol");
  }
});
