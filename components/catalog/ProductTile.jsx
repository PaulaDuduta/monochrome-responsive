import Link from 'next/link';
import Image from 'next/image';

export default function ProductTile({ product }) {
  if (!product) {
    return null;
  }

  return (
    <article className="product-tile">
      <div className="product-image">
        <Link
          href="/product"
          title="Monochrome"
          className="product-tile-image-container"
        >
          <Image
            key={product.id}
            src={`/images/products/${product.name}`}
            alt="New in, Watches, Women, Men"
            width="200"
            height="200"
          ></Image>
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
