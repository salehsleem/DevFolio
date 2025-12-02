///////////////////////////////////p15 , p16 , p17

let spaceFromTop = $("#ABOUT").offset().top;
let heightOfNav = $("nav").outerHeight();
console.log(heightOfNav);
console.log(spaceFromTop);

$(window).scroll(function () {
    if ($(window).scrollTop() > spaceFromTop - heightOfNav) {
        $("nav").css("backgroundColor", "gray");
        $(".backToTop").fadeIn(1000).css("display", "flex");
    }
    else {
        $("nav").css("backgroundColor", "transparent");
        $(".backToTop").fadeOut(1000);
    }
})

$(".backToTop").click(function () {
    // $(window).scrollTop(0)
    $("html , body").animate({ scrollTop: 0 }, 3000);
})


$("nav ul a").click(function () {
    let id = $(this).attr("href");
    // console.log(id);
    let spaceToTop = $(id).offset().top;

    $("html , body").animate({ scrollTop: spaceToTop }, 2000)
})

////////////p18 , 19
window.addEventListener("load", function () {
    $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "scroll");
    });

})

    // ==



    // document.ready faster from window.load
    $(document).ready(function () {
        $(".loading").fadeOut(1000, function () {
            $("body").css("overflow", "scroll");
        });

        // p19
        $(".colorBox span").eq(0).css("backgroundColor", "rgb(255,0,0)");
        $(".colorBox span").eq(1).css("backgroundColor", "rgb(0,255,0)");
        $(".colorBox span").eq(2).css("backgroundColor", "rgb(0,0,255)");
        $(".colorBox span").eq(3).css("backgroundColor", "yellow");
        $(".colorBox span").eq(4).css("backgroundColor", "black");

        $(".divicon").click(function () {

            let spaceLeft = $(".colorBox").css("left");
            console.log(spaceLeft);

            let widthDiv = $(".colorBox").innerWidth();

            if (spaceLeft == "0px") {
                $(".colorBox").animate({ left: -widthDiv }, 1000);
            }
            else {
                $(".colorBox").animate({ left: 0 }, 1000);
            }

        })

        $(".colorBox span").click(function () {
            let currentColor = $(this).css("backgroundColor");
            $("h2 , h1 , h3").css("color", currentColor);
            // $("p").css("backgroundColor", currentColor);
        })

    })




