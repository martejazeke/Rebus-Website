gsap.from(".slide-1 .content", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".who-we-are",
        start: "top 20%",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".horizontal-container", {
    x: "-50%",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".who-we-are",
        start: "top top",
        end: "+=700vh", 
        scrub: 2, 
        pin: true
    }
});