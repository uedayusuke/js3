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
var promptStr = prompt("何か好きな文字を入力してください。");
alert(promptStr);

alert("ジャンケンゲームの始まりだ！");

var user_hand = prompt("ジャンケンの手をグー、チョキ、パーから選ぶんだ！");
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand)

alert("君の選んだ手は" + user_hand + "だな！\n僕の選んだ手は" + js_hand + "だ！\n勝敗は" + judge + "だ！！");

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