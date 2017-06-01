"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('./types');

module.exports = engine({
  types: conventionalCommitTypes.types
});
