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




    gsap.to(".ppt3-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt3after = CSSRulePlugin.getRule(".ppt3-background:after"); //get the rule
    gsap.to(ppt3after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
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
            start: "top 70%",
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
            scrub: 1,

        },
        left: "6.145833333333333VW"
    })




    gsap.to(".square-white-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        right: "-2.2916666666666665VW"
    })

    gsap.to(".square-whiteTitle-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "2.7083333333333335VW"
    })



























    /*  ---------------------------        TITLES      ---------------------------------------  */
    /*  ---------------------------        TITLES      ---------------------------------------  */
    /*  ---------------------------        TITLES      ---------------------------------------  */

    gsap.to(".ppt1-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            end: "top 90%",
            // endTrigger: ".ppt2-background-trigger",
            // end: "bottom 100%",
            scrub: 1,

        },
        opacity: 1
    })

    const ppt1Title2Tl = gsap.timeline();
    ppt1Title2Tl.to(".ppt1-title2", {
        opacity: 1
    }).to(".ppt1-title2", {
        opacity: 0
    })

    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: ppt1Title2Tl,
        trigger: ".ppt1-initial-trigger",
        start: "top bottom",
        end: "top 10%",
        scrub: 1
    })




    gsap.to(".ppt2-title", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        opacity: 1
    })

    gsap.from(".ppt2-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        top: "100%",
        opacity: 0
    })


    gsap.from(".ppt2-subtitle", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
        },
        right: "-36vw"
    });







    gsap.to(".ppt3-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "17.6VW",
        opacity: 1
    })
    gsap.to(".ppt3-title2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "20.8VW",
        opacity: 1
    })

    gsap.to(".ppt3-title3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "24.2VW",
        opacity: 1
    })

    gsap.to(".ppt3-subtitle1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "28VW",
        opacity: 1
    })

    gsap.to(".ppt3-subtitle2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "30.5vw",
        opacity: 1
    })

    gsap.to(".ppt3-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "36.71875VW",
        opacity: 1
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
    }).to(".sidebar-marker", {
        top: "20%"
    })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: sidebarMarkerTl,
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        endTrigger: ".ppt3-background-trigger",
        end: "bottom 100%",
        scrub: 1
    })



    $(".sidebar-serije-wrapper").click(function () {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: ".ppt2-background-trigger"
        });
    });


    $(".sidebar-televizija-wrapper").click(function () {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: ".ppt3-background-trigger"
        });
    });



});