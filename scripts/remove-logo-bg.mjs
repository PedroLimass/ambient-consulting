import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const src =
  '/home/pedrolima/.cursor/projects/home-pedrolima-projetos-ambient-consulting/assets/c__Users_pphen_AppData_Roaming_Cursor_User_workspaceStorage_3dcbfbb38139d5cdf6779c71f97c1dae_images_logo-43e59671-b936-402d-bcba-f8e060c833f7.png';
const out = path.join(root, 'public', 'logo-lageq.png');

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const KEEP = 215; // abaixo disso: 100% opaco (faz parte da logo)
const CUT = 245; // acima disso: 100% transparente (fundo branco)

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const minc = Math.min(r, g, b);

  let alpha;
  if (minc >= CUT) {
    alpha = 0;
  } else if (minc <= KEEP) {
    alpha = 255;
  } else {
    alpha = Math.round(255 * (1 - (minc - KEEP) / (CUT - KEEP)));
  }
  data[i + 3] = Math.min(data[i + 3], alpha);
}

await sharp(data, { raw: { width, height, channels } })
  .trim()
  .png()
  .toFile(out);

const meta = await sharp(out).metadata();
console.log('OK', out, `${meta.width}x${meta.height}`);
