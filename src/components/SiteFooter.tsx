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
  .site-footer__copy,
  .site-footer__meta {
    font-family: var(--font-body);
    font-size: 13px;
    color: rgba(255,255,255,0.55);
    line-height: 1.6;
  }
  .site-footer__copy {
    text-align: left;
    flex: 1 1 320px;
  }
  .site-footer__meta {
    text-align: right;
    flex: 1 1 320px;
  }
  .site-footer__meta a {
    color: rgba(255,255,255,0.85);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .site-footer__meta a:hover {
    color: #fff;
  }
  @media (max-width: 640px) {
    .site-footer__inner { flex-direction: column; align-items: flex-start; }
    .site-footer__copy,
    .site-footer__meta { text-align: left; }
  }
`;

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer__inner">
          <p className="site-footer__copy">
            © {year} BSH Home Appliances Ltd. All rights reserved.
          </p>
          <p className="site-footer__meta">
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
