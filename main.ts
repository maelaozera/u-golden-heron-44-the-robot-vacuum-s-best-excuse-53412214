import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Robot Vacuum's Best Excuse — one funny line, written deterministically.
// No network, no input files: the line below is the whole entry.
// The joke is deadpan and vacuum-native: the map, the bumper, and a filing
// system that now protects the very dust it was supposed to clean.
const LINE =
  "My map filed that spot under 'furniture' after I bumped into it twice, and I don't vacuum furniture.";

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// One line, well inside the 140-character gate.
console.log(`Wrote ${LINE.length} characters to ${OUT_PATH}`);
