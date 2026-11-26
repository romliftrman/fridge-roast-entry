// Fridge Roast: One Line, Biggest Laugh
// make.fun competition u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
//
// The entry is a single roast line, at most 200 characters, written to
// /output/entry.txt. The joke aims at the smart fridge itself: its
// overnight firmware update and its ice maker. The turn is that the
// appliance now demands legal consent before it will dispense ice —
// a fresh angle that avoids the obvious cracks about the fridge
// ordering groceries or watching its owner.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My fridge updated itself at 3 a.m., and now the ice maker holds every cube hostage until I accept its new terms and conditions.";

const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `Roast must be 1 to ${MAX_CHARS} characters, got ${line.length}.`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("Roast must not be only white space.");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("Roast must be a single line with no line breaks.");
  }
}

validate(ROAST);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
