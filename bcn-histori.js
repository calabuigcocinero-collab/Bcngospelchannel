(() => {
  const status = document.getElementById('histori-estado');
  const cover = document.getElementById('histori-portada');
  const catalog = document.getElementById('histori-catalogo');
  const select = document.getElementById('histori-selector');
  const player = document.getElementById('histori-video');
  const description = document.getElementById('histori-descripcion');

  function mediaURL(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    try {
      const url = new URL(value, location.href);
      return url.protocol === 'https:' || (url.protocol === 'http:' && url.origin === location.origin) ? url.href : '';
    } catch {
      return '';
    }
  }

  async function loadCatalog() {
    const response = await fetch('./documentales.json');
    if (!response.ok) throw new Error('Catalog unavailable');
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('Invalid catalog');
    const videos = data.filter(item => typeof item?.titulo === 'string' && item.titulo.trim() && mediaURL(item.video));
    if (!videos.length) return;

    videos.forEach((item, index) => select.add(new Option(item.titulo, index)));
    function showVideo() {
      const item = videos[Number(select.value)];
      player.pause();
      player.poster = mediaURL(item.cartel) || cover.src;
      player.src = mediaURL(item.video);
      player.load();
      description.textContent = typeof item.descripcion === 'string' ? item.descripcion : '';
      status.textContent = '';
    }
    player.addEventListener('error', () => {
      status.textContent = 'No se ha podido cargar el vídeo. Inténtalo de nuevo o selecciona otro documental.';
    });
    select.addEventListener('change', showVideo);
    showVideo();
    cover.hidden = true;
    cover.style.display = 'none';
    catalog.hidden = false;
  }

  loadCatalog().catch(() => {
    status.textContent = 'El catálogo de documentales no está disponible en este momento.';
  });
})();
