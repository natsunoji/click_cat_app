// リアルタイム時計機能
function updateClock() {
  const now =new Date();

  // 日本語の形式での表示
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    sedond: '2-digit',
    weekday: 'long'
  };

  const dateTimeString = now.toLocaleDateString('ja-JP', options);

  // 時計の要素を更新
  const clockElement = document.getElementById('current-time');
  if (clockElement) {
    clockElement.textContent = dateTimeString;
  }
}

// ページ読み込み時に時計を開始する
document.addEventListener('DOMContentLoaded', function(){
  updateClock(); //初回時の表示
  setInterval(updateClock, 1000); //1秒ごとに更新する
});

// ねこの画像をクリックしたときに豆知識を表示する機能
document.addEventListener('DOMContentLoaded', function() {
  const catImage = document.getElementById('cat-image');
  const balloonText = document.getElementById('balloon-text');

  // ねこの画像をクリックしたときの処理
  catImage.addEventListener('click', function(){
    // ランダムに豆知識を選択する
    const randomIndex = Math.floor(Math.random() *autumnFacts.length);
    const randomFact = autumnFacts[randomIndex];

    // 吹き出しのテキストを更新
    balloonText.textContent = randomFact;
  });
});

// ポーズの切り替え機能
function changeCat(poseNumber) {
  const catImage = document.getElementById('cat-image');

  // ポーズに応じて画像を切り替え
  switch(poseNumber) {
    case 1:
      catImage.src = 'images/cat_pose1.png';
      catImage.alt = '座りポーズの猫のもみじちゃん';
      break;
    case 2:
      catImage.src = 'images/cat_pose2.png';
      catImage.alt = '伸びポーズの猫のもみじちゃん';
      break;
    case 3:
      catImage.src = 'images/cat_pose3.png';
      catImage.alt = '寝転びポーズの猫のもみじちゃん';
      break;
    default:
      catImage.src = 'images/cat_pose1.png';
      catImage.alt = '座りポーズの猫のもみじちゃん';
  }
}