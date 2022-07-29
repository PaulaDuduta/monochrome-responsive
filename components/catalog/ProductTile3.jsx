import Link from 'next/link';

export default function ProductTile3() {
  return (
    <article className="product-tile product-tile3">
      <div className="product-image">
        <Link
          href="/product"
          title="Monochrome"
          className="product-tile-image-container"
        >
          <img
            src="/images/products/recently_viewed_thumbnail_2-3.png"
            alt="New in, Watches, Women, Men"
          ></img>
        </Link>

        <span className="badge">
          <a href="" title="Wish List">
            <i className="fa-solid fa-heart"></i>
          </a>
        </span>
      </div>

      <div className="product-title">
        <span>Monochrome</span>
      </div>

      <div className="product-pricing">
        <span>$425</span>
      </div>
    </article>
  );
}
