import { useEffect } from "react";


export const ProjectsPage = ({ props })=> {

  useEffect(() => {
    
    /**
     * Porfolio isotope and filter
     */
    let portfolionIsotope = document.querySelector('.portfolio-isotope');

    if (portfolionIsotope) {

      let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
      let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
      let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

      let portfolioIsotope = new window.Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            window.aos_init();
          }
        }, false);
      });
    }

    window.aos_init()
  }, [])

  return(
    <main id="main">   
      
      <div class="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
        <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
    
          <h2>Projects</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Projects</li>
          </ol>
    
        </div>
      </div>
    
      
      <section id="projects" class="projects">
        <div class="container" data-aos="fade-up">
    
          <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
    
            <ul class="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-remodeling">Remodeling</li>
              <li data-filter=".filter-construction">Construction</li>
              <li data-filter=".filter-repairs">Repairs</li>
              <li data-filter=".filter-design">Design</li>
            </ul>
    
            <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/remodeling-1.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Remodeling 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/construction-1.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Construction 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/construction-1.jpg" title="Construction 1" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/repairs-1.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Repairs 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/design-1.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Design 1</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/design-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/remodeling-2.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Remodeling 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/remodeling-2.jpg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/construction-2.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Construction 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/construction-2.jpg" title="Construction 2" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/repairs-2.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Repairs 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/design-2.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Design 2</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/design-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/remodeling-3.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Remodeling 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/construction-3.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Construction 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/construction-3.jpg" title="Construction 3" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/repairs-3.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Repairs 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/design-3.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Design 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
    
        </div>
      </section>
    
    </main>
  )
}



export default ProjectsPage;