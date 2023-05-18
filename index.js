// console.log(window.innerHeight);
window.addEventListener("resize", (event) => {
  console.log(window.innerHeight);
  windowHeight = window.innerHeight;
});

const opacityChange = (scroll, windowHeight) => {
  if (scroll <= 4 * windowHeight && scroll > 3 * windowHeight) {
    const op = (scroll - 3 * windowHeight) / windowHeight;
    document.querySelector("#main").style.opacity = 0.7 + op;
    document.querySelector("#main-1").style.opacity = 0.5 + op;
  }
  if (scroll <= 4 * windowHeight && scroll > 2 * windowHeight) {
    if (scroll >= 3 * windowHeight) {
      const op = (4 * windowHeight - scroll) / windowHeight;
      document.querySelector("#skill").style.opacity = 0.7 + op;
      document.querySelector("#skill-1").style.opacity = 0.5 + op;
    } else {
      const op = (scroll - 2 * windowHeight) / windowHeight;
      document.querySelector("#skill").style.opacity = 0.7 + op;
      document.querySelector("#skill-1").style.opacity = 0.5 + op;
    }
  }
  if (scroll <= 3 * windowHeight && scroll > 1 * windowHeight) {
    if (scroll >= 2 * windowHeight) {
      const op = (3 * windowHeight - scroll) / windowHeight;
      document.querySelector("#work").style.opacity = 0.7 + op;
      document.querySelector("#work-1").style.opacity = 0.5 + op;
    } else {
      const op = (scroll - 1 * windowHeight) / windowHeight;
      document.querySelector("#work").style.opacity = 0.7 + op;
      document.querySelector("#work-1").style.opacity = 0.5 + op;
    }
  }
  if (scroll <= 2 * windowHeight) {
    const op = (2 * windowHeight - scroll) / windowHeight;
    document.querySelector("#contact").style.opacity = 0.7 + op;
    document.querySelector("#contact-1").style.opacity = 0.5 + op;
  }
};

window.addEventListener("load", (event) => {
  opacityChange(body.getBoundingClientRect().bottom, window.innerHeight);
});

const runOnScroll = () => {
  const body = document.querySelector("body");
  // document.querySelector("body").style.opacity = "1";
  // console.log(body.getBoundingClientRect().bottom);
  opacityChange(body.getBoundingClientRect().bottom, window.innerHeight);
};

// console.log(document.querySelector("body"));
const body = document.querySelector("body");
document.addEventListener("scroll", runOnScroll);

const copy = () => {
  const phoneNumber = "+44 7878 316 264";
  navigator.clipboard.writeText(phoneNumber);
  alert("Copied the number:" + phoneNumber);
};
