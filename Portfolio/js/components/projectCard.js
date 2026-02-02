export function createProjectCard(project) {
  return `
    <article class="project-card">
      <img src="${project.image}" alt="${project.title} screenshot" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul class="tech">
        ${project.tech.map(t => `<li>${t}</li>`).join("")}
      </ul>
      <div class="links">
        <a href="${project.live}" target="_blank">Live</a>
        <a href="${project.repo}" target="_blank">Code</a>
      </div>
    </article>
  `;
}
