function toggled(btn) {
    const button = document.querySelector(`.${btn}`);
    if (!button.classList.contains("is-toggled")) {
    button.classList.add("is-toggled");
  } else if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  }
}