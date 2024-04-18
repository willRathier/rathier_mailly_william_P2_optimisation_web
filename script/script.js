gsap.to(".arrow", { y: "7vh", duration: 1, repeat: -1, yoyo: true });

let timer = setTimeout(100);

window.addEventListener(scroll, function () {
  console.log("Scroll détecté");
});

const body = document.querySelector("is-scrolling");

let scrollTimer;

window.addEventListener("scroll", function () {
  this.document.body.classList.add("is-scrolling");
});

window.addEventListener("scrollend", function () {
  scrollTimer = this.setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
});
