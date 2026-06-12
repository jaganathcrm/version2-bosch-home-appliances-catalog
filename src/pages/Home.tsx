import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ProductCard, { type Product } from '../components/ProductCard'

const gridStyles = `
  .catalog {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--spacing-2xl) var(--spacing-lg);
  }
  .catalog__heading {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--spacing-xl);
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    animation: fadeInUp 0.5s ease 0.1s both;
  }
  .catalog__heading::before {
    content: '';
    display: block;
    width: 4px;
    height: 28px;
    background-color: var(--color-primary);
    flex-shrink: 0;
  }
  .catalog__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
  @media (max-width: 1024px) {
    .catalog__grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .catalog__grid { grid-template-columns: 1fr; }
  }
`;

/* 6 products across 4 categories as specified in the plan */
const PRODUCTS: Product[] = [
  {
    id: 'kgn39vleag',
    name: 'NoFrost Fridge Freezer',
    model: 'KGN39VLEAG',
    category: 'Refrigerators',
    description: '363 L total capacity (279 + 84 L). NoFrost technology prevents ice build-up forever. VitaFresh drawers keep food fresh up to 2× longer.',
    price: 699,
    imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=640&h=440&fit=crop',
    imageAlt: 'Bosch stainless steel fridge freezer standing in a modern kitchen',
    energyRating: 'E',
  },
  {
    id: 'wau28ph0gg',
    name: 'EcoSilence Washing Machine',
    model: 'WAU28PH0GG',
    category: 'Washing Machines',
    description: '9 kg capacity, 1400 rpm. EcoSilence Drive™ motor is ultra-quiet and energy-efficient. i-DOS automatic dosing saves detergent on every wash.',
    price: 649,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&h=440&fit=crop',
    imageAlt: 'Bosch front-load washing machine with digital display panel',
    energyRating: 'A',
  },
  {
    id: 'sms6eci07e',
    name: 'PerfectDry Dishwasher',
    model: 'SMS6ECI07E',
    category: 'Dishwashers',
    description: '14 place settings, 9 programmes. PerfectDry™ uses zeolite minerals to deliver sparkling, dry results on every cycle — including plastics.',
    price: 799,
    imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=640&h=440&fit=crop',
    imageAlt: 'Bosch open dishwasher showing clean white interior and cutlery basket',
    energyRating: 'A',
  },
  {
    id: 'hbg5780s0b',
    name: 'Pyrolytic Built-In Oven',
    model: 'HBG5780S0B',
    category: 'Ovens',
    description: '71 L capacity, 10 heating functions. Pyrolytic self-cleaning burns residue to ash. PerfectBake sensor auto-adjusts temperature for flawless results.',
    price: 749,
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=640&h=440&fit=crop',
    imageAlt: 'Bosch built-in pyrolytic oven installed in kitchen cabinetry',
    energyRating: 'A+',
  },
  {
    id: 'kge36awca',
    name: 'SuperCooling Fridge Freezer',
    model: 'KGE36AWCA',
    category: 'Refrigerators',
    description: '308 L total capacity. SuperCooling function rapidly chills new groceries without warming stored food. FreshSense sensors continuously monitor the interior.',
    price: 479,
    imageUrl: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=640&h=440&fit=crop',
    imageAlt: 'Bosch white fridge freezer in a bright family kitchen',
    energyRating: 'F',
  },
  {
    id: 'wgb256a40',
    name: 'Home Connect Washing Machine',
    model: 'WGB256A40',
    category: 'Washing Machines',
    description: '10 kg, 1600 rpm, Wi-Fi enabled via Home Connect app. Iron Assist sensor adapts drum movement for easier ironing. EcoSilence Drive™.',
    price: 899,
    imageUrl: 'https://images.unsplash.com/photo-1545208698-b0f6e4cfbed1?w=640&h=440&fit=crop',
    imageAlt: 'Modern Bosch Serie 8 washing machine in a clean contemporary laundry room',
    energyRating: 'A',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Version2 Bosch Home Appliances Catalog'
  }, [])

  return (
    <>
      <style>{gridStyles}</style>
      <SiteHeader />
      <main id="main-content" role="main">
        <section className="catalog" id="catalog" aria-label="Product catalog">
          <h2 className="catalog__heading">All Products</h2>
          <div className="catalog__grid" role="list" aria-label="Bosch appliance products">
            {PRODUCTS.map((p, i) => (
              <div key={p.id} role="listitem">
                <ProductCard product={p} animationDelay={i * 80} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
