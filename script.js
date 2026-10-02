/* =========================================================
   GUARDIAN'S OATH
   Main JavaScript File

   No third-party libraries are used.
   =========================================================


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("nav");


// Open / close mobile menu
menuToggle.addEventListener("click", function () {

    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");

    // Accessibility
    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(".nav a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menuToggle.classList.remove("active");
        navigation.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================================
   HEADER BACKGROUND ON SCROLL
   ========================================================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


// Run whenever user scrolls
window.addEventListener(
    "scroll",
    updateHeader
);


// Run once when page loads
updateHeader();


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


// IntersectionObserver detects when elements enter viewport
const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Stop observing after animation
                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


// Observe each reveal element
revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   AUTOMATIC COPYRIGHT YEAR
   ========================================================= */

const yearElement =
    document.getElementById("currentYear");


yearElement.textContent =
    new Date().getFullYear();


/* =========================================================
   OPTIONAL IMAGE ERROR HANDLING

   If an image does not exist yet, this prevents
   broken-image icons from looking ugly.

   The parent container will still display the
   placeholder label so you know where your image goes.
   ========================================================= */

const websiteImages =
    document.querySelectorAll("img");


websiteImages.forEach(function (image) {

    image.addEventListener("error", function () {

        /*
           Hide the broken image icon.

           When you later add the correct file into
           your /images folder, the image will display.
        */

        image.style.visibility = "hidden";

    });

});
