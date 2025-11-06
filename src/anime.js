import { gsap } from "gsap";

const navIntroTl = gsap.timeline({
  defaults: {
    ease: "power1.inOut",
    duration: 1,
    opacity: 0,
  },
});

navIntroTl
  .from(".logo", {
    y: -50,
  })
  .from(".nav-li", {
    yPercent: -100,
    stagger: 0.5,
  },"start")
  .from(".menu-toggle", {
    yPercent: -100,
  },"start");
