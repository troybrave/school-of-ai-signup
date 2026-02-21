/* ============================================
   Endless Winning — GHL Login Page Custom JS
   Paste into: Settings > Company > Custom Javascript
   ============================================ */

(function () {
  var maxWait = 10000;
  var startTime = Date.now();

  var poll = setInterval(function () {
    var loginContainer = document.querySelector('.hl_login');
    var header = document.querySelector('.hl_login--header');
    var body = document.querySelector('.hl_login--body');

    if (loginContainer && header && body) {
      clearInterval(poll);
      injectBranding(loginContainer, header, body);
    } else if (Date.now() - startTime > maxWait) {
      clearInterval(poll);
    }
  }, 200);

  function injectBranding(container, header, body) {
    // --- "ENDLESS WINNING" rainbow glow text ---
    var brandText = document.createElement('div');
    brandText.textContent = 'ENDLESS WINNING';
    brandText.style.cssText = [
      'text-align: center',
      'font-family: Gilroy, system-ui, sans-serif',
      'font-size: 24px',
      'font-weight: 700',
      'letter-spacing: 5px',
      'color: #ffffff',
      'text-transform: uppercase',
      'margin-top: 16px',
      'margin-bottom: 4px',
      'text-shadow: ' +
        '-5px -3px 14px #AF52DE, ' +
        '-3px -5px 12px #FF2D92, ' +
        '3px -5px 12px #FF9500, ' +
        '5px -3px 12px #FFD60A, ' +
        '5px 3px 12px #30D158, ' +
        '3px 5px 12px #2EC4B6, ' +
        '-3px 5px 12px #40CBF0, ' +
        '-5px 3px 12px #007AFF, ' +
        '0 0 30px rgba(88, 86, 214, 0.35)'
    ].join('; ');

    // --- Tagline ---
    var tagline = document.createElement('div');
    tagline.textContent = 'Your command center awaits';
    tagline.style.cssText = [
      'text-align: center',
      'font-family: Gilroy, system-ui, sans-serif',
      'font-size: 14px',
      'font-weight: 400',
      'color: rgba(255, 255, 255, 0.6)',
      'margin-bottom: 28px',
      'letter-spacing: 0.5px'
    ].join('; ');

    // Insert between header and body
    header.parentNode.insertBefore(brandText, body);
    header.parentNode.insertBefore(tagline, body);

    // --- Footer ---
    var footer = document.createElement('div');
    footer.style.cssText = [
      'text-align: center',
      'font-family: Gilroy, system-ui, sans-serif',
      'font-size: 11px',
      'color: rgba(255, 255, 255, 0.25)',
      'margin-top: 32px',
      'padding-bottom: 24px'
    ].join('; ');

    var footerLine1 = document.createElement('div');
    footerLine1.textContent = '\u00A9 2026 Endless Winning';

    var footerLine2 = document.createElement('a');
    footerLine2.href = 'https://endlesswinning.com';
    footerLine2.target = '_blank';
    footerLine2.rel = 'noopener';
    footerLine2.textContent = 'endlesswinning.com';
    footerLine2.style.cssText = [
      'color: rgba(255, 255, 255, 0.25)',
      'text-decoration: none',
      'font-size: 11px',
      'display: inline-block',
      'margin-top: 4px'
    ].join('; ');

    footer.appendChild(footerLine1);
    footer.appendChild(footerLine2);

    // Append footer after the body/card section
    body.parentNode.insertBefore(footer, body.nextSibling);
  }
})();
