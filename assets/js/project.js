// JavaScript for project.html.

(function () {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const backEl = document.getElementById("project-back");
  const titleEl = document.getElementById("project-title");
  const heroImageEl = document.getElementById("project-hero-image");
  const contentEl = document.getElementById("project-content");

  const match = findProject(projectId);

  if (!match) {
    document.title = "Progetto non trovato";
    titleEl.textContent = "Progetto non trovato";
    heroImageEl.remove();
    contentEl.innerHTML =
      '<p class="project-message">Il progetto richiesto non esiste. <a href="./works.html">Torna a works</a></p>';
    backEl.href = "./works.html";
    return;
  }

  const { project, subject } = match;

  document.title = project.title;
  titleEl.textContent = project.title;
  document.body.dataset.project = project.id;
  backEl.href = `./subject.html?subject=${encodeURIComponent(subject.id)}`;

  heroImageEl.src = project.hero;
  heroImageEl.alt = project.title;

  renderBlocks(contentEl, project);
  renderGallery(contentEl, project);

  function initProjectMotion() {
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      setupTitleScroll(titleEl);
    }

    if (window.gsap && window.Draggable) {
      gsap.registerPlugin(Draggable);
      initGalleryDraggable();
    }

    ScrollTrigger?.refresh();
  }

  if (document.readyState === "complete") {
    initProjectMotion();
  } else {
    window.addEventListener("load", initProjectMotion, { once: true });
  }

  window.addEventListener("resize", () => ScrollTrigger?.refresh());
})();

function findProject(projectId) {
  for (const subject of portfolioData.subjects) {
    const project = subject.projects.find((item) => item.id === projectId);
    if (project) {
      return { project, subject };
    }
  }
  return null;
}

function renderBlocks(container, project) {
  const blocks = project.blocks || [];

  blocks.forEach((block, index) => {
    if (block.type === "text") {
      const paragraph = document.createElement("p");
      paragraph.className = "project-block-text";
      if (index === 0) {
        paragraph.classList.add("project-content-start");
      }
      paragraph.textContent = block.text;
      container.appendChild(paragraph);
      return;
    }

    if (block.type === "pair") {
      const row = document.createElement("div");
      row.className = `project-block-pair project-block-pair-${block.layout}`;

      const image = document.createElement("img");
      image.className = "project-block-image";
      image.src = block.image;
      image.alt = project.title;
      image.loading = "lazy";

      const paragraph = document.createElement("p");
      paragraph.className = "project-block-text";
      paragraph.textContent = block.text;

      if (block.layout === "image-left") {
        row.append(image, paragraph);
      } else {
        row.append(paragraph, image);
      }

      container.appendChild(row);
    }
  });
}

function resolveGalleryItems(project) {
  const items = [...(project.gallery || [])];

  (project.galleryExtra || []).forEach((src) => {
    items.push({ src });
  });

  return items.map((item, index) => ({
    src: item.src,
    width: item.width || 170,
    top: item.top ?? 24 + Math.floor(index / 6) * 118,
    left: item.left ?? 36 + (index % 6) * 132,
    rotation: item.rotation ?? ((index % 5) - 2) * 2.8,
    large: Boolean(item.large),
  }));
}

function renderGallery(container, project) {
  const items = resolveGalleryItems(project);
  if (items.length === 0) {
    return;
  }

  const gallery = document.createElement("section");
  gallery.className = "project-gallery";
  gallery.setAttribute("aria-label", "Galleria del progetto");

  const maxBottom = items.reduce((max, item) => {
    const estimatedHeight = item.width * 1.25;
    return Math.max(max, item.top + estimatedHeight);
  }, 0);

  gallery.style.minHeight = `${maxBottom + 140}px`;

  items.forEach((item, index) => {
    const wrap = document.createElement("div");
    wrap.className = "project-gallery-item";
    if (item.large) {
      wrap.classList.add("is-large");
    }
    wrap.style.width = `${item.width}px`;
    wrap.style.top = `${item.top}px`;
    wrap.style.left = `${item.left}px`;
    wrap.dataset.rotation = String(item.rotation || 0);

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = `${project.title} ${index + 1}`;
    image.draggable = false;
    image.loading = "lazy";

    wrap.appendChild(image);
    gallery.appendChild(wrap);
  });

  container.appendChild(gallery);
}

function setupTitleScroll(titleEl) {
  const hero = document.getElementById("project-hero");
  const page = document.querySelector(".project-page");
  const anchor = document.querySelector(".project-content-start");

  if (!hero || !anchor || !titleEl || !page) {
    return;
  }

  const getPositions = () => {
    const pageTop = page.getBoundingClientRect().top + window.scrollY;
    const heroRect = hero.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const titleHeight = titleEl.offsetHeight;

    const startTop =
      heroRect.top + window.scrollY - pageTop + heroRect.height * 0.5 - titleHeight * 0.5;
    const endTop = anchorRect.top + window.scrollY - pageTop - titleHeight - 40;

    return {
      startTop,
      endTop,
      travel: Math.max(endTop - startTop, 0),
    };
  };

  gsap.set(titleEl, { top: getPositions().startTop });

  gsap.to(titleEl, {
    top: () => getPositions().endTop,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: () => `+=${getPositions().travel}`,
      scrub: 0.45,
      invalidateOnRefresh: true,
    },
  });
}

function initGalleryDraggable() {
  const gallery = document.querySelector(".project-gallery");
  if (!gallery) {
    return;
  }

  gallery.querySelectorAll(".project-gallery-item").forEach((item) => {
    const rotation = Number(item.dataset.rotation || 0);
    gsap.set(item, { rotation });

    Draggable.create(item, {
      type: "x,y",
      bounds: gallery,
      inertia: false,
      onPress() {
        gsap.set(this.target, { zIndex: 20 });
      },
      onRelease() {
        gsap.set(this.target, { zIndex: 1 });
      },
    });
  });
}
