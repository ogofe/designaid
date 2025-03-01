import { useEffect } from "react";

export const AboutPage =({ props })=>{
  useEffect(() => {
    window.aos_init();
  }, [])

  
  return(
    <main id="main">        
      <div class="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')"}}>
        <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
  
          <h2>About</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>About</li>
          </ol>
  
        </div>
      </div>
  
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">

          <div class="row position-relative">

            <div class="col-lg-7 about-img" style={{backgroundImage: "url(/assets/img/people/black-engineer-1.jpg)"}}></div>

            <div class="col-lg-7">
              <h2>Transforming Visions into Reality</h2>
              <div class="our-story">
                <h4>Since 1988</h4>
                <h3>Our Story</h3>
                <p>For over three decades, **DesignAid Consult** has been at the forefront of architectural innovation, project management, and estate planning. Our commitment to excellence has enabled us to shape modern, sustainable, and functional spaces for residential, commercial, and industrial sectors.</p>
                <ul>
                  <li><i class="bi bi-check-circle"></i> <span>Expert architectural designs tailored for functionality and aesthetics</span></li>
                  <li><i class="bi bi-check-circle"></i> <span>Comprehensive project management ensuring seamless execution</span></li>
                  <li><i class="bi bi-check-circle"></i> <span>Strategic estate planning and facility management solutions</span></li>
                </ul>
                <p>With a team of industry professionals, cutting-edge technology, and a deep understanding of sustainable development, we create designs that stand the test of time. At **DesignAid Consult**, we don’t just build structures—we build legacies.</p>

                <div class="watch-video d-flex align-items-center position-relative">
                  <i class="bi bi-play-circle"></i>
                  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox stretched-link">Watch Our Story</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

  
      
      <section id="stats-counter" class="stats-counter section-bg">
        <div class="container">
  
          <div class="row gy-4">
  
            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
  
      <section id="services" class="services section-bg">
        <div class="container" data-aos="fade-up">
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
                <a href="/contact" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
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
                <a href="/contact" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
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
                <a href="/contact" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
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
                <a href="/contact" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
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
                <a href="/contact" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
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
                <a href="/contact" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>

          </div>
        </div>
      </section>
  
      <section id="alt-services-2" class="alt-services section-bg">
        <div class="container" data-aos="fade-up">

          <div class="row justify-content-around gy-4">
            <div class="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Innovative Solutions for Architectural Excellence & Project Management</h3>
              <p>At DesignAid Consult, we transform visions into reality through expert architectural designs, strategic project management, and comprehensive estate planning. Our goal is to deliver innovative, sustainable, and functional spaces that exceed client expectations.</p>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4><a href="#action" class="stretched-link">Architectural Design</a></h4>
                  <p>We create modern, aesthetically pleasing, and functional architectural designs tailored to meet the unique needs of our clients, ensuring every project stands out.</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a href="#action" class="stretched-link">Project Management</a></h4>
                  <p>From concept to completion, we oversee projects with precision, ensuring timely delivery, cost efficiency, and superior quality.</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="#action" class="stretched-link">Estate Planning</a></h4>
                  <p>Our estate planning services provide strategic guidance for property development, ensuring sustainable growth and maximizing value.</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-building flex-shrink-0"></i>
                <div>
                  <h4><a href="#action" class="stretched-link">Facility Management</a></h4>
                  <p>We offer professional facility management solutions to optimize building operations, maintenance, and overall efficiency for long-term functionality.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 img-bg" style={{ backgroundImage: "url('/assets/img/people/black-engineer-2.jpg')"}} data-aos="zoom-in" data-aos-delay="100"></div>
          </div>

        </div>
      </section>
    
      <section id="team" class="team">
        <div class="container" data-aos="fade-up">
  
          <div class="section-header">
            <h2>Our Team</h2>
            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
          </div>
  
          <div class="row gy-5">
  
            <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
              <div class="member-img">
                <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href="#home"><i class="bi bi-twitter"></i></a>
                  <a href="#home"><i class="bi bi-facebook"></i></a>
                  <a href="#home"><i class="bi bi-instagram"></i></a>
                  <a href="#home"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
              <div class="member-img">
                <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href="#home"><i class="bi bi-twitter"></i></a>
                  <a href="#home"><i class="bi bi-facebook"></i></a>
                  <a href="#home"><i class="bi bi-instagram"></i></a>
                  <a href="#home"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
              <div class="member-img">
                <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href="#home"><i class="bi bi-twitter"></i></a>
                  <a href="#home"><i class="bi bi-facebook"></i></a>
                  <a href="#home"><i class="bi bi-instagram"></i></a>
                  <a href="#home"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info text-center">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
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

  )
}



export default AboutPage;
