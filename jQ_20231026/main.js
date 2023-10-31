console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	//ボタンのクリックイベント
	$("#my_btn").click(() => {
		console.log("計算をする");

		const strVal = $("#my_input").val(); //税抜き価格を取得,文字列
		const numVal = parseInt(strVal);  //文字列を数値に
		console.log("これを計算する"), numVal;

		//消費税
		const tax = numVal * 0.1;

		console.log("消費税", tax);
		$("#my_tax").text(tax);
		
		//税込価格
		const total = numVal + tax;

		console.log("税込価格", total);
		$("#my_total").text(total);


	});
});