const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

test('reactflow_dependencies.json parses as valid JSON', () => {
  const filePath = path.join(__dirname, '..', 'reactflow_dependencies.json');
  const content = fs.readFileSync(filePath, 'utf8');
  assert.doesNotThrow(() => JSON.parse(content));
});
