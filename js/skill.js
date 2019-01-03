$(document).ready(function () {
    $.ajax({
        url: "./json/msg.json",
        type: "post",
        dataType: "json",
        success: function (data) {
            var str = "";
            for (var i = 0; i < data.skillarr.length; i++) {
                var temp="";
                for(var j=0;j<data.skillarr[i].data.length;j++) {
                    temp+=`
                    <div class="skillblock">
                        <span class="skillname">`+data.skillarr[i].data[j].skillName+`</span><span class="percent">`+data.skillarr[i].data[j].percent+`</span>
                    </div>
                    `
                }
                str+=`
                <div class="block clearfloat">`+temp+`</div>`;
            };
            $(".content").html(str);
        },
        error: function (err) {
            console.log(err);
        }
    })
})