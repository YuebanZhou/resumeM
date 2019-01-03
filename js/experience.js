$(document).ready(function () {
    $.ajax({
        url: "./json/msg.json",
        type: "post",
        dataType: "json",
        success: function (data) {
            var str = "";
            for (var i = 0; i < data.exparr.length; i++) {
                var temp="";
                for (var j = 0; j < data.exparr[i].work.length; j++) {
                    temp+=`
                    <div class="sinblock">
                        <div>`+data.exparr[i].work[j].time+`</div>
                        <div>`+data.exparr[i].work[j].objectName+`</div>
                        <div><span class="fir">项目描述：</span><span class="sec">`+data.exparr[i].work[j].objectDetail+`</span></div>
                        <div><span class="fir">项目模块：</span><span class="sec">`+data.exparr[i].work[j].objectModel+`</span></div>
                        <div><span class="fir">负责模块：</span><span class="sec">`+data.exparr[i].work[j].myModel+`</span></div>
                        <div><span class="fir">项目问题：</span><span class="sec">`+data.exparr[i].work[j].myIssue+`</span></div>
                        <div><span class="fir">解决办法：</span><span class="sec">`+data.exparr[i].work[j].solve+`</span></div>
                    </div>
                    `
                }
                str+=`
                <div class="block">
                    <div class="top">
                        <span>`+data.exparr[i].time+`</span><br>
                        <span>`+data.exparr[i].company+`</span>
                    </div>
                    `+temp+`
                </div>
                `
            }
            $(".content").html(str);
        },
        error: function (err) {
            console.log(err);
        }
    })
})