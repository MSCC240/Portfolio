import { projects } from "./data/projects.js";
import { createProjectCard } from "./components/projectCard.js";

const container = document.querySelector("#projects-container");

container.innerHTML = projects.map(createProjectCard).join("");
