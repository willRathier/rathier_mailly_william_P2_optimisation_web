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
    x: "20vw",
    duration: 6,
  });

  gsap.to("#meteorite", {
    x: "20.8vw",
    y: "4.6vh",
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
      x: "55vw",
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
        y: "8vh",
        duration: 1,
        repeat: 1,
        yoyo: true,
      },
      0.5
    )
    .to(
      "#casque",
      {
        y: "7vh",
        duration: 1,
      },
      0.5
    )
    .to(
      "#kev2",
      {
        x: "100vw",
        duration: 4,
      },
      3
    )
    .to(
      "#casque",
      {
        x: "100vw",
        duration: 5,
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
      x: "15vw",
      duration: 3,
    })
    .to("#kev3", {
      x: "29vw",
      y: "-25vh",
      duration: 3,
    })
    .to(
      "#kev3",
      {
        opacity: 0,
        duration: 1,
      },
      5.5
    );
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
        x: "4vw",
        y: "7.9vh",
        rotation: 90,
        duration: 20,
      },
      0
    );
});
/*--- Animation Chapitre 6 ---*/

/*--- Animation Chapitre 7 ---*/
let clickChapter7 = document.querySelector("#chapitre-7");
clickChapter7.addEventListener("click", function () {
  gsap
    .timeline()
    .to(
      "#meteorite3",
      {
        x: "-13.6vw",
        y: "-11.6vh",
        rotation: -75,
        scale: 0.3,
        opacity: 0.5,
        duration: 4,
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
        duration: 4,
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
        duration: 4,
      },
      0
    );
});
