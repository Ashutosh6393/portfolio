// initializing locomptive scroll
(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const logoMoveAnimation = () => {
  const logo = document.querySelector("#logo");
  logo.addEventListener("mousemove", (e) => {
    // console.log(e);
    let x = e.offsetX;
    let y = e.offsetY;
    let logoWidth = logo.clientWidth;
    let logoHeight = logo.clientHeight;
    let moveX = x - logoWidth / 3;
    let moveY = y - logoHeight / 3;
    logo.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
  });
  logo.addEventListener("mouseleave", (e) => {
    logo.style.transform = "";
  });
};

logoMoveAnimation();

const target = document.querySelectorAll("#page1-content h1");

let result1 = Splitting({ target: target[0] })[0].chars;
let result2 = Splitting({ target: target[1] })[0].chars;

const page1Timeline = gsap.timeline();

page1Timeline

.from('#page1-circle', {
    scale: .5,
    duration: 1,
    ease: "power2.out",
})

.from([result1, result2], {
  y: "100%",
  duration: 1.1,
  ease: "power2.out",
  stagger: 0.04,
}, ">-.5")
.from('#page1-content p', {
   
    y: 80,
    opacity: 0,
    duration: 2.1,
    ease: "power2.out",  
}, ">-.5")
.from('nav', {
    y: 100,
    opacity: 0,
    duration: 2.1,
    ease: "power2.out",
}, ">-1.7")


