(function (window, undefined) {

    // variables
    var 
        adWidth,
        adHeight,
        cta_tl,
        tl,
        anim_tl,
        cloud_tl,
        // time constants
        time_xxs = 0.1,
        time_xs = 0.2,
        time_sm = 0.3,
        time_md = 0.4,
        time_lg = 0.6,
        time_xl = 0.95,
        time_xxl = 1,
        // flags
        isFinished = false,
        popUp_trigger,
        popUp_container;

    /**
     * Starts main timeline (tl) animation
     */
    function playAnim() {
        // Main timeline
        tl
            // --------------
            // begin: Reseting tweens here to starting values
            .set(ad, {visibility: 'visible'})

            // end: reset --------------
            
            // --------------
            // main animation
            // --------------
            .addLabel("fr1")
            //.from(logo_super_g, {duration:1.5, ease: "steps(12)", x: 696 }, "fr1")
            .from(device, {duration:time_xxl, x: "+=40", opacity:0, ease: "Power3.easeOut"}, "fr1+=0.2")
            .from(".txt_line_01", {duration:time_xxl, x: "-=40", opacity:0, ease: "Power3.easeOut", stagger:0.5}, "fr1+=0.2")
            .from(subhead_01, {duration: time_xxl, opacity:0, ease:"Power3.easeOut"}, "fr1+=0.6")

        
            .addLabel("fr2")
            .to([".txt_line_01", subhead_01], {duration: time_xxl, opacity:0, ease:"Power3.easeOut"}, "fr2+=2")
            .from(".txt_line_02", {duration:time_xxl, x: "-=40", opacity:0, ease: "Power3.easeOut", stagger:0.5}, "fr2+=2.4")
            .from(subhead_02, {duration: time_xxl, opacity:0, ease:"Power3.easeOut"}, "fr2+=2.8")
        
        
            .addLabel("fr3")
            .to([".txt_line_02", subhead_02], {duration: time_xxl, opacity:0, ease:"Power3.easeOut"}, "fr3+=2")
            .from(".txt_line_03", {duration:time_xxl, x: "-=40", opacity:0, ease: "Power3.easeOut", stagger:0.5}, "fr3+=2.4")
            .from(subhead_03, {duration: time_xxl, opacity:0, ease:"Power3.easeOut"}, "fr3+=2.8")

        
            .addLabel("fr4")


        ;
        
    }

    
    /**
     * 
     */
    function registerListeners() {

        // CTA event listeners
        hotspot.addEventListener("mouseover", cta_onOver, false);
        hotspot.addEventListener("mouseout", cta_onOut, false);
        popUp_trigger.addEventListener("click", legal_onClick, false);
        popUp_container.addEventListener("click", legal_X_onClick, false);
        
        // Listens to whether the main HTML element to be rady to start the animations
        document.addEventListener(
            "readystatechange",
            function() {
                if (document.readyState === "complete") {
                    playAnim();
                }
            },
            false
        );
    }

    /**
     * Mouseover Handler for CTA 
     */
    function cta_onOver() {
        if (isFinished) {
            //var cta_tl = new TimelineMax();
            var cta_tl = gsap.timeline();
        }
    }

    /**
     * Mouseout Handler for CTA
     */
    function cta_onOut() {
        if (isFinished) {
            //var cta_tl = new TimelineMax();
            var cta_tl = gsap.timeline();
        }
    }

    /**
     * Click Handler for Legal Pop Up opens
     */
    function legal_onClick() {
        document.getElementById("legal_popUp_container").style.visibility = "visible";
    }
     
    /**
     * Click Handler for Legal Pop Up closes
     */
    function legal_X_onClick() {
        document.getElementById("legal_popUp_container").style.visibility = "hidden";
    }

    /**
     * Initializes Ad, register events, starts animation initial values
     */
    function init() {
        popUp_trigger = document.getElementById("legal_popUp_hotspot");
        popUp_container = document.getElementById("legal_popUp_container");

        registerListeners();
        
        adWidth = document.getElementById('ad').clientWidth;
        adHeight = document.getElementById('ad').clientHeight;
    
        cta_tl = gsap.timeline({align: 'start'});
        
        tl = gsap.timeline({onComplete: completeMainAnimation});
            
        // Exports our tl to global
        window.tl = tl;  
                
    }

    function completeMainAnimation() {
        isFinished = true;
    }

    // initializes the ad values
    init();

})(this);
