(() => {
  // Configuração
  const canvasId = 'canvas-Lavaridge-Town';
  // O usuário forneceu 6 imagens (fire1.png a fire6.png)
  const totalFrames = 6; 
  const velocidadeMs = 150; // Velocidade de animação ajustada para 150ms para um efeito de fogo mais rápido
  const imgPrefix = 'fire';
  const imgExt = '.png';

  // Referências e validação
  const canvas = document.getElementById(canvasId);
  if (!canvas) return console.error(`Canvas "${canvasId}" não encontrado.`);
  const ctx = canvas.getContext('2d');
  if (!ctx) return console.error('Contexto 2D não disponível.');

  // Garante que o buffer interno do canvas corresponde aos atributos HTML
  function syncCanvasSize() {
    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;
    if (canvas.width !== cssWidth || canvas.height !== cssHeight) {
      canvas.width = cssWidth;
      canvas.height = cssHeight;
    }
  }
  syncCanvasSize();
  window.addEventListener('resize', syncCanvasSize);

  // Carrega frames
  const frames = [];
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    // As imagens estão no diretório de upload, mas o script será executado no mesmo nível do index.html
    // Assumindo que as imagens fireX.png estão acessíveis no mesmo diretório do index.html
    img.src = `${imgPrefix}${i}${imgExt}`; 
    frames.push(img);
  }

  // Garantir que a animação não fique travada se houver erro no carregamento
  const loadPromises = frames.map(img =>
    new Promise(resolve => {
      img.onload = () => resolve({ ok: true, img });
      img.onerror = () => {
        console.warn('Falha ao carregar imagem', img.src);
        resolve({ ok: false, img });
      };
    })
  );

  // Controle da animação
  let frameIndex = 0;
  let intervalId = null;

  function desenharFrame() {
    const entry = frames[frameIndex];
    if (entry && entry.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      try {
        // Desenha a imagem para preencher o canvas
        ctx.drawImage(entry, 0, 0, canvas.width, canvas.height);
      } catch (e) {
        console.warn('Erro ao desenhar imagem', frames[frameIndex], e);
      }
    }
    frameIndex = (frameIndex + 1) % totalFrames;
  }

  Promise.all(loadPromises).then(results => {
    const anyLoaded = results.some(r => r.ok);
    if (!anyLoaded) {
      console.error('Nenhuma imagem carregada. Verifique os paths das imagens.');
      return;
    }

    // Fallback para frames que falharam
    const fallback = results.find(x => x.ok);
    if (fallback) {
        results.forEach((r, i) => {
            if (!r.ok) {
                frames[i] = fallback.img;
            }
        });
    }

    // Desenha imediatamente e inicia o loop com intervalo
    desenharFrame();
    intervalId = setInterval(desenharFrame, velocidadeMs);
  });

  // API pública mínima para controle (útil para depuração)
  window.__animacaoLavaridge = {
    stop() { if (intervalId) clearInterval(intervalId); intervalId = null; },
    start() { if (!intervalId) intervalId = setInterval(desenharFrame, velocidadeMs); },
    redraw() { desenharFrame(); }
  };
})();
