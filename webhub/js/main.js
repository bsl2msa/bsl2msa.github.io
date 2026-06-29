/*
===============================================
BSL2 Maritime S.A.
Homepage JavaScript
Part 1
===============================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();
    initializeSmoothScroll();
    initializeHeroAnimation();

});


/*
===============================================
SELECTORS
===============================================
*/

const header = document.querySelector("header");

const navbar = document.querySelector(".navbar");

const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const navigationLinks = document.querySelectorAll(".nav-links a");


/*
===============================================
MOBILE MENU
===============================================
*/

function initializeNavigation(){

    if(menuButton){

        menuButton.addEventListener("click", ()=>{

            navLinks.classList.toggle("active");

            if(navLinks.classList.contains("active")){

                menuButton.innerHTML = "✕";

            }else{

                menuButton.innerHTML = "☰";

            }

        });

    }


    navigationLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

            menuButton.innerHTML="☰";

        });

    });

}


/*
===============================================
STICKY NAVIGATION
===============================================
*/

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/*
===============================================
ACTIVE LINK
===============================================
*/

navigationLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navigationLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/*
===============================================
SMOOTH SCROLL
===============================================
*/

function initializeSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        });

    });

}


/*
===============================================
HERO INTRO ANIMATION
===============================================
*/

function initializeHeroAnimation(){

    const heroContent = document.querySelector(".hero-content");

    if(!heroContent) return;

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(40px)";

    setTimeout(()=>{

        heroContent.style.transition =
            "all 1.2s ease";

        heroContent.style.opacity="1";

        heroContent.style.transform="translateY(0px)";

    },300);

}


/*
===============================================
ESC CLOSE MOBILE MENU
===============================================
*/

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        navLinks.classList.remove("active");

        if(menuButton){

            menuButton.innerHTML="☰";

        }

    }

});


/*
===============================================
CLICK OUTSIDE MENU
===============================================
*/

document.addEventListener("click",(event)=>{

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedButton =
        menuButton.contains(event.target);

    if(
        !clickedInsideMenu &&
        !clickedButton &&
        navLinks.classList.contains("active")
    ){

        navLinks.classList.remove("active");

        menuButton.innerHTML="☰";

    }

});


/*
===============================================
WINDOW RESIZE
===============================================
*/

window.addEventListener("resize",()=>{

    if(window.innerWidth > 992){

        navLinks.classList.remove("active");

        menuButton.innerHTML="☰";

    }

});


/*
===============================================
PREVENT DOUBLE CLICKS
===============================================
*/

let menuBusy = false;

menuButton.addEventListener("click",()=>{

    if(menuBusy) return;

    menuBusy = true;

    setTimeout(()=>{

        menuBusy = false;

    },300);

});


/*
===============================================
CONSOLE MESSAGE
===============================================
*/

console.log(
"%cBSL2 Maritime S.A.",
"color:#C8A14D;font-size:20px;font-weight:bold;"
);

console.log(
"Sailing Freedom. Bridging Cultures. Empowering Nations."
);

/*
=================================================
BSL2 Maritime S.A.
Homepage JavaScript
Part 2
=================================================
*/


/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

    ".about, .card, .queen-kofi, .routes, .counter, .investment, .news article"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(section=>{

    section.classList.add("fade-in");

    revealObserver.observe(section);

});



/*=========================================
COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter h1");

const counterObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        animateCounter(counter);

        counterObserver.unobserve(counter);

    });

},

{

    threshold:0.5

}

);

counters.forEach(counter=>{

    counterObserver.observe(counter);

});



function animateCounter(element){

    const original = element.textContent.trim();

    const numeric = parseInt(original.replace(/\D/g,""));

    if(isNaN(numeric)) return;

    let current = 0;

    const duration = 1800;

    const increment = numeric / (duration / 16);

    function update(){

        current += increment;

        if(current < numeric){

            element.textContent =

                Math.floor(current) +

                original.replace(/[0-9+]/g,"");

            requestAnimationFrame(update);

        }else{

            element.textContent = original;

        }

    }

    update();

}



/*=========================================
BACK TO TOP BUTTON
=========================================*/

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.right = "30px";
backToTop.style.bottom = "30px";
backToTop.style.width = "55px";
backToTop.style.height = "55px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "#C8A14D";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "22px";
backToTop.style.cursor = "pointer";
backToTop.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
backToTop.style.opacity = "0";
backToTop.style.visibility = "hidden";
backToTop.style.transition = ".4s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 600){

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    }else{

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*=========================================
PARALLAX HERO
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    const offset = window.pageYOffset;

    hero.style.backgroundPositionY =

        offset * 0.45 + "px";

});



/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        circle.style.width = diameter+"px";
        circle.style.height = diameter+"px";

        circle.style.position="absolute";
        circle.style.borderRadius="50%";
        circle.style.background="rgba(255,255,255,.35)";
        circle.style.pointerEvents="none";
        circle.style.transform="scale(0)";
        circle.style.transition=".6s";

        const rect = this.getBoundingClientRect();

        circle.style.left =
            e.clientX - rect.left - diameter/2 + "px";

        circle.style.top =
            e.clientY - rect.top - diameter/2 + "px";

        this.appendChild(circle);

        requestAnimationFrame(()=>{

            circle.style.transform="scale(4)";
            circle.style.opacity="0";

        });

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});



/*=========================================
IMAGE HOVER ENHANCEMENT
=========================================*/

const images = document.querySelectorAll(

    ".ship-image img, .map img"

);

images.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.filter="brightness(108%)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.filter="brightness(100%)";

    });

});



/*=========================================
PRELOAD HERO IMAGE
=========================================*/

const preload = new Image();

preload.src = "images/hero/ocean.jpg";



/*=========================================
CURRENT YEAR
=========================================*/

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =

    `© ${new Date().getFullYear()} BSL2 Maritime S.A. All Rights Reserved.`;

}



/*=========================================
PAGE LOADED
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});



/*=========================================
PERFORMANCE
=========================================*/

console.log(

"%cHomepage Ready",

"color:#0B3C5D;font-size:15px;font-weight:bold;"

);