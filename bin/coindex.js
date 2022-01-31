#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json")

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- hhtps://nomics.com')
    .parse(process.argv) // has access to arguments we pass wsing this
