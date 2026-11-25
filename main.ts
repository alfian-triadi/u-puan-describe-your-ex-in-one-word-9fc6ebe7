// Describe Your Ex in One Word — make.fun entry
// The word: "unsubscribe"
// Why: an ex is a subscription you finally cancelled. One real word,
// spelled correctly, instantly readable as a verdict on a former partner:
// you opted out, no renewal, no re-engagement emails. The joke lands
// with the word itself — no caption needed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "unsubscribe";
const MAX_CHARS = 111;

if (WORD.length < 1 || WORD.length > MAX_CHARS) {
  throw new Error(`word must be 1-${MAX_CHARS} characters, got ${WORD.length}`);
}
if (WORD.trim() !== WORD || /\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify byte-identical after write.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== WORD) {
  throw new Error("verification failed: /output/entry.txt does not match");
}

console.log(`Wrote /output/entry.txt: "${WORD}" (${WORD.length} characters)`);
