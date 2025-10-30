# Mapa-Hoen

## DESCRIÇÃO
Neste projeto, foi desenvolvido um mapa inspirado no universo do jogo Pokémon, tendo como base a região de Hoenn. Realizou-se um sorteio para a distribuição dos papéis entre os participantes, resultando em oito líderes de ginásio, quatro integrantes da Elite Four e um protagonista. Cada participante utilizará seu respectivo canvas para inserir e personalizar o próprio personagem.

## Instruções de uso: 

1. Insira seu script e suas imagens na pasta principal do projeto.
2. Nomeie o arquivo de script de maneira a evitar conflitos com os demais arquivos. Exemplo: "animacaoHenrick.js".
3. Da mesma forma, atribua nomes apropriados às suas imagens, garantindo que não ocorram conflitos no código.
4. No final do arquivo index.html, encontram-se os IDs correspondentes aos canvas designados para cada participante.
```bash
<body>
  <div class="mapa-container">
    <canvas id="canvas-Littleroot-Town" width="80" height="80"></canvas>
    <canvas id="canvas-Rustboro" width="80" height="80"></canvas>
    <canvas id="canvas-Dewford-Town" width="80" height="80"></canvas>
    <canvas id="canvas-Mauville" width="80" height="80"></canvas>
    <canvas id="canvas-Lavaridge-Town" width="80" height="80"></canvas>
    <canvas id="canvas-Petalburg" width="80" height="80"></canvas>
    <canvas id="canvas-Fortree-City" width="80" height="80"></canvas>
    <canvas id="canvas-Mossdeep-City" width="80" height="80"></canvas>
    <canvas id="canvas-Sootopolis-City" width="80" height="80"></canvas>
    <canvas id="canvas-Elite1" width="80" height="80"></canvas>
    <canvas id="canvas-Elite2" width="80" height="80"></canvas>
    <canvas id="canvas-Elite3" width="80" height="80"></canvas>
    <canvas id="canvas-Elite4" width="80" height="80"></canvas>
```

5. No script, altere o ID para aquele que corresponde ao canvas indicado para o seu participante. 
```bash
const canvas = document.getElementById("canvas-Littleroot-Town");
```
6. Em seguida, adicione o seu script ao arquivo index.html.
```bash
  </div>
  <script src="animacao.js"></script>
  <script src="animacaoAlvaro.js"></script>
</body>
```


