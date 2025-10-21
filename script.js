const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusic");

// tombol play musik
playBtn.addEventListener("click", () => {
  music.volume = 0;
  music.play();
  playBtn.style.display = "none";

  // fade-in lebih cepat (sekitar 3 detik)
  let vol = 0;
  const fadeIn = setInterval(() => {
    if (vol < 1) {
      vol += 0.05; // naik lebih cepat
      music.volume = vol;
    } else {
      clearInterval(fadeIn);
    }
  }, 150); // tiap 0.15 detik
});

// elemen terbang (bunga & hati)
const icons = ["🌸", "💖", "🌷", "💞", "🌺", "💗"];

function createFloatingIcon() {
  const icon = document.createElement("div");
  icon.classList.add(Math.random() > 0.5 ? "flower" : "heart");
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + "vw";
  icon.style.animationDuration = 6 + Math.random() * 5 + "s";
  icon.style.filter = "blur(" + Math.random() * 1.5 + "px)";
  document.body.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 10000);
}

// munculin terus tiap beberapa detik
setInterval(createFloatingIcon, 600);
