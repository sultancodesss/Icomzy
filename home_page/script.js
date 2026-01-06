
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


const navLinks = document.querySelectorAll(".navlink");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const text = link.innerText.toLowerCase();

    if (text.includes("service")) {
      scrollToSection("services");
    }

    if (text.includes("testimonial")) {
      scrollToSection("testimonials");
    }

    if (text.includes("about")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (text.includes("stats")) {
      document.querySelector(".banner")?.scrollIntoView({ behavior: "smooth" });
    }
    if (text.includes("process")) {
      scrollToSection("process");
    }

  });
});


const navBtn = document.getElementById("navBtn");

if (navBtn) {
  navBtn.addEventListener("click", () => {
    document.querySelector(".cta-section")?.scrollIntoView({
      behavior: "smooth"
    });
  });
}


const primaryBtn = document.getElementById("h-primary");
const secondaryBtn = document.getElementById("h-secondry");

if (primaryBtn) {
  primaryBtn.addEventListener("click", () => {
    scrollToSection("services");
  });
}




const testimonialTrack = document.getElementById("testimonial-track");

if (testimonialTrack) {
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 420;

    if (scrollAmount >= testimonialTrack.scrollWidth) {
      scrollAmount = 0;
    }

    testimonialTrack.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }, 3000);
}


const ctaForm = document.getElementById("cta-form");

if (ctaForm) {
  ctaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = ctaForm.querySelector(".cta-input");

    if (emailInput.value === "") {
      alert("Please enter your email address");
    } else {
      alert(`Thanks! We will contact you at ${emailInput.value}`);
      emailInput.value = "";
    }
  });
}



const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

