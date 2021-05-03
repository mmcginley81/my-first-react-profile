import React from 'react';
import About from '../About';
import ContactForm from '../ContactForm';
import Projects from '../Projects';
import GitHubIcon from '../../assets/svg/github.svg';
import LinkedInIcon from '../../assets/svg/linkedin.svg';
import InstagramIcon from '../../assets/svg/instagram.svg';



function Page({ currentPage }){

    const renderPage = () => {
        
        switch(currentPage.name) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <ContactForm />
        }
    }
    
    return(

        <section>
            <div>{renderPage()}</div>
            <footer class="footer" id="contact-me">
        <h4>Let's Connect</h4>
        <a href="mailto:matthewjamesmcginley@gmail.com" class="footer-link">matthewjamesmcginley@gmail.com</a>
        <ul class="social-links">
            <li class="social-list-item">
            <button className="btn btn-footer">
                <a class="social-list-link" href="https://github.com/mmcginley81">
                    <img 
                    src={GitHubIcon}
                    alt="GitHub Profile" />  GitHub Profile
                </a>
                </button>
                </li>
            <li class="social-list-item">
                <button className="btn btn-footer">
                <a class="social-list-link" href="https://www.linkedin.com/in/mmcginley81/">
                
                <img 
                    src={LinkedInIcon}
                    alt="GitHub Profile" />  GitHub Profile
                </a>
                </button>
                </li>

            <li class="social-list-item">
            <button className="btn btn-footer">
                <a class="social-list-link" href="https://www.instagram.com/mcginley91/?hl=en">
                <img 
                    src={InstagramIcon}
                    alt="Instagram Profile" />  Instagram Profile
                </a>
                </button>
                </li>
        </ul>
    
    </footer>
        </section>
    )

}

export default Page;