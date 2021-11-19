/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'import-access', 'unused-imports'],
  rules: {
    // enumの使用をエラーにする(ユニオン型を推奨)
    'no-restricted-syntax': ['error', { selector: 'TSEnumDeclaration', message: "Don't declare enums" }],
    // コールバック関数は必ずarrow-functionにする
    'prefer-arrow-callback': 'error',
    // functin宣言はエラー
    'func-style': 'error',
    // arrow-functionの記法
    'arrow-body-style': 'off',
    // prop-typesは利用しないのでoff
    'react/prop-types': 'off',
    // Next.jsではReactをimportしなくても問題ないのでoff
    'react/react-in-jsx-scope': 'off',
    // JSXのBoolean型のプロパティは記述を省略する
    'react/jsx-boolean-value': 'error',
    // JSXの文字列属性は波括弧を禁止する
    'react/jsx-curly-brace-presence': 'error',
    // イベントハンドラの命名を統一
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'on',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    // Childコンポーネントが存在しないときはSelf-closingタグを使用する
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    // key propに配列のindexを指定したときに警告する
    'react/no-array-index-key': 'warn',
    // export defaultを許容しない
    'import/no-default-export': 'error',
    'import-access/jsdoc': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [{ pattern: '@/**', group: 'internal', position: 'before' }],
      },
    ],
    // unused-imports/no-unused-varsと競合するためoff
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    // 未使用の変数がある場合エラーにする
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // 型は明示的にtype-importする
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    // 命名に関するルール
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'] },
      { selector: ['property', 'parameterProperty', 'method'], format: ['camelCase'] },
      {
        selector: ['variable'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'should', 'can'],
      },
      {
        selector: ['variable'],
        types: ['string', 'number', 'array'],
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: ['typeProperty'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'should', 'can'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.{js,jsx,ts,tsx}', 'src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.test.{js,jsx,ts,tsx}', '*.mock.{js,jsx,ts,tsx}', 'src/__tests__/**/*'],
      rules: {
        'max-lines': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}

module.exports = config
