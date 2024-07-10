function toggled(btn) {
  const button = document.querySelector(`.${btn}`);
  if (!button.classList.contains("is-toggled")) {
    istoggleOff();
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function istoggleOff() {
  const prevbtn = document.querySelector(".is-toggled");
  if (prevbtn) {
    prevbtn.classList.remove("is-toggled");
  }
}
