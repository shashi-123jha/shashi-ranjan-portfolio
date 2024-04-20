gsap.registerPlugin(ScrollTrigger);





gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "8vh",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

gsap.from(".box1",{
    y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".box1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 60%",
    scrub: 2,
  },
})



gsap.from("#project", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%", // start animation when "#projects" enters the viewport (80% from the top)
        end: "bottom top",
        toggleActions: "play none none none",
       // markers: true // you can remove this line in production, it's helpful for debugging
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3
});


gsap.from(".project",{
    y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".project",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 60%",
    scrub: 2,
  },
})

gsap.from("#contact input, #contact textarea", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none",
       
    },
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.2
});

gsap.from("#contact button", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none",
        
    },
    duration: 1,
    x: 100,
    opacity: 0
});

gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top bottom", // start the animation just before the footer enters the viewport from the bottom
        toggleActions: "play none none none",
      
    },
    duration: 1,
    y: 50,
    opacity: 0
});



var crsr = document.querySelector("#cursor")
var crsrb = document.querySelector("#cursor-blur")

document.addEventListener("mousemove" , function(dets){
crsr.style.left = dets.x+30+"px",
crsr.style.top = dets.y+"px"

// for the blur parts 
crsrb.style.left = dets.x - 250 +"px",
crsrb.style.top = dets.y - 250 +"px"
   
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"

  })

  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border = "0px solid #ace022"
    crsr.style.backgroundColor = "#95C11E"
    
  })
})



document.addEventListener("mousemove" , function(dets){

   
})

