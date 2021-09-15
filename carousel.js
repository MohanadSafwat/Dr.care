var currentSlide = 1;

function dotFunctionFirst() {
  currentSlide = 2;
  currentSlideFunc();
}

function dotFunctionSecond() {
  currentSlide = 1;
  currentSlideFunc();
}

function currentSlideFunc() {
  var slideDivOne = document.getElementById("slide-1");
  var slideDivTwo = document.getElementById("slide-2");

  if (currentSlide == 1) {
    slideDivOne.style.display = "flex";
    slideDivTwo.style.display = "none";
  }
  if (currentSlide == 2) {
    slideDivOne.style.display = "none";
    slideDivTwo.style.display = "flex";
  }
}

setInterval(function () {
  if (currentSlide == 1) {
    currentSlide = 2;
    currentSlideFunc();
  } else {
    currentSlide = 1;
    currentSlideFunc();
  }
}, 5000);
