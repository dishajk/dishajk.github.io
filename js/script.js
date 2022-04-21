//Get the button
let buttontotop = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    buttontotop.style.display = "block";
  } else {
    buttontotop.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
buttontotop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//collapse toggler
$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $(".navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbar-main").collapse('hide');
    }
  });

  $(".navbar-toggler").click(function (event) {
    $(event.target).focus();
  });
});
