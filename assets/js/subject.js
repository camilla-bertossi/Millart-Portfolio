// JavaScript for subject.html.

(function () {
  const params = new URLSearchParams(window.location.search);
  const subjectId = params.get("subject");

  const titleEl = document.getElementById("subject-title");
  const listEl = document.getElementById("subject-projects");

  const subject = portfolioData.subjects.find((entry) => entry.id === subjectId);

  if (!subject) {
    document.title = "Sezione non trovata";
    titleEl.textContent = "Sezione non trovata";
    listEl.innerHTML =
      '<p class="subject-message">La sezione richiesta non esiste. <a href="./works.html">Torna a works</a></p>';
    return;
  }

  document.title = subject.title;
  titleEl.textContent = subject.title;
  document.body.dataset.subject = subject.id;

  if (subject.projects.length === 0) {
    listEl.innerHTML =
      '<p class="subject-message">Progetti in arrivo. <a href="./works.html">Torna a works</a></p>';
    return;
  }

  subject.projects.forEach((project) => {
    listEl.appendChild(createSubjectRow(project));
  });
})();

function createSubjectRow(project) {
  const extraCount = Math.max(project.images.length - 1, 0);

  const row = document.createElement("a");
  row.className = "subject-row";
  row.href = `./project.html?id=${encodeURIComponent(project.id)}`;
  row.dataset.extraCount = String(extraCount);
  row.dataset.projectId = project.id;

  const inner = document.createElement("div");
  inner.className = "subject-row-inner";

  const extrasLeft = document.createElement("div");
  extrasLeft.className = "subject-extras subject-extras-left";

  const core = document.createElement("div");
  core.className = "subject-core";

  core.appendChild(createSubjectImageWrap(project.images[0], project.title, 0));

  const title = document.createElement("h2");
  title.className = "subject-row-title";
  title.textContent = project.title;
  core.appendChild(title);

  const extrasRight = document.createElement("div");
  extrasRight.className = "subject-extras subject-extras-right";

  project.images.slice(1).forEach((src, index) => {
    const wrap = createSubjectImageWrap(src, project.title, index + 1);
    if (index % 2 === 0) {
      extrasRight.appendChild(wrap);
    } else {
      extrasLeft.appendChild(wrap);
    }
  });

  inner.appendChild(extrasLeft);
  inner.appendChild(core);
  inner.appendChild(extrasRight);
  row.appendChild(inner);
  return row;
}

function createSubjectImageWrap(src, projectTitle, index) {
  const wrap = document.createElement("div");
  wrap.className = `subject-image-wrap ${index === 0 ? "is-primary" : "is-extra"}`;
  wrap.dataset.index = String(index);

  const img = document.createElement("img");
  img.src = src;
  img.alt = `${projectTitle} ${index + 1}`;
  img.loading = index === 0 ? "eager" : "lazy";
  img.decoding = "async";

  wrap.appendChild(img);
  return wrap;
}
