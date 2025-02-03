
export const ContactPage = ({ props }) => {
  function handleFormSubmission(e){
    e.preventDefault();

  }
  
  return(
    <main id="main">
  
      <div class="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
        <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
  
          <h2>Contact</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Contact</li>
          </ol>
  
        </div>
      </div>
  
      
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
  
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-map"></i>
                <h3>Our Address</h3>
                <p>Suite 2 NUT Building, Mogadishu Layout, Kaduna, Nigeria.</p>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6">
              <div class="info-item d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>contact@designaid.com</p>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-6">
              <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                <i class="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+234(0)803 3619 153</p>
              </div>
            </div>
  
          </div>
  
          <div class="row gy-4 mt-1">
  
            <div class="col-lg-6 ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" title="mapObject" style={{border:0,  width: "100%", height: "384px"}} allowFullScreen></iframe>
            </div>
  
            <div class="col-lg-6">
              <form method="post" onSubmit={handleFormSubmission} class="php-email-form">
                <div class="row gy-4">
                  <div class="col-lg-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-lg-6 form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group">
                  <textarea class="form-control" style={{resize: "none", height: "223px"}} name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
  
    </main>
  )
}

export default ContactPage;