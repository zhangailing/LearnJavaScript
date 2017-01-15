/**
 * Created by Zhang on 2017/1/15.
 */
//要求用倒计时表示距指定输入格式YYYY-MM-DD日期的时间
//倒计时格式xx天xx小时xx分xx秒
function countTime(){
    var text = $('.myText').value;
    text = trim(text);//去除多余空格
    var time = text.split('-');

    if(time.length !== 3){ //错误处理
        $('.error').innerHTML = '请按照特定的格式YYYY-MM-DD输入一个未来时间';
    }
    else{
        var endDate = new Date();
        endDate.setFullYear(time[0],time[1]-1,time[2]);
        endDate.setHours(0,0,0,0);

        $('.error').innerHTML='';//删除旧元素
        if($('.result')){
            $('.center').removeChild($('.result'));
        }

        t = setTimeout('countTime()',1000);//一秒执行一次
        var today =new Date();
        var diff = endDate - today;//距离毫秒数

        if(diff <= 0){
            $('.error').innerHTML = "请输入一个将来的时间";
            clearTimeout(t);
            return ;
        }
       //构造距离day,hour,min,sec
        var p_diffDay = diff/(24*60*60*1000);
        var diffDay = Math.floor(p_diffDay);
        var p_diffHour = (p_diffDay - diffDay)*24;
        var diffHour = Math.floor(p_diffHour);
        var p_diffMin = (p_diffHour - diffHour)*60;
        var diffMin = Math.floor(p_diffMin);
        var p_diffSec = (p_diffMin - diffMin)*60;
        var diffSec = Math.floor(p_diffSec);
        //绘制结果
        var result = document.createElement('div');
        result.className = 'result';
        $('.center').appendChild(result);
        var h3 = document.createElement('h3');
        h3.innerHTML = '倒计时：';
        result.appendChild(h3);
        var pTime = document.createElement('p');
        pTime.innerHTML = '距离：'+time[0]+'年'+time[1]+'月'+time[2]+'日还有'+diffDay+'天'+diffHour+'时'+diffMin+'分'+diffSec+'秒';
        result.appendChild(pTime)
    }
}
function reset(){
    clearTimeout(t);
    $('.error').innerHTML='';
    $('.myText').value = '';
    if($('.result')){
        $('.center').removeChild($('.result'));
    }
}

