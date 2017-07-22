// $(document).ready(function(){
//   $(window).scroll(function(){
//     var items = $("#content").find(".item");
//     var menu = $("#menu");
//     var top = $(document).scrollTop();
//     var currentId = '';
//     items.each(function(){
//       var m = $(this);
//       if(top>m.offset().top - 300){
//         currentId = '#'+m.attr('id');
//       }else{
//         return false;
//       }
//     });
//     var currentLink = menu.find(".current");
//     if(currentId&&currentLink.attr('href')!=currentId){
//       currentLink.removeClass("current");
//       menu.find("[href="+currentId+"]").addClass("current");
//     }
//   });
// });
function hasClass(obj,cls){
  return obj.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));
}
function removeClass(obj,cls){
  if(hasClass(obj,cls)){
    var reg = new RegExp("(\\s|^)"+cls+"(\\s|$)");
    obj.className = obj.className.replace(reg,"");
  }
}
function addClass(obj,cls){
  if(!hasClass(obj,cls)){
    obj.className += " " + cls;
  }
}
window.onload = function(){

  window.onscroll = function(){
    var items = document.getElementById('content').getElementsByClassName('item');
    var menus = document.getElementById('menu').getElementsByTagName('a');
    var top = document.body.scrollTop;
    var currentId = '';
    for(var i=0;i<items.length;i++){
      var _item = items[i];
      var _itemTop = _item.offsetTop;
      if(top > _itemTop - 300){
        currentId = _item.getAttribute('id');
      }else{
        break;
      }
    }
    if(currentId){
      for(var j=0;j<menus.length;j++){
        var _menu = menus[j];
        var _href = _menu.href.split('#');
      if(_href[_href.length-1]!=currentId){
        removeClass(_menu,'current');
      }else{
        addClass(_menu,'current');
      }
      }
    }
  }
}
