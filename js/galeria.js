document.addEventListener('DOMContentLoaded', () => {
  const galeria = document.getElementById('galeria');
  const caja = document.getElementById('caja');
  const cajaImg = document.getElementById('caja-img');

  if (!galeria || !caja || !cajaImg) return;

  galeria.addEventListener('click', e => {
    const img = e.target.closest('img');
    if (!img) return;
    cajaImg.src = img.src;
    caja.style.display = 'flex';
  });

  // Cerrar al clicar fuera de la imagen
  caja.addEventListener('click', e => {
    if (e.target === caja || e.target === cajaImg) {
      caja.style.display = 'none';
      cajaImg.src = '#';
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      caja.style.display = 'none';
      cajaImg.src = '#';
    }
  });
});

