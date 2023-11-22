const load = document.getElementsByClassName("loading");
const main = document.getElementsByClassName("main");
main[0].style.display = "none"
window.addEventListener("load", ()=>{
    setTimeout(function () {
        main[0].style.display = "";
        load[0].style.display = "none";
    }, 3000);
})

var mediaquery = window.matchMedia("(max-width: 500px)");
var home = $(".hlink").eq(0);
var projects = $(".hlink").eq(1);
var about = $(".hlink").eq(2);
var contact = $(".hlink").eq(3);
if(mediaquery.matches){
    $(document).ready(function() {
        home.textContent('Home');
        projects.html('<span class="material-symbols-outlined">inventory</span>');
        about.html('<span class="material-symbols-outlined">info</span>');
        contact.html('<span class="material-symbols-outlined">call</span>')
    });
}
