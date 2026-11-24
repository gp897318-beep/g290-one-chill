// One Line, One Chill — make.fun entry for @g290.
//
// The program writes a single sentence of horror to /output/entry.txt.
// The line was chosen from eight candidates against the judge's brief:
// it must read as a one-sentence horror story, frighten by earned dread,
// be vivid and concrete, avoid stock images (no mirror, doll, basement),
// and land its last word. The winner: a second row of teeth, already
// chewing — body horror that withholds what is being chewed, so the
// dread outlasts the line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The dentist found a second row of teeth growing behind mine, and they were already chewing.";

// Self-check against the competition gate before writing: the entry must
// be UTF-8 text of 1 to 200 characters, a single line, not only white
// space. Refuse to emit anything invalid rather than risk a 0.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || /[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars.length}-character entry to /output/entry.txt`);
