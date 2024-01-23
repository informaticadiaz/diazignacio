const portfolioData = [
    {
        targetModal: "#modalTizzano",
        imgSrc: "assets/img/portfolio/tizzano.webp"
    },
    {
        targetModal: "#modalMessi",
        imgSrc: "assets/img/portfolio/messi.webp"
    },
    {
        targetModal: "#modalBlog",
        imgSrc: "assets/img/portfolio/blog.webp"
    },
    {
        targetModal: "#modalBlogAstro",
        imgSrc: "assets/img/portfolio/blogastro.webp"
    },
    {
        targetModal: "#prensa",
        imgSrc: "assets/img/portfolio/prensa.webp"
    }
    // Agrega más elementos según sea necesario
];

const portfolioContainer = document.getElementById("portfolioContainer");

portfolioData.forEach(item => {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("col-md-6", "col-lg-4", "mb-5");

    portfolioItem.innerHTML = `
    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="${item.targetModal}">
      <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x text-primary"></i></div>
      </div>
      <img class="img-fluid" src="${item.imgSrc}" alt="..." />
    </div>
  `;

    portfolioContainer.appendChild(portfolioItem);
});


const modalData = [
    {
        id: "modalTizzano",
        title: "Baires Real Estate",
        imgSrc: "assets/img/portfolio/tizzano.webp",
        link: "https://bairesrealestate.com.ar/",
        deploy: "_blank"
    },
    {
        id: "modalMessi",
        title: "Messi Nuestro",
        imgSrc: "assets/img/portfolio/messi.webp",
        link: "http://messinuestro.ar",
        deploy: "_blank"
    },
    {
        id: "modalBlog",
        title: "Blog",
        imgSrc: "assets/img/portfolio/blog.webp",
        link: "https://blogdiazdev.netlify.app/",
        deploy: "_blank",
    },
    {
        id: "modalBlogAstro",
        title: "Blog Astro",
        imgSrc: "assets/img/portfolio/blogastro.webp",
        link: "https://blogdiazdev.netlify.app/",
        deploy: "_blank",
    },
    {
        id: "prensa",
        title: "Prensa",
        imgSrc: "assets/img/portfolio/prensa.webp",
        link: "https://prensa.ar/",
        deploy: "_blank",
    }
    // Agrega más elementos según sea necesario
];

const modalContainer = document.getElementById("modalContainer");

modalData.forEach(item => {
    const modal = document.createElement("div");
    modal.classList.add("portfolio-modal", "modal", "fade");
    modal.id = item.id;
    modal.tabIndex = "-1";
    modal.setAttribute("aria-labelledby", item.id);
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
<div class="modal-dialog modal-xl">
  <div class="modal-content">
    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
    <div class="modal-body text-center pb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${item.title}</h2>
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
              <div class="divider-custom-line"></div>
            </div>
            <div><img class="img-fluid" src="${item.imgSrc}" alt=""></div>
            <button class="btn btn-primary mt-3" data-bs-dismiss="modal">
              <a class="btn btn-primary" href="${item.link}" target="${item.deploy}">Visitar</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

    modalContainer.appendChild(modal);
});

