// get all the nav links and all the sections
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// smooth scroll when a nav link is clicked
navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// highlight the nav link of the section we are currently viewing
window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 90;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// simple contact form message (no backend yet, just a friendly alert)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before sending.");
            return;
        }

        alert("Thanks " + name + "! Your message has been noted.");
        contactForm.reset();
    });
}