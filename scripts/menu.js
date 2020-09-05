const mobileIcon = document.querySelector(".mobileMenuIcon");
const mobileMenu = document.querySelector(".mobileMenu");
const dropMenu = document.getElementById("mobileDropList");

mobileIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
function showDropMenu()
{
        dropMenu.style.display = "block";
}
