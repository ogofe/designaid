
export const ServiceLayout = ({ service, children, ...props }) => {
	return(
		
		<main id="main">

		  <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
		    <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

		      <h2>Service Details</h2>
		      <ol>
		        <li><a href="/">Home</a></li>
		        <li><a href="/services">Services</a></li>
		        <li>{service}</li>
		      </ol>

		    </div>
		  </div>

		  
			<section id="service-details" className="service-details">
			    <div className="container" dataAos="fade-up" dataAosDelay="100">{children}</div>
		   	</section>
		</main>
	)
}


export default ServiceLayout;

