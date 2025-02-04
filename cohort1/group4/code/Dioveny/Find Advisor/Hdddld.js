

document.addEventListener("DOMContentLoaded", () => {
 
    const navLinks = document.querySelectorAll(".navigation a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

   
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        const name = contactForm.querySelector("input[placeholder='Your Name']").value;
        const email = contactForm.querySelector("input[placeholder='Your Email']").value;
        const message = contactForm.querySelector("textarea").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        
        alert("Thank you for your message! We will get back to you shortly.");
        contactForm.reset();
    });

    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

   
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const navLink = document.querySelector(`.navigation a[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    if (navLink) navLink.classList.add("active");
                }
            });
        },
        {
            threshold: 0.6
        }
    );

    sections.forEach(section => observer.observe(section));

  
    gsap.registerPlugin(ScrollTrigger);

 
    gsap.from(".hero h1", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".hero p", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5
    });

    gsap.from(".hero button", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 1
    });

    
    gsap.from(".feature", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });


    gsap.from(".about h2", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".about p", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3
    });

   
    gsap.from("form", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    });
});