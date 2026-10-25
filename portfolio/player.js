/* The verified published WebGL build, presented inside the portfolio. */
(() => {
  'use strict';
  const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
  const zh = lang === 'zh';
  document.documentElement.lang = zh ? 'zh-CN' : 'en';
  const canvas = document.getElementById('unity-canvas');
  const label = document.getElementById('player-label');
  const percent = document.getElementById('player-percent');
  const bar = document.getElementById('player-progress');
  const origin = location.origin === 'null' ? '*' : location.origin;
  label.textContent = zh ? '正在唤醒这个世界' : 'Waking a world held in attention';
  canvas.setAttribute('aria-label', zh ? 'OBLIVION 游戏画面' : 'OBLIVION game canvas');
  let instance = null, failed = false;
  const send = (state, progress) => parent.postMessage({type:'OBLIVION_PLAYER', state, progress}, origin);
  function fail() {
    if (failed) return;
    failed = true;
    document.body.dataset.playerState = 'error';
    label.textContent = zh ? '加载中断，请使用上方按钮重新载入。' : 'Loading was interrupted. Use Reload above to try again.';
    percent.textContent = '';
    send('error');
  }
  const build = 'https://discelysium.github.io/OBLIVION/Build/memory_webgl_release_v2';
  const script = document.createElement('script');
  script.src = build + '.loader.js';
  script.onerror = fail;
  script.onload = async () => {
    try {
      instance = await createUnityInstance(canvas, {
        dataUrl:build + '.data.unityweb', frameworkUrl:build + '.framework.js.unityweb', codeUrl:build + '.wasm.unityweb',
        streamingAssetsUrl:'https://discelysium.github.io/OBLIVION/StreamingAssets',
        companyName:'DefaultCompany', productName:'OBLIVION', productVersion:'0.1.0',
        autoSyncPersistentDataPath:true, devicePixelRatio:Math.min(devicePixelRatio || 1, 1.5),
        showBanner:(_message, type) => { if (type === 'error') fail(); }
      }, progress => {
        const value = Math.round(progress * 100);
        bar.style.width = value + '%'; percent.textContent = value + '%'; send('loading', value);
      });
      if (failed) return;
      document.body.dataset.playerState = 'ready'; send('ready', 100);
    } catch (_error) { fail(); }
  };
  document.body.append(script);
  window.addEventListener('message', event => {
    if (event.source !== parent || (location.origin !== 'null' && event.origin !== location.origin)) return;
    if (event.data?.type === 'OBLIVION_FOCUS') { canvas.focus({preventScroll:true}); }
  });
  canvas.addEventListener('pointerdown', () => canvas.focus({preventScroll:true}));
  window.addEventListener('pagehide', () => { if (instance) instance.Quit().catch(() => {}); });
})();
