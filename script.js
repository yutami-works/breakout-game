// キャンバス定義
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ボール定義
const ballRadius = 10;      // ボール半径
let x = canvas.width / 2;   // ボールx座標
let y = canvas.height - 30; // ボールy座標

// ボール座標移動係数
let dx = 2;
let dy = -2;

/* ボール描画関数 */
const drawBall = () => {
  ctx.beginPath();                           // 描画開始
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2); // x座標 y座標 円半径 円弧開始角度ラジアン 円弧終了角度ラジアン
  ctx.fillStyle = "#0095DD";                 // 色
  ctx.fill();                                // 塗りつぶし
  ctx.closePath();                           // 描画終了
}

/* 画面描画関数 */
const draw = () => {
  // キャンバスリセット（削除と描画を繰り返すことで動きを実現）
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();

  // 上下バウンド（座標がキャンバス外（ボール半径考慮）に到達したら移動を反転させる）
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  // 左右バウンド
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  // ボール位置変更
  x += dx;
  y += dy;
}

/* メインロジック */
// 10ms毎に画面描画を実行することで動きを実現
setInterval(draw, 10);