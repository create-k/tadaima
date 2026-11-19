// --- 1つ目のポップアップの制御 ---
// 1. HTMLの中から「開くボタン」「閉じるボタン」「ポップアップ」の部品を探して、それぞれ名前（変数）をつける
const openBtn1 = document.getElementById('openBtn1');
const closeBtn1 = document.getElementById('closeBtn1');
const gameModal1 = document.getElementById('gameModal1');

// 2. 「開くボタン」がクリックされたときの動きを決める
openBtn1.addEventListener('click', (e) => {
  e.preventDefault(); // ★ href="#" によるページ移動や一番上へのジャンプを防ぐ
  gameModal1.showModal(); // ★ ポップアップ（dialog）を画面にパッと開く！
});

// 3. 「閉じるボタン」がクリックされたときの動きを決める
closeBtn1.addEventListener('click', () => {
  gameModal1.close(); // ★ ポップアップを閉じる！
});


// --- 2つ目のポップアップの制御 ---
const openBtn2 = document.getElementById('openBtn2');
const closeBtn2 = document.getElementById('closeBtn2');
const gameModal2 = document.getElementById('gameModal2');

openBtn2.addEventListener('click', (e) => {
  e.preventDefault();
  gameModal2.showModal();
});
closeBtn2.addEventListener('click', () => {
  gameModal2.close();
});


// --- 3つ目のポップアップの制御 ---
const openBtn3 = document.getElementById('openBtn3');
const closeBtn3 = document.getElementById('closeBtn3');
const gameModal3 = document.getElementById('gameModal3');

openBtn3.addEventListener('click', (e) => {
  e.preventDefault();
  gameModal3.showModal();
});
closeBtn3.addEventListener('click', () => {
  gameModal3.close();
});