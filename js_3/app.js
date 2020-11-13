// ===============================================================
// main処理
// ===============================================================

// 入力---------------------------------
var user_hand = getUserhand();

// 演算---------------------------------
var js_hand = getJShand();                // JavaScriptの手を生成
var judge = winLose(user_hand, js_hand);  // 勝敗を判定

// 出力---------------------------------

if (user_hand == null) {
  alert('またチャレンジしてね');
}else{
  alert(
    'あなたの選んだ手は' + user_hand + 'です。\n'
    +'JavaScriptの選んだ手は' + js_hand + 'です。\n'
    +'結果は' + judge + 'です。'
    );
}
  // ===============================================================
  // 関数
  // ===============================================================

  // ユーザの手を取得
  function getUserhand(){
    var hand;
    var flg = false;

  while( flg == false){
    hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');

    if( hand == 'グー' || hand == 'チョキ' || hand == 'パー' || hand == null){
      flg = true;
    }else{
      alert('グー・チョキ・パーのいずれかを入力してください');
    }
  }
  return hand;
}

// JavaScriptの手をランダムで生成
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );

  if (js_hand_num == 0){
    js_hand = 'グー';
  }
  else if(js_hand_num == 1){
    js_hand = 'チョキ';
  }
  else if(js_hand_num == 2){
    js_hand = 'パー';
  }
  return js_hand;
}

// 勝敗を判定
function winLose(user, js){
  var winLoseStr;

  if (
    (user == 'グー' && js_hand == 'グー')
    || (user == 'チョキ' && js_hand == 'チョキ')
    || (user == 'パー' && js_hand == 'パー') ){
    winLoseStr = 'あいこ';
  }
  else if(
    (user == 'グー' && js_hand == 'チョキ')
    || (user == 'チョキ' && js_hand == 'パー')
    || (user == 'パー' && js_hand == 'グー') ){
    winLoseStr = '勝ち';
  }
  else{
    winLoseStr = '負け';
  }
  return winLoseStr;
}