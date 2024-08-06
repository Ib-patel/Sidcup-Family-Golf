var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    // console.log("Mouse move detected");
   gsap.to(crsr , {
    x:dets.x - 9 + "px",
    y:dets.y - 9 + "px",
    duration:0.5,
   })
   gsap.to( blur , {
    x:dets.x - 150 + "px",
    y:dets.y - 150 + "px",
    duration:0.5
   })
});

// var h4all = document.querySelectorAll("#nav h4")

// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3 
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave", function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid 95c11E"
//         crsr.style.backgroundColor = "#95C11E"
//     })
// });

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,  // Enable markers for debugging
        start: "top -5%",
        end: "top -6%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,  // Enable markers for debugging
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});

gsap.from("#about-us img , #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:"#about-us",
        scroller: "body",
        // markers: true,
        start:"top 70%",
        end:"top 65%",
        scrub : 2
    }
});

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger: {
        trigger:".card",
        scroller: "body",
        // markers: true,
        start:"top 70%",
        end:"top 65%",
        scrub : 3
    }
});

gsap.from("#colon1" , {
    y:-30,
    x:-30,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // marker:true,
        start:"top 55%",
        end: " top 45%",
        scrub: 2
    }
});

gsap.from("#colon2" , {
    y:30,
    x:30,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // marker:true,
        start:"top 95%",
        end: " top 85%",
        scrub: 2
    }
});

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end: " top 70%",
        scrub: 2
    }
})

