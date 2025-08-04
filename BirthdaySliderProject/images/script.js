const slider = document.querySelector('.slider');
let angle = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    angle -= 60;
  } else if (e.key === 'ArrowLeft') {
    angle += 60;
  }
  slider.style.transform = `rotateY(${angle}deg)`;
});
