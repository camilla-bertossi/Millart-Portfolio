// Shared JavaScript for all pages.

// Put simple GSAP animations here when they are used on more than one page.
// Put page-specific GSAP animations in a clearly named block using body[data-page].

// Highlights the nav link that corresponds to the current page (adds
// aria-current="page", styled in style.css as italic, same as :hover).
// subject.html and project.html count as part of "works".
(function highlightActiveNavLink() {
  const currentPage = document.body.dataset.page;

  const navTargetByPage = {
    "who-am-i": "who-am-i.html",
    works: "works.html",
    subject: "works.html",
    project: "works.html",
    contacts: "contacts.html",
  };

  const targetHref = navTargetByPage[currentPage];
  if (!targetHref) return;

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkHref = link.getAttribute("href").replace("./", "");
    if (linkHref === targetHref) {
      link.setAttribute("aria-current", "page");
    }
  });
})();

if (document.body.dataset.page === "who-am-i" && window.gsap && window.ScrollTrigger && window.SplitText) {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const baseTextColor = "#a0e1ff";
  const centerTextColor = "#2a2e36";
  const whiteTextColor = "#fcfbf9";
  const whoLetters = [];

  document.querySelectorAll(".who-text, .who-callout p").forEach((block) => {
    const split = new SplitText(block, {
      type: "words,chars",
      wordsClass: "who-word",
      charsClass: "who-letter",
      ignore: "[data-static='true']",
    });

    split.chars.forEach((letter) => {
      if (letter.closest(".contact-link")) {
        return;
      }

      const isWhiteWord = Boolean(letter.closest(".who-text span, .who-callout span"));
      letter.dataset.centerColor = isWhiteWord ? whiteTextColor : centerTextColor;
      letter.dataset.baseColor = baseTextColor;
      whoLetters.push(letter);
    });
  });

  document.querySelectorAll(".contact-link").forEach((link) => {
    gsap.set(link, { color: "#c81022" });
    link.querySelectorAll(".who-letter").forEach((letter) => {
      gsap.set(letter, { color: "#c81022" });
    });
  });

  const centerBand = 115;

  // Ogni lettera "si accende" (diventa scura) quando passa per il centro
  // schermo, e RESTA scura finché è ancora visibile a schermo.
  // Torna chiara solo quando esce completamente dalla viewport
  // (sopra o sotto), sia scendendo che risalendo.
  function updateCenterHighlight() {
    const screenCenter = window.innerHeight / 2;

    whoLetters.forEach((letter) => {
      const letterBox = letter.getBoundingClientRect();
      const isOnScreen = letterBox.bottom > 0 && letterBox.top < window.innerHeight;

      if (!isOnScreen) {
        letter.dataset.activated = "false";
      } else {
        const letterCenter = letterBox.top + letterBox.height / 2;
        const distanceFromCenter = Math.abs(letterCenter - screenCenter);

        if (distanceFromCenter < centerBand) {
          letter.dataset.activated = "true";
        }
      }

      const isActivated = letter.dataset.activated === "true";

      gsap.to(letter, {
        color: isActivated ? letter.dataset.centerColor : letter.dataset.baseColor,
        duration: 0.16,
        overwrite: true,
        ease: "none",
      });
    });
  }

  ScrollTrigger.create({
    trigger: ".who-content",
    start: "top bottom",
    end: "bottom top",
    onEnter: updateCenterHighlight,
    onUpdate: updateCenterHighlight,
    onEnterBack: updateCenterHighlight,
    onLeave: updateCenterHighlight,
    onLeaveBack: updateCenterHighlight,
  });

  window.addEventListener("resize", updateCenterHighlight);
  updateCenterHighlight();

  // Foto trascinabile con il mouse/touch (GSAP Draggable).
  if (window.Draggable) {
    gsap.registerPlugin(Draggable);

    // Impostiamo la rotazione via GSAP (non via CSS) così Draggable
    // può combinarla con lo spostamento x/y senza "cancellarla".
    gsap.set(".who-photo", { rotation: 8 });

    Draggable.create(".who-photo", {
      type: "x,y",
      bounds: ".who-page",
      inertia: false,
    });
  }
}