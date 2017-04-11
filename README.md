# stylelint-config-skyscanner

Skyscanner's stylelint config.

This stylelint config is based on `stylelint-config-skyscanner` with Skyscanner specific additions and is meant to be used with Backpack and `backpack-react-scripts`. Rules encourage developers to leverage the Backpack design system and to outsource development dependencies to `backpack-react-scripts`.

## Installation

```bash
npm install --save-dev stylelint-config-skyscanner
```

## Usage

Add `"extends": "stylelint-config-skyscanner"` to your `.stylelintrc`.

## Styleguide

#### Patterns
 - PascalCase
```([A-Z][a-zA-Z0-9]+)```
 - kebab-case
```([a-z][a-z0-9]*(-[a-z0-9]+)*)```
 - camelCase
```([a-z]+([A-Z][a-z0-9]+)*)```

##### Class selector pattern:
```
`(${pascalCase}|${kebabCase})` + // block
`(__(${camelCase}|${kebabCase}))?` + // element
`(--(${camelCase}|${kebabCase}))?$`, // modifier
```

##### Mixin pattern:
```
_?${kebabCase}(__${kebabCase})?(--${kebabCase}?)?-?
```


## License

[Apache License 2.0](LICENSE.md)