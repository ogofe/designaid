
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d245.16784617455195!2d7.427727474799351!3d10.525415100000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smogadishu%20layout%20ahmadu%20bello%20way!5e0!3m2!1sen!2sng!4v1740624608540!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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