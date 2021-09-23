// 現在時刻
document.getElementById("view_time").innerHTML = getNow();

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分"; 
	return s;
}





// 8時間後
document.getElementById("time8h").innerHTML = getNow8();

// function getNow8() {
// 	var hour8 = new Date();
// hour8.setHours(hour8.getHours() +8);

	//出力用
// 	var s = hour8.toLocaleString();
// 	return s;
// }

function getNow8() {
	var now = new Date();
	now.setHours(now.getHours() +8);
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
  // var hour = now.setHours(now.getHours() +8);
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + "  " + mon + "月" + day + "日" + "  "  + hour + "時" + min + "分"; 
	return s;
}









// 48時間後
document.getElementById("time48h").innerHTML = getNow48();

function getNow48() {
	var now = new Date();
	now.setHours(now.getHours() +48);
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + "  " + mon + "月" + day + "日" + "  "  + hour + "時" + min + "分"; 
	return s;
}




// ３日後
document.getElementById("day3").innerHTML = getNowday3();

function getNowday3() {
	var now = new Date();
	now.setDate(now.getDate() +2);
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + "  " + mon + "月" + day + "日" + "  "  + hour + "時" + min + "分"; 
	return s;
}





// 5日後
document.getElementById("day5").innerHTML = getNowday5();

function getNowday5() {
	var now = new Date();
	now.setDate(now.getDate() +4);
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + "  " + mon + "月" + day + "日" + "  "  + hour + "時" + min + "分"; 
	return s;
}




// 7日後
document.getElementById("day7").innerHTML = getNowday7();

function getNowday7() {
	var now = new Date();
	now.setDate(now.getDate() +7);
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + "  " + mon + "月" + day + "日" + "  "  + hour + "時" + min + "分"; 
	return s;
}



// 14日後
document.getElementById("day14").innerHTML = getNowday14();

function getNowday14() {
	var now = new Date();
	now.setDate(now.getDate() +13);
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + "  " + mon + "月" + day + "日" + "  "  + hour + "時" + min + "分"; 
	return s;
}



// 30日後
document.getElementById("day30").innerHTML = getNowday30();

function getNowday30() {
	var now = new Date();
	now.setDate(now.getDate() +29);
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	
	//出力用
	var s = year + "年" + "  " + mon + "月" + day + "日" + "  "  + hour + "時" + min + "分"; 
	return s;
}
