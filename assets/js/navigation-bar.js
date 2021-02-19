window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 685 || document.documentElement.scrollTop > 685) {
    document.getElementById("navigation-bar").style.top = "0";
  } else {
    document.getElementById("navigation-bar").style.top = "-75px";
  }
}