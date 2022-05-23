const toggler = document.querySelector(".main-nav__toggler");
const navbar = document.querySelector(".main-nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("main-nav__expanded");
});
