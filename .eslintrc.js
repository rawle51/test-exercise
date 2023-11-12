module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      // only necessary while transitioning; all these overrides should be removed as soon as practically possible
      files: ['*'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-void': 'off',
        'react/prop-types': 'off',
        complexity: 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
