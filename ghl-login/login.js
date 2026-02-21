/* ============================================
   Endless Winning — GHL Login Page Custom JS
   Paste into: Settings > Company > Custom Javascript
   ============================================ */

(function () {
  var maxWait = 10000;
  var startTime = Date.now();

  var poll = setInterval(function () {
    var body = document.querySelector('.hl_login--body');

    if (body) {
      clearInterval(poll);
      injectBranding(body);
    } else if (Date.now() - startTime > maxWait) {
      clearInterval(poll);
    }
  }, 200);

  function injectBranding(body) {
    // Prevent double-injection
    if (document.getElementById('ew-brand-text')) return;

    // --- "ENDLESS WINNING" rainbow glow text ---
    var brandText = document.createElement('div');
    brandText.id = 'ew-brand-text';
    brandText.textContent = 'ENDLESS WINNING';
    brandText.style.cssText = [
      'text-align: center',
      'font-family: Gilroy, system-ui, sans-serif',
      'font-size: 24px',
      'font-weight: 700',
      'letter-spacing: 5px',
      'color: #ffffff',
      'text-transform: uppercase',
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
    tagline.id = 'ew-tagline';
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

    // --- Wrapper to hold brand text + tagline above the card ---
    var brandWrapper = document.createElement('div');
    brandWrapper.style.cssText = 'text-align: center; margin-bottom: 8px;';
    brandWrapper.appendChild(brandText);
    brandWrapper.appendChild(tagline);

    // Insert before the first child of .hl_login--body
    body.insertBefore(brandWrapper, body.firstChild);

    // --- Footer ---
    var footer = document.createElement('div');
    footer.id = 'ew-footer';
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
      'color: rgba(255, 255, 255, 0.25) !important',
      'text-decoration: none',
      'font-size: 11px',
      'display: inline-block',
      'margin-top: 4px'
    ].join('; ');

    footer.appendChild(footerLine1);
    footer.appendChild(footerLine2);

    // Append footer at the end of .hl_login--body
    body.appendChild(footer);

    // --- Style the "Or Continue with" divider text ---
    var allSpans = body.querySelectorAll('span');
    for (var i = 0; i < allSpans.length; i++) {
      var text = allSpans[i].textContent.trim().toLowerCase();
      if (text.indexOf('continue with') !== -1 || text.indexOf('or ') === 0) {
        allSpans[i].style.cssText = 'color: rgba(255,255,255,0.4) !important; background: #000 !important; font-family: Gilroy, system-ui, sans-serif; font-size: 13px;';
      }
    }
  }
})();
