import { gsap } from "gsap";

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
  },"start")
  .from(".menu-toggle", {
    yPercent: -100,
     duration: 1,
    opacity: 0,
  },"start")
  .from('.hero-img',{
    y:60,
    opacity:0,
    scale:.85,
    duration: 1,
  },"-=.2")
  .from(".hero-heading",{
    y:40,
    opacity:0,
 duration: 1,
  },"-=.2")
  .from(".hero-subtext",{
    y:30,
    opacity:0
  },"-=.2")
  .fromTo(".cta",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: .5 },
  "-=.2"
);
