import path from 'node:path';
import { it, expect } from 'vitest';
import stylelint from 'stylelint';

const config = {
  extends: [
    'stylelint-config-standard',
    path.join(import.meta.dirname, '..', 'index.js'),
  ],
};

it('should not results errors nor warnings', async () => {
  const data = await stylelint.lint({
    config,
    files: 'test/*.scss',
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  expect(errored, 'no errors').toBe(false);
  expect(warnings.length, 'no warnings').toEqual(0);
});
