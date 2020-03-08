import React from "react";
import "./Footer.css";
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'

// library.add(fab, faCoffee)

function Footer() {

  return (
    <div className="Footer">

      <a className="btn" href="#">
        <FontAwesomeIcon className="i" icon={faCoffee} />
        {/* <i className="fab fa-facebook-f"></i> */}
      </a>
      <a className="btn" href="#">
      <FontAwesomeIcon className="i" icon={faCoffee} />

        {/* <FontAwesomeIcon className="i" icon={faTwitter} /> */}
        {/* <i className="fab fa-twitter"></i> */}
      </a>
      <a className="btn" href="#">
        <FontAwesomeIcon className="i" icon={faCoffee} />
        {/* <i className="fab fa-google"></i> */}
      </a>
      <a className="btn" href="#">
        <FontAwesomeIcon className="i" icon={faCoffee} />
        {/* <i className="fab fa-instagram"></i> */}
      </a>
      <a className="btn" href="#">
        <FontAwesomeIcon className="i" icon={faCoffee} />
        {/* <i className="fab fa-youtube"></i> */}
      </a>
    </div>
    
  
    );
  
}
  


export default Footer;
