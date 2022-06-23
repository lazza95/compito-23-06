
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let h1= document.querySelector("h1");
let buttonGrande = document.querySelector("#buttonGrande");
let buttonColore =  document.querySelector("#buttonColore");
let buttonDimensioni =  document.querySelector("#buttonDimensioni");
let buttonNascondi =  document.querySelector("#buttonNascondi");

buttonGrande.addEventListener("click", function(){
    h1.classList.toggle("grande");
})
buttonColore.addEventListener("click", function(){
    h1.classList.toggle("colore");
})

buttonDimensioni.addEventListener("click", function(){
    h1.classList.toggle("dimensioni");
})

buttonNascondi.addEventListener("click", function(){
    h1.classList.toggle("nascondi");
})

//checklist
document.querySelectorAll("li").forEach(element =>{
    element.addEventListener("click", function(){element.style.textDecoration="line-through"})
});