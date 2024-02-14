const allLi = document.querySelector("ol");

function getColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
allLi.addEventListener("click", (e) => {
  if (e.target === allLi) return;

  e.target.style.color = getColor();
  console.log(getColor());
});
