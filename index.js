const topProjects = document.querySelector(".cards-top-projects-container");
const allProjects = document.querySelector(".cards-all-projects-container");
const infoProjectContainer = document.querySelector(".info-project-container");
const overlay = document.querySelector(".overlay");
const btnAllProject = document.querySelector(".btn-all-project");
const btnCloseAllProject = document.querySelector(".btn-close-all-project");

const allProjectsContainer = document.querySelector(".all-projects-container");



const renderProject = (project) => {
  const {
    id,
    name,
    cardImg,
    category,
    linkWeb,
    linkCode,
    description,
    technologies,
  } = project;
  return ` 
    <div class="col">
    <div
      class="card bg-dark border-light "
      style="--bs-border-opacity: 0.5"
    >
      <img
        src=${cardImg}
        alt=${name}
        class="card-img-top"
      />
      <div class="card-body">
        <div class="row">
          <h3 class="card-title">${name}</h3>
        </div>

        <div class="row"><p>${category}</p></div>

        <div class="row">
          <a
            href=${linkWeb}
            class="text-white"
            ><i class="bi bi-globe"></i> WebSite
          </a>
        </div>

        <div class="row">
          <a href=${linkCode} class="text-white"><i class="bi bi-code-slash"></i> Code </a>
        </div>

        <div class="row text-center">
        <div class="cols-md-5 mt-2">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-id='${id}'
            data-name='${name}'
            data-category='${category}'
            data-img='${cardImg}'
            data-web='${linkWeb}'
            data-code='${linkCode}'
            data-description='${description}'
            data-technologies='${technologies}'
          >
            Mas Informacion
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
};

const renderTopProjects = () => {
  topProjects.innerHTML = topProjectsData.map(renderProject).join("");
};

const renderAllProjects = () => {
  allProjects.innerHTML = allProjectsData.map(renderProject).join("");
};

const cardProjectInfo = (project) => {
  const { id, name, category, img, web, code, description, technologies } =
    project;
  return `
  <div class="card bg-dark border-light mb-1 mt-1 " style="--bs-border-opacity: 0.5 ">
  <div class="container d-flex align-items-center gap-1 justify-content-center flex-column" >
  <div data-bs-theme="dark" class=" ms-auto mt-1">
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <h2 class="text-white fw-bolder mb-0">${name}</h2>
  <div class="container d-flex justify-content-center">
    <img
    src=${img}
    alt=${name}
    class="card-img-top imgContainer"
    />
  </div>
    <div class="container d-flex flex-column justify-content-center">
    <h4 class="text-white  mb-1">${category}</h4>
      <p class="lead text-white mb-3">
      ${description}
      </p>
      <h4 class="text-white  mb-1">Tecnologias Utilizadas</h4>
      <p class="lead text-white mb-3">
      ${technologies}
      </p>

    </div>
    <div class="d-flex gap-4 mb-1">
    <a href=${web} class="text-white"><i class="bi bi-globe"></i> WebSite </a>
    <a href=${code} class="text-white"><i class="bi bi-code-slash"></i> Code </a>
  </div>
  </div>

  </div>
  
    `;
};

const renderProjectInfo = (project) => {
  infoProjectContainer.innerHTML = cardProjectInfo(project);
};

const projectInfo = (e) => {
  if (!e.target.classList.contains("btn")) return;
  const project = e.target.dataset;
  console.log(project);
  renderProjectInfo(project);
  infoProjectContainer.classList.toggle("open-project-info");
  overlay.classList.toggle("show-overlay");
};

const btnClose = (e) => {
  if (!e.target.classList.contains("btn-close")) return;
  infoProjectContainer.classList.remove("open-project-info");
  overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
  infoProjectContainer.classList.remove("open-project-info");
  overlay.classList.remove("show-overlay");
};

const viewAllProjects = (e) => {
  btnAllProject.classList.add("d-none");
  allProjectsContainer.classList.remove("d-none");
  allProjectsContainer.classList.add("d-block");

  
};

const closeAllProjects = (e) => {
  allProjectsContainer.classList.remove("d-block");
  allProjectsContainer.classList.add("d-none");
  btnAllProject.classList.remove("d-none");
  
};



const init = () => {
  renderTopProjects();
  renderAllProjects();
  topProjects.addEventListener("click", projectInfo);
  allProjects.addEventListener("click", projectInfo);
  infoProjectContainer.addEventListener("click", btnClose);
  overlay.addEventListener("click", closeOnOverlayClick);
  btnAllProject.addEventListener("click", viewAllProjects);
  btnCloseAllProject.addEventListener("click", closeAllProjects);
  
};

init();
