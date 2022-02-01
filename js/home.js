function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "nav-bar") {
    nav.className += " responsive";
  } else {
    nav.className = "nav-bar";
  }
}