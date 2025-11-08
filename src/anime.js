import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navIntroTl = gsap.timeline({
  defaults: {
    ease: "power1.inOut",

  },
});

navIntroTl
  .from(".logo", {
    y: -50,
    duration: 1,
    opacity: 0,
  })
  .from(".nav-li", {
    yPercent: -100,
    stagger: 0.5,
    duration: 1,
    opacity: 0,
  }, "start")
  .from(".menu-toggle", {
    yPercent: -100,
    duration: 1,
    opacity: 0,
  }, "start")
  .from('.hero-img', {
    y: 60,
    opacity: 0,
    scale: .85,
    duration: 1,
  }, "-=.2")
  .from(".hero-heading", {
    y: 40,
    opacity: 0,
    duration: 1,
  }, "-=.2")
  .from(".hero-subtext", {
    y: 30,
    opacity: 0
  }, "-=.2")
  .fromTo(".cta",
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  );



gsap.from(".feature", {
  y: 50,
  opacity: 0,
  stagger: .3,
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
    end: "bottom 70%",
    scrub: .6,
    markers: false
  }
})

const productivityTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".productivity",
    start: "top 15%",
    end: "+=150%",
    scrub: .7,
    pin: true,
    markers: true,
  }
})

productivityTL.from('.productive-img', {
  x: -60,
  opacity: 0,
  scale: .95,
  ease: "back.inOut"
})
  .from([".productive-heading", ".productive-subtext", ".productive-cta"], {
    y: 80,
    opacity: 0,
    stagger: .4
  })
  .to(".productive-cta", {
    y: 0,
    opacity: 1
  })
  .to(['.productive-img', ".productive-heading", ".productive-subtext", ".productive-cta"], {
    opacity: .7,
  })

gsap.from('.testimonial', {
  y: 50,
  opacity: 0,
  stagger: .3,
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    markers: true
  },
  onComplete: () => {
    gsap.to('.testimonial', {
      y: 20,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: .5
    })
  }
})


const notifyTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".notify-section",
    start: "top 80%",
    end: "bottom 40%",
    scrub: .4,
  }
})


notifyTl.from('.notify', {
  width: 0,
  height: 0,
  padding: 0,
  duration: 1
})
  .from([".notify-heading", ".notify-subtext", ".notify-form"], {
    y: 30,
    opacity: 0,
    stagger: .3
  })


  
gsap.from(".footer-item", {
  opacity: 0,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    marker: true,
  }
});
