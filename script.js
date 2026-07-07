// =========================
// BURGER MENU
// =========================

const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");


if (burger && navbar) {

    burger.addEventListener("click", () => {

        navbar.classList.toggle("show");

    });

}



// =========================
// DARK / LIGHT MODE
// =========================


const themeToggle = document.getElementById("themeToggle");


if (themeToggle) {


    const icon = themeToggle.querySelector("i");


    // Load saved theme

    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }



    themeToggle.addEventListener("click", () => {


        document.body.classList.toggle("dark");


        let darkMode =
        document.body.classList.contains("dark");



        if (darkMode) {


            localStorage.setItem(
                "theme",
                "dark"
            );


            icon.classList.remove(
                "fa-moon"
            );


            icon.classList.add(
                "fa-sun"
            );


        } 
        
        else {


            localStorage.setItem(
                "theme",
                "light"
            );


            icon.classList.remove(
                "fa-sun"
            );


            icon.classList.add(
                "fa-moon"
            );


        }


    });


}






// =========================
// CLOSE MOBILE MENU
// =========================


const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link => {


    link.addEventListener("click", () => {


        if(navbar){

            navbar.classList.remove("show");

        }


    });


});







// =========================
// SCROLL ANIMATION
// =========================


const cards = document.querySelectorAll(
    ".skill-card, .about-box, .contact-card, .service-card"
);



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";


        }


    });


},

{
    threshold:0.2
}

);




cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="0.6s ease";


    observer.observe(card);


});