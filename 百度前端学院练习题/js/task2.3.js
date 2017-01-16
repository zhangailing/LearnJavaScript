/**
 * Created by Zhang on 2017/1/15.
 */
window.onload = function () {
    var prev = $('#prev');
    var next = $('#next');
    var list = $('.list');
    var allButton = document.getElementById('lightButton');
    var button =allButton.getElementsByTagName('li');
    var index = 0;

    function showButton() {         // 显示小圆点
        for (var i = 0, len = button.length; i < len; i++){
            if(hasClass(button[i],'light')){
                removeClass(button[i],'light');
            }
        }
        addClass(button[index], 'light');
    }

    var animated = false;            // 是否正在进行切换

    function animate(offset) {       // 图片切换
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;              // 切换总时间
        var interval = 5;            // 切换间隔
        var speed = offset / (time / interval);    // 每次切换位移量

        function go () {
            if (   (speed < 0 && parseInt(list.style.left) > newLeft)
                || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                list.style.left = newLeft + 'px';
                if (newLeft >= 0) {
                    list.style.left = -3600 + 'px';
                }
                else if (newLeft <= -4200) {
                    list.style.left = -600 + 'px';
                }
                animated = false;
            }
        }
        go();
    }

    $.click(prev, function () {     // 前进后退按钮
        if (!animated) {
            animate(600);
            index--;
            if (index === -1) {
                index = 5;
            }
            showButton();
        }
    });
    $.click(next, function () {
        if (!animated) {
            animate(-600);
            index++;
            if (index === 6) {
                index = 0;
            }
            showButton();
        }
    });
    addEvent(allButton,"click",function(event){
        if (!animated) {
            var toIndex = parseInt(event.target.getAttribute('index'));
            if (toIndex === index) {
                return;
            }
            animate((toIndex - index) * (-600));
            index = toIndex;
            showButton();
        }
    });
};

var timer;
function playASC() {          // 正序播放
    if (timer) {
        stop();
    }
    var next = $('#next');
    timer = setInterval(function () {
        next.click();
    }, 1000);
}

function playDESC() {          // 逆序播放
    if (timer) {
        stop();
    }
    var prev = $('#prev');
    timer = setInterval(function () {
        prev.click();
    }, 1000);
}

function stop() {
    clearInterval(timer);
}