/**
 * Created by Aleen-Zhang on 2017/1/13.
 */
/*text 1*/
//判断arr是否是一个数组，返回一个布尔值
function isArray(arr){
    return Object.prototype.toString.call(arr) === '[object Array]'
}
var arr1=[1,2,3,4];
console.log(isArray(arr1));

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
    return Object.prototype.toString.call(arr) === '[object Function]'
}
var fun=function(){
};
console.log(isFunction(fun));

/*text 2*/
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src){
    var clone=src;
    //日期
    if(src instanceof Date){
        clone=new Date(src.getTime());
        return clone;
    }
    //数组
    if(src instanceof Array){
        clone=[];
        for(var key in src){
            clone[key]=cloneObject(src[key]);
        }
        return clone;
    }
   //Object
    if(src instanceof Object){
        clone={};
        for(var key in src){
            if(src.hasOwnProperty(key)){ //忽略继承属性
                clone[key]=cloneObject(src[key]);
            }
        }
        return clone;
    }
    //数字、字符串、布尔
    return clone;
}
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;//浅复制，srcObj改变会影响abObj
var tarObj = cloneObject(srcObj);//深复制，srcObj改变不会影响tarObj

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);
console.log(tarObj.b.b1[0]);

/*text3*/
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
//法一
function uniquel(array){
    var n=[];//新建一个临时数组
    for(var i=0;i<array.length;i++){
        //如果当前数组的第i个已经保存进了临时数组，则跳过
        //否则把当前项push到临时数组里
        if(n.indexOf(array[i]) == -1) n.push(array[i]);
    }
    return n;
}
//法一改进版，IE8以下包括IE8不支持indexof
function uniquel(array){
    var n=[];//新建一个临时数组

    if(!Array.prototype.indexOf){
        //新增indexof方法
        Array.prototype.indexOf=function(item){
            var result = -1;a_item = null;
            if(this.length == 0){
                return result;
            }
            for(var i= 0,len = this.length ;i<len;i++){
                a_item = this[i];
                if(a_item === item){
                    result = i;
                    break;
                }
            }
            return result;
        }
    }

    for(var i=0;i<array.length;i++){
        //如果当前数组的第i个已经保存进了临时数组，则跳过
        //否则把当前项push到临时数组里
        if(n.indexOf(array[i]) == -1) n.push(array[i]);
    }
    return n;
}
var a=[1,2,1,2,3,4];
var b=uniquel(a);
console.log(b);
//text 3
//遍历去除字符串头部和尾部的空白字符
function simpleTrim(str){
    function isEmpty(c){
        return /\s/.test(c);
    }
    var len = str.length;
    for(var i=0;i<len && isEmpty(str.charAt(i));i++);
    if(i === len){
        return '';
    }
    for(var j=len;j && isEmpty(str.charAt(j-1));j--);
    return str.substring(i,j);
}
//正则去除字符串头部和尾部的空白字符
function trim(str){
    return str.replace(/^\s|\s$/,'');
}
var str = '   hi!  ';
str = trim(str);
console.log(str);

//text4
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr,fn){
    for(var i= 0,len=arr.length;i<len;i++){
        fn(arr[i],i);
    }
}
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

//text5
// 获取一个对象里面第一层元素的数量，返回一个整数
/*
 * getObjectLength 在for in的时候，要了解在IE9以下，有枚举bug。
 * a = {toString:1}时，for in不出toString这个key。
 * 查找关于propertyIsEnumerable的使用方法，来判断
 * 'toString' 'toLocaleString' 'valueOf' 'hasOwnProperty' 'isPrototypeOf' 'propertyIsEnumerable' ‘constructor'
 * 这几个不可枚举(for in)出来的key
 */
