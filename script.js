const planetMessages = {
  planet1: {
    message:
      "Satürn'ün sana mesajı:<br><br>Zorluklar sana olgunluk kazandırmak için gelir.",
    link: "planet1.html",
  },
  planet2: {
    message:
      "Ay'ın sana mesajı:<br><br>Sezgilerini dinlemek, seni kendi gerçekliğine yaklaştırır.",
    link: "planet2.html",
  },
  planet3: {
    message:
      "Dünya'nın sana mesajı:<br><br>Denge ve uyum, içsel huzurun anahtarıdır.",
    link: "planet3.html",
  },
  planet4: {
    message:
      "Venüs'ün sana mesajı:<br><br>Venüs’ün rehberliğinde, kalbinin kapılarını arala.",
    link: "planet4.html",
  },
  planet5: {
    message: "Güneş'in sana mesajı:<br><br>Işığınla başkalarına ilham ver.",
    link: "planet5.html",
  },
  planet6: {
    message:
      "Plüton'un sana mesajı:<br><br>Her son, yeni bir başlangıcın habercisidir.",
    link: "planet6.html",
  },
  planet7: {
    message:
      "Mars'ın sana mesajı:<br><br>Cesaret ve enerjiyle her engeli aşabilirsin.",
    link: "planet7.html",
  },
  planet8: {
    message:
      "Jüpiter'in sana mesajı:<br><br>Evrenin sana sunduğu fırsatları gör ve değerlendir.",
    link: "planet8.html",
  },
  planet9: {
    message:
      "Rüyalarının peşinden git, çünkü onlar senin gerçekliğin olabilir.",
    link: "planet9.html",
  },
};

const planets = document.querySelectorAll(".planet");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeButton = document.getElementById("closeButton");
const readMoreButton = document.getElementById("readMoreButton");
const body = document.body;

planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    const { message, link } = planetMessages[planet.id];
    messageText.innerHTML = message; // innerHTML kullanarak HTML içeriği ekliyoruz.
    readMoreButton.onclick = () => (window.location.href = link);
    messageBox.classList.remove("hidden");
    body.classList.add("blur");
  });
});

closeButton.addEventListener("click", () => {
  messageBox.classList.add("hidden");
  body.classList.remove("blur");
});
// Konfetileri oluşturma ve animasyonu başlatma
function createConfetti() {
  const confettiCount = 100; // Konfeti sayısı

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Rastgele başlangıç pozisyonu ve renk
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = getRandomColor();

    // Rastgele boyut, hız ve gecikme
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 15 + 5}px`;
    confetti.style.animationDuration = `${Math.random() * 4 + 3}s`; // 3-7 saniye süren animasyon
    confetti.style.animationDelay = `${Math.random() * 2}s`; // 0-2 saniye gecikme

    document.body.appendChild(confetti);
  }

  // Konfetilerin tamamen kaybolmasını 7 saniye sonra sağla
  setTimeout(() => {
    document
      .querySelectorAll(".confetti")
      .forEach((confetti) => confetti.remove());
  }, 5000); // 5 saniye + 2 saniye ekstra
}

// Rastgele renk seçimi
function getRandomColor() {
  const colors = [
    "#FF0A0A",
    "#FFD700",
    "#00FF00",
    "#00BFFF",
    "#FF69B4",
    "#6a0dad",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 5 saniye sonra açılış ekranı gizlenir ve ana içerik görünür olur
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
}, 5000);

// Sayfa açıldığında konfetiler başlatılır
createConfetti();
