import ProductTile from '../../catalog/ProductTile';

const products = [
  { id: 1, name: 'recently_viewed_thumbnail_2-1.png' },
  { id: 2, name: 'recently_viewed_thumbnail_2-2.png' },
  { id: 3, name: 'recently_viewed_thumbnail_2-3.png' },
  { id: 4, name: 'recently_viewed_thumbnail_2-7.png' },
];

export default function CatalogPreviews() {
  return (
    <>
      <section className="home-catalog-preview">
        <header className="home-catalog-title">
          <h2>You may also like</h2>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          {products.map((product) => (
            <ProductTile key={product.id} product={product}></ProductTile>
          ))}
        </section>

        <section className="product-tiles-desktop">
          {products.map((product) => (
            <ProductTile key={product.id} product={product}></ProductTile>
          ))}
        </section>
      </section>

      <section className="home-catalog-preview">
        <header className="home-catalog-title">
          <h2>Recently view</h2>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          {products.map((product) => (
            <ProductTile key={product.id} product={product}></ProductTile>
          ))}
        </section>

        <section className="product-tiles-desktop">
          {products.map((product) => (
            <ProductTile key={product.id} product={product}></ProductTile>
          ))}
        </section>
      </section>
    </>
  );
}
