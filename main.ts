// The Excuse That Almost Works — make.fun u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// Writes ONE line to /output/entry.txt: the excuse a gamer texts the boss
// to skip work on GTA 6 launch week. Deterministic, no network, no model calls.
//
// Chosen line (16 words, 79 chars): a frozen laptop update at 87% with IT
// telling you not to touch it till noon — a real, specific, boring workplace
// detail a tired manager has seen before and would almost believe. The joke
// is in the detail itself (87%, "don't touch it"), not bolted on. No setup,
// no explanation, no signature, no GTA 6 mention, no dead grandmother /
// flat tyre / sudden fever.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry boss, my laptop update froze at 87% and IT said don't touch it till noon.";

if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
const words = ENTRY.trim().split(/\s+/).length;
if (words < 1 || words > 20) {
  throw new Error(`entry must be 1-20 words, got ${words}`);
}
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${words} words / ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
