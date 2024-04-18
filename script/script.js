gsap.to(".arrow", { y: "7vh", duration: 1, repeat: -1, yoyo: true });

let timer = setTimeout(100);

window.addEventListener(scroll, function () {
  console.log("Scroll détecté");
});
