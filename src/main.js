import { gsap } from "gsap";
const menuButton = document.querySelector('.menu-toggle');

const navToggleTl = gsap.timeline();

navToggleTl.from('.mobile-nav',{
    height: "0",
    opacity: 0,
    ease: "power3.inOut"
})

navToggleTl.pause()
menuButton.addEventListener('click', ()=> {
    if(menuButton.classList.contains("open")){
        navToggleTl.reverse()
        menuButton.classList.remove('open')
    }else{
        
        navToggleTl.play()
        menuButton.classList.add('open')
    }
})