function getObjectLength(obj){
    var element=0;
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            element++;
        }
    }
    return element;
}
var obj={
    a:1,
    b:2,
    c:{
        c1:3,
        c2:4
    }
};
console.log(getObjectLength(obj));
//text6
//判断是否为邮箱地址
function isEmail(emailStr) {
    // return (/^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$/i).test(emsilStr);
    return emailStr.search(/^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$/i) !== -1;
}
//判断是否为手机号
function isMobilePhone(phone) {
    phone = phone + '';
    // return (/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/).test(phone);
    return phone.search(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) !== -1;//search失败返回-1
}
//text7
function hasClass(element,className){
    var name=element.className.match(/\s+/g)||[];
    if(name.indexOf(className)!== -1){
        return true;
    }
}
// 为element增加一个样式名为newClassName的新样式
function addClass(element,newClassName){
    if(!hasClass(element,newClassName)){
        element.className=trim(element.className + ' '+newClassName);
    }
}
// 移除element中的样式oldClassName
function removeClass(element,oldClassName){
    if(hasClass(element,newClassName)){
        element.className=trim(element.className.replace(oldClassName,''));
    }
}
//判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element,siblingNode){
    return element.parentNode === siblingNode.parentNode;
}
// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
//getBoundingClientRect()兼容性不好
function getPosition(element){
    var x=0;
    var y=0;
    var current=element;
    while(current!=null){
        x+=current.offsetLeft;
        y+=current.offsetTop;
        current=current.offsetParent;
    }
    if(document.compatMode=="BackCompat"){
        var elementScrollLeft=document.body.scrollLeft;
        var elementScrollTop=document.body.scrollTop;
    }else{
        var elementScrollLeft=document.documentElement.scrollLeft;
        var elementScrollTop=document.documentElement.scrollTop;
    }
    x -= elementScrollLeft;
    y -= elementScrollTop;
    return{
        x:x,
        y:y
    }
}
/*
//text8 实现一个简单的Query
function $(selector) {

}
// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象*/
//法一
function $(selector){
    var ele = document;
    var sele=selector.replace(/\s+/,' ').split(' ');//去除多余空格并分割
    for(var i= 0,len=sele.length;i<len;i++){
        switch (sele[i][0]){ //从子节点中查找
            case '#':
                ele=ele.getElementById(sele[i].substring(1))[0];
                break;
            case '.':
                ele=ele.getElementsByClassName(sele[i].substring(1))[0];
                break;
            case '[':
                var valueLoc = sele[i].indexOf('=');
                var temp = ele.getElementsByTagName('*');
                var tLen = temp.length;
                if(valueLoc!== -1){//有属性有值
                    var key =sele[i].substring(1,valueLoc);
                    var value =sele[i].substring(valueLoc + 1,sele[i].length - 1);
                    for(var j=0;j<tLen;j++){
                        if(temp[j][key] === value){
                             ele = temp[j];
                             ele=temp[j];
                            break;
                        }
                    }
                }
                else{
                    var key =sele[i].substring(1,sele[i].length -1);
                    for(var j=0;j<tLen;j++){
                        if(temp[j][key]){
                            ele=temp[j];
                            break;
                        }
                    }
                }
                break;
            default :
                ele = ele.getElementsByTagName(sele[i])[0];
        }
    }
    if(!ele){
        ele = null;
    }
    return ele;
}
//法二
// $的依赖函数，选择器函数
function VQuery(selector,root){
    var elements = [];//保存结果节点的数组
    var allChildren = null;//用来保存获取到的临时节点数组
    root = root || document;//selector的父元素，没有root,则赋值document
    switch (selector.charAt(0)){
        case "#"://ID选择器
            elements.push(root.getElementById(selector.substring(1)));
            break;
        case "."://class选择器
            if(root.getElementsByClassName){//标准
                elements = root.getElementsByClassName(selector.substring(1));
            }else{//兼容低版本浏览器
                var reg = new RegExp("\\b"+selector.substring(1)+"\\b");
                allChildren = root.getElementsByTagName("*");
                for(var i= 0,len=allChildren.length;i<len;i++){
                    if(reg.test(allChildren[i].className)){
                        elements.push(allChildren[i]);
                    }
                }
            }
            break;
        case "["://属性选择器
            if(selector.indexOf("=") === -1){ //只有属性没有值
                allChildren = root.getElementsByTagName("*");
                for(var i= 0,len=allChildren.length;i<len;i++) {
                    if (allChildren[i].getAttribute(selector.slice(1, -1)) != null) {
                        elements.push(allChildren[i]);
                    }
                }
            }else{//既有属性又有值
                var index = selector.indexOf("=");//缓存=出现的索引位置
                allChildren=root.getElementsByTagName("*");
                for(var i= 0,len=allChildren.length;i<len;i++){
                    if(allChildren[i].getAttribute(selector.slice(1,index)) === selector.slice(index+1,-1)){
                        elements.push(allChildren[i]);
                    }
                }
            }
            break;
        default://tagName
             elements = root.getElementsByTagName(selector);
    }
    return elements;
}
//模仿jquery的$选择符
function $(selector){
    if(selector == document){
        return document;
    }
    selector =selector.trim();
    if(selector.indexOf(" ") !== -1){
        var selectorArr = selector.split(/\s+/);//分割数组，第一项为parent,第二项为child
        return VQuery(selectorArr[1],VQuery(selectorArr[0])[0])[0];
    }else{
        return VQuery(selector,document)[0];
    }
}
//text 9 事件

