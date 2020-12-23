// -----LV Tab----
document.querySelector(".lv-tab").addEventListener("click", function () {
  document.querySelector(".lv-hotels").classList.add("active");
  document.querySelector(".phil-hotels").classList.remove("active");
  document.querySelector(".houston-hotels").classList.remove("active");
  document.querySelector(".sd-hotels").classList.remove("active");
  document.querySelector(".ny-hotels").classList.remove("active");
  document.querySelector(".la-hotels").classList.remove("active");
  document.querySelector(".orlando-hotels").classList.remove("active");
  document.querySelector(".chicago-hotels").classList.remove("active");
});

// ---phil tab---
document.querySelector(".phil-tab").addEventListener("click", function () {
  document.querySelector(".lv-hotels").classList.remove("active");
  document.querySelector(".phil-hotels").classList.add("active");
  document.querySelector(".houston-hotels").classList.remove("active");
  document.querySelector(".sd-hotels").classList.remove("active");
  document.querySelector(".ny-hotels").classList.remove("active");
  document.querySelector(".la-hotels").classList.remove("active");
  document.querySelector(".orlando-hotels").classList.remove("active");
  document.querySelector(".chicago-hotels").classList.remove("active");
});

// ---houston tab---
document.querySelector(".houston-tab").addEventListener("click", () => {
  document.querySelector(".lv-hotels").classList.remove("active");
  document.querySelector(".phil-hotels").classList.remove("active");
  document.querySelector(".houston-hotels").classList.add("active");
  document.querySelector(".sd-hotels").classList.remove("active");
  document.querySelector(".ny-hotels").classList.remove("active");
  document.querySelector(".la-hotels").classList.remove("active");
  document.querySelector(".orlando-hotels").classList.remove("active");
  document.querySelector(".chicago-hotels").classList.remove("active");
});

//---SD tab---
document.querySelector(".sd-tab").addEventListener("click", () => {
  document.querySelector(".lv-hotels").classList.remove("active");
  document.querySelector(".phil-hotels").classList.remove("active");
  document.querySelector(".houston-hotels").classList.remove("active");
  document.querySelector(".sd-hotels").classList.add("active");
  document.querySelector(".ny-hotels").classList.remove("active");
  document.querySelector(".la-hotels").classList.remove("active");
  document.querySelector(".orlando-hotels").classList.remove("active");
  document.querySelector(".chicago-hotels").classList.remove("active");
});

//---NY tab---
document.querySelector(".ny-tab").addEventListener("click", () => {
  document.querySelector(".lv-hotels").classList.remove("active");
  document.querySelector(".phil-hotels").classList.remove("active");
  document.querySelector(".houston-hotels").classList.remove("active");
  document.querySelector(".sd-hotels").classList.remove("active");
  document.querySelector(".ny-hotels").classList.add("active");
  document.querySelector(".la-hotels").classList.remove("active");
  document.querySelector(".orlando-hotels").classList.remove("active");
  document.querySelector(".chicago-hotels").classList.remove("active");
});

//---LA tab---
document.querySelector(".la-tab").addEventListener("click", () => {
  document.querySelector(".lv-hotels").classList.remove("active");
  document.querySelector(".phil-hotels").classList.remove("active");
  document.querySelector(".houston-hotels").classList.remove("active");
  document.querySelector(".sd-hotels").classList.remove("active");
  document.querySelector(".ny-hotels").classList.remove("active");
  document.querySelector(".la-hotels").classList.add("active");
  document.querySelector(".orlando-hotels").classList.remove("active");
  document.querySelector(".chicago-hotels").classList.remove("active");
});

//---orlando tab---
document.querySelector(".orlando-tab").addEventListener("click", () => {
  document.querySelector(".orlando-hotels").classList.add("active");
  document.querySelector(".lv-hotels").classList.remove("active");
  document.querySelector(".phil-hotels").classList.remove("active");
  document.querySelector(".houston-hotels").classList.remove("active");
  document.querySelector(".sd-hotels").classList.remove("active");
  document.querySelector(".ny-hotels").classList.remove("active");
  document.querySelector(".la-hotels").classList.remove("active");
  document.querySelector(".chicago-hotels").classList.remove("active");
});

//---chicago tab---
document.querySelector(".chicago-tab").addEventListener("click", () => {
  document.querySelector(".chicago-hotels").classList.add("active");
  document.querySelector(".lv-hotels").classList.remove("active");
  document.querySelector(".phil-hotels").classList.remove("active");
  document.querySelector(".houston-hotels").classList.remove("active");
  document.querySelector(".sd-hotels").classList.remove("active");
  document.querySelector(".ny-hotels").classList.remove("active");
  document.querySelector(".la-hotels").classList.remove("active");
  document.querySelector(".orlando-hotels").classList.remove("active");
});
