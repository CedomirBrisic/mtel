$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin);
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



    gsap.to(".ppt4-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt4after = CSSRulePlugin.getRule(".ppt4-background:after"); //get the rule
    gsap.to(ppt4after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        opacity: 0
    })




    gsap.to(".ppt5-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt5after = CSSRulePlugin.getRule(".ppt5-background:after"); //get the rule
    gsap.to(ppt5after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        opacity: 0
    })



    gsap.to(".ppt6-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt6after = CSSRulePlugin.getRule(".ppt6-background:after"); //get the rule
    gsap.to(ppt6after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-backgroundafter-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        opacity: 0
    })



    gsap.to(".footerikonice-container", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".footer-trigger",
            start: "top bottom",
            end: "top 50%",
            scrub: 1
        },
        bottom: "0"
    })

    gsap.to(".footerBlue-container", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".footer-trigger",
            start: "top top",
            end: "top top",
            scrub: 1
        },
        bottom: "0"
    })









    /*    ---------------------------        SNAKES      ---------------------------------------  */
    /*    ---------------------------        SNAKES      ---------------------------------------  */
    /*    ---------------------------        SNAKES      ---------------------------------------  */

    gsap.to(".snake-red-1", {
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


    gsap.to(".snake-blue-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,

        },
        top: "100%"
    })

    gsap.to(".snake-red-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 30%",
            endTrigger: ".ppt3-background-trigger",
            end: "top bottom",
            scrub: 1,

        },
        top: "100%"
    })


    gsap.to(".snake-blue-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top 50%",
            endTrigger: ".ppt3-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        bottom: "100%"
    })

    gsap.to(".snake-red-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top 20%",
            scrub: 1,

        },
        bottom: "100%"
    })

    gsap.to(".whitesnake-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top top",
            scrub: 1,

        },
        left: "100%"
    })

    gsap.to(".snake-blue-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            endTrigger: ".ppt4-background-trigger",
            end: "top top",
            scrub: 1,

        },
        right: "100%"
    })

    gsap.to(".snake-blue-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top 80%",
            endTrigger: ".ppt5-background-trigger",
            end: "top 70%",
            scrub: 1,

        },
        bottom: "100%"
    })


    gsap.to(".snake-red-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top 80%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        left: "100%"
    })

    gsap.to(".whitesnake-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        top: "100%"
    })

    gsap.to(".snake-blue-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        right: "100%"
    })

    gsap.to(".snake-red-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top 90%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        bottom: "100%"
    })

    gsap.to(".snake-red-6", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top 40%",
            endTrigger: ".ppt6-background-trigger",
            end: "top 75%",
            scrub: 1,

        },
        top: "100%"
    })

    gsap.to(".whitesnake-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top 80%",
            endTrigger: ".footer-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "100%"
    })

    gsap.to(".snake-blue-6", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top top",
            endTrigger: ".footer-trigger",
            end: "top top",
            scrub: 1,

        },
        bottom: "100%"
    })

    gsap.to(".snake-red-7", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top 20%",
            endTrigger: ".footer-trigger",
            end: "top top",
            scrub: 1,

        },
        top: "100%"
    })



    // ------------------------------------ WHITESNAKE ------------------------------------

    gsap.to(".snake-white-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            endTrigger: ".ppt2-background-trigger",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "58.05555555555556VW"
    })

    gsap.to(".snake-whiteTitle-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            scrub: 1,

        },
        left: "5.7407407407407405VW"
    })


    gsap.to(".snake-white-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        left: "36.574074074074076VW"
    })

    gsap.to(".snake-whiteTitle-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "5.833333333333333VW"
    })

    gsap.to(".snake-white-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        left: "36vw"
    })

    gsap.to(".snake-whiteTitle-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "17.70377vw"
    })

    
    gsap.to(".snake-white-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        left: "28.98148148148148vw"
    })

    gsap.to(".snake-whiteTitle-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "6.6VW"
    })

    gsap.to(".snake-white-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        left: "28.98148148148148vw"
    })

    gsap.to(".snake-whiteTitle-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "5vw"
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





    gsap.to(".ppt2-title-mobile", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt2-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        opacity: 1
    })
    gsap.to(".ppt2-subtitle-mobile", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
        },
        right: "5.9VW",
        opacity: 1
    });

    gsap.to(".ppt2-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        bottom: "25.37037037037037VW",
        opacity: 1
    })





    gsap.to(".ppt3-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt3-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.9VW",
        opacity: 1
    })
    gsap.to(".ppt3-subtitle1 ", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
        },
        right: "5.9VW",
        opacity: 1
    });

    gsap.to(".ppt3-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        bottom: "25.37037037037037VW",
        opacity: 1
    })



    gsap.to(".ppt4-title1-mobile", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt4-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.9VW",
        opacity: 1
    })
    gsap.to(".ppt4-subtitle1 ", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
        },
        right: "5.9VW",
        opacity: 1
    });

    gsap.to(".ppt4-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        bottom: "25.37037037037037VW",
        opacity: 1
    })






    gsap.to(".ppt5-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt5-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.9VW",
        opacity: 1
    })
    gsap.to(".ppt5-subtitle1 ", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
        },
        right: "5.9VW",
        opacity: 1
    });

    gsap.to(".ppt5-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        bottom: "25.37037037037037VW",
        opacity: 1
    })


    gsap.to(".ppt6-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.9VW",
        opacity: 1
    })
    gsap.to(".ppt6-subtitle1-mobile ", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
        },
        right: "5.9VW",
        opacity: 1
    });

    gsap.to(".ppt6-button1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        bottom: "25.37037037037037VW",
        opacity: 1
    })















    /*  ---------------------------        SIDEBARS      ---------------------------------------  */
    /*  ---------------------------        SIDEBARS      ---------------------------------------  */
    /*  ---------------------------        SIDEBARS      ---------------------------------------  */
    const sidebarEntranceTl = gsap.timeline();
    sidebarEntranceTl.to(".sidebar-serije-wrapper", {
            bottom: 0,
            opacity: 1
        })
        .to(".sidebar-televizija-wrapper", {
            bottom: 0,
            opacity: 1
        })
        .to(".sidebar-calling-wrapper", {
            bottom: 0,
            opacity: 1
        }).to(".sidebar-homephone-wrapper", {
            bottom: 0,
            opacity: 1
        }).to(".sidebar-topponuda-wrapper", {
            bottom: 0,
            opacity: 1
        })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: sidebarEntranceTl,
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        end: "top 80%",
        scrub: 1
    })



    const sidebarMarkerTl = gsap.timeline();
    sidebarMarkerTl.to(".sidebar-marker", {
        left: 0
    }).to(".sidebar-marker", {
        left: "20%"
    }).to(".sidebar-marker", {
        left: "40%"
    }).to(".sidebar-marker", {
        left: "60%"
    }).to(".sidebar-marker", {
        left: "80%"
    })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: sidebarMarkerTl,
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        endTrigger: ".ppt6-backgroundafter-trigger",
        end: "bottom 100%",
        scrub: 1
    })



    $(".sidebar-serije-wrapper").click(function () {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: ".ppt2-sidebar-target"
        });
    });


    $(".sidebar-televizija-wrapper").click(function () {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: ".ppt3-sidebar-target"
        });
    });



    $(".sidebar-calling-wrapper").click(function () {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: ".ppt4-sidebar-target"
        });
    });



    $(".sidebar-homephone-wrapper").click(function () {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: ".ppt5-sidebar-target"
        });
    });

    $(".sidebar-topponuda-wrapper").click(function () {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: ".ppt6-backgroundafter-trigger"
        });
    });

})