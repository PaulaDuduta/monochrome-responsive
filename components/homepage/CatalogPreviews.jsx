import ProductTile1 from '../catalog/ProductTile1';
import ProductTile2 from '../catalog/ProductTile2';
import ProductTile3 from '../catalog/ProductTile3';
import ProductTile4 from '../catalog/ProductTile4';
import HomeContent from './HomeContent';

export default function CatalogPreviews() {
  return (
    <>
      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h2 className="mobile-title d-block d-lg-none">Spring Collection</h2>

          <h1 className="desktop-title d-none d-lg-block"> New Stuff</h1>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>
        </section>

        <section className="product-tiles-desktop d-none d-lg-grid">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>

          <ProductTile3></ProductTile3>

          <ProductTile4></ProductTile4>
        </section>
      </section>

      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h2 className="mobile-title d-block d-lg-none">Best reviewed</h2>

          <h1 className="desktop-title d-none d-lg-block"> Most loved</h1>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>
        </section>

        <section className="product-tiles-desktop d-none d-lg-flex">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>

          <ProductTile3></ProductTile3>

          <ProductTile4></ProductTile4>
        </section>
      </section>

      <section className="home-content-infos container">
        <HomeContent></HomeContent>
      </section>

      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h2 className="mobile-title d-block d-lg-none text-uppercase">
            Men&apos;s
          </h2>

          <h1 className="desktop-title d-none d-lg-block">Men&apos;s</h1>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>
        </section>

        <section className="product-tiles-desktop d-none d-lg-flex">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>

          <ProductTile3></ProductTile3>

          <ProductTile4></ProductTile4>
        </section>

        <footer>
          <div className="catalog-ctas my-5 text-center d-none d-lg-block">
            <a
              href="https://www.google.com"
              title="View all"
              className="button button-mobile d-lg-none"
            >
              View all
            </a>

            <a
              href="https://www.google.com"
              title="View all"
              className="button d-none d-lg-inline-block mt-3 mb-5 text-center"
            >
              View all
            </a>
          </div>
        </footer>
      </section>

      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h2 className="mobile-title d-block d-lg-none text-uppercase">
            Women&apos;s
          </h2>

          <h1 className="desktop-title d-none d-lg-block">Women&apos;s</h1>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>
        </section>

        <section className="product-tiles-desktop d-none d-lg-flex">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>

          <ProductTile3></ProductTile3>

          <ProductTile4></ProductTile4>
        </section>

        <footer>
          <div className="catalog-ctas my-5 text-center">
            <a
              href="https://www.google.com"
              title="View all"
              className="button button-mobile d-lg-none"
            >
              View all
            </a>

            <a
              href="https://www.google.com"
              title="View all"
              className="button d-none d-lg-inline-block mt-3 mb-5 text-center"
            >
              View all
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
