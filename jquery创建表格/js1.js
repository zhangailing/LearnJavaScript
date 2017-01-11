/**
 * Created by Zhang on 2017/1/3.
 */
$(function(){
    function createTable(rowNum,cloNum){
        var table=$("<table border='1'>");
        table.appendTo($("#createTable"));
        for(var i=0;i<rowNum;i++){
            var tr=$("<tr></tr>");
            tr.appendTo(table);
            for(var j=0;j<cloNum;j++){
                var td=$("<td>"+i*j+"</td>");
                td.appendTo(tr);
            }
        }
        $("#createTable").append("</table>");
    };
})
$("button").on("click",createTable(5,6));
$("createTable").on("hover",function(event){
    alert($(event.target).html());
});


