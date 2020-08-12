let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

let i = 0;
const text = 'Hi, I\'m Shinji.';
const speed = 120;

const typeWriter = () => {
  const introDiv = document.querySelector("#intro");

  if (i < text.length) {
    introDiv.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      introDiv.innerHTML = '';
      i = 0;
      typeWriter();
    }, 3000);
  }
}

typeWriter();