var current =1;
// document.getElementsByClassName("sec6-active-slide")[0].attributes[1].value.split('-')[1];


function dotFunction(order) {
   current = order;
  currentSlideFunction(current);
}

function currentSlideFunction(cur) {
  var slideDiv1 = document.getElementById("slide-1-sec6");
  var slideDiv2 = document.getElementById("slide-2-sec6");
  var slideDiv3 = document.getElementById("slide-3-sec6");
  var slideDiv4 = document.getElementById("slide-4-sec6");
  var slideDiv5 = document.getElementById("slide-5-sec6");
  var dot1 = document.getElementById("sec6-dot-1");
  var dot2 = document.getElementById("sec6-dot-2");
  var dot3 = document.getElementById("sec6-dot-3");
  var dot4 = document.getElementById("sec6-dot-4");
  var dot5 = document.getElementById("sec6-dot-5");

  document.getElementsByClassName("active-dot")[0].classList.remove("active-dot");

  if (cur == 1) {
    slideDiv1.style.display = "flex";
    slideDiv2.style.display = "none";
    slideDiv3.style.display = "none";
    slideDiv4.style.display = "none";
    slideDiv5.style.display = "none";

    dot1.classList.add("active-dot");
  } else if (cur == 2) {
    slideDiv1.style.display = "none";
    slideDiv2.style.display = "flex";

    slideDiv3.style.display = "none";
    slideDiv4.style.display = "none";
    slideDiv5.style.display = "none";
    dot2.classList.add("active-dot");

  } else if (cur == 3) {
    slideDiv1.style.display = "none";
    slideDiv2.style.display = "none";
    slideDiv3.style.display = "flex";

    slideDiv4.style.display = "none";
    slideDiv5.style.display = "none";
    dot3.classList.add("active-dot");

  } else if (cur == 4) {
    slideDiv1.style.display = "none";
    slideDiv2.style.display = "none";
    slideDiv3.style.display = "none";
    slideDiv4.style.display = "flex";

    slideDiv5.style.display = "none";
    dot4.classList.add("active-dot");

  } else if (cur == 5) {
    slideDiv1.style.display = "none";
    slideDiv2.style.display = "none";
    slideDiv3.style.display = "none";
    slideDiv4.style.display = "none";
    slideDiv5.style.display = "flex";

    dot5.classList.add("active-dot");

  }
}

setInterval(function () {
  if (current < 5) {

    current++;

    currentSlideFunction(current);
  }
  else {

    current=1;

    currentSlideFunction(current);
  }
}, 5000);
