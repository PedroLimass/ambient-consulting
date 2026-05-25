import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const input = path.join(root, 'public', 'landScape.jpg');
const output = path.join(root, 'public', 'og-image.jpg');

const W = 1200;
const H = 630;

const svgOverlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.78"/>
      <stop offset="55%" stop-color="#000000" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="brand" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#083d21" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0d4f2b" stop-opacity="0.35"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#brand)"/>
  <rect width="100%" height="100%" fill="url(#g)"/>

  <g font-family="Outfit, 'DM Sans', Inter, Helvetica, Arial, sans-serif">
    <text x="72" y="248" fill="#e8ddd2" font-size="28" font-weight="600" letter-spacing="4">
      LAGEQ
    </text>

    <text x="72" y="340" fill="#ffffff" font-size="74" font-weight="800">
      Laboratório de Geoquímica
    </text>
    <text x="72" y="420" fill="#ffffff" font-size="74" font-weight="800">
      e Qualidade Ambiental
    </text>

    <text x="72" y="495" fill="#e8ddd2" font-size="30" font-weight="500">
      Soluções ambientais com rigor científico
    </text>

    <line x1="72" y1="540" x2="200" y2="540" stroke="#e8ddd2" stroke-width="3" />
  </g>
</svg>
`;

await sharp(input)
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([{ input: Buffer.from(svgOverlay), top: 0, left: 0 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(output);

const { size } = await sharp(output).metadata();
console.log('OK', output, `${Math.round((await import('fs')).statSync(output).size / 1024)}KB`);
