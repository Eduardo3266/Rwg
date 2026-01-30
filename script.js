const countdownElement = document.getElementById("countdown");
const countdownContainer = document.getElementById("countdown-container");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");

// ⏰ FECHA REAL (ajústala)
const birthday = new Date("2026-01-30T00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance <= 0) {
    clearInterval(timer);
    countdownContainer.style.display = "none";
    surprise.classList.remove("hidden");
setInterval(createFlower, 800);
    confettiExplosion();
    return;
  }

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent =
    `${hours.toString().padStart(2,"0")}:` +
    `${minutes.toString().padStart(2,"0")}:` +
    `${seconds.toString().padStart(2,"0")}`;
}, 1000);

/* 🌸 FLORES CAYENDO */
const flowers = ["🌸","🌷","🌺"];

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 9 + Math.random() * 4 + "s";
  flower.style.fontSize = 18 + Math.random() * 20 + "px";

  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 50000);
}



/* 🎉 CONFETTI */
function confettiExplosion() {
  for (let i = 0; i < 160; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.background = `hsl(${Math.random()*360},70%,70%)`;
    confetti.style.left = "50vw";
    confetti.style.top = "50vh";
    confetti.style.setProperty("--x", `${(Math.random()-0.5)*700}px`);
    confetti.style.setProperty("--y", `${(Math.random()-0.5)*700}px`);

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1500);
  }
}
const verBtn = document.getElementById("verBtn");
const letter = document.getElementById("letter");
const verCollageBtn = document.getElementById("verCollageBtn");
const collageSection = document.getElementById("collage-section");

verCollageBtn.addEventListener("click", () => {
  // Iniciar música al presionar el botón
  music.currentTime = 2;
  music.play().catch(() => {});
letter.classList.add("hidden");

  // Mostrar collage + mapache
  collageSection.style.display = "flex";

  // 🌸 FLORES EN COLLAGE (igual que las del inicio)
  const collageFlowers = ["🌸","☁️ ","🌺"];
  setInterval(() => {
    const flower = document.createElement("div");
    flower.className = "flower"; // reutiliza la misma clase para que caiga igual
    flower.textContent = collageFlowers[Math.floor(Math.random() * collageFlowers.length)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 8 + Math.random() * 4 + "s";
    flower.style.fontSize = 18 + Math.random() * 20 + "px";

    collageSection.appendChild(flower);
    setTimeout(() => flower.remove(), 10000);
  }, 400);
 
});

verBtn.addEventListener("click", () => {

  document.getElementById("surprise").classList.add("hidden");
  document.getElementById("countdown-container").classList.add("hidden");
  letter.classList.remove("hidden");
});
