$(document).ready(() => $("p").hide())

$(document).ready(() => {
    $("#button1").click(() => $("#p1").animate({
        height: 'toggle'
    }));

    $("#button2").click(() => $("#p2").animate({
        height: 'toggle'
    }));

    $("#button3").click(() => $("#p3").animate({
        height: 'toggle'
    }));

    $("#button4").click(() => $("#p4").animate({
        height: 'toggle'
    }));

    $("#button5").click(() => $("#p5").animate({
        height: 'toggle'
    }));
    $("#button10").click(() => $("#p10").animate({
        height: 'toggle'
    }));

    $("#button6").click(() => $("#p6").animate({
        height: 'toggle'
    }));

    $("#button7").click(() => $("#p7").animate({
        height: 'toggle'
    }));

    $("#fixed").click(() => {
        $("html, body").animate({
            scrollTop: 10
        }, "slow");
        return false
    });


})