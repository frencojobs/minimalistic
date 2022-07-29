/** @type {import('prettier').Config} */
const overridableDefaults = {
  // these can be overridden by the user's editorconfig
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
}

/** @type {import('prettier').Config} */
module.exports = {
  ...overridableDefaults,
  // save space
  semi: false,
  bracketSpacing: false,
  // use single quotes everywhere
  singleQuote: true,
  jsxSingleQuote: true,
  // for better git diffs
  trailingComma: 'all',
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-organize-imports'),
  ],
}
