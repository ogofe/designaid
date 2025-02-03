import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"



export const Header = ({ props }) => {

    const mobileNavShow = useRef()
    const mobileNavHide = useRef()


    function closeMobileNav() {
        document.querySelector('body').classList.remove('mobile-nav-active');
        mobileNavShow.current.classList.remove('d-none');
        mobileNavHide.current.classList.add('d-none');
    }

    function openMobileNav() {
        document.querySelector('body').classList.add('mobile-nav-active');
        mobileNavShow.current.classList.add('d-none');
        mobileNavHide.current.classList.remove('d-none');
    }


    return(
        <header id="header" class="header d-flex align-items-center">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="/" class="logo d-flex align-items-center">
                 {/*<img src="assets/img/logo.png" alt="Design aid logo"/> */}
                <h1>Design<span>Aid.</span></h1>
            </a>

            <i ref={mobileNavShow} onClick={openMobileNav} class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i ref={mobileNavHide} onClick={closeMobileNav} class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav id="navbar" class="navbar">
                <ul>
                    <li><NavLink to="/" class="">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    {/* <li><NavLink to="/projects">Projects</NavLink></li> */}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>

            </div>
        </header>
    )
}




export const Footer = () => {

    return(
        <footer id="footer" class="footer">

            <div class="footer-content position-relative">
                <div class="container">
                    <div class="row">
            
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-info">
                                <h3>Design Aid</h3>
                                <p>
                                    No 8 Mogadishu City Centre, <br />
                                    Kaduna, Nigeria<br /><br />
                                    <strong>Phone:</strong> +234(0)803 3619 153<br />
                                    <strong>Email:</strong> contact@designaid.com<br />
                                </p>

                                <div class="social-links d-flex mt-3">
                                    <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                
                        <div class="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/terms-of-service">Terms of service</a></li>
                                <li><a href="/privacy-policy">Privacy policy</a></li>
                            </ul>
                        </div>
                
                        <div class="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="/services/architectural-design">Architectural Design</a></li>
                                <li><a href="/services/estate-development">Estate Development</a></li>
                                <li><a href="/services/facility-management">Facility Management</a></li>
                                <li><a href="/services/project-management">Project Management</a></li>
                                <li><a href="/services/industrial-construction">Industrial Construction</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h6 style={{ fontWeight: '600'}}> Made with love by <a href="https://binsoft.online">Binary Software Inc.</a></h6>
                </div>
            </div>
        
        </footer>
    )
}


