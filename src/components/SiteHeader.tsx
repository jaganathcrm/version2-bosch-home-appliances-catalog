/* SiteHeader — Full-width Bosch blue header with site title */
import boschLogo from '../Images/Bosch_logo.png'

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
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .site-header__topline {
    display: flex;
   align-items: flex-start;
    gap: var(--spacing-md);
    flex-wrap: wrap;
  }
  .site-header__logo-wrap {
    flex-shrink: 0;
   padding-top: 2px;
  }
  .site-header__logo-img {
   height: 48px;
   width: auto;
   display: block;
   object-fit: contain;
  }
  .site-header__titles {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 4px;
  }
  .site-header__title {
   font-family: var(--font-display);
   font-size: 2.05rem;
   font-weight: 800;
   line-height: 1;
   color: #fff;
   letter-spacing: -0.5px;
   text-transform: uppercase;
   white-space: nowrap;
  }
  .site-header__tagline {
   font-family: var(--font-body);
   font-size: 0.95rem;
   color: rgba(255,255,255,0.88);
   font-weight: var(--font-weight-normal);
   margin: 0;
  }
  @media (max-width: 640px) {
   .site-header__topline { gap: var(--spacing-sm); }
   .site-header__title {
     font-size: 1.75rem;
     white-space: normal;
   }
  }
`;

export default function SiteHeader() {
  return (
    <>
      <style>{headerStyles}</style>
      <header className="site-header" role="banner">
        <div className="site-header__inner">
          <div className="site-header__brand">
            <div className="site-header__topline">
              <div className="site-header__logo-wrap">
                <img
                  src={boschLogo}
                  alt="Bosch"
                  className="site-header__logo-img"
                />
              </div>
              <div className="site-header__titles">
                <h1 className="site-header__title">Discover Bosch Home Appliances</h1>
                <p className="site-header__tagline">Invented for life.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
