burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navtools = document.querySelector('.navtools')
rightnav = document.querySelector('.rightnav ')


burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp')
    navtools.classList.toggle('v-class-resp')
    rightnav.classList.toggle('v-class-resp')

})
/**********faqs starts here***********/
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
        } else {
            body.style.display = "block";
        }
    });
    faq[i].addEventListener("onclick", function () {
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
}
/**********faqs ends here*************/
