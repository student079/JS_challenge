const body = document.querySelector("body");

function backColor() {
  const width = window.innerWidth;
  let color;

  if (width >= 1200) {
    color = "#EEBC12";
  } else if (width < 1200 && width >= 1000) {
    color = "#904EAC";
  } else {
    color = "#2D8ED6";
  }
  body.style.backgroundColor = color;
}

window.addEventListener("resize", backColor);
