/* SiteFooter — Dark footer with copyright notice (plan spec) */

const footerStyles = `
  .site-footer {
    background-color: var(--color-footer-bg);
    color: var(--color-footer-text);
    border-top: 4px solid var(--color-primary);
    padding: var(--spacing-xl) 0;
    margin-top: var(--spacing-2xl);
  }
  .site-footer__inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-lg);
    flex-wrap: wrap;
  }
  .site-footer__brand {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }
  .site-footer__logo-ring {
    width: 44px;
    height: 44px;
    border: 3px solid var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .site-footer__logo-text {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
  }
  .site-footer__name {
    font-family: var(--font-display);
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .site-footer__copy {
    font-family: var(--font-body);
    font-size: 13px;
    color: rgba(255,255,255,0.55);
    text-align: right;
    line-height: 1.6;
  }
  .site-footer__copy a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
  }
  .site-footer__copy a:hover {
    color: #fff;
  }
  @media (max-width: 640px) {
    .site-footer__inner { flex-direction: column; align-items: flex-start; }
    .site-footer__copy { text-align: left; }
  }
`;

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <div className="site-footer__logo-ring" aria-hidden="true">
              <span className="site-footer__logo-text">BSH</span>
            </div>
            <span className="site-footer__name">Bosch</span>
          </div>
          <p className="site-footer__copy">
            © {year} BSH Home Appliances Ltd. All rights reserved.<br />
            <a href="https://www.bosch-home.com" target="_blank" rel="noopener noreferrer">
              bosch-home.com
            </a>
            {' · '}Robert Bosch GmbH · Stuttgart, Germany
          </p>
        </div>
      </footer>
    </>
  )
}
