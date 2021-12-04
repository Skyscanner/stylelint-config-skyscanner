# Migration Guide from v4.x to v5.x

The main change here is the upgrade from `stylelint` `v13` to `v14`, and therefore bumping all dependencies to `v14` compatible versions.

## Installation

NPM can be a bit funny about installs sometimes. If you are also using `eslint-config-skyscanner` it is recommended to reinstall `eslint-config-skyscanner` after this upgrade to ensure their shared dependencies are resolved correctly.

As a reminder, `stylelint` should *not* be installed directly in your repository, this is provided directly by `stylelint-config-skyscanner` and should be uninstalled first if you still have it installed.

## Breaking Changes

Stylelint `v14` comes with it's own [migration guide](https://github.com/stylelint/stylelint/blob/14.0.0/docs/migration-guide/to-14.md).

The other packages also add or update several rules. These will not be granularly listed here unless they are unusual enough to mention, but expect new failures. Many will be autofixable using `--fix`, but others will require code changes.

The main points that may affect `stylelint-config-skyscanner` consumers are:

### Deprecation of `--syntax` CLI flag

This should be removed from your NPM scripts. `stylelint-config-skyscanner` will handle this for you.

### Rules deprecated in 13.7.0

The rules deprecated in 13.7.0 were removed. You should refer to the [list of alternatives in the 13.7.0 CHANGELOG entry](https://github.com/stylelint/stylelint/blob/14.0.0/CHANGELOG.md#1370) and use them instead.

### `configOverrides` option

The `configOverrides` option has been removed. Use the [`overrides` property](https://github.com/stylelint/stylelint/blob/14.0.0/docs/user-guide/configure.md#overrides) in the configuration object instead.

### `function-calc-no-invalid` rule

The `function-calc-no-invalid` has be removed. You should remove it from your configuration object.

### `@import` file path extensions

`stylelint-scss` `v5` introduced the `scss/at-import-partial-extension` rule. This was initially set to `never`. This does not work for us as it throws false positives on common paths like `@skyscanner/bpk-foundations-web/tokens/base.default.scss`, when the `.scss` is removed it fails on .`default` and is not configurable. Because of this we override to `always`.

This means any paths like:

```scss
@import '~bpk-mixins/index';
```

will need to be updated to:

```scss
@import '~bpk-mixins/index.scss';
```

### `@extends` `%placeholder` syntax is now required

[`at-extend-no-missing-placeholder`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md) now enforces `@extend` cannot be used with class names and must use placeholders.

This [blog on `@extend` and placeholders](https://daveredfern.com/use-sass-placeholders-and-extend-wisely-a-cautionary-tale/) provides good reasoning.

This could look like:

```scss
.iconWrapper,
%icon-wrapper {
  display: flex;
  width: $bpk-one-pixel-rem * 40;
  height: $bpk-one-pixel-rem * 40;
  background: $bpk-color-sky-blue-tint-03;
}

.iconGreenWrapper {
  @extend %icon-wrapper;

  background: $bpk-color-nara;
}
```
### `eslint-config-skyscanner` and `prettier`

The upgrade of `eslint-config-skyscanner` to `v10` includes a minor version of prettier. This may introduce `prettier` errors in JavaScript files. These are typically autofixable using `--fix` on your `eslint` command.
