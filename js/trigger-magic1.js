
$(function(){
    const wi = window.innerHeight;
    $('#product .part-3 .left-banner ul').each(function(){
        $(this).clone().appendTo("#product .part-3 .left-banner");
        $(this).clone().appendTo("#product .part-3 .left-banner");
    });

    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()


        .to("#about h2:nth-child(1)", 100,{scale:"0.5",y:"-100%",opacity: 0.3,},"a")
        .to("#about h2:nth-child(1)", 100,{scale:"0.3",y:"0%",opacity: 0,},"b")

        .to("#about h2:nth-child(2)", 100,{scale:"1",y:"-100%",opacity: 1},"a")
        .to("#about h2:nth-child(2)", 100,{scale:"0.5",y:"-200%",opacity: 0.3},"b")
        .to("#about h2:nth-child(2)", 100,{scale:"0.3",y:"-100%",opacity: 0},"c")

        .to("#about h2:nth-child(3)", 100,{scale:"0.5",y:"-100%",opacity: 0.3},"a")
        .to("#about h2:nth-child(3)", 100,{scale:"1",y:"-200%",opacity: 1},"b")
        .to("#about h2:nth-child(3)", 100,{scale:"0.5",y:"-300%",opacity: 0.3},"c")
        .to("#about h2:nth-child(3)", 100,{scale:"0.3",y:"-100%",opacity: 0},"d")

        .to("#about h2:nth-child(4)", 100,{scale:"0.3",y:"-300%",opacity: 0},"a")
        .to("#about h2:nth-child(4)", 100,{scale:"0.5",y:"-200%",opacity: 0.3},"b")
        .to("#about h2:nth-child(4)", 100,{scale:"1",y:"-300%",opacity: 1},"c")
        .to("#about h2:nth-child(4)", 100,{scale:"0.5",y:"-400%",opacity: 0.3},"d")
        .to("#about h2:nth-child(4)", 100,{scale:"0.3",y:"-300%",opacity: 0},"e")

        .to("#about h2:nth-child(5)", 100,{scale:"0.3",y:"-400%",opacity: 0},"b")
        .to("#about h2:nth-child(5)", 100,{scale:"0.5",y:"-300%",opacity: 0.3},"c")
        .to("#about h2:nth-child(5)", 100,{scale:"1",y:"-400%",opacity: 1},"d")
        .to("#about h2:nth-child(5)", 100,{scale:"0.5",y:"-500%",opacity: 0.3},"e")
        .to("#about h2:nth-child(5)", 100,{scale:"0.3",y:"-400%",opacity: 0},"f")

        .to("#about h2:nth-child(6)", 100,{scale:"0.3",y:"-500%",opacity: 0},"c")
        .to("#about h2:nth-child(6)", 100,{scale:"0.5",y:"-400%",opacity: 0.3},"d")
        .to("#about h2:nth-child(6)", 100,{scale:"1",y:"-500%",opacity: 1},"e")
        .to("#about h2:nth-child(6)", 100,{scale:"0.5",y:"-600%",opacity: 0.3},"f")
        .to("#about h2:nth-child(6)", 100,{scale:"0.3",y:"-500%",opacity: 0},"g")

        .to("#about h2:nth-child(7)", 100,{scale:"0.3",y:"-600%",opacity: 0},"d")
        .to("#about h2:nth-child(7)", 100,{scale:"0.5",y:"-500%",opacity: 0.3},"e")
        .to("#about h2:nth-child(7)", 100,{scale:"1",y:"-600%",opacity: 1},"f")
        .to("#about h2:nth-child(7)", 100,{scale:"0.5",y:"-700%",opacity: 0.3},"g")
        .to("#about h2:nth-child(7)", 100,{scale:"0.3",y:"-600%",opacity: 0},"h")

        .to("#about h2:nth-child(8)", 100,{scale:"0.3",y:"-700%",opacity: 0},"e")
        .to("#about h2:nth-child(8)", 100,{scale:"0.5",y:"-600%",opacity: 0.3},"f")
        .to("#about h2:nth-child(8)", 100,{scale:"1",y:"-700%",opacity: 1},"g")
        .to("#about h2:nth-child(8)", 100,{scale:"0.5",y:"-800%",opacity: 0.3},"h")

        .to("#about h2:nth-child(9)", 100,{scale:"0.3",y:"-800%",opacity: 0},"f")
        .to("#about h2:nth-child(9)", 100,{scale:"0.5",y:"-700%",opacity: 0.3},"g")
        .to("#about h2:nth-child(9)", 100,{scale:"1",y:"-800%",opacity: 1},"h")


        .to("#about h2:nth-child(3)", 100,{scale:"0.3",y:"-200%",opacity: 0})
        .to("#about .img-box img:nth-child(1)", 100,{z:-150,opacity: 0.3,},"a")
        .to("#about .img-box img:nth-child(2)", 100,{z:-0,opacity: 1,},"a")

        .to("#about .img-box img:nth-child(1)", 100,{z:-300,opacity: 0.3,},"b")
        .to("#about .img-box img:nth-child(2)", 100,{z:-150,opacity: 0.3,},"b")
        .to("#about .img-box img:nth-child(3)", 100,{z:-0,opacity: 1,},"b")

        .to("#about .img-box img:nth-child(1)", 100,{z:-500,opacity: 0,},"c")
        .to("#about .img-box img:nth-child(2)", 100,{z:-300,opacity: 0.3,},"c")
        .to("#about .img-box img:nth-child(3)", 100,{z:-150,opacity: 0.3,},"c")
        .to("#about .img-box img:nth-child(4)", 100,{z:-0,opacity: 1,},"c")

        .to("#about .img-box img:nth-child(2)", 100,{z:-500,opacity: 0,},"d")
        .to("#about .img-box img:nth-child(3)", 100,{z:-300,opacity: 0.3,},"d")
        .to("#about .img-box img:nth-child(4)", 100,{z:-150,opacity: 0.3,},"d")
        .to("#about .img-box img:nth-child(5)", 100,{z:-0,opacity: 1,},"d")

        .to("#about .img-box img:nth-child(3)", 100,{z:-500,opacity: 0,},"e")
        .to("#about .img-box img:nth-child(4)", 100,{z:-300,opacity: 0.3,},"e")
        .to("#about .img-box img:nth-child(5)", 100,{z:-150,opacity: 0.3,},"e")
        .to("#about .img-box img:nth-child(6)", 100,{z:-0,opacity: 1,},"e")

        .to("#about .img-box img:nth-child(4)", 100,{z:-500,opacity: 0,},"f")
        .to("#about .img-box img:nth-child(5)", 100,{z:-300,opacity: 0,},"f")
        .to("#about .img-box img:nth-child(6)", 100,{z:-150,opacity: 0.3,},"f")

        .to("#about .img-box img:nth-child(5)", 100,{z:-500,opacity: 0,},"g")
        .to("#about .img-box img:nth-child(6)", 100,{z:-300,opacity: 0.3,},"g")

        .to("#about .img-box img:nth-child(6)", 100,{z:-500,opacity: 0,},"g")
        .to("#about .img-box img:nth-child(7)", 100,{z:-0,opacity: 1,},"g")

        .to("#about .img-box img:nth-child(7)", 100,{z:-500,opacity: 0,},"h")





    ;

    new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: "onLeave",
        duration:wi*5
    })
        .setPin("#about")
        .setTween(wipeAnimation)
        .addTo(controller);



    $(window).resize(function () {
        if (window.innerWidth > 900) {
            $("#intro video source:nth-child(1)").attr("src", "https://mapday.s3.ap-northeast-2.amazonaws.com/pc.webm");
            $("#intro video source:nth-child(2)").attr("src", "https://mapday.s3.ap-northeast-2.amazonaws.com/pc.mp4");
            $("#about .text-box").height($("#about .text-box h2").height());
            $("#intro-video")[0].load();


            // 異붽�
            var tween = TweenMax.staggerFromTo("#product .part-1 .b img", 1, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .b",
                triggerHook: ".3",
                duration: "100%"
            })
                .setTween(tween)
                //.addIndicators()
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .a", 100,{x:"-100%"},{x:"-5%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .a",
                triggerHook: "1",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .c", 50,{x:"300%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .c",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .d", 50,{x:"150%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .d",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .e img", 100,{y:"0%"},{y:"10%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .e",
                triggerHook: "0",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .f .img-box", 100,{x:"200%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .f",
                triggerHook: ".9",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .f img", 100,{rotation:-98},{rotation:360});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .f",
                triggerHook: ".9",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .g img", 100,{y:"100%"},{y:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .g",
                triggerHook: ".9",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.staggerFromTo("#product .part-1 .h h2", 100, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .h",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                //.addIndicators()
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .j", 100,{x:"-100%"},{x:"100%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .j",
                triggerHook: "1",
                duration: "200%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .l img", 100,{scale:0.1},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .l",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .m img", 100,{rotation:0},{rotation:360});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .m",
                triggerHook: "1",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .n img", 100,{webkitFilter:"blur(5px)"},{webkitFilter:"blur(0px)"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .n",
                triggerHook: "1",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);



            //異붽� ��





            var tween = TweenMax.staggerFromTo("#product .part-2 h2", 2, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-2",
                triggerHook: ".6",
                duration: "33%"
            })

                .setTween(tween)
                //.addIndicators()
                .addTo(controller);


            $('#product .part-3 .left-banner ul li .text-box').each(function(){
                var b_size = $('#product .part-3 .left-banner ul li .text-box').outerHeight(true);
                $(this).css({'border-radius':'0 '+b_size/2+'px '+b_size/2+'px '+b_size/2+'px'});
            });

            /*part-1*/
            var tween = TweenMax.fromTo("#work .part-1 .a", 1,{x:"100%"},{x:"5%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .a",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .b", 1,{y:"30%"},{y:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .b",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .c", 1,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .c",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .d", 1,{x:"100%",y:"-50%"},{x:"-10%",y:"-50%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .d",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);
            var tween = TweenMax.fromTo("#work .part-1 .f", 1,{x:"300%"},{x:"-100%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .f",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);
            var tween = TweenMax.fromTo("#work .part-1 .g", 1,{x:"-100%"},{x:"10%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .g",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);
            var tween = TweenMax.fromTo("#work .part-1 .g img", 1,{rotation:0},{rotation:341});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .g",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .h", 1,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .h",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .i", 50,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .i",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .j", 1,{rotation:11,x:"100%"},{rotation:11,x:"40%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .j",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .l img", 100,{y:"0%"},{y:"20%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .l",
                triggerHook: ".5",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .k .text-box", 100,{y:"0%"},{y:"-20%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .k",
                triggerHook: ".5",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .n", 1,{x:"100%",y:"50%"},{x:"0%",y:"50%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .n",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .n img", 1,{rotation:-25},{rotation:190});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .n",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            /*part-2*/
            var tween = TweenMax.fromTo("#work .part-2 .a .text-box", 1,{y:"0%"},{y:"100%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .a",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .d", 1,{x:"-100%"},{x:"30%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .d",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .d img", 1,{rotation:0,y:"-40%"},{rotation:12,y:"-30%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .d",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .e p", 100,{y:"0%"},{y:"300%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .e",
                triggerHook: ".5",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .f", 1,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .f",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)

                .addTo(controller);

            var tween = TweenMax.staggerFromTo("#work .part-2 .g img",100, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .g",
                triggerHook: ".5",
                duration: "300%"
            })

                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .h", 100,{x:"100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .h",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .g .Gmarket", 100,{y:"50%"},{y:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .g .text-box",
                triggerHook: ".5",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .k .img-list", 100,{x:"100%"},{x:"-80%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .k .img-list",
                triggerHook: ".8",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(controller);


            /*part-4*/
            var tween = TweenMax.fromTo("#work .part-4 .a img", 50,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .a",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .c", 50,{x:"-100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .c",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .d", 50,{x:"200%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .d",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .d img", 50,{rotation:-360},{rotation:-19});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .d",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .e", 50,{x:"100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .e",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .g .g-2 .text-box", 50,{y:"0"},{y:"100%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .g .g-2",
                triggerHook: ".7",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .g .g-4 img", 100,{rotation:0,x:"200%"},{rotation:180,x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .g .g-4",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .g .g-5 img", 100,{rotation:0,x:"-100%"},{rotation:180,x:"01%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .g .g-5",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .h", 50,{x:"100%"},{x:"25%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .h",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .i", 50,{x:"-100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .i",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .i img", 50,{rotation:-360},{rotation:9.18});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .i",
                triggerHook: ".8",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .k", 50,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .k",
                triggerHook: "1",
                duration: "50%"
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.staggerFromTo("#work .part-4 .l .fade", 100, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .l",
                triggerHook: ".8",
                duration: "33%"
            })

                .setTween(tween)
                //.addIndicators()
                .addTo(controller);
        }
        /*紐⑤컮��*/
        else {
            $("#intro video source:nth-child(1)").attr("src", "https://mapday.s3.ap-northeast-2.amazonaws.com/mo.webm");
            $("#intro video source:nth-child(2)").attr("src", "https://mapday.s3.ap-northeast-2.amazonaws.com/mo.mp4");
            $("#intro-video")[0].load();
            $("#about .text-box").height($("#about .text-box h2").height());

            // 異붽�
            var tween = TweenMax.staggerFromTo("#product .part-1 .b img", 1, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .b",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)
                //.addIndicators()
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .a", 100,{x:"-100%"},{x:"-5%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .a",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .c", 50,{x:"300%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .c",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .d", 50,{x:"150%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .d",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .e img", 100,{y:"0%"},{y:"-20%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .e",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .f .img-box", 100,{x:"200%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .f",
                triggerHook: "1",
                duration: wi*0.7
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .f img", 100,{rotation:-98},{rotation:360});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .f",
                triggerHook: "1",
                duration: wi*0.7
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .g img", 100,{y:"100%"},{y:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .g",
                triggerHook: ".9",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.staggerFromTo("#product .part-1 .h h2", 100, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .h",
                triggerHook: ".8",
                duration: wi*0.5
            })
                .setTween(tween)
                //.addIndicators()
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .j", 100,{x:"-100%"},{x:"50%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .j",
                triggerHook: "0.8",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .l img", 50,{scale:0.1},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .l",
                triggerHook: ".8",
                duration: wi*0.3
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .m img", 100,{rotation:0},{rotation:360});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .m",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#product .part-1 .n img", 100,{webkitFilter:"blur(5px)"},{webkitFilter:"blur(0px)"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-1 .n",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);



            //異붽� ��



            var tween = TweenMax.staggerFromTo("#product .part-2 h2", 2, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#product .part-2",
                triggerHook: "1",
                duration: wi*0.33
            })

                .setTween(tween)
                //.addIndicators()
                .addTo(controller);

            $('#product .part-3 .left-banner ul li img').click(function(){
                var popo = $(this).parent();
                var popopo = popo.offset().left;
                var powi = window.innerWidth / 2;
                var b_size = $(popo).parent().find('.text-box').outerHeight(true);
                //var powidth = $(this).find('.text-box').jquery.outerHeight();
                if (popopo < powi) {
                    $(popo).addClass("left");
                    $(popo).find('.text-box').css({"left":"50%", "right":"auto"});
                    $(popo).find('.text-box').css({'border-radius':'0 '+b_size/2+'px '+b_size/2+'px '+b_size/2+'px'});
                } else {
                    $(popo).addClass("right");
                    $(popo).find('.text-box').css({"left":"auto", "right":"50%"});
                    $(popo).find('.text-box').css({'border-radius':b_size/2+'px 0 '+b_size/2+'px '+b_size/2+'px'});
                }
                //return result;
                $(popo).addClass("open");
                $(this).parents("#product .part-3 .left-banner").addClass("open");
            });
            $('#product .part-3 .left-banner ul li .text-box').click(function(){
                $("#product .part-3 .left-banner ul li").removeClass("open right left");
                $("#product .part-3 .left-banner").removeClass("open");
            });




            /*part-1*/
            var tween = TweenMax.fromTo("#work .part-1 .a", 1,{x:"100%"},{x:"5%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .a",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .b", 1,{y:"30%"},{y:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .b",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .c", 1,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .c",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .d", 1,{x:100,y:0},{x:"-20px",y:0});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .d",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);
            var tween = TweenMax.fromTo("#work .part-1 .f", 1,{x:"300%"},{x:"-100%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .f",
                triggerHook: ".8",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);
            var tween = TweenMax.fromTo("#work .part-1 .g", 1,{x:"-100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .g",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);
            var tween = TweenMax.fromTo("#work .part-1 .g img", 1,{rotation:0},{rotation:341});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .g",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .h", 1,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .h",
                triggerHook: ".8",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .i", 50,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .i",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .j", 1,{rotation:11,x:"100%"},{rotation:11,x:"40%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .j",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .l img", 100,{y:"0%"},{y:"50%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .l",
                triggerHook: ".8",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .k .text-box", 100,{y:"0%"},{y:"-10%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .k",
                triggerHook: ".5",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .n", 1,{x:"100%",y:"50%"},{x:"0%",y:"50%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .n",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-1 .n img", 1,{rotation:-25},{rotation:190});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-1 .n",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            /*part-2*/
            var tween = TweenMax.fromTo("#work .part-2 .a .text-box", 1,{y:"0%"},{y:"150%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .a",
                triggerHook: ".5",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .d", 1,{x:"-100%"},{x:"30%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .d",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .d img", 1,{rotation:0,y:"-40%"},{rotation:12,y:"-30%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .d",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .e p", 100,{y:"0%"},{y:"300%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .e",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .f", 1,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .f",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)

                .addTo(controller);

            var tween = TweenMax.staggerFromTo("#work .part-2 .g img",100, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .g",
                triggerHook: ".8",
                duration: wi*1
            })

                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .h", 100,{x:"100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .h",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .g .Gmarket", 100,{y:"50%"},{y:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .g .text-box",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-2 .k .img-list", 100,{x:"100%"},{x:"-80%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-2 .k .img-list",
                triggerHook: "1",
                duration: wi*1
            })
                .setTween(tween)
                .addTo(controller);


            /*part-4*/
            var tween = TweenMax.fromTo("#work .part-4 .a img", 50,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .a",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .c", 50,{x:"-100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .c",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .d", 50,{x:"200%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .d",
                triggerHook: ".8",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .d img", 50,{rotation:-360},{rotation:-19});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .d",
                triggerHook: ".8",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .e", 50,{x:"100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .e",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .g .g-2 .text-box", 50,{y:"0"},{y:"300%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .g .g-2",
                triggerHook: ".7",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .g .g-4 img", 100,{rotation:0,x:"200%"},{rotation:180,x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .g .g-4",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .g .g-5 img", 100,{rotation:0,x:"-100%"},{rotation:180,x:"01%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .g .g-5",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .h", 50,{x:"100%"},{x:"25%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .h",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .i", 50,{x:"-100%"},{x:"0%"});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .i",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .i img", 50,{rotation:-360},{rotation:9.18});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .i",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.fromTo("#work .part-4 .k", 50,{scale:.5},{scale:1});
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .k",
                triggerHook: "1",
                duration: wi*0.5
            })
                .setTween(tween)
                .addTo(controller);

            var tween = TweenMax.staggerFromTo("#work .part-4 .l .fade", 100, {opacity: 0}, {opacity: 1,},100);
            var scene = new ScrollMagic.Scene({
                triggerElement: "#work .part-4 .l",
                triggerHook: "1",
                duration: wi*0.33
            })

                .setTween(tween)
                //.addIndicators()
                .addTo(controller);

        }
    }).resize();
    $(window).trigger("resize"); //媛뺤젣濡� �몄텧�섎뒗 �⑥닔
});

