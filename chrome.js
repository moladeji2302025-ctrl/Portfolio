/* Shared chrome: theme toggle, page transition, grain texture. Loaded on
   every page. The ambient particle swarm and custom cursor that used to
   live here have been removed in favor of a quieter, native-cursor
   interface - see chrome-particles.archive.js for the removed code and
   how to bring it back. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------------- theme ---------------- */
  var themeSwitch = document.getElementById('theme-switch');

  function isLight() {
    return root.getAttribute('data-theme') !== 'dark';
  }
  function syncThemeSwitch() {
    if (!themeSwitch) return;
    var light = isLight();
    themeSwitch.classList.toggle('is-light', light);
    themeSwitch.setAttribute('aria-checked', String(light));
  }
  if (themeSwitch) {
    themeSwitch.addEventListener('click', function () {
      var next = isLight() ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('mo-theme', next); } catch (e) {}
      syncThemeSwitch();
    });
    syncThemeSwitch();
  }

  /* ---------------- page transition ---------------- */
  /* A quiet cross-fade between internal pages, nothing more - an inline
     script earlier in <body> already marks the cover active before first
     paint if we're arriving from one of these clicks, so there's never a
     flash of the destination page underneath it. */
  var pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    var MIN_SHOW = 260;
    var OUT_DELAY = 220;

    function revealPage() {
      pageLoader.classList.remove('is-active', 'is-instant');
    }

    if (pageLoader.classList.contains('is-active')) {
      var arrivedAt = performance.now();
      var doReveal = function () {
        var wait = Math.max(0, MIN_SHOW - (performance.now() - arrivedAt));
        setTimeout(revealPage, wait);
      };
      if (document.readyState === 'complete') doReveal();
      else window.addEventListener('load', doReveal);
    }

    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href') || '';
      var isPageLink = href.endsWith('.html') || href.indexOf('.html?') > -1 || href.indexOf('./') === 0;
      var isHash = href.indexOf('#') > -1;
      if (!isPageLink || isHash || link.target === '_blank') return;

      event.preventDefault();
      pageLoader.classList.add('is-active');
      try { sessionStorage.setItem('mo-nav', '1'); } catch (e) {}
      setTimeout(function () {
        window.location.href = href;
      }, OUT_DELAY);
    });
  }

  /* ---------------- grain texture ---------------- */
  /* A faint static noise overlay - unrelated to the removed particle
     system, kept purely for a bit of tactile paper/film texture against
     the otherwise flat, minimal surfaces. */
  var grain = document.createElement('div');
  grain.className = 'grain';
  grain.setAttribute('aria-hidden', 'true');
  document.body.appendChild(grain);
})();
