/* SiteHeader — Full-width Bosch red header with site title and tagline (plan spec) */

const headerStyles = `
  .site-header {
    background-color: var(--color-primary);
    background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%);
    color: #fff;
    padding: var(--spacing-xl) 0;
    animation: fadeInUp 0.5s ease both;
  }
  .site-header__inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-lg);
    flex-wrap: wrap;
  }
  .site-header__brand {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
  }
  .site-header__logo-wrap {
    flex-shrink: 0;
  }
  .site-header__titles {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .site-header__eyebrow {
    font-family: var(--font-body);
    font-size: 11px;
    font-weight: var(--font-weight-semibold);
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
  }
  .site-header__title {
    font-family: var(--font-display);
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1.05;
    color: #fff;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }
  .site-header__tagline {
    font-family: var(--font-body);
    font-size: 1rem;
    color: rgba(255,255,255,0.88);
    font-weight: var(--font-weight-normal);
    margin-top: 2px;
  }
  .site-header__divider {
    width: 40px;
    height: 3px;
    background-color: rgba(255,255,255,0.5);
    margin-top: 10px;
  }
  .site-header__meta {
    text-align: right;
  }
  .site-header__meta-label {
    font-family: var(--font-body);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    margin-bottom: 4px;
  }
  .site-header__meta-value {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
  }
  @media (max-width: 640px) {
    .site-header__title { font-size: 2.25rem; }
    .site-header__meta { display: none; }
  }
`;

/* Inline Bosch roundel SVG */
function BoschRoundel({ size = 60 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="Bosch logo"
      style={{ flexShrink: 0, display: 'block' }}
    >
      <circle cx="100" cy="100" r="98" fill="rgba(255,255,255,0.25)" />
      <circle cx="100" cy="100" r="74" fill="rgba(255,255,255,0.15)" />
      <text
        x="100" y="116"
        textAnchor="middle"
        fontFamily="'IBM Plex Sans', Arial, sans-serif"
        fontWeight="700"
        fontSize="40"
        letterSpacing="2"
        fill="#FFFFFF"
      >
        BOSCH
      </text>
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <>
      <style>{headerStyles}</style>
      <header className="site-header" role="banner">
        <div className="site-header__inner">
          <div className="site-header__brand">
            <div className="site-header__logo-wrap">
              <BoschRoundel size={72} />
            </div>
            <div className="site-header__titles">
              <h1 className="site-header__title">Discover Bosch Home Appliances</h1>
              <p className="site-header__tagline">Invented for life.</p>
              <div className="site-header__divider" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
