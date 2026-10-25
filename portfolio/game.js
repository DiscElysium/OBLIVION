/* Mount the real game on the cover; no navigation away from the work. */
(() => {
  'use strict';
  if (new URLSearchParams(location.search).has('print')) return;
  const zh = window.OBLIVION_I18N.lang === 'zh';
  const copy = zh ? {
    label:'在此，进入这个世界', fullscreen:'全屏游玩 ↗', exit:'退出全屏 ↙', reload:'重新载入',
    controls:'WASD 移动 · 鼠标观察 · 空格跳跃 · Esc 释放鼠标', loading:'正在加载', ready:'点击画面，开始游玩',
    error:'加载中断，请重新载入', mobile:'使用键盘与鼠标操控，建议在电脑上体验。', title:'直接游玩 OBLIVION', play:'在封面游玩'
  } : {
    label:'Step into the world', fullscreen:'Play fullscreen ↗', exit:'Exit fullscreen ↙', reload:'Reload',
    controls:'WASD Move · Mouse Look · Space Jump · Esc Release cursor', loading:'Loading', ready:'Click the scene to play',
    error:'Loading interrupted. Try Reload.', mobile:'Keyboard and mouse controls. Best experienced on a computer.', title:'Play OBLIVION here', play:'Play on the cover'
  };
  const host = document.querySelector('#introduction .sheet');
  const shell = document.createElement('section');
  shell.className = 'cover-game web-only'; shell.id = 'cover-game'; shell.dataset.gameState = 'loading'; shell.setAttribute('aria-label', copy.title);
  shell.innerHTML = `<div class="game-bar"><div class="game-label"><span>OBLIVION</span><span>${copy.label}</span></div><div class="game-controls"><button type="button" data-game-reload>${copy.reload}</button><button type="button" data-game-fullscreen>${copy.fullscreen}</button></div></div><div class="game-viewport"><iframe title="${copy.title}" src="play.html?lang=${zh?'zh':'en'}" allow="autoplay; fullscreen; gamepad" allowfullscreen loading="eager" referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="game-meta"><span>${copy.controls}</span><span class="game-status" role="status" aria-live="polite">${copy.loading} 0%</span></div><p class="game-mobile-note">${copy.mobile}</p>`;
  host.append(shell);
  const frame = shell.querySelector('iframe'), status = shell.querySelector('.game-status'), fullscreen = shell.querySelector('[data-game-fullscreen]');
  let lastPercentage = -1;
  window.addEventListener('message', event => {
    if (event.source !== frame.contentWindow || (location.origin !== 'null' && event.origin !== location.origin) || event.data?.type !== 'OBLIVION_PLAYER') return;
    const {state,progress} = event.data;
    if (!['loading','ready','error'].includes(state)) return;
    shell.dataset.gameState = state;
    if (state === 'ready') status.textContent = copy.ready;
    else if (state === 'error') status.textContent = copy.error;
    else if (typeof progress === 'number' && Math.floor(progress/10) !== lastPercentage) { lastPercentage = Math.floor(progress/10); status.textContent = copy.loading + ' ' + Math.round(progress) + '%'; }
  });
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else { await frame.requestFullscreen(); frame.focus({preventScroll:true}); frame.contentWindow.postMessage({type:'OBLIVION_FOCUS'}, location.origin==='null'?'*':location.origin); }
    } catch (_error) { frame.focus(); }
  });
  document.addEventListener('fullscreenchange', () => { fullscreen.textContent = document.fullscreenElement ? copy.exit : copy.fullscreen; });
  shell.querySelector('[data-game-reload]').addEventListener('click', () => { shell.dataset.gameState='loading';status.textContent=copy.loading+' 0%';lastPercentage=-1;frame.src='play.html?lang='+(zh?'zh':'en')+'&reload='+Date.now(); });
  document.querySelectorAll('[data-focus-game]').forEach(button => button.addEventListener('click', () => {
    if (innerWidth <= 1000) shell.scrollIntoView({behavior:'smooth',block:'center'});
    else window.scrollTo({top:document.querySelector('#introduction').offsetTop-document.querySelector('.site-nav').offsetHeight,behavior:'smooth'});
    frame.focus({preventScroll:true}); frame.contentWindow.postMessage({type:'OBLIVION_FOCUS'}, location.origin==='null'?'*':location.origin);
  }));
  const footer = document.querySelector('.site-footer a[href="https://discelysium.github.io/OBLIVION/"]');
  if (footer) { const button=document.createElement('button');button.type='button';button.dataset.focusGame='';button.textContent=copy.play;button.addEventListener('click',()=>{shell.scrollIntoView({behavior:'smooth',block:'center'});frame.focus({preventScroll:true});});footer.replaceWith(button); }
})();
