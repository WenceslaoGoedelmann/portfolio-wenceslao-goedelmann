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
    img,
    img1,
    img2,
    img3,
    img4,
    img5,
    category,
    linkWeb,
    linkCodeFront,
    linkCodeBack,
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
        src=${img}
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
            target="_blank"
            ><i class="bi bi-globe"></i> WebSite
          </a>
        </div>

        <div class="row">
          <a href=${linkCodeFront} class="text-white" target="_blank"><i class="bi bi-code-slash"></i> Code FrontEnd</a>
        </div>
        <div class="row">
        <a href=${linkCodeBack} class="text-white" target="_blank"><i class="bi bi-code-slash"></i> Code BackEnd</a>
      </div>

        <div class="row text-center">
        <div class="cols-md-5 mt-2">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-id='${id}'
            data-name='${name}'
            data-category='${category}'
            data-img='${img}'
            data-img1='${img1}'
            data-img2='${img2}'
            data-img3='${img3}'
            data-img4='${img4}'
            data-img5='${img5}'
            data-web='${linkWeb}'
            data-front='${linkCodeFront}'
            data-back='${linkCodeBack}'
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
  const { id, name, category, img, img1,img2, img3, img4 , img5, web, front, back, description, technologies } =
    project;
  return `
  <div class="card bg-dark border-light mb-1 mt-1 pb-3 pt-2" style="--bs-border-opacity: 0.5">
  <div class="container d-flex align-items-center gap-1 justify-content-center flex-column" >
  <div data-bs-theme="dark" class=" ms-auto mt-1">
    <button type="button" class="btn-close" aria-label="Close"></button>
  </div>
  <h2 class="text-white fw-bolder mb-0">${name}</h2>

  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src=${img1} class="d-block w-100 caroucelImg" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src=${img2} class="d-block w-100 caroucelImg" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src=${img3} class="d-block w-100 caroucelImg" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
    <img src=${img4} class="d-block w-100 caroucelImg" alt="...">
  </div>
  <div class="carousel-item" data-bs-interval="3000">
  <img src=${img5} class="d-block w-100 caroucelImg" alt="...">
</div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
    <a href=${web} class="text-white" target="_blank"><i class="bi bi-globe"></i> WebSite </a>
    <a href=${front} class="text-white" target="_blank"><i class="bi bi-code-slash"></i> Code FrontEnd</a>
    <a href=${back} class="text-white" target="_blank"><i class="bi bi-code-slash"></i> Code BackEnd</a>
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
