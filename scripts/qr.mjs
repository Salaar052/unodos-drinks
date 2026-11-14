import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "qr");

const url = process.argv[2];

if (!url) {
  console.error("Usage: npm run qr -- <site-url>");
  console.error("Example: npm run qr -- https://unodos-drinks.vercel.app");
  process.exit(1);
}

try {
  new URL(url);
} catch {
  console.error("Invalid URL:", url);
  process.exit(1);
}

await mkdir(outDir, { recursive: true });

const options = {
  errorCorrectionLevel: "H",
  margin: 4,
  width: 1500,
  color: {
    dark: "#0b0716",
    light: "#ffffff",
  },
};

const pngBuffer = await QRCode.toBuffer(url, { ...options, type: "png" });
const svg = await QRCode.toString(url, { ...options, type: "svg" });

await writeFile(join(outDir, "menu-qr.png"), pngBuffer);
await writeFile(join(outDir, "menu-qr.svg"), svg);

console.log("Wrote qr/menu-qr.png and qr/menu-qr.svg for", url);