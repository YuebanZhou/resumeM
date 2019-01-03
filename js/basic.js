$(document).ready(function () {
    $.ajax({
        url: "./json/msg.json",
        type: "post",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var str = "";
            for (var i = 0; i < data.msgarr.length; i++) {
                var temp = "";
                for (var j = 0; j < data.msgarr[i].length; j++) {
                    temp += "<span>" + data.msgarr[i][j] + "</span>"
                }
                str += "<div class='block'>" + temp + "</div>"
            };
            $(".content").html(str);
        },
        error: function (err) {
            console.log(err);
        }
    })
})