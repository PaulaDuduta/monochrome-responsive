export default function StyleAdvice() {
  return (
    <section className="style-advice-content">
      <form className="was-validated">
        <header className="style-header">
          <h1>Style & Fit Advice</h1>

          <p>
            To find the perfect fit and style for you, please provide us with
            the info bellow and a consultant will contact you for a discussion.
            This way we can customize your watch on your needs.
          </p>
        </header>

        <section className="advice-form">
          <fieldset>
            <div className="gender">
              <h3>1. Choose one</h3>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  required
                />
                <label htmlFor="male">Men&apos;s</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  required
                />
                <label htmlFor="female">Women&apos;s</label>
              </div>
            </div>

            <div className="product-model">
              <h3>2.What model do you preffer?</h3>

              <select name="model" id="model" required>
                <option selected disabled value=""></option>
                <option value="La Boheme Petite">La Boheme Petite</option>
                <option value="La Boheme">La Boheme</option>
                <option value="Triomphe">Triomphe</option>
                <option value="La Boheme Petite">La Boheme Petite</option>
                <option value="Le Couronnement">Le Couronnement</option>
              </select>

              <img
                src="/images/style-advice/strap.png"
                alt="watches, watches models, diagram"
              />
            </div>

            <div className="product-size">
              <h3>3. Please give us the size of your wrist</h3>

              <input
                type="text"
                name="size"
                id="size"
                placeholder="write your measuring in cm"
                required
              />
            </div>

            <div className="product-gravation">
              <h3>4. Gravation on the back</h3>

              <input
                type="text"
                name="gravation"
                id="gravation"
                placeholder="write 10 characters max"
              />

              <img
                src="\images\style-advice\jj-ying-dfjfNu3Q0Yc-unsplash.png"
                alt="watch, black, metal"
              />
            </div>

            <div className="additional-message">
              <h3>5. Anything else you want to add?</h3>

              <textarea
                name="message"
                id="message"
                cols="60"
                rows="7"
              ></textarea>
            </div>

            <div className="email-address">
              <h3>6. Provide us an email to get back to you</h3>

              <input type="email" name="email" id="email" required />
            </div>
          </fieldset>
        </section>

        <footer>
          <div>
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="terms">
              Ok with <span>terms and conditions</span>
            </label>
          </div>

          <div>
            <input type="checkbox" name="newsletter" id="newsletter" />
            <label htmlFor="newsletter">
              Send me news via <span>email</span>
            </label>
          </div>

          <button type="submit" className="button button-style">
            Submit
          </button>
        </footer>
      </form>
    </section>
  );
}
