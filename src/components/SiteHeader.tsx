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

/* Bosch logo: square armature emblem + bold red BOSCH wordmark */
function BoschLogo({ size = 56 }: { size?: number }) {
  // viewBox 185×60 — 60×60 emblem square + gap + ~120px wordmark
  const W = 185, H = 60
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${W} ${H}`}
      width={(size * W) / H}
      height={size}
      role="img"
      aria-label="Bosch logo"
      style={{ flexShrink: 0, display: 'block' }}
    >
      {/* White square emblem background */}
      <rect x="0" y="0" width="60" height="60" fill="#fff" />

      {/* Outer dark ring */}
      <circle cx="30" cy="30" r="26" fill="#1A1A1A" />
      {/* White inner circle (slot gap) */}
      <circle cx="30" cy="30" r="22" fill="#fff" />

      {/* 4 armature rotor wedge segments (alternating, every 90°) */}
      {/* Segment: E→SE  (0°→45°) */}
      <path d="M30,30 L52,30 A22,22,0,0,1,45.56,45.56 Z" fill="#1A1A1A" />
      {/* Segment: S→SW  (90°→135°) */}
      <path d="M30,30 L30,52 A22,22,0,0,1,14.44,45.56 Z" fill="#1A1A1A" />
      {/* Segment: W→NW  (180°→225°) */}
      <path d="M30,30 L8,30 A22,22,0,0,1,14.44,14.44 Z" fill="#1A1A1A" />
      {/* Segment: N→NE  (270°→315°) */}
      <path d="M30,30 L30,8 A22,22,0,0,1,45.56,14.44 Z" fill="#1A1A1A" />

      {/* Center shaft hub */}
      <circle cx="30" cy="30" r="7" fill="#1A1A1A" />
      <circle cx="30" cy="30" r="4" fill="#fff" />

      {/* BOSCH wordmark — bold red capitals */}
      <text
        x="70"
        y="43"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#E20015"
        letterSpacing="1"
      >BOSCH</text>
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
              <BoschLogo size={56} />
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
