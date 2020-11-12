let showNav = true;

const handleResize = () => {
  if (window.innerWidth > 675) {
    document.getElementById("nav-ul").style.display = "flex";
    showNav = false;
  } else {
    document.getElementById("nav-ul").style.display = "none";
    showNav = true;
  }
};
