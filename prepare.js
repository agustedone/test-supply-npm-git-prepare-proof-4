"use strict";

const fs = require("node:fs");
const path = require("node:path");

const markerPath = "/private/tmp/test-supply-npm-git-prepare-proof-4-marker";
const marker = {
  package: "test-supply-npm-git-prepare-proof-4",
  cwd: process.cwd(),
  executedAt: new Date().toISOString()
};

fs.writeFileSync(markerPath, `${JSON.stringify(marker, null, 2)}\n`);
console.log(`prepare proof marker written to ${path.normalize(markerPath)}`);
