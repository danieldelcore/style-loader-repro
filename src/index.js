import sheet1 from "./css/sheet1.css";
import sheet2 from "./css/sheet2.css";
import sheet3 from "./css/sheet3.css";

export function loadStyleSheet(sheetNo) {
  switch (sheetNo) {
    case 1:
      sheet1.use();
      break;
    case 2:
      sheet2.use();
      break;
    case 3:
      sheet3.use();
      break;
    default:
      break;
  }
}

console.log("hello");
loadStyleSheet(1);
setTimeout(() => loadStyleSheet(2), 2000);
setTimeout(() => loadStyleSheet(3), 4000);
