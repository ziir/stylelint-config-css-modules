import { defineProject, mergeConfig } from 'vitest/config';
import { getResolvedViteConfig } from 'viteup/pure';

export default mergeConfig(
  getResolvedViteConfig(),
  defineProject({
    test: {
      include: ['./test/*.js'],
    },
  }),
);
