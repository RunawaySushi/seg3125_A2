import './Footer.css';

const EmailIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#d2c8b9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#d2c8b9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.72 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.1a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#d2c8b9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#d2c8b9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="#d2c8b9" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer" id = "footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Fabula Studio</h2>
          <p>A purpose-built studio for photographers, creators, and visual storytellers.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Rates</a></li>
            <li><a href="#">Book Now</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <EmailIcon />
              <span>your@email.com</span>
            </li>
            <li>
              <PhoneIcon />
              <span>000-000-0000</span>
            </li>
            <li>
              <LocationIcon />
              <span>
                1234 Street Name<br />
                Unit X, City, ON<br />
                A1B 2C3
              </span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <a href="#" className="footer-social-link">
            <InstagramIcon />
            <span>@yourstudiohandle</span>
          </a>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; 2025 Fabula Studio. All rights reserved.</p>
        <p>Designed By Raymond Tan (rtan010@uottawa.ca)</p>
      </div>
    </footer>
  );
}