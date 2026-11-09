(() => {
  'use strict';

  const html = document.documentElement;
  const query = new URLSearchParams(location.search);
  const language = query.get('lang');
  if (['zh', 'en'].includes(language) && language !== html.dataset.language) {
    query.delete('lang');
    const suffix = query.size ? '?' + query : '';
    location.replace(language + '.html' + suffix + location.hash);
    return;
  }

  const nav = document.querySelector('.site-nav');
  const navHeight = () => html.style.setProperty('--nav-height', nav.offsetHeight + 'px');
  navHeight();
  new ResizeObserver(navHeight).observe(nav);

  const validAnchor = hash => /^#[\w-]+$/.test(hash) ? document.getElementById(hash.slice(1)) : null;
  requestAnimationFrame(() => validAnchor(location.hash)?.scrollIntoView());

  const modified = event => event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  for (const link of nav.querySelectorAll('a[href^="#"]')) {
    link.addEventListener('click', event => {
      const section = validAnchor(link.hash);
      if (!section || modified(event)) return;
      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(null, '', link.hash);
      section.scrollIntoView();
    });
  }

  for (const link of document.querySelectorAll('.language-switch a')) {
    link.addEventListener('click', event => {
      if (modified(event)) return;
      let visible;
      let largest = 0;
      const anchored = validAnchor(location.hash);
      for (const section of document.querySelectorAll('#cover-game, .folio')) {
        const rect = section.getBoundingClientRect();
        const height = Math.min(rect.bottom, innerHeight) - Math.max(rect.top, nav.offsetHeight);
        if (section === anchored && height > 0) {
          visible = section;
          break;
        }
        if (height > largest) {
          largest = height;
          visible = section;
        }
      }
      const next = new URL(link.href);
      next.hash = visible ? visible.id : (anchored ? location.hash : '');
      next.search = location.search;
      next.searchParams.delete('lang');
      event.preventDefault();
      location.assign(next);
    });
  }

  const viewer = document.querySelector('.page-viewer');
  if (typeof viewer.showModal !== 'function') return;
  const title = viewer.querySelector('#viewer-title');
  const viewport = viewer.querySelector('.viewer-image');
  const image = viewport.querySelector('img');
  const closer = viewer.querySelector('[data-close]');
  const zoomOut = viewer.querySelector('[data-zoom=out]');
  const zoomIn = viewer.querySelector('[data-zoom=in]');
  const steps = [1, 2, 4, 8];
  let zoom = 0;

  function setZoom(next) {
    const x = (viewport.scrollLeft + viewport.clientWidth / 2) / steps[zoom];
    const y = (viewport.scrollTop + viewport.clientHeight / 2) / steps[zoom];
    zoom = next;
    viewport.style.setProperty('--zoom', steps[zoom]);
    viewport.scrollLeft = x * steps[zoom] - viewport.clientWidth / 2;
    viewport.scrollTop = y * steps[zoom] - viewport.clientHeight / 2;
    zoomOut.disabled = zoom === 0;
    zoomIn.disabled = zoom === steps.length - 1;
  }

  for (const preview of document.querySelectorAll('[data-page-title]')) {
    preview.addEventListener('click', event => {
      if (modified(event)) return;
      event.preventDefault();
      title.textContent = preview.dataset.pageTitle;
      image.alt = preview.dataset.pageTitle;
      image.src = preview.href;
      viewer.showModal();
      setZoom(0);
      viewport.scrollTo(0, 0);
      closer.focus();
    });
  }

  zoomOut.addEventListener('click', () => setZoom(zoom - 1));
  zoomIn.addEventListener('click', () => setZoom(zoom + 1));
  closer.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target === viewer) {
      const box = viewer.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) {
        viewer.close();
      }
    }
  });
})();
