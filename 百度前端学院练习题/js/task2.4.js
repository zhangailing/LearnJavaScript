/**
 * Created by Zhang on 2017/1/16.
 */
var promptWrap = $('.prompt-wrap');
var search = $('.search');
var word = promptWrap.getElementsByTagName('li');
var result = [];//提示内容

window.onload = function(){
    for(var i = 1,len = word.length;i < len ;i++){
        $.click(word[i],function(){
            search.value = this.innerHTML;
            clear();
        });
        $.on(word[i],'mouseover',function(){
            word[0].className = '';
            this.className = 'choose';
        });
        $.on(word[i],'mouseout',function(){
            word[0].className = 'choose';
            this.className = '';
        })
    }
}
//显示及获取提示
function showHint(value,e){
    if(window.event){
        var keynum = e.keyCode;       //IE下
    }else if(e.which){
        var keynum = e.which;
    }
    if(value == ''){
        clear();
    }
    if(keynum !==38 && keynum !== 40 && keynum !== 13 && value !=''){
        ajax(
            'prompt.php',
            {
                data:{
                    q:value
                },
                onsuccess:function(responseText ,xhr){
                    clear();
                    word[0].innerHTML = value;
                    if(responseText){
                        promptWrap.style.display = 'block';
                        result =responseText.replace(/\s+/g , '').split(',');
                        for(var i = 0,len = result.length;i <len;i++){
                            word[i+1].innerHTML = result[i];
                        }
                    }
                }
            }
        );
    }
}
//处理上下键及回车
function move(e){
    var rlen = result.length;
    if(rlen){
        if(window.event){
            var keynum = e.keyCode;
        }else if(e.which){
            var keynum = e.which;
        }
        var index = parseInt($('.choose').id[3]); //获取choose元素为第几个
        switch(keynum){
            case 38:     //Up Key
                word[index].className = '';
                if(index === 0){
                    index = rlen;
                }else{
                    index--;
                }
                word[index].className = 'choose';
                search.value = word[index].innerHTML;
                break;
            case 40:      //Down Key
                word[index].className = '';
                if(index === rlen){
                    index = 0;
                }else{
                    index++;
                }
                word[index].className = 'choose';
                search.value = word[index].innerHTML;
                break;
            case 13:      //Enter Key
                clear();
        }
    }
}
function clear(){
    for(var i= 1,len=word.length;i<len;i++){
        word[i].innerHTML = '';
    }
    $('.choose').className = '';
    word[0].className = 'choose';
    result.length = '0';
    promptWrap.style.display = 'none';
}
