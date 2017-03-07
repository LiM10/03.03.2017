var aco = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < aco.length; i++) {
    aco[i].onclick = function(){
        
        this.classList.toggle("active");

       
        var paragraph = this.nextElementSibling;
        if (paragraph.style.display === "block") {
            paragraph.style.display = "none";
        } else {
            paragraph.style.display = "block";
        }
    }
}
