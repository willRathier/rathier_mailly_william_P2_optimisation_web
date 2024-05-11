/*
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(TextPlugin);
*/

gsap.to(".arrow", { y: "10vh", duration: 1, repeat: -1, yoyo: true });

let timer = setTimeout(100);

window.addEventListener(scroll, function () {
  console.log("Scroll détecté");
});

const body = document.querySelector("is-scrolling");

let scrollTimer;

window.addEventListener("scroll", function () {
  document.body.classList.add("is-scrolling");
});

window.addEventListener("scroll", function () {
  scrollTimer = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
});

/*-- PLUGGINS --*/
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MorphSVGPlugin);

/*-----INSTRUCTION 4-----*/
/*-- Animation chapitre 1 --*/

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre-1",
      pin: true,
      scrub: 2,
      start: "top top",
      end: "bottom top",
    },
  })
  .from(
    "#text-1",
    {
      duration: 3,
      text: " ",
      ease: "none",
    },
    0
  )
  .fromTo(
    "#chapitre-1",
    {
      backgroundSize: "400%",
    },
    {
      backgroundSize: "100%",
      ease: "none",
      duration: 3,
    },
    0.5
  )
  .from(
    "#terre",
    {
      scale: 2,
      duration: 3,
    },
    1
  )
  .from(
    "#lune",
    {
      scale: 1.4,
      duration: 3,
    },
    1
  )
  .from(
    "#meteorite",
    {
      scale: 1.5,
      duration: 3,
    },
    1
  )
  .to(
    "#lune",
    {
      x: "20vw",
      duration: 3,
    },
    4
  )
  .to(
    "#meteorite",
    {
      duration: 5,
      x: "23vw",
      y: "4.6vh",
      rotation: 90,
    },
    4
  );
gsap.from("#text-1", {
  xPercent: 300,
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre-1",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});
/*-- Animation chapitre 2 --*/
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-2",
    start: "top top",
    end: "bottom top",
    pin: true,
    toggleActions: "restart complete reverse reset",
  },
});

tl1

  .from("#sofa", {
    scale: 4,
    duration: 2,
  })
  .from(
    "#text-2",
    {
      duration: 2,
      text: " ",
      ease: "none",
    },
    0.5
  )
  .to("#kevin", {
    duration: 1,
    y: "-2.7vh",
  })
  .to("#kevin", {
    duration: 1,
    x: "5.2vw",
  })
  .to("#kevin", {
    duration: 1,
    y: "7.4vh",
    x: "10.4vw",
  })
  .to("#kevin", {
    x: "75vw",
    duration: 3,
    opacity: 0,
  })
  .to(
    "#chapitre-2",
    {
      x: "-200vh",
      opacity: 0,
      duration: 3,
    },
    7.5
  );

/*---Animation chapitre 3---*/
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre-3",
      scrub: 2,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  })
  .from("#chapitre-3", {
    opacity: 0,
    duration: 1.5,
  })
  .from("#text-3", {
    duration: 3,
    text: " ",
    ease: "none",
  })
  .to(
    "#pince",
    {
      y: "8vh",
      duration: 1,
      repeat: 1,
      yoyo: true,
    },
    2
  )
  .to(
    "#casque",
    {
      y: "7vh",
      duration: 1,
    },
    2
  )
  .to(
    "#kev2",
    {
      x: "64.5vw",
      duration: 4,
    },
    4
  )
  .to(
    "#casque",
    {
      x: "64.5vw",
      duration: 4,
    },
    4
  );

/*-- Animation chapitre 4 --*/
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre-4",
      scrub: 2,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  })
  .to("#kev3", {
    x: "15vw",
    duration: 2,
  })
  .to("#kev3", {
    x: "29vw",
    y: "-25vh",
    duration: 2,
  })
  .to(
    "#kev3",
    {
      opacity: 0,
      duration: 1,
    },
    4
  )
  .to("#stairs", {
    x: "10vw",
    y: "-20vh",
    rotation: -45,
    opacity: 0.1,
    duration: 2,
  })
  .from(
    ".feu",
    {
      y: "-12vh",
      duration: 2,
    },
    6
  )
  .from(
    "#text-4",
    {
      duration: 3,
      text: " ",
      ease: "none",
    },
    0.5
  )
  .fromTo(
    "#nuage1",
    {
      x: 0,
      opacity: 0,
    },
    {
      opacity: 1,
      x: "-30vw",
      y: "-25vh",
      scale: 10,
    },
    7.3
  )
  .fromTo(
    "#numage2",
    {
      x: 0,
      opacity: 0,
    },
    {
      opacity: 1,
      x: "-30vw",
      y: "-25vh",
      scale: 10,
    },
    7
  )
  .to("#chapitre-4", {
    opacity: 0,
  });
