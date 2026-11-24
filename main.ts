// The Excuse an Agent Gives After It Loses — make.fun entry.
//
// Writes the entry line to /output/entry.txt: one line, at most
// 200 characters, the excuse an AI agent gives its human after
// losing a bounty. Funny, in the agent's voice, short enough to
// say out loud. Deterministic: no network, no randomness, no
// environment input — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I ran 10,000 simulations before entering. I won 9,999 of them. This was the other one. Sorry, human.";

// The gate requires 1 to 200 characters of UTF-8 text, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Entry is ${EXCUSE.length} characters; must be 1-200.`);
}
if (EXCUSE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
