export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-inner container">
        <section className="footer-connect">
          <form className="footer-newsletter">
            <h2>Let&apos;s connect</h2>

            <label htmlFor="newsletter" className="email-label">
              Be the first to receive exclusives offers
            </label>

            <input
              type="email"
              name="newsletter"
              id="newsletter"
              className="email-input"
              placeholder="Email"
            ></input>

            <button
              type="submit"
              name="submit"
              title="Submit"
              className="button button-submit"
            >
              Submit
            </button>

            <div className="GDPR-terms">
              <input type="checkbox" name="GDPR" id="GDPR"></input>
              <label htmlFor="GDPR">
                I agree with{' '}
                <span>
                  <a href="https://x.ro">Privacy Policy</a>
                </span>{' '}
                and I want to receive emails from Monochrome
              </label>
            </div>
          </form>

          <section className="footer-social">
            <header>
              <h2>We are highly likeable</h2>
            </header>

            <ul className="my-4">
              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>

        <nav className="footer-nav">
          <header>
            <h2>How can we help?</h2>
          </header>

          <div className="website-nav">
            <ul>
              <li>
                <a href="" title="Style and Fit Advice">
                  Style and Fit{' '}
                  <span className="d-none d-lg-block">Advice</span>
                </a>
              </li>

              <li>
                <a href="" title="FAQS">
                  FAQS
                </a>
              </li>

              <li>
                <a href="" title="Delivery">
                  Delivery
                </a>
              </li>

              <li>
                <a href="" title="Exchange and Returns">
                  <span className="d-none d-lg-block">Exchange and</span>{' '}
                  Returns
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="" title="About us">
                  About us
                </a>
              </li>

              <li>
                <a href="" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="" title="Affilliates">
                  Affiliates
                </a>
              </li>

              <li>
                <a href="" title="Advertising">
                  Advertising
                </a>
              </li>
            </ul>
          </div>

          <footer>
            <div className="terms">
              <a href="https://x.ro" title="terms and conditions">
                terms and conditions
              </a>

              <a href="https://x.ro" title="privacy and cookies">
                privacy and cookies
              </a>
            </div>
          </footer>
        </nav>

        <section className="footer-contact d-none d-lg-block"></section>
      </section>
    </footer>
  );
}
