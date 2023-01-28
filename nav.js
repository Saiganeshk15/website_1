var x = window.matchMedia("(max-width: 768px)")
var y = window.matchMedia("(min-width: 768px)")
function ourfunction(y) {
    var faq = document.getElementsByClassName("faq-page");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("mouseover", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("hover");
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
        faq[i].addEventListener("mouseout", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("hover");
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            }
        });
    }
}
ourfunction(y)
y.addEventListener(ourfunction)

/*********faq starts here**************/
function Myfunction(x) {
    var faq = document.getElementsByClassName("faq-page");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
}
Myfunction(x)
x.addEventListener(Myfunction)

/**********faqs ends here*************/



/************* pre loader *************/
var loader = document.getElementById("loaders");

window.addEventListener("load", function () {
    loader.style.display = "none";
})

