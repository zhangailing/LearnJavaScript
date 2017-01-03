##call()和apply()辨析##

每个函数都包含两个非继承而来的方法call()和apply(),二者的作用都是在特定作用域中调用函数，既设置函数体内this对象的值.二者使用时主要是传递的第二个参数不同，详述如下:
- apply()
  接收两个参数，第一个在其中运行函数的作用域，第二个是参数数组(参数数组可以传arguments,也可以传参数数组)
```
sum.apply(this,arguments);
```
或
```
sum.apply(this,[num1,num2]);
```
- call()
  同样接收两个参数，第一个也是在其中运行函数的作用域，第二个则是参数列表(既须将参数逐个列举出来)
```
sum.apply(this,num1,num2);
```
然而apply()和call()最为强大的地方其实在于能够扩充函数原本作用域，如下例：
```
window.color="red";
var o={ color:"blue" };
function sayColor(){
    alert(this.color);
}
sayColor();   //red
sayColor(this);  //red
sayColor(window);  //red
sayColor(o);  //blue
```
```sayColor(this); ```与```sayColor(window);```都是显式的在全局作用域内调用函数，结果就会显示全局color变量red;而 ```sayColor(o);  ```则将函数体内的this指向了o，改变了函数的执行环境，故结果变成了blue.使用call()和apply()扩充作用域最大的好处就是对象不需要与方法有任何耦合关系，即满足了设计原则中的高内聚、低耦合。
同样的代码，高内聚表示如下：
```
window.color="red";
var o={ color:"blue" };
function sayColor(){
    alert(this.color);
}
sayColor();   //red
o.sayColor=sayColor;
o.sayColor(); //blue
```