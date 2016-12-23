/**
 * Created by Administrator on 2016/12/18.
 */
var checkBoxDom=null;
var radioBoxDom=null;

window.onload=function(){
    checkBoxDom=document.getElementById("checkboxUl");
    radioBoxDom=document.getElementById("radioUl");
    EventUtil.addEvent(checkBoxDom,"click",onCheckBoxClick);
    EventUtil.addEvent(radioBoxDom,"click",onRadioClick);
}
var EventUtil={
    addEvent:function(obj,type,fn){
        if(obj.attachEvent){
            obj['e'+type+fn]=fn;
            obj[type+fn]=function(){obj['e'+type+fn](window.event);}
            obj.attachEvent('on'+type,obj[type+fn]);
        }
        else
            obj.addEventListener(type,fn,false);
    },
    hasClass:function(dom,className){
        var allClass =dom.getAttribute("class");
        if(allClass.indexOf(className)!=-1){//已有class
            return true;
        }
        else
            return false;
    },
    addClass:function(dom,className){
        var cls=dom.getAttribute("class");
        dom.setAttribute("class",cls+" "+className);
    },
    removeClass:function(dom,className){
        if(EventUtil.hasClass(dom,className)){
            var allClass=dom.getAttribute("class");
            var index=allClass.indexOf(className);
            var length=className.length;
            var index2=index+length;
            var str1=allClass.substring(0,index);
            var str2=allClass.substring(index2);

            dom.setAttribute("class",str1+str2)
        }
        else
            return;
    },
}

function onCheckBoxClick(event){
    var target=event.target;
    var name=target.getAttribute("name");
    if(name!="checkItem"){
        return;
    }
    //检测选中状态
    if(EventUtil.hasClass(target,"box-check")){
        EventUtil.removeClass(target,"box-check");
    }else{
        EventUtil.addClass(target,"box-check");
    }
}
function onRadioClick(event){
    var target=event.target;
    var name=target.getAttribute("name");
    if(name!="radioItem"){
        return;
    }
    var childs=document.getElementsByName("radioItem");
    for(var i=0;i<childs.length;i++){
        EventUtil.removeClass(childs[i],"radio-check");
    }
    EventUtil.addClass(target,"radio-check");
}