let r = 255;
let g = 0;
let b = 0;
        
const rgb = (r, g, b) => {
  return "rgb("+r+","+g+","+b+")";
}

const myTimer = () => {
  if (r < 255 && g == 0 && b == 0) {
    r++;
  } else if (r == 255 && g < 255 && b == 0) {
    g++;
  } else if (r > 0 && g == 255 && b == 0) {
    r--;
  } else if (r == 0 && g == 255 && b < 255) {
    b++;
  } else if (r == 0 && g > 0 && b == 255) {
    g--;
  } else if (r < 255 && g == 0 && b == 255) {
    r++;
  } else if (r == 255 && g== 0 && b > 0) {
    b--;
  }

  document.body.style.backgroundColor = rgb(r, g, b);
}
        
setInterval(myTimer, 10)