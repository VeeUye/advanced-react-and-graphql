module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'each',
          'include',
          'extend',
          'mixin',
          'return',
          'content',
        ],
      },
    ],
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['/^get.*$/'],
      },
    ],
    'custom-property-empty-line-before': [
      'never',
      { except: ['after-comment'] },
    ],
    'rule-empty-line-before': ['always', { ignore: ['first-nested'] }],
    'max-empty-lines': [1, { ignore: 'comments' }],
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'local'] },
    ],
  },
}
