export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="mobile-title d-lg-none">
        <span>Monochrome</span>

        <span>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>

      <div className="header-secondary-inner container">
        <div className="header-connect d-none d-lg-block">
          <ul>
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

            <li>
              <a href="tel:+44 (0)10 2345 6789">Call us +44 (0)10 2345 6789</a>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <div className="search-bar">
            <form action="">
              <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass-dollar"></i>
              </button>

              <input
                type="text"
                className="search-field"
                placeholder="Search"
                title="Search"
              />
            </form>
          </div>

          <div className="control-buttons">
            <ul>
              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My Account"
                >
                  <i class="fa-solid fa-user-gear"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Wish List"
                >
                  <i class="fa-solid fa-heart-pulse"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Cart"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
