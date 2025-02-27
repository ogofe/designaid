import { useEffect } from "react";

export const Homepage = ({ props }) => {

  useEffect(() => {
    window.aos_init();

    new window.Swiper('.slides-2', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });

  }, [])

  return(
    <div>
      
      <section id="hero" class="hero">

        <div class="info d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <h2 data-aos="fade-down">Welcome to <span>DesignAid</span></h2>
                <p data-aos="fade-up">
                  Where visionary design meets impeccable construction. From architectural innovation to full-scale project management – we build dreams.
                </p>
                <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a>
              </div>
            </div>
          </div>
        </div>

        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

          <div class="carousel-item active" style={{backgroundImage: "url(assets/img/hero-carousel/hero-carousel-1.jpg)"}}></div>
          <div class="carousel-item" style={{backgroundImage: "url(assets/img/hero-carousel/hero-carousel-2.jpg)"}}></div>
          <div class="carousel-item" style={{backgroundImage: "url(assets/img/hero-carousel/hero-carousel-3.jpg)"}}></div>
          <div class="carousel-item" style={{backgroundImage: "url(assets/img/hero-carousel/hero-carousel-4.jpg)"}}></div>
          <div class="carousel-item" style={{backgroundImage: "url(assets/img/hero-carousel/hero-carousel-5.jpg)"}}></div>

          <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

        </div>

      </section>

      <main id="main">
        
        <section id="get-started" class="get-started section-bg">
          <div class="container">

            <div class="row justify-content-between gy-4">

              <div class="col-lg-12 d-flex align-items-center" data-aos="fade-up">
                <div class="content">
                  <h3>Who We Are</h3>
                  <p style={{fontSize: "large"}}>
                    At DesignAid, we bring visions to life by turning ideas into lasting structures.
                    As an indigenous company registered under the Company and Allied Matters Act of 1990, we take pride in our heritage and expertise. 
                    Our team is made up of passionate architects, skilled builders, dedicated project managers, facility experts, and savvy cost consultants who have spent decades perfecting their craft.
                    Together, we ensure every project we touch is not only built to last but also tells a unique story.

                    <br />
                    <br />

                    Based in Kaduna—with plans to grow our presence in Abuja—we’re driven by a genuine commitment to quality, innovation, and honesty. 
                    We take the time to really listen to our clients, understanding their needs and dreams, so that every project becomes a personalized masterpiece. 
                    For us, it’s not just about constructing buildings; it’s about creating spaces that inspire, support community growth, and elevate everyday living.

                    <br />
                    <br />
                    At the heart of our work is the belief that great design can change lives. 
                    We’re here to build more than just structures—we’re here to create landmarks that bring people together, foster community spirit, and pave the way for a brighter, more connected future. 
                    Every blueprint we draft and every brick we lay reflects our dedication to excellence and our desire to make a positive impact on the communities we serve.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        <section id="constructions" class="constructions">
          <div class="container" data-aos="fade-up">

            <div class="section-header">
              <h2>Constructions</h2>
              <p>
                From innovative residential developments to state-of-the-art commercial spaces, we bring creativity, quality, and precision to every construction project.
              </p>
            </div>

            <div class="row gy-4">
              
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div class="card-item">
                  <div class="row">
                    <div class="col-xl-5">
                      <div class="card-bg" style={{backgroundImage: "url(assets/img/people/black-engineer-1.jpg)"}}></div>
                    </div>
                    <div class="col-xl-7 d-flex align-items-center">
                      <div class="card-body">
                        <h4 class="card-title">Facility Construction</h4>
                        <p>
                          We design and build commercial facilities that marry functionality with aesthetic brilliance, ensuring every project is a model of modern efficiency and enduring quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div class="card-item">
                  <div class="row">
                    <div class="col-xl-5">
                      <div class="card-bg" style={{backgroundImage: "url(assets/img/people/black-engineer-2.jpg)"}}></div>
                    </div>
                    <div class="col-xl-7 d-flex align-items-center">
                      <div class="card-body">
                        <h4 class="card-title">Industrial Construction</h4>
                        <p>
                          Our industrial builds are engineered to withstand the demands of modern manufacturing and production, delivering robust, innovative structures that drive operational excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>

        <section id="services" class="services section-bg">
          <div class="container" data-aos="fade-up">

            <div class="section-header">
              <h2>Services</h2>
              <p>
                Your next project deserves the expertise of a team that combines vision, technical prowess, and a passion for design. We’re here to bring that to life.
              </p>
            </div>

            <div class="row gy-4">

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-mountain-city"></i>
                  </div>
                  <h3>Industrial Construction</h3>
                  <p>
                    We deliver robust industrial facilities that integrate innovative engineering with rigorous quality standards, ensuring peak operational performance.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Remodeling</h3>
                  <p>
                    Transform your space with our expert remodeling services that rejuvenate and modernize existing structures while maintaining their unique character.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-compass-drafting"></i>
                  </div>
                  <h3>Architectural Design</h3>
                  <p>
                    Our design team crafts visionary spaces that are both innovative and functional, tailored to your specific needs while setting new industry standards.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-trowel-bricks"></i>
                  </div>
                  <h3>Estate Building</h3>
                  <p>
                    We develop communities that blend contemporary design with sustainable living, creating estate projects that serve as modern sanctuaries.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-helmet-safety"></i>
                  </div>
                  <h3>Project Management</h3>
                  <p>
                    Our experienced project managers ensure every phase of your project is seamlessly coordinated, delivering exceptional results on time and within budget.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div class="service-item position-relative">
                  <div class="icon">
                    <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Facility Management</h3>
                  <p>
                    Our comprehensive facility management services ensure your property remains at peak performance, blending proactive maintenance with modern technology.
                  </p>
                  <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>

            </div>

          </div>
        </section>
        
        <section id="testimonials" class="testimonials section-bg">
          <div class="container" data-aos="fade-up">

            <div class="section-header">
              <h2>Testimonials</h2>
              <p>
                Don’t just take our word for it. Hear from our satisfied clients who have experienced the DesignAid difference.
              </p>
            </div>

            <div class="slides-2 swiper">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      {/* <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="Client Photo" /> */}
                      <h3>Engr. Adamu Peter - KADSWAC</h3>
                      <h4>Director</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        DesignAid’s innovative solutions and impeccable project management empower us to serve millions with confidence.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="testimonial-wrap">
                    <div class="testimonial-item">
                      {/* <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="Client Photo" /> */}
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        When it comes to my projects, DesignAid is my trusted partner. Their ability to bring creative visions to life is unmatched.
                        <i class="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

export default Homepage;
