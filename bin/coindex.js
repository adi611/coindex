#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json")

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- hhtps://nomics.com')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv) // has access to arguments we pass wsing this
