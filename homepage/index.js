	var cursor = document.querySelector('#cursor');
document.addEventListener("mousemove", (dets) => {
    //dets is used when when our mouse go any place we know that where is our mouse in console
    cursor.style.left = dets.x + 30 + "px";
    cursor.style.top = dets.y + "px";
})

var cursorbloor = document.querySelector('#cursorbloor');
document.addEventListener("mousemove", (dets) => {
    //dets is used when when our mouse go any place we know that where is our mouse in console
    cursorbloor.style.left = dets.x - 250 + "px";
    cursorbloor.style.top = dets.y - 250 + "px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scoller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    })

    element.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #fff";
        cursor.style.backgroundColor = "#95c11e";
    })

})

gsap.from("#page3 img, #about", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page3",
        scroll: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2,


    }

})

gsap.from(".cards", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".cards",
        scroll: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2

    }

})

gsap.from("#quote1", {
    x: -70,
    y: -70,
    scrollTrigger: {
        trigger: "#quote1",
        scroll: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#quote2", {
    x: 70,
    y: 70,
    scrollTrigger: {
        trigger: "#quote1",
        scroll: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("page5 h4", {
    y: 50,
    scrollTrigger: {
        trigger: "#page5 h4",
        scroll: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})

