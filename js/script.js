// Toogel class active untuk Hamburger menu
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault();
};

// Toogel class active untuk Search-form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");
// ketika search diklik
document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  // penambahan e.preventdefault agar saat search diklik maka form tidak reload ke halaman awal, dengan menambah e di dalam onclick
  e.preventDefault();
};

// klik diluar elemen untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});

// Toogle class active Shopping Cart Button
const shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingcart.classList.toggle("active");
  e.preventDefault();
};

// Modal Box
const itemdetailmodal = document.querySelector("#item-detail-modal");
const itemdetailbbuttons = document.querySelectorAll(".item-detail-button");

// ini adalah menggabungkan semua item modal memiliki fungsi yang sama
itemdetailbbuttons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailmodal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailmodal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal

window.onclick = (e) => {
  if (e.target == itemdetailmodal) {
    itemdetailmodal.style.display = "none";
  }
};