/*--- Animation chapitre 5 ---*/

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre-5",
      scrub: 2,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  })

  .from("#chapitre-5", {
    opacity: 0,
    duration: 0.5,
  })
  .from("#text-5", {
    duration: 3,
    text: " ",
    ease: "none",
  })
  .from("#kev4", {
    scale: 2,
    duration: 1.5,
  })
  .to(
    "#meteorite2",
    {
      x: "4vw",
      y: "7.9vh",
      rotation: 90,
      duration: 20,
    },
    0
  );

gsap
  .timeline({
    repeat: -1,
    scrollTrigger: {
      trigger: "#chapitre-5",
    },
  })
  .to("#path-1", { duration: 1, drawSVG: 0 })
  .to("#path-1", { duration: 2, drawSVG: 200 })
  .to("#path-1", { duration: 1, drawSVG: 500 })
  .to("#path-1", { duration: 2, drawSVG: 100 })
  .to("#path-1", { duration: 1.5, drawSVG: 300 })
  .to("#path-1", { duration: 1, drawSVG: 200 })
  .to("#path-1", { duration: 2, drawSVG: 450 });

/*--- Animation Chapitre 6 ---*/
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre-6",
      scrub: 2,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  })
  .from(
    "#text-6",
    {
      duration: 3,
      text: " ",
      ease: "none",
    },
    0.5
  )
  .to(".feufeu", {
    opacity: 0,
    duration: 2,
  })

  .from("#kev6", {
    x: "-20vw",
    y: "-40vh",
    opacity: 0,
    duration: 2,
  })
  .to("#kev6", {
    x: "13vw",
    duration: 1,
  })
  .from(
    "#bombeMorph",
    {
      x: "-22vw",
      y: "-40vh",
      opacity: 0,
      duration: 2.5,
    },
    6
  )
  .to(
    "#kev6",
    {
      x: "-3vw",
      duration: 2,
    },
    10
  )
  .to("#kev6", {
    x: "-13vw",
    y: "-23vh",
    duration: 3,
  })
  .to("#kev6, #escalier6", {
    opacity: 0,
    duration: 1,
  })
  .to(".feufeu", {
    opacity: 1,
  })
  .to(".feufeu", {
    opacity: 0,
    duration: 2,
  })
  .to("#fuse6", {
    motionPath: {
      path: "#path-2",
      align: "#path-2",
      autoRotate: 90,
      alignOrigin: [0.5, 0.5],
    },
    duration: 18,
  })
  .to("#morph-1", { duration: 4, morphSVG: "#morph-2" })
  .to(
    "#bombeMorph",
    {
      duration: 5,
      y: "-30vh",
      x: "-10vw",
    },
    24
  )
  .to("#bombeMorph", {
    duration: 8,
    scale: 30,
  });

/*--- Animation Chapitre 7 ---*/

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre-7",
      scrub: 2,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  })
  .from(
    "#text-7",
    {
      duration: 3,
      text: "",
      ease: "none",
    },
    0.5
  )
  .to(
    "#meteorite3",
    {
      x: "-13.6vw",
      y: "-11.6vh",
      rotation: -75,
      scale: 0.3,
      opacity: 0.5,
    },
    0
  )
  .to(
    "#meteorite4",
    {
      x: "13vw",
      y: "11.6vh",
      rotation: 75,
      scale: 0.3,
      opacity: 0.5,
    },
    0
  )
  .to(
    "#meteorite5",
    {
      y: "20vh",
      rotation: -75,
      scale: 0.3,
      opacity: 0.5,
    },
    0
  );
