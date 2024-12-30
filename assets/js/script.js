// おみくじの結果一覧とそれぞれの確率（合計を100にする）
const omikujiResults = [
    { text: "大吉 - 素晴らしい一年が待っています！", weight: 10 },
    { text: "中吉 - 充実した一年になりそうです！", weight: 20 },
    { text: "小吉 - 少しずつ運気が上がります！", weight: 30 },
    { text: "末吉 - 焦らず努力を続けましょう！", weight: 20 },
    { text: "吉 - 良いことがきっとあります！", weight: 15 },
    { text: "凶 - 謙虚な気持ちで過ごしましょう！", weight: 5 }
  ];

  // 確率に基づいておみくじを引く関数
  function drawOmikuji(results) {
    const totalWeight = results.reduce((sum, result) => sum + result.weight, 0);
    let random = Math.random() * totalWeight;
    for (const result of results) {
      if (random < result.weight) {
        return result.text;
      }
      random -= result.weight;
    }
  }

  // カード全体のクリックイベント
  const card = document.getElementById('card');
  const omikujiResultElement = document.getElementById('omikuji-result');
  const shareButton = document.getElementById('share-btn');

  card.addEventListener('click', () => {
    // 裏面を表示したときにおみくじを引く
    if (!card.classList.contains('flip')) {
      const result = drawOmikuji(omikujiResults);
      omikujiResultElement.textContent = result;

      // Twitterシェア用のURLを設定
      const tweetText = encodeURIComponent(`🎍 新年のおみくじ結果 🎍\n${result}\n皆さんも引いてみてね！`);
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&hashtags=新年おみくじ`;
      shareButton.href = tweetUrl;
    }
    card.classList.toggle('flip');
  });