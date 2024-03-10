//Side Navbar

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

//Product Search

var productContainer = document.getElementById("productContainer");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();

  for (var count = 0; count < productlist.length; count++) {
    var productname = productlist[count].querySelector("h1").textContent;

    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});
