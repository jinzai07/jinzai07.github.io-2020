let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

runTypeWriter = () => {
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
}

rocketFly = () => {
  const rocket = document.querySelector('#rocket');

  rocket.addEventListener('click', () => {
    rocket.classList.toggle('fly');
  });
}

navLinkGrow = () => {
  const icons = document.querySelectorAll('.icon');

  icons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      icon.classList.add('hover');
    });
    icon.addEventListener('mouseout', () => {
      icon.classList.remove('hover');
    });
  });
}

rocketFly();
runTypeWriter();
navLinkGrow();
