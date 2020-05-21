alert("関数");
var alertString; //変数宣言のみ
alertString = addString("WebCamp"); //宣言した"alertString"に代入

alert(alertString); //変数"alertString"を出力

//関数"addString"、引数(入力する値)"strA"、戻り値(出力する値)"addStr"
function addString(strA){
	var addStr = "Hello" + strA;
	return addStr;
}

alert("入力ダイアログ");
//promptを用いて入力欄を表示
var promptStr = prompt("何か好きな文字を入力してください。");
//alertを用いて先ほどpromptで入力した内容を反映
alert(promptStr);

alert("ジャンケンゲームの始まりだ！");

var user_hand = prompt("ジャンケンの手をグー、チョキ、パーから選ぶんだ！");

while ((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
	alert("何やってんだ！グー・チョキ・パーを知らないのか！！？");
	user_hand = prompt("さあもう一回！グー、チョキ、パーから選ぶんだ！!");
}

var js_hand = getJShand();
var judge = winLose(user_hand, js_hand)

if (user_hand != null) {
	alert("君の選んだ手は" + user_hand + "だな！\n僕の選んだ手は" + js_hand + "だ！\n勝敗は" + judge + "だ！！");
}else {
	alert("まずはじゃんけんを勉強してきな！！");
}

//関数"getJShand"、引数なし、戻り値"hand_name"
//"Math.floor()"は()内以下の最大整数を表示
//"Math.random()"は0以上1未満をランダムに表示
//→"Math.random()"で出された0~2.9999...を"Math.floor()"で2.9999...以下最大の整数に変換
function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3);
	var hand_name;
	if (js_hand_num == 0) {
		hand_name = "グー";
	}else if (js_hand_num == 1) {
		hand_name = "チョキ";
	}else if (js_hand_num == 2) {
		hand_name = "パー";
	}
	return hand_name;
};

//関数"winLose"、引数"user_hand, js_hand"、戻り値"winLoseStr"
function winLose(user_hand, js_hand){
	var winLoseStr;

	if (user_hand == "グー") {
		if (js_hand == "グー") {
			winLoseStr = "あいこ";
		}else if (js_hand == "チョキ") {
			winLoseStr = "勝ち";
		} else if ( js_hand == "パー") {
			winLoseStr = "負け";
		}
	}else if (user_hand == "チョキ") {
		if (js_hand == "グー") {
			winLoseStr = "負け";
		}else if (js_hand == "チョキ") {
			winLoseStr = "あいこ";
		}else if (js_hand == "パー") {
			winLoseStr = "勝ち";
		}
	}else if (user_hand == "パー") {
		if (js_hand == "グー") {
			winLoseStr = "勝ち";
		}else if (js_hand == "チョキ") {
			winLoseStr = "負け";
		}else if (js_hand == "パー") {
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
};