gsap.registerPlugin(ScrollTrigger);


/*    ---------------------------        SCREENS      ---------------------------------------  */
/*    ---------------------------        SCREENS      ---------------------------------------  */
/*    ---------------------------        SCREENS      ---------------------------------------  */

gsap.to(".ppt2-background", {
    scrollTrigger: {
        toggleActions: "play pause resume reset",
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        end: "bottom 100%",
        scrub: true
    },
    bottom: "0"
})


var ppt2after = CSSRulePlugin.getRule(".ppt2-background:after"); //get the rule
gsap.to(ppt2after, {
    scrollTrigger: {
        markers: true,
        toggleActions: "play pause resume reset",
        trigger: ".ppt2-backgroundafter-trigger",
        start: "top bottom",
        end: "bottom 100%",
        scrub: true
    },
    opacity: 0
})





/*    ---------------------------        SNAKES      ---------------------------------------  */
/*    ---------------------------        SNAKES      ---------------------------------------  */
/*    ---------------------------        SNAKES      ---------------------------------------  */

gsap.to(".square-red-1", {
    scrollTrigger: {
        toggleActions: "play pause resume reset",
        trigger: ".ppt1-title-trigger",
        start: "top bottom",
        endTrigger: ".ppt2-background-trigger",
        end: "bottom 50%",
        scrub: true,
        
    },
    right: "64vw"
})

























/*  ---------------------------        TITLES      ---------------------------------------  */
/*  ---------------------------        TITLES      ---------------------------------------  */
/*  ---------------------------        TITLES      ---------------------------------------  */
// gsap.to(".ppt1-title", {
//     scrollTrigger: {
//         toggleActions: "play pause resume reset",
//         trigger: ".ppt1-title-trigger",
//         start: "top bottom",
//         end: "bottom 100%",
//         scrub: true
//     },
//     opacity: 1
// })