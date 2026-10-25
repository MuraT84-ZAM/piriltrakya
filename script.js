// ===== Sayfa yüklenince çalışacak fonksiyonlar =====
// Yeni bir fonksiyon eklersen buraya da çağırman yeterli
window.onload = function () {
  yiliGuncelle();
  yukariButonuHazirla();
  mobilMenuHazirla();
};

// ===== Footer'daki yılı otomatik yazar =====
function yiliGuncelle() {
  const bugun = new Date();
  document.getElementById("yil").textContent = bugun.getFullYear();
}

// ===== "Yukarı çık" butonu =====
function yukariButonuHazirla() {
  const buton = document.getElementById("yukariButon");

  // Sayfa aşağı kayınca butonu göster
  window.onscroll = function () {
    if (window.scrollY > 300) {
      buton.style.display = "block";
    } else {
      buton.style.display = "none";
    }
  };

  // Butona tıklayınca en üste çık
  buton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// ===== Telefonda menüyü açıp kapatır =====
function mobilMenuHazirla() {
  const buton = document.getElementById("menuButon");
  const menu = document.getElementById("anaMenu");
  const linkler = menu.getElementsByTagName("a");

  // Butona basınca menüyü aç veya kapat
  buton.onclick = function () {
    if (menu.classList.contains("acik")) {
      menu.classList.remove("acik");
      buton.setAttribute("aria-expanded", "false");
    } else {
      menu.classList.add("acik");
      buton.setAttribute("aria-expanded", "true");
    }
  };

  // Menüde bir linke basınca menüyü kapat
  for (let i = 0; i < linkler.length; i++) {
    linkler[i].onclick = function () {
      menu.classList.remove("acik");
      buton.setAttribute("aria-expanded", "false");
    };
  }
}