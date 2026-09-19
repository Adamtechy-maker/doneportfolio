const themeToggle = document.getElementById("themeToggle");


// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}


// Change theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    if (isLight) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* Close mobile menu when a link is clicked */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});



  const contactForm = document.getElementById("portfolioContactForm");
  const sendButton = document.getElementById("sendButton");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const endpoint = contactForm.action.trim();

    if (!endpoint) {
      formStatus.textContent =
        "Please connect a form endpoint before submitting.";
      return;
    }

    sendButton.disabled = true;
    sendButton.textContent = "Sending...";
    formStatus.textContent = "";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        contactForm.reset();
        formStatus.textContent =
          "Thanks! Your message has been sent.";
      } else {
        formStatus.textContent =
          "Something went wrong. Please try again.";
      }
    } catch (error) {
      formStatus.textContent =
        "Unable to send the message. Please check your connection.";
    }

    sendButton.disabled = false;
    sendButton.textContent = "Send Message";
  });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(25px)";

    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});
