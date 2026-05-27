import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public");
mkdirSync(outDir, { recursive: true });

const W = 1200;
const H = 630;

// Build dot grid pattern rows
const dotRows = [];
for (let y = 30; y < H; y += 36) {
  for (let x = 30; x < W; x += 36) {
    dotRows.push(`<circle cx="${x}" cy="${y}" r="1" fill="#1C3A2D" opacity="0.07"/>`);
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#FAFAF6"/>

  <!-- Dot grid -->
  ${dotRows.join("\n  ")}

  <!-- Radial glow -->
  <defs>
    <radialGradient id="glow" cx="38%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#1C3A2D" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#FAFAF6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="80%" r="40%">
      <stop offset="0%" stop-color="#8B6840" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#FAFAF6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="${W}" height="3" fill="#1C3A2D" opacity="0.9"/>

  <!-- D monogram badge -->
  <rect x="72" y="220" width="72" height="72" rx="16" fill="#1C3A2D"/>
  <text x="108" y="272" text-anchor="middle" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#FAFAF6">D</text>

  <!-- Name: Destiny -->
  <text x="72" y="356" font-family="Georgia, 'Times New Roman', serif" font-size="88" font-weight="300" fill="#111110" letter-spacing="-3">Destiny</text>
  <!-- Obs in forest green -->
  <text x="560" y="356" font-family="Georgia, 'Times New Roman', serif" font-size="88" font-style="italic" font-weight="400" fill="#1C3A2D" letter-spacing="-2">Obs</text>

  <!-- Divider line -->
  <rect x="72" y="380" width="480" height="1" fill="#D9D6CE"/>

  <!-- Subtitle -->
  <text x="72" y="418" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#6C6A65" letter-spacing="1">Full-Stack Software Engineer  ·  Cloud &amp; DevOps</text>

  <!-- Available badge -->
  <rect x="72" y="452" width="220" height="36" rx="18" fill="#1C3A2D" opacity="0.08"/>
  <circle cx="98" cy="470" r="5" fill="#1C3A2D"/>
  <text x="110" y="475" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="600" fill="#1C3A2D" letter-spacing="0.5">Available · Remote / Global</text>

  <!-- Right side — stat chips -->
  <rect x="820" y="220" width="300" height="70" rx="14" fill="#F5F4EF" stroke="#D9D6CE" stroke-width="1"/>
  <text x="970" y="251" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="300" fill="#111110">4+</text>
  <text x="970" y="273" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="#6C6A65" letter-spacing="0.5">Years building</text>

  <rect x="820" y="310" width="300" height="70" rx="14" fill="#F5F4EF" stroke="#D9D6CE" stroke-width="1"/>
  <text x="970" y="341" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="300" fill="#111110">20+</text>
  <text x="970" y="363" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12" fill="#6C6A65" letter-spacing="0.5">Projects shipped</text>

  <rect x="820" y="400" width="300" height="70" rx="14" fill="#1C3A2D" stroke="#1C3A2D" stroke-width="1"/>
  <text x="970" y="434" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="#FAFAF6" letter-spacing="0.5">Open to opportunities</text>

  <!-- Bottom domain hint -->
  <text x="${W - 72}" y="${H - 36}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#9C9A96" letter-spacing="0.5">destinyobs.netlify.app</text>
</svg>`;

const pngPath = join(outDir, "og-image.png");
await sharp(Buffer.from(svg))
  .resize(W, H)
  .png({ quality: 95 })
  .toFile(pngPath);

console.log("✓ Generated public/og-image.png");

// Also generate a 512x512 icon PNG for apple-touch-icon
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="112" fill="#1C3A2D"/>
  <text x="256" y="370" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="320" font-weight="bold" fill="#FAFAF6">D</text>
</svg>`;

const iconPath = join(outDir, "apple-icon.png");
await sharp(Buffer.from(iconSvg))
  .resize(512, 512)
  .png({ quality: 95 })
  .toFile(iconPath);

console.log("✓ Generated public/apple-icon.png");
