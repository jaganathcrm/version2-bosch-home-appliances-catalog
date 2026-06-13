import { useEffect, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ProductCard, { type Product } from '../components/ProductCard'

const gridStyles = `
  .catalog {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--spacing-2xl) var(--spacing-lg);
  }
  .catalog__toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
    flex-wrap: wrap;
    animation: fadeInUp 0.5s ease 0.1s both;
  }
  .catalog__heading {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    white-space: nowrap;
  }
  .catalog__heading::before {
    content: '';
    display: block;
    width: 4px;
    height: 28px;
    background-color: var(--color-primary);
    flex-shrink: 0;
  }
  .catalog__search-wrap {
    position: relative;
    flex: 1;
    max-width: 360px;
    min-width: 200px;
  }
  .catalog__search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
    pointer-events: none;
    display: flex;
    align-items: center;
  }
  .catalog__search {
    width: 100%;
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--color-text);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    padding: 10px 12px 10px 38px;
    outline: none;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  }
  .catalog__search:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(0,86,145,0.15);
  }
  .catalog__search::placeholder {
    color: var(--color-text-muted);
  }
  .catalog__count {
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--color-text-muted);
    white-space: nowrap;
    align-self: flex-end;
    padding-bottom: 2px;
  }
  .catalog__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
  .catalog__empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: var(--spacing-2xl);
    color: var(--color-text-muted);
    font-family: var(--font-body);
    font-size: 1rem;
  }
  .catalog__empty strong {
    color: var(--color-text);
  }
  @media (max-width: 1024px) {
    .catalog__grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .catalog__grid { grid-template-columns: 1fr; }
    .catalog__toolbar { flex-direction: column; align-items: stretch; }
    .catalog__search-wrap { max-width: 100%; }
  }
`;

/* 6 products — prices in INR, relevant Unsplash images per product type */
const PRODUCTS: Product[] = [
  {
    id: 'kgn39vleag',
    name: 'NoFrost Fridge Freezer',
    model: 'KGN39VLEAG',
    category: 'Refrigerators',
    description: '363 L total capacity (279 + 84 L). NoFrost technology prevents ice build-up forever. VitaFresh drawers keep food fresh up to 2× longer.',
    price: 74990,
    imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=640&h=440&fit=crop',
    imageAlt: 'Stainless steel fridge freezer in a modern kitchen',
  },
  {
    id: 'wau28ph0gg',
    name: 'EcoSilence Washing Machine',
    model: 'WAU28PH0GG',
    category: 'Washing Machines',
    description: '9 kg capacity, 1400 rpm. EcoSilence Drive™ motor is ultra-quiet and energy-efficient. i-DOS automatic dosing saves detergent on every wash.',
    price: 54990,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&h=440&fit=crop',
    imageAlt: 'White front-load washing machine with digital display panel',
  },
  {
    id: 'sms6eci07e',
    name: 'PerfectDry Dishwasher',
    model: 'SMS6ECI07E',
    category: 'Dishwashers',
    description: '14 place settings, 9 programmes. PerfectDry™ uses zeolite minerals to deliver sparkling, dry results on every cycle — including plastics.',
    price: 64990,
    imageUrl: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=640&h=440&fit=crop',
    imageAlt: 'Open dishwasher loaded with clean dishes and cutlery',
  },
  {
    id: 'hbg5780s0b',
    name: 'Pyrolytic Built-In Oven',
    model: 'HBG5780S0B',
    category: 'Ovens',
    description: '71 L capacity, 10 heating functions. Pyrolytic self-cleaning burns residue to ash. PerfectBake sensor auto-adjusts temperature for flawless results.',
    price: 62990,
    imageUrl: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=640&h=440&fit=crop',
    imageAlt: 'Built-in stainless steel oven with digital touch control panel',
  },
  {
    id: 'kge36awca',
    name: 'SuperCooling Fridge Freezer',
    model: 'KGE36AWCA',
    category: 'Refrigerators',
    description: '308 L total capacity. SuperCooling function rapidly chills new groceries without warming stored food. FreshSense sensors continuously monitor the interior.',
    price: 42990,
    imageUrl: 'https://images.unsplash.com/photo-1543353071-087092ec393a?w=640&h=440&fit=crop',
    imageAlt: 'White fridge freezer with freezer compartment in a kitchen',
  },
  {
    id: 'wgb256a40',
    name: 'Home Connect Washing Machine',
    model: 'WGB256A40',
    category: 'Washing Machines',
    description: '10 kg, 1600 rpm, Wi-Fi enabled via Home Connect app. Iron Assist sensor adapts drum movement for easier ironing. EcoSilence Drive™.',
    price: 74990,
    imageUrl: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=640&h=440&fit=crop',
    imageAlt: 'Front-load washing machine drum with clothes inside',
  },
]

export default function Home() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = 'Version2 Bosch Home Appliances Catalog'
  }, [])

  const filtered = query.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.model.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS

  return (
    <>
      <style>{gridStyles}</style>
      <SiteHeader />
      <main id="main-content" role="main">
        <section className="catalog" id="catalog" aria-label="Product catalog">
          <div className="catalog__toolbar">
            <h2 className="catalog__heading">All Products</h2>
            <div className="catalog__search-wrap">
              <span className="catalog__search-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </span>
              <input
                className="catalog__search"
                type="search"
                placeholder="Search by name, category or model…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>
            <span className="catalog__count" aria-live="polite" aria-atomic="true">
              {filtered.length} of {PRODUCTS.length} products
            </span>
          </div>
          <div className="catalog__grid" role="list" aria-label="Bosch appliance products">
            {filtered.length === 0 ? (
              <p className="catalog__empty">
                No products found for <strong>"{query}"</strong>. Try a different search.
              </p>
            ) : (
              filtered.map((p, i) => (
                <div key={p.id} role="listitem">
                  <ProductCard product={p} animationDelay={i * 80} />
                </div>
              ))
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
