import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="footer-container">
          <div className="social-icons">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <YouTubeIcon />
            </a>
          </div>

          <div className="footer-links">
            <div className="column">
              <a href="#">Audio Description</a>
              <a href="#">Investor Relations</a>
              <a href="#">Legal Notice</a>
            </div>

            <div className="column">
              <a href="#">Help Center</a>
              <a href="#">Jobs</a>
              <a href="#">Cookie Preferences</a>
            </div>

            <div className="column">
              <a href="#">Gift Cards</a>
              <a href="#">Terms of Use</a>
              <a href="#">Corporate Information</a>
            </div>

            <div className="column">
              <a href="#">Media Center</a>
              <a href="#">Privacy</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <button className="service-btn">Service Code</button>
          <p className="copyright">© 1997-2024 Netflix, Inc.</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
