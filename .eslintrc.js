module.exports = {
  root: true,
  env : {
    browser: true,
    // "commonjs": true,
    node   : true,
    es6    : true,
  },
  parserOptions: {
    parser                     : 'babel-eslint',
    allowImportExportEverywhere: true,
    sourceType                 : 'module',
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-underscore-dangle': ['error',{ allow : ['_id'] }],
    'no-new-wrappers'     : 'error',
    'comma-dangle'        : ['error', {
      imports: 'only-multiline',
      exports: 'only-multiline',
      objects: 'only-multiline',
      arrays : 'only-multiline',
    }],
    'comma-style'                : ['error', 'last'],
    'array-bracket-spacing'      : ['error', 'never'],
    'space-in-parens'            : ['error', 'never'],
    'no-nested-ternary'          : 'error',
    'no-unneeded-ternary'        : 'error',
    'space-before-function-paren': ['error','never'],
    'space-before-blocks'        : ['error', 'always'],
    'padded-blocks'              : ['error', 'never'],
    eqeqeq                       : 'warn',
    'prefer-const'               : 'error',
    'operator-linebreak'         : ['error', 'before'],
    'no-iterator'                : 'error',
    'no-duplicate-imports'       : 'error',
    'no-useless-constructor'     : 'error',
    'implicit-arrow-linebreak'   : ['error', 'beside'],
    'prefer-spread'              : 'error',
    'no-new-func'                : 'error',
    'prefer-rest-params'         : 'error',
    'arrow-spacing'              : 'error',
    'func-style'                 : ['error', 'expression'],
    indent                       : ['error', 2],
    'max-len'                    : [0, {
      tabWidth: 2
    }],
    'object-shorthand': ['error', 'always'],
    'quote-props'     : ['error', 'as-needed'],
    'no-new-object'   : 'error',
    'no-self-assign'  : [
      'error',
      {
        props: false
      }
    ],
    'no-redeclare'           : 'error',
    'no-lonely-if'           : 'error',
    'no-multiple-empty-lines': [
      1,
      {
        max: 1
      }
    ], 
 
    'new-parens'          : 'error',
    'block-spacing'       : 'error',
    'no-const-assign'     : 'error',
    'no-this-before-super': 'warn',
    'no-reserved-keys'    : 0,
    'no-undef'            : 'error',
    'no-unused-vars'      : 'warn',
    'constructor-super'   : 'warn',
    'valid-typeof'        : 'warn',
    semi                  : [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    quotes                                   : ['error', 'single', { allowTemplateLiterals : true }],
    'singleline-html-element-content-newline': 0,
    'no-extra-semi'                          : 'error',
    'callback-return'                        : 'error',
    'no-constant-condition'                  : 'error',
    'no-unreachable'                         : 'error',
    'no-dupe-keys'                           : 'error',
    'no-dupe-class-members'                  : 'error',
    'key-spacing'                            : [1, {
      singleLine: {
        beforeColon: true,
        afterColon : true
      },
      multiLine: {
        align: 'colon'
      }
    }],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

};
