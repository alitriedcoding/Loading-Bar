const counterEl = document.querySelector(".counter");
const loadingEl = document.querySelector(".loading-bar-front");

let ind = 0;

updateNamber();

function updateNamber() {
  counterEl.innerHTML = ind + "%";
  loadingEl.style.width = ind + "%";
  ind++;
  if (ind < 101) {
    setTimeout(updateNamber, 50);
  }
}
