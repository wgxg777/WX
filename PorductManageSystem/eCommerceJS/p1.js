var list =empData.data;
$(function(){
 init();

})
function init(){
    var tb = $("#tb");
    var tbody = $("<tbody></tbody>");
    for(var i=0;i<list.length;i++){
        var trObj=$("<tr></tr>")
        for (var j=0;j<list[i].length;j++){
            var tdObj =$("<td>"+list[i][j]+"</td>");
            trObj.append(tdObj);
        }
        tbody.append(trObj);
        var tdObj1 =$("<td><button onclick='addCart(this)'>添加</button></td>")
        trObj.append(tdObj1)
    }
   
    tb.append(tbody);
}
 function addCart(btn) {
     var $tds=$(btn).parent().parent().find('td');
     var cart=$("#cart");
     var tr1 =$("<tr>"+"<td><input type='checkbox'></td>"+"<td>"+$tds.eq(0).html()+"</td>"+"<td>"+$tds.eq(1).html()+"</td>"
     +"<td>"+$tds.eq(2).html()+"</td>"+"<td>"+$tds.eq(3).html()+"</td>"+"<td>"+$tds.eq(4).html()+"</td>"+"<td>"+$tds.eq(5).html()+"</td>"+
     "<td><input type='button' value='-' onclick='subNum(this)'><input type='text' readonly value='1' ><input type='button' value='+' onclick='addNum(this)'></td>"+
     "<td>"+$tds.eq(5).html()+"</td>"+"<td><button onclick='del(this)'>删除</button></td>"+"</tr>") 
     cart.append(tr1);



 }
 function addNum(btn){
    var num=  $(btn).prev();
    var num1 =num.val();
    num.val(++num1);
    var price =parseInt( $(btn).parent().prev().html().substring(1));
    $(btn).parent().next().html(num1*price);
    total();
}
function total(){
    var $trs =$("#cart").find("tr");
    var ppp=0;
    for (var i=1;i<$trs.length;i++){
       var money= parseInt( $trs.eq(i).children().eq(8).html());
       alert(money)
       ppp+=money
       
    }
    $("#totalPrice").html(ppp)



}