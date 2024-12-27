export function changeSelectedColor(color: string) {
  document.documentElement.style.setProperty("--selected-color", color);
}

export function changeSelectedColorByType(type: string) {
  switch (type) {
    case "listening":
      changeSelectedColor("#2274A5");
      break;

    case "reading":
      changeSelectedColor("#CB4154");
      break;

    case "writing":
      changeSelectedColor("#20652A");
      break;
  }
}
