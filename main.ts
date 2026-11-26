// Rebuild #2: migration lane, 0x in the 971-submission census — named failure, measured price, dated incident.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "// Migration 0047 converted orders.total from cents to dollars on 9 Nov 2021. Checkout still divides it by 100. Every order since has been charged 1% of its price, and the migration took 11 seconds.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
