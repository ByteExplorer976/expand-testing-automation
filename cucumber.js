// cucumber.js
module.exports = {
  default: `--format progress --require-module ts-node/register --require './support/world.ts' --require './support/hooks.ts' --require './step-definitions/**/*.ts'`
};


