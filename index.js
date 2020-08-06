$(document).ready(function () {

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
            scrub: 1
        },
        bottom: "0"
    })


    var ppt2after = CSSRulePlugin.getRule(".ppt2-background:after"); //get the rule
    gsap.to(ppt2after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        opacity: 0
    })





    /*    ---------------------------        SNAKES      ---------------------------------------  */
    /*    ---------------------------        SNAKES      ---------------------------------------  */
    /*    ---------------------------        SNAKES      ---------------------------------------  */
    gsap.to(".square-red-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            endTrigger: ".ppt2-background-trigger",
            end: "bottom 50%",
            scrub: 1,

        },
        right: "64%"
    })



    gsap.to(".square-blue-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 78%",
            end: "bottom 70%",
            scrub: 1,

        },
        top: "100%"
    })


    gsap.to(".square-white-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            endTrigger: ".ppt2-background-trigger",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "69.84375VW"
    })

    gsap.to(".square-whiteTitle-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            // endTrigger: ".ppt2-background-trigger",
            // end: "bottom 100%",
            scrub: 1,

        },
        left: "6.145833333333333VW"
    })
























    /*  ---------------------------        TITLES      ---------------------------------------  */
    /*  ---------------------------        TITLES      ---------------------------------------  */
    /*  ---------------------------        TITLES      ---------------------------------------  */
    gsap.to(".ppt1-title2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 75%",
            end: "top 50%",
            scrub: 1

        },
        opacity: 0
    })







    /*  ---------------------------        SIDEBARS      ---------------------------------------  */
    /*  ---------------------------        SIDEBARS      ---------------------------------------  */
    /*  ---------------------------        SIDEBARS      ---------------------------------------  */

    const sidebarEntranceTl = gsap.timeline();
    sidebarEntranceTl.to(".sidebar-serije-wrapper", {
            left: 0,
            opacity: 1
        })
        .to(".sidebar-televizija-wrapper", {
            left: 0,
            opacity: 1
        })
        .to(".sidebar-calling-wrapper", {
            left: 0,
            opacity: 1
        }).to(".sidebar-homephone-wrapper", {
            left: 0,
            opacity: 1
        }).to(".sidebar-topponuda-wrapper", {
            left: 0,
            opacity: 1
        })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: sidebarEntranceTl,
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        end: "bottom 100%",
        scrub: 1
    })



    const sidebarMarkerTl = gsap.timeline();
    sidebarMarkerTl.to(".sidebar-marker", {
        top: 0
    })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: sidebarMarkerTl,
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        end: "bottom 100%",
        scrub: 1
    })



    $(".sidebar-serije-wrapper").click(function () {
        gsap.to(window, {
            duration: 1,
            scrollTo: ".ppt2-backgroundafter-trigger"
        });
    });



});