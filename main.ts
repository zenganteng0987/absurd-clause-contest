import { mkdirSync, writeFileSync } from "node:fs";

// The Absurd Clause Contest — one deadpan terms-of-service clause, 118 chars, within the 1–200 gate.
const entry =
  "By accepting these terms, you agree to lend us your left shoe on alternate Tuesdays, to be returned by sunset, or not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
process.stdout.write(entry + "\n");
