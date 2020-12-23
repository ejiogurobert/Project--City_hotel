const hotelList = document.querySelectorAll(".hotel");
const btnList = document.querySelectorAll(".btn");
let hotels = (index) => {
  for (let i = 0; i < hotelList.length; i++) {
    hotelList[i].classList.remove("active");
    btnList[i].classList.remove("focus");
  }
  hotelList[index].classList.add("active");
  btnList[index].classList.add("focus");
};
hotels(0);
document.querySelector(".lv-tab").addEventListener("click", () => {
  hotels(0);
});
document.querySelector(".phil-tab").addEventListener("click", () => {
  hotels(1);
});
document.querySelector(".houston-tab").addEventListener("click", () => {
  hotels(2);
});
document.querySelector(".sd-tab").addEventListener("click", () => {
  hotels(3);
});
document.querySelector(".ny-tab").addEventListener("click", () => {
  hotels(4);
});
document.querySelector(".la-tab").addEventListener("click", () => {
  hotels(5);
});
document.querySelector(".orlando-tab").addEventListener("click", () => {
  hotels(6);
});
document.querySelector(".chicago-tab").addEventListener("click", () => {
  hotels(7);
});
