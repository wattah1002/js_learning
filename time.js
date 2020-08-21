var time = document.getElementById("date");

var now = new Date();
var year = now.getFullYear();
var mon = now.getMonth()+1; //１を足すこと
var day = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

date_new="現在は" + year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒" + "です．"; 

time.innerHTML=date_new;
