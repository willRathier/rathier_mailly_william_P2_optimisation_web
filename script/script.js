gsap.to(".arrow", { y: "7vh", duration: 1, repeat: -1, yoyo: true });

let timer = setTimeout(100);

window.addEventListener(scroll, function () {
  console.log("Scroll détecté");
});

const body = document.querySelector("is-scrolling");

let scrollTimer;

window.addEventListener("scroll", function () {
  document.body.classList.add("is-scrolling");
});

window.addEventListener("scrollend", function () {
  scrollTimer = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
});

/*-----INSTRUCTION 4-----*/
/*-- Animation chapitre 1 --*/
let clickChapter1 = document.querySelector("#chapitre-1");
clickChapter1.addEventListener("click", function () {
  gsap.to("#lune", {
    x: 300,
    duration: 6,
  });

  gsap.to("#meteorite", {
    x: 400,
    y: 50,
    rotation: 90,
    duration: 10,
  });
});

/*-- Animation chapitre 2 --*/
let clickChapter2 = document.querySelector("#chapitre-2");
clickChapter2.addEventListener("click", function () {
  var tl1 = gsap.timeline();

  tl1
    .from("#sofa", {
      scale: 50,
      duration: 2,
    })
    .to("#kevin", {
      duration: 1,
      y: -30,
    })
    .to("#kevin", {
      duration: 1,
      x: 100,
    })
    .to("#kevin", {
      duration: 1,
      y: 80,
      x: 200,
    })
    .to("#kevin", {
      x: 900,
      duration: 4,
    });
});

/*---Animation chapitre 3---*/
let clickChapter3 = document.querySelector("#chapitre-3");
clickChapter3.addEventListener("click", function () {
  gsap
    .timeline()
    .to(
      "#pince",
      {
        y: 50,
        duration: 1,
        repeat: 1,
        yoyo: true,
      },
      0.5
    )
    .to(
      "#casque",
      {
        y: 50,
        duration: 1,
      },
      0.5
    )
    .to(
      "#kev2",
      {
        x: 800,
        duration: 4,
      },
      3
    )
    .to(
      "#casque",
      {
        x: 800,
        duration: 4,
      },
      3
    );
});

/*-- Animation chapitre 4 --*/
let clickChapter4 = document.querySelector("#chapitre-4");
clickChapter4.addEventListener("click", function () {
  gsap
    .timeline()
    .to("#kev3", {
      x: 350,
      duration: 3,
    })
    .to("#kev3", {
      x: 545,
      y: -200,
      duration: 3,
    });
});
/*--- Animation chapitre 5 ---*/
let clickChapter5 = document.querySelector("#chapitre-5");
clickChapter5.addEventListener("click", function () {
  gsap
    .timeline()
    .from("#kev4", {
      scale: 2,
      duration: 1.5,
    })
    .to(
      "#meteorite2",
      {
        x: 75,
        y: 85,
        rotation: 90,
        duration: 20,
      },
      0
    );
});
