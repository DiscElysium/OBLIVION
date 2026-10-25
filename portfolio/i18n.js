/* Shared language routing and text localization; all content remains local. */
(() => {
  'use strict';
  const query = new URLSearchParams(location.search);
  const requested = query.get('lang');
  const lang = ['zh', 'en'].includes(requested) ? requested : (document.documentElement.dataset.language || 'zh');
  const zh = lang === 'zh';
  const dictionary = window.OBLIVION_ZH || {};
  const normalized = new Map(Object.entries(dictionary).map(([key, value]) => [key.toLocaleLowerCase(), value]));
  document.documentElement.lang = zh ? 'zh-CN' : 'en';
  document.documentElement.dataset.language = lang;
  function t(text) {
    if (!zh || !text) return text;
    const key = text.trim().replace(/\s+/g, ' ');
    if (Object.hasOwn(dictionary, key)) return dictionary[key];
    if (normalized.has(key.toLocaleLowerCase())) return normalized.get(key.toLocaleLowerCase());
    if (key.startsWith('OBLIVION / ')) return 'OBLIVION / ' + t(key.slice(11));
    if (key.startsWith('Read ')) return '阅读：' + t(key.slice(5));
    return text;
  }
  function skip(element) {
    return element?.closest('script,style,.oblivion-feedback,.of-dialog,[data-no-translate]');
  }
  function localize(root = document) {
    if (!zh) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (skip(node.parentElement) || !node.textContent.trim()) continue;
      const before = node.textContent;
      const after = t(before);
      if (after !== before) node.textContent = before.match(/^\s*/)[0] + after + before.match(/\s*$/)[0];
    }
    const elements = [...(root.nodeType === 1 ? [root] : []), ...root.querySelectorAll('[alt],[aria-label],[data-caption],[title]')];
    for (const element of elements) {
      if (skip(element)) continue;
      for (const attribute of ['alt', 'aria-label', 'data-caption', 'title']) {
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, t(element.getAttribute(attribute)));
      }
    }
  }
  function setup() {
    document.title = zh ? 'OBLIVION — 凝视之中，世界暂存' : 'OBLIVION — A world held in attention';
    const menu = document.querySelector('.language-switch');
    menu.setAttribute('aria-label', zh ? '切换语言' : 'Language');
    const meta = document.querySelector('meta[name=description]');
    if (zh && meta) meta.content = t(meta.content);
    for (const link of menu.querySelectorAll('a')) {
      const language = link.dataset.language;
      if (language === lang) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
      link.setAttribute('aria-label', language === 'zh' ? '切换至中文版' : 'Switch to English');
      link.addEventListener('click', updateLinks);
    }
    const download = document.querySelector('.site-nav .download');
    download.innerHTML = (zh ? '英文作品集 PDF' : 'Portfolio PDF') + ' <span>↓</span>';
    document.querySelector('.site-footer a[download]').textContent = zh ? '下载英文六页作品集 ↓' : 'Download the six-page portfolio ↓';
    updateLinks();
    const chapterNavigation=document.querySelector('.site-nav nav');
    if(chapterNavigation)new MutationObserver(updateLinks).observe(chapterNavigation, {subtree:true, attributes:true, attributeFilter:['aria-current']});
  }
  function updateLinks() {
    const search = new URLSearchParams(location.search);
    search.delete('lang');
    const suffix = search.toString() ? '?' + search.toString() : '';
    const header = document.querySelector('.site-nav')?.offsetHeight || 70;
    let visibleChapter = null, visibleHeight = 0;
    for (const section of document.querySelectorAll('.folio')) {
      const rect = section.getBoundingClientRect();
      const height = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, header));
      if (height > visibleHeight) { visibleHeight = height; visibleChapter = section.id; }
    }
    const preceding = [...document.querySelectorAll('.folio')].reverse().find(section => section.getBoundingClientRect().top < header);
    const chapterId = visibleChapter || preceding?.id;
    const chapter = chapterId ? '#' + chapterId : location.hash;
    document.querySelectorAll('.language-switch a').forEach(link => {
      link.setAttribute('href', link.dataset.language + '.html' + suffix + chapter);
    });
  }
  window.addEventListener('hashchange', updateLinks);
  window.OBLIVION_I18N = {lang, t, localize, setup};
})();
