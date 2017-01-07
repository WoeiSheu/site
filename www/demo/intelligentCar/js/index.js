function init() {
    if($(window).width() <= 960) {
        $("div.main h2.sub-header").text("Welcome to FICC of BIT.");
        $('#content').append('<h2 class="sub-header">通知公告</h2>');
        loadInformation("information");
        $('#content').append('<h2 class="sub-header">值班情况</h2>');
        loadDuty();
        $('#content').append('<h2 class="sub-header">历届获奖</h2>');
        loadAward();
        $('#content').append('<h2 class="sub-header">车队成员</h2>');
        loadMembers();
        $('#content').append('<h2 class="sub-header">风云人物</h2>');
        loadHonoredPeople();
        $('#content').append('<h2 class="sub-header">加入我们</h2>');
        loadJoinUs();
    } else {
        $("div.main h2.sub-header").text("通知公告");
        loadInformation("information");
    }
}
init();

$("#contact").popover({
    trigger: "click",
    animation: "true",
    placement: "right",
    title: "Contact",
    content: "Please contact us by bit_smartcar@163.com."
});

$("#arrangement").click(function() {
    $("div.main h2.sub-header").text("近期安排");
    $('#content').empty();
    loadInformation("information");
});
$("#duty").click(function () {
    $("div.main h2.sub-header").text("值班情况");
    $('#content').empty();
    loadDuty();
});

$("#award").click(function() {
    $("div.main h2.sub-header").text("历届获奖");
    $('#content').empty();
    loadAward();
});

$("#members").click(function() {
    $("div.main h2.sub-header").text("车队成员");
    $('#content').empty();
    loadMembers();
});

$("#honoredPeople").click(function() {
    $("div.main h2.sub-header").text("风云人物");
    $('#content').empty();
    loadHonoredPeople();
});

$("#joinUs").click(function() {
    $("div.main h2.sub-header").text("加入我们");
    $('#content').empty();
    loadJoinUs();
});

function loadInformation(content) {
    $('#content').append('<div class="information">');
    $.ajax({
        async: false,
        type:"GET",
        url:"./data/"+content+".json",
        dataType:"json",
        success: function(data){
            $.each( data["items"],function(k,v) {
                var str = "";
                str += "<ul><h3>";
                str += (k + "</h3>");
                for( var i = 0; i < v.length; i++ ) {
                    str += ("<li>" + v[i]+ "</li>");
                }
                str += "</ul>";
                $('#content').append(str);
            });
        }
    });
    $('#content').append('</div>');
}
function loadDuty() {

}

function loadAward() {
    var str = '<img src="./data/award.jpg"/>'
    $('#content').append(str);
}

function loadMembers() {

}
function loadHonoredPeople() {
    var str = '<div id="myCarousel" class="carousel slide">';
    str += '<ol class="carousel-indicators">\
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\
    <li data-target="#myCarousel" data-slide-to="1"></li>\
    <li data-target="#myCarousel" data-slide-to="2"></li>\
    <li data-target="#myCarousel" data-slide-to="3"></li>\
    <li data-target="#myCarousel" data-slide-to="4"></li>\
    <li data-target="#myCarousel" data-slide-to="5"></li>\
    <li data-target="#myCarousel" data-slide-to="6"></li>\
    <li data-target="#myCarousel" data-slide-to="7"></li>\
    <li data-target="#myCarousel" data-slide-to="8"></li>\
    </ol>';
    //Carousel items
    str += '<div class="carousel-inner">\
    <div class="active item">\
        <img src="./data/imgs/year_1.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第一届飞思卡尔智能车比赛</h4>\
            <p>此图为***学长和***学长的基情写照</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_2.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第二届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_3.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第三届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_4.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第四届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_5.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第五届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_6.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第六届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_7.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第七届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_8.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第八届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    <div class="item">\
        <img src="./data/imgs/year_9.jpg" alt=""/>\
        <div class="carousel-caption">\
            <h4>第九届飞思卡尔智能车比赛</h4>\
            <p>此图为Balabala......</p>\
        </div>\
    </div>\
    </div>';
    //Carousel nav
    str += '<a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>\
    <a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>';

    $('#content').append(str);

    $('.carousel').carousel({
        interval: 1600
    });
}
function loadJoinUs() {
    var str = "<p>"
    str += '"飞思卡尔"杯全国大学生智能车赛由高等学校自动化专业教学指导分委员会主办，飞思卡尔半导体公司协办，首届比赛由清华大学承办，采用邀请赛方式。比赛以迅猛发展的汽车电子为背景，涵盖了控制、模式识别、传感技术、电子、电气、计算机、机械等多个学科交叉的科技创意性比赛，旨在培养大学生对知识的把握和创新能力，以及从事科学研究的能力。';
    str += "</p><p>";
    str += '北京理工大学智能车俱乐部由在校学生中智能赛车技术兴趣爱好者组成。俱乐部重视学生创新精神和实践能力培养，积极发挥学生的主观能动性，鼓励学生致知于行大胆探索。在机械与车辆学院汽车电子技术创新中心的指导下，经过几年来的传承与发展，智能车俱乐部取得了卓越的进步，多次代表学校在“飞思卡尔”杯智能汽车竞赛中取得斩获佳绩。'
    str += "</p>"
    $('#content').append(str);
}
