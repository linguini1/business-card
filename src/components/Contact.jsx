// Imports
import "./css/Contact.css"

// Contact component
function Contact() {
    return (
        <div className="contact-container">
            <ul className="contact-options">
                <li>
                    <a href="mailto:matteo.golin@gmail.com">
                        <div className="link-container">
                            <img src="./static/Email.svg" alt="Email" />
                            <p>matteo.golin@gmail.com</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/linguini1">
                        <div className="link-container">
                            <img src="./static/GitHub.svg" alt="GitHub" />
                            <p>Github</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/matteo-golin-94118021b/">
                        <div className="link-container">
                            <img src="./static/LinkedIn.svg" alt="LinkedIn" />
                            <p>LinkedIn</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;