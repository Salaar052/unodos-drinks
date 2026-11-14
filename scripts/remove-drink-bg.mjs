/**
 * Strip backgrounds from drink JPGs → transparent PNGs (requires rembg).
 * Usage: pip install "rembg[cpu]" pillow && node scripts/remove-drink-bg.mjs
 */
import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "public", "images").replace(/\\/g, "\\\\");

const ids = readdirSync(join(root, "public", "images"))
  .filter((f) => f.endsWith(".jpg"))
  .map((f) => f.replace(/\.jpg$/, ""));

const py = `
from pathlib import Path
from rembg import remove, new_session

images = Path(r"${imagesDir}")
session = new_session("u2net")
for stem in ${JSON.stringify(ids)}:
    src = images / f"{stem}.jpg"
    dst = images / f"{stem}.png"
    if not src.is_file():
        print("skip", stem)
        continue
    print("processing", stem)
    dst.write_bytes(remove(src.read_bytes(), session=session))
    print("wrote", dst.name)
print("done")
`;

const r = spawnSync("python", ["-c", py], { stdio: "inherit", cwd: root });
process.exit(r.status ?? 1);