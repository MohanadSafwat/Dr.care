function navToggle(){
    var listDiv=document.getElementsByClassName("li-container")[0].style.display;
    console.log(listDiv)
    if(listDiv == "none" || listDiv =="")
    {
        document.getElementsByClassName("li-container")[0].style.display = "block";
        console.log("none")
    }
    else if(listDiv == "block")
    {
        document.getElementsByClassName("li-container")[0].style.display = "none";
        console.log("block")

    }
}