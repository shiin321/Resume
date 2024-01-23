function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  localStorage.setItem("menuOpen", isOpen);
}

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const storedState = localStorage.getItem("menuOpen");

  if (storedState === "true") {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
});
