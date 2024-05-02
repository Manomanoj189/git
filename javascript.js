var plusbutton=document.getElementById("plus-button1")
var popoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")


plusbutton.addEventListener("click",function(){
    // plusbutton.textContent="blue"
    popoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelbutton=document.querySelector(".cancel-button")
var addbutton=document.querySelector(".add-button")

cancelbutton.addEventListener("click",function(){
    popoverlay.style.display="none"
    popupbox.style.display="none"
})

addbutton.addEventListener("click",function(){
    popoverlay.style.display="none"
    popupbox.style.display="none"
})


var popupboxname=document.querySelector(".popupbox-name")
var popupage=document.querySelector(".popupbox-age")
var popupdescription=document.querySelector(".popupbox-shortdescription")



