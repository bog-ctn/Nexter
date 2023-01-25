"use strict";

const btnHeader = document.querySelector(".header__btn");
btnHeader.addEventListener("click", function () {
  document
    .querySelector(".homes")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

// ------- Animations
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "power2.Out" },
});

tl.fromTo(".span-h3", { y: "-100%" }, { y: 0 });

tl.fromTo(
  ".span-h1",
  { opacity: 0, x: "-100%" },
  { opacity: 1, x: 0, duration: 1.5 },
  "<50%"
);

tl.fromTo(
  ".header__btn",
  { y: "50%", opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
  "<50%"
);
