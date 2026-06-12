/* ProductCard — image, category badge, model, description, price (plan spec)
   Hover: card lifts 4px, deeper shadow; image scales to 105% */

export type ProductCategory = 'Refrigerators' | 'Washing Machines' | 'Dishwashers' | 'Ovens'

export interface Product {
  id: string
  name: string
  model: string
  category: ProductCategory
  description: string
  price: number
  imageUrl: string
  imageAlt: string
  energyRating?: string
}

const cardStyles = `
  .product-card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-card);
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    animation: fadeInUp 0.5s ease both;
  }
  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
  }
  .product-card__img-wrap {
    overflow: hidden;
    background-color: #f0f0f0;
    position: relative;
    flex-shrink: 0;
  }
  .product-card__img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    transition: transform 300ms ease;
  }
  .product-card:hover .product-card__img {
    transform: scale(1.05);
  }
  .product-card__badge {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-primary);
    color: #fff;
    font-family: var(--font-display);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 5px 12px;
  }
  .product-card__energy {
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    background-color: #1B5E20;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-body);
  }
  .product-card__body {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    flex: 1;
  }
  .product-card__name {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-secondary);
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  .product-card__model {
    font-family: var(--font-body);
    font-size: 11px;
    color: var(--color-text-muted);
    letter-spacing: 0.5px;
  }
  .product-card__desc {
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--color-text-muted);
    line-height: 1.6;
    flex: 1;
  }
  .product-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--spacing-md);
    margin-top: var(--spacing-sm);
    border-top: 1px solid var(--color-border);
  }
  .product-card__price {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-secondary);
  }
  .product-card__price-sub {
    font-size: 11px;
    color: var(--color-text-muted);
    font-family: var(--font-body);
    margin-top: 2px;
  }
  .product-card__btn {
    font-family: var(--font-display);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--color-primary);
    background: transparent;
    border: 2px solid var(--color-primary);
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color var(--transition-fast), color var(--transition-fast);
  }
  .product-card__btn:hover {
    background-color: var(--color-primary);
    color: #fff;
  }
`;

interface Props {
  product: Product
  animationDelay?: number
}

export default function ProductCard({ product, animationDelay = 0 }: Props) {
  return (
    <>
      <style>{cardStyles}</style>
      <article
        className="product-card"
        aria-label={`${product.name} — ${product.category}`}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <div className="product-card__img-wrap">
          <img
            className="product-card__img"
            src={product.imageUrl}
            alt={product.imageAlt}
            loading="lazy"
          />
          <span className="product-card__badge" aria-hidden="true">{product.category}</span>
          {product.energyRating && (
            <span className="product-card__energy" aria-label={`Energy rating ${product.energyRating}`}>
              {product.energyRating}
            </span>
          )}
        </div>
        <div className="product-card__body">
          <h2 className="product-card__name">{product.name}</h2>
          <div className="product-card__model" aria-label={`Model: ${product.model}`}>
            Model: {product.model}
          </div>
          <p className="product-card__desc">{product.description}</p>
          <div className="product-card__footer">
            <div>
              <div className="product-card__price" aria-label={`Price: £${product.price}`}>
                £{product.price.toLocaleString()}
              </div>
              <div className="product-card__price-sub">RRP incl. VAT</div>
            </div>
            <button
              className="product-card__btn"
              aria-label={`View details for ${product.name}`}
              onClick={() => window.open('https://www.bosch-home.com/gb/', '_blank', 'noopener')}
            >
              View Details
            </button>
          </div>
        </div>
      </article>
    </>
  )
}
