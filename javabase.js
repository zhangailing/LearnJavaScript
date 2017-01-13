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
        clone=new Date(src.getDate());
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