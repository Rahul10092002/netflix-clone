import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
      <section className="link">
        <div className="logos">
          <p>
            <i className="fab fa-facebook-square fa-2x logo"></i>
          </p>
          <p>
            <i className="fab fa-instagram fa-2x logo"></i>
          </p>
          <p>
            <i className="fab fa-twitter fa-2x logo"></i>
          </p>
          <p>
            <i className="fab fa-youtube fa-2x logo"></i>
          </p>
        </div>
        <div className="sub-links">
          <ul>
            <li>
              <p>Audio and Subtitles</p>
            </li>
            <li>
              <p>Audio Description</p>
            </li>
            <li>
              <p>Help Center</p>
            </li>
            <li>
              <p>Gift Cards</p>
            </li>
            <li>
              <p>Media Center</p>
            </li>
            <li>
              <p>Investor Relations</p>
            </li>
            <li>
              <p>Jobs</p>
            </li>
            <li>
              <p>Terms of Use</p>
            </li>
            <li>
              <p>Privacy</p>
            </li>
            <li>
              <p>Legal Notices</p>
            </li>
            <li>
              <p>Corporate Information</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy 1997-2018 Netflix, Inc.</p>
        <p>Carlos Avila &copy 2023</p>
      </footer>
    </>
  );
}

export default Footer