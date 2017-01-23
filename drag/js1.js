/**
 * Created by Zhang on 2017/1/23.
 */
/*window.onload = function(event){

    var parent = document.getElementById("parent");
    var child  = document.getElementById("child");
    var  disX  = 0; //鼠标按下时相对父元素的距离
    var  disY  = 0;

   child.onmousedown = function(event){
      var event = event||window.event;
      disX = event.clientX - child.offsetLeft;
      disY = event.clientY - child.offsetTop;

        document.onmousemove = function(event){
            var event =event||window.event;
            var l = event.clientX - disX;
            var t = event.clientY - disY;
            if(l < 0){
                l = 0;
            }else if(l > parent.offsetWidth - child.offsetWidth){
                l = parent.offsetWidth - child.offsetWidth;
            }
            if(t < 0){
                t = 0;
            }else if(t > parent.offsetHeight - child.offsetHeight){
                t = parent.offsetHeight - child.offsetHeight;
            }
            //css定位
            child.style.left = l +'px';
            child.style.top =t + 'px';
        };
       document.onmouseup = function(event){
            document.onmousedown = null;
            document.onmousemove = null;
        };
    };
}*/
$(document).ready(function(){
   drag("#child","#parent");
   function drag(selector1,selector2){
       var $child = $(selector1);
       var $parent = $(selector2);
       $child.on("mousedown",function(event){
           console.log($child);
          $child.disX = event.clientX - $child.offsetLeft;
          $child.disY = event.clientY - $child.offsetTop;
           document.onmousemove = onMouseMove;
           document.onmouseup = onMouseUp;
       });
       function onMouseMove(event){
           var l = event.clientX - $child.disX;
           var t = event.clientY - $child.disY;
           //console.log(l);
           if(l < 0){
               l = 0;
           }else if(l > $parent.offsetWidth - $child.offsetWidth){
               l = $parent.offsetWidth - $child.offsetWidth;
               console.log(l);
           }
           if(t < 0){
               t = 0;
           }else if(t > $parent.offsetHeight - $child.offsetHeight){
               t = $parent.offsetHeight - $child.offsetHeightl
           }
           $child.css({
               left:l + 'px',
               top:t + 'px'
           });
          /* $child.disX = event.clientX;
           $child.disY = event.clientY;*/
       }
       function onMouseUp(event){
           document.onmousemove = null;
           document.onmouseup = null;
       }
   }
});
