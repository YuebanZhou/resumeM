$(document).ready(function () {
    var imgh = $(".imgbox").height();
    $(".banner").height(imgh)
    var i = 0;
    var imgw = $(".imgbox li").width();
    var timer = setInterval(function () {
        i += 1;
        if (i > 4) {
            i = 0;
        }
        var str = "-" + i * imgw + "px"
        $(".imgbox").css({
            "left": str
        });
        $(".dotbox li").each(function () {
            $(this).removeClass("active");
            if ($(this).index() == i) {
                $(this).addClass("active")
            }
        })
    }, 3000);
    var iconw = $(".iconbox li").width() + "px";
    $(".iconbox li").css({
        "height": iconw,
        "line-height": iconw
    });
    $(".iconbox li").eq(0).on("click", function () {
        window.location.href = "./index.html"
    });
    $(".iconbox li").eq(1).on("click", function () {
        window.location.href = "./basic.html"
    });
    $(".iconbox li").eq(2).on("click", function () {
        window.location.href = "./experience.html"
    });
    $(".iconbox li").eq(3).on("click", function () {
        window.location.href = "./skill.html"
    });
    $(".iconbox li").eq(4).on("click", function () {
        window.location.href = "./contact.html"
    });
    $(".iconbox li").eq(5).on("click", function () {
        window.location.href = "./link.html"
    })
})