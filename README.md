<img align="center" src="https://raw.githubusercontent.com/frencojobs/minimalistic/main/.github/cover.png" />

<p align="center"> Opinionated but sensible and minimal prettier config with plugins. </p>

> **Disclaimer**
> 
> The title `minimalistic` doesn't reflect the config but rather stands for the style of the formatted code which is minimal and clean with less syntactic tokens. In fact, the config is instead quite pedantic and strict.

## Usage

Install the package as a `devDependency` by your package manager of choice.

```sh
npm i -D minimalistic
# or if you use yarn
yarn add -D minimalistic
```

Set `prettier` config in `package.json` as `minimalistic`.

```json
{
  "prettier": "minimalistic"
}
```

> Make sure you have both `prettier` and `typescript` installed as `devDependencies`. `typescript` is used by an included plugin to organize imports. It doesn't mean you have to use TypeScript. The plugin works with JavaScript as well.

## Rationale

1. To reduce as much space as possible where it makes sense to. This is done via disallowing whitespaces between braces, disabling semicolons and using single quotes instead of double quotes, etc.

2. To have import statements always organized. This may be opinionated but it helps with OSS projects where different parties may have different opinions on how imports should be organized or maybe different IDE setups. Some people really don't care about this but they hate it when submitted PRs have unnecessary import-sorting changes. This will also help them.

3. To have `package.json` organized with reasons same as above.
