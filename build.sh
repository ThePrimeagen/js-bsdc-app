#!/usr/bin/env bash
# npm install
mkdir -p app/js-bsdc-model
cp -Rf node_modules/js-bsdc-model/lib/ app/js-bsdc-model
node tools/r.js -o tools/build.json
