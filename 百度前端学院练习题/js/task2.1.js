/**
 * Created by Zhang on 2017/1/15.
 */
function showHobby(){
    var text = $('.hobby').value;
    text = text.replace(/[\s]+/g,'');
    text = text.replace(/[,，、;；]+/g, ' ');//滤出分隔符
    text = trim(text);
    var hobby = text.split(' ');
    hobby = uniquel(hobby);

    if(!text||hobby.length<1){
        $('.error').innerHTML = '请输入至少一个爱好';
    }
    else if (hobby.length > 10){
        $('.error').innerHTML = '爱好数量不能超过10个';
    }else{
        $('.error').innerHTML = "";
        if($('.result')){
            $('.center').removeChild($('.result'));
        }
            var result = document.createElement('div');
            result.className = 'result';
            var h3 = document.createElement('h3');
            h3.innerHTML = '爱好:';
            result.appendChild(h3);
            for(var i= 0,len = hobby.length;i<len;i++){
                var checkbox = document.createElement("input");
                checkbox.type='radio';
                checkbox.name='hobby';
                result.appendChild(checkbox);
                var data = document.createTextNode(hobby[i]+'');
                result.appendChild(data);
            }
            $('.center').appendChild(result);
        }
}