var proList = empData.data;

//文档加载完成后
$(function () {
    init();
});
//初始化
function init() {
    addElement();
}
//给员工列表添加数据
function addElement() {
    //获得table对象
    var tb = $("#tb");

    //创建一个tbody对象
    var tBoyd = $("<tbody></tbody>");

    for (var i = 0; i < proList.length; i++) {
        //创建一个tr对象
        var trObj = $("<tr></tr>");

        for (var j = 0; j < proList[i].length; j++) {
            //创建一个td对象
            var tdObj = $("<td>" + proList[i][j] + "</td>");
            trObj.append(tdObj);
        }

        //创建一个td对象
        var tdObj1 = $("<td><input type='button' value='添加' onclick='addCart(this)' </td>");
        trObj.append(tdObj1);

        tBoyd.append(trObj);
    }

    tb.append(tBoyd);
}

function addCart(btnObj) {
    var tds = btnObj.parentElement.parentElement.getElementsByTagName("td");

    //获取购物车table对象
    var cart = $("#cart");

    //创建tbody对象
    var tBody = $("<tbody></tbody>");
    //创建tr对象
    var trObj = $("<tr></tr>");

    //添加选择td
    var tdObj0 = $("<td><input type='checkbox' ></td>");
    trObj.append(tdObj0);

    //添加数据td
    for (var i = 0; i < tds.length-1; i++) {
        //添加选择td
        var tdObj1 = $("<td>" + tds[i].innerHTML + "</td>");
        trObj.append(tdObj1);
    }

    //添加月份td
    var tdObj2 = $("<td>" +
        "<input type='button' value='-'>"+
        "<input value='1'>"+
        "<input type='button' value='+' onclick='addNum(this)'>" +
        "</td>");
    trObj.append(tdObj2);

    //添加小计td
    var money = tds[5].innerText;
    money = numeral(money).format("0.00");
    var tdObj3 = $("<td>" + money/12 + "</td>");
    trObj.append(tdObj3);

    //添加操作td
    var tdObj4 = $("<td><input type='button' value='删除' onclick='delEle(this)'</td>");
    trObj.append(tdObj4);

    tBody.append(trObj);
    cart.append(tBody);

}

function delEle(btnObj) {
    $(btnObj.parentElement.parentElement).remove();
}
//增加
function addNum(btnObj) {
    //获得数量的input对象
    var inputObj = $(btnObj).prev();
    //获得input对象中的值
    var num = inputObj.val();
    //自增后重新赋值回去
    inputObj.val(++num);
}