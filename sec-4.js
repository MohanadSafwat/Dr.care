function sec4(type) {
  var head = document.getElementById("sec4head");
  var img = document.getElementById("sec4img");
  var active = document.getElementsByClassName("active")[0];
  active.classList.remove("active");
  if (type == "neu") {
    head.innerHTML = "Neurological Deparments";
    img.style.backgroundImage =
      'url("https://preview.colorlib.com/theme/drcare/images/xdept-1.jpg.pagespeed.ic.xHZoDZzjeF.webp")';
    document.getElementById("sec4neu").classList.add("active");
    var arrow = document.createElement("div");
    arrow.classList.add("arrow-down");
    document.getElementById("sec4neu").appendChild(arrow);
  } else if (type == "sur") {
    head.innerHTML = "Surgical Deparments";
    img.style.backgroundImage =
      'url("https://preview.colorlib.com/theme/drcare/images/xdept-2.jpg.pagespeed.ic.yfYoLydsfP.webp")';
    document.getElementById("sec4sur").classList.add("active");
    var arrow = document.createElement("div");
    arrow.classList.add("arrow-down");
    document.getElementById("sec4sur").appendChild(arrow);
  } else if (type == "den") {
    head.innerHTML = "Dental Deparments";
    img.style.backgroundImage =
      'url("https://preview.colorlib.com/theme/drcare/images/xdept-3.jpg.pagespeed.ic.CM5D1ruwlV.webp")';
    document.getElementById("sec4den").classList.add("active");

    var arrow = document.createElement("div");
    arrow.classList.add("arrow-down");
    document.getElementById("sec4den").appendChild(arrow);
  } else if (type == "op") {
    head.innerHTML = "Ophthalmology Deparments";
    img.style.backgroundImage =
      'url("https://preview.colorlib.com/theme/drcare/images/xdept-4.jpg.pagespeed.ic.iJT0iyQqQy.webp")';
    document.getElementById("sec4op").classList.add("active");

    var arrow = document.createElement("div");
    arrow.classList.add("arrow-down");
    document.getElementById("sec4op").appendChild(arrow);
  } else if (type == "car") {
    head.innerHTML = "Cardiology Deparments";
    img.style.backgroundImage =
      'url("https://preview.colorlib.com/theme/drcare/images/xdept-5.jpg.pagespeed.ic.sA62zi5KLa.webp")';
    document.getElementById("sec4car").classList.add("active");

    var arrow = document.createElement("div");
    arrow.classList.add("arrow-down");
    document.getElementById("sec4car").appendChild(arrow);
  }
}
