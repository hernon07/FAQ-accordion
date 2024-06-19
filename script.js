const faqP = document.querySelectorAll(".body .answer");
const iconSvgs = document.querySelectorAll(".body img");

iconSvgs.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    reset(faqP, iconSvgs);
    active(e.target);
  });
});

function reset(paras, icons) {
  paras.forEach((para) => {
    para.classList.add("hidden");
  });
  icons.forEach((icon) => {
    icon.setAttribute("src", "assets/images/icon-plus.svg");
  });
}

function active(svg) {
  svg.setAttribute("src", "assets/images/icon-minus.svg");
  svg.parentNode.nextElementSibling.classList.remove("hidden");
}
