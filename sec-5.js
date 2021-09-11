function sec5in(order) {
  if (order == 1) {
    //    unfade(document.getElementById("sec5-1") );
  
    document.getElementById("sec5-1").style.display = "block";
    document.getElementById("sec5-head1").style.color = "#007bff";
    console.log(document.getElementsByClassName("sec5img"));
    document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px -10px";

  }
  else if (order == 2) {
    // unfade(document.getElementById("sec5-2") );

    document.getElementById("sec5-2").style.display = "block";
    document.getElementById("sec5-head2").style.color = "#007bff";
    document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px -10px";


  }
  else if (order == 3) {
    // unfade(document.getElementById("sec5-3") );

    document.getElementById("sec5-3").style.display = "block";
    document.getElementById("sec5-head3").style.color = "#007bff";
    document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px -10px";


  }
  else if (order == 4) {
    // unfade(document.getElementById("sec5-4") );

    document.getElementById("sec5-4").style.display = "block";
    document.getElementById("sec5-head4").style.color = "#007bff";
    document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px -10px";


  }
}

function sec5out(order) {
    if (order == 1) {
        // fade(document.getElementById("sec5-1"))
      document.getElementById("sec5-1").style.display = "none";
      document.getElementById("sec5-head1").style.color = "#000";
      document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px 0";


    }
    else if (order == 2) {
        // fade(document.getElementById("sec5-2"))

      document.getElementById("sec5-2").style.display = "none";
      document.getElementById("sec5-head2").style.color = "#000";
      document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px 0";


    }
    else if (order == 3) {
        // fade(document.getElementById("sec5-3"))

      document.getElementById("sec5-3").style.display = "none";
      document.getElementById("sec5-head3").style.color = "#000";
      document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px 0";


    }
    else if (order == 4) {
        // fade(document.getElementById("sec5-4"))

      document.getElementById("sec5-4").style.display = "none";
      document.getElementById("sec5-head4").style.color = "#000";
      document.getElementsByClassName("sec5img")[order-1].style.backgroundPosition ="0px 0";


    }
  }
//   function fade(element) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1){
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         // element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }
// function unfade(element) {
//     var op = 0.1;  // initial opacity
//     element.style.opacity = op;

//     element.style.display = 'block';
//     var timer = setInterval(function () {
//         if (op >= 1){
//             clearInterval(timer);
//         }
//         element.style.opacity = op;
//         // element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 10);
// }