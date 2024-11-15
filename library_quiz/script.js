const correctInitialAnswer = "アカイロ"; // 最初の答え
const correctFinalAnswer = "ブンコボン";    // 最終答え

// 最初の答えを判定する関数
function checkInitialAnswer(event) {
    event.preventDefault(); // フォームの送信動作を防ぐ
    const userAnswer = document.getElementById("initial-answer").value.trim();
    if (userAnswer === correctInitialAnswer) {
        document.getElementById("initial-answer-form").style.display = "none";
        document.getElementById("initial-answer-result").style.display = "block";
        document.getElementById("final-question").style.display = "block";
        document.getElementById("incorrect-initial-result").style.display = "none"; // 正解したら不正解メッセージを消す
    } else {
        document.getElementById("incorrect-initial-result").style.display = "block"; // 不正解の場合は表示
    }
}

// 最終アンサーを判定する関数
function checkFinalAnswer(event) {
    event.preventDefault(); // フォームの送信動作を防ぐ
    const userAnswer = document.getElementById("final-answer").value.trim();
    if (userAnswer === correctFinalAnswer) {
        document.getElementById("final-answer-form").style.display = "none";
        document.getElementById("final-answer-result").style.display = "block";
        document.getElementById("incorrect-final-result").style.display = "none"; // 正解したら不正解メッセージを消す
    } else {
        document.getElementById("incorrect-final-result").style.display = "block"; // 不正解の場合は表示
    }
}
