# Change Log

_If `@skyscanner/eslint-config-skyscanner` has a major version change then `@skyscanner/stylelint-config-skyscanner` should also have a major version change, as explained in [the docs](./docs/eslint-as-dependency.md)_

This file remains for historical references, but all new releases are now documented in the package's [Releases page](https://github.com/Skyscanner/eslint-config-skyscanner/releases).

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

# 9.0.0

- Update @skyscanner/eslint-config-skyscanner to v15.0.0

This triggers a major version bump of @skyscanner/stylelint-config-skyscanner due to https://github.com/Skyscanner/stylelint-config-skyscanner/blob/main/docs/eslint-as-dependency.md.

No changes are expected to CSS linting.

# 8.0.0

- Update @skyscanner/eslint-config-skyscanner to v14.0.0

This triggers a major version bump of @skyscanner/stylelint-config-skyscanner due to https://github.com/Skyscanner/stylelint-config-skyscanner/blob/main/docs/eslint-as-dependency.md.

No changes are expected to CSS linting.

## 7.1.0

### Updated

- Bump jest from 27.5.1 to 29.4.3
- Bump minimatch from 3.0.4 to 3.1.2 (security vulnerability)
- Bump husky from 7.0.4 to 8.0.3
- Bump lint-staged from 12.3.8 to 13.1.2
- Bump stylelint-declaration-strict-value from 1.8.0 to 1.9.2
- Bump stylelint-order from 5.0.0 to 6.0.2
- Bump stylelint-scss from 4.1.0 to 4.4.0
- Bump stylelint from 14.3.0 to 14.16.1

## 7.0.0
### Updated

- Bump @skyscanner/eslint-config-skyscanner from 12.6.1 to 13.1.0
- Bump stylelint-config-prettier from 9.0.3 to 9.0.4
- Bump json5 from 1.0.1 to 1.0.2 (security bump)

As `@skyscanner/eslint-config-skyscanner` is shipped as `dependency` then this may cause JavaScript linting changes in your project as a side effect if you have not already updated. If that is the case it is the recommendation to first update `@skyscanner/eslint-config-skyscanner` and follow its [release notes](https://github.com/Skyscanner/eslint-config-skyscanner/releases/tag/v13.0.0).

## 6.1.0 (deprecated)
### Updated

- Bump @skyscanner/eslint-config-skyscanner from 12.6.1 to 13.1.0
- Bump stylelint-config-prettier from 9.0.3 to 9.0.4
- Bump json5 from 1.0.1 to 1.0.2 (security bump)

This version was incorrectly released as a minor bump, when the side effect of the `@skyscanner/eslint-config-skyscanner` bump to consumers justified it being a major bump. It has been marked as deprecated in npm, and version `7.0.0` should be used instead as soon as it is published.

## 6.0.2

- Update `@skyscanner/stylelint-plugin-backpack` and `@skyscanner/eslint-config-skyscanner`

## 6.0.1

### Patch

- Update from Node `^16.13.0` to `>=16.13.0` to allow versions higher than 16

## 6.0.0

### Breaking
- Drops support for Node versions < 16. No new functionality is introduced, but from this point forwards it should not be assumed Node 12 will work.
- Bumped `stylelint-plugin-backpack` to latest

## 5.4.1

### Patch

- Corrected install of `@skyscanner/stylelint-plugin-backpack` to `dependencies` instead of `devDependencies`.

## 5.4.0

### Added

- Install `@skyscanner/stylelint-plugin-backpack` and enable `use-typography-styles` rule as warning to encourage the use of Backpack typography styles

## 5.3.0

### Updated

- Allow using `currentcolor` keyword.

## 5.2.0

### Updated

- Bump stylelint from 14.2.0 to 14.3.0
- Migrate from `eslint-config-skyscanner` to `@skyscanner/eslint-config-skyscanner`
- Bump lint-staged from 12.1.4 to 12.1.7
- Bump jest from 27.4.5 to 27.4.7

## 5.1.0

### Updated

- Bump `stylelint` from `14.1.0` to `14.2.0`
- Bump `stylelint-scss` from `4.0.0` to `4.1.0`
- Bump `lint-staged` from `11.2.6` to `12.1.4`
- Bump `jest` from `27.0.4` to `27.4.5`

## 5.0.0

### Breaking

There are two main changes:
- Published under the `@skyscanner/` scope
- Upgrade from `stylelint` `v13` to `v14`, and therefore bumping all dependencies to `v14` compatible versions.

A [migration guide](./docs/migration-from-4-to-5.md) has been added.

- Bump `stylelint` from `13.13.1` to `14.1.0`
- Bump `stylelint-config-prettier` from `8.0.2` to `9.0.3`
- Bump `stylelint-order` from `4.1.0` to `5.0.0`
- Bump `stylelint-prettier` from `1.2.0` to `2.0.0`
- Bump `stylelint-declaration-strict-value` from `1.7.12` to `1.8.0`
- Bump `eslint-config-skyscanner` from `9.0.1` to `10.2.0`
- Uninstall `stylelint-config-standard`
- Uninstall `@skyscanner/stylelint-plugin-backpack`
- Install `stylelint-config-standard-scss` from `3.0.0`
- Bump `stylelint-scss` from `3.20.1` to `4.0.0`

## 4.0.0

### Breaking

- Upgraded `eslint-config-skyscanner` from `8.1.0` to `9.0.1`
  - Brings the following breaking changes: [`eslint-config-skyscanner` CHANGELOG](https://github.com/Skyscanner/eslint-config-skyscanner/blob/main/CHANGELOG.md#900---updating-dependencies)

### Patched

- Upgraded `eslint-config-skyscanner` from `8.0.2` to `8.1.0`
- Upgraded `stylelint` from `13.8.0` to `13.13.0`
- Upgraded `stylelint-config-standard` from `20.0.0` to `21.0.0`
- Upgraded `stylelint-declaration-strict-value` from `1.7.9` to `1.7.12`
- Upgraded `stylelint-prettier` from `1.1.2` to `1.2.0`
- Upgraded `stylelint-scss` from `3.18.0` to `3.19.0`

## 3.0.4 - Disable Backpack linter and upgrade dependency

### Fixed - Disable Backpack linter

- Temporarily disabled Backpack due to false positive reports.

### Changed

- Upgraded `stylelint-declaration-strict-value` to `1.7.0`

## 3.0.3 - Upgrade Backpack dependency

- Upgraded `stylelint-plugin-backpack` to latest version

## 3.0.2 - Upgrade Backpack dependency

- Upgraded `stylelint-plugin-backpack` to latest version.

## 3.0.1 - Upgrade Backpack dependency

- Upgraded `stylelint-plugin-backpack` to latest version that includes a fix for linting multiples of tokens.

## 3.0.0 - Rule update and new linter updates.

### Breaking

- Replace `unit-blacklist` with `unit-disallowed-list`. `unit-blacklist` was deprecated in [stylelint v13.7.0](https://github.com/stylelint/stylelint/blob/13.7.0/CHANGELOG.md#1370).

### Added

- Upgraded dependency:
  - `stylelint-plugin-backpack` to `1.1.0`
    - Adds new `backpack/use-colors` and `backpack/use-tokens` rules
  - `eslint-config-skyscanner` to `8.0.0`

## 2.4.0 - Upgrading dependencies

- Upgraded dependencies:
  - `stylelint` to `13.6.1`
  - `stylelint-config-prettier` to `8.0.2`
  - `stylelint-scss` to `3.18.0`

## 2.3.0 - Upgrading dependencies

- Upgraded dependencies:
  - `stylelint` to `13.6.0`
  - `stylelint-order` to `4.1.0`
  - `stylelint-declaration-strict-value` to `1.5.0`

## 2.2.0 - Adding prettier dependency

- Added `prettier` as dependency

## 2.1.0 - Upgrading dependencies

### Changed

- Upgraded dependencies:
  - `stylelint` to `13.3.3`
  - `stylelint-declaration-strict-value` to `1.4.3`
  - `stylelint-scss` to `3.17.2`

## 2.0.0 - Release - Added Prettier, upgrading dependencies and Node version.

### Added

- Integrated [Prettier](https://prettier.io/). Please, note that `stylefmt` recommends using other tools to fix formatting issues (see [their readme](https://github.com/morishitter/stylefmt#notice-consider-other-tools-before-adopting-stylefmt)), as `stylelint` already added the `--fix` flag. It is recommended to use `stylelint --fix` to format the code (specially now that Prettier has been integrated).

### Changed

- Upgraded Node 8 (lts/carbon) to Node 12 (lts/erbium).
- Moved `peerDependencies` into `dependencies`.
- Upgraded dependencies:
  - `stylelint` to `^13.2.0`.
  - `stylelint-config-standard` to `^20.0.0`.
  - `stylelint-order` to `^4.0.0`.

## 2.0.0-beta.4

- Upgraded `stylelint` peerDependency to `^11.0.0`
- Upgraded dependencies:
  - `babel-eslint` to `^10.0.3`
  - `eslint` to `^5.16.0`
  - `eslint` to `^6.5.1`
  - `eslint-config-airbnb` to `^17.1.0`
  - `eslint-config-airbnb` to `^18.0.1`
  - `eslint-plugin-import` to `^2.18.2`
  - `eslint-plugin-jsx-a11y` to `^6.2.3`
  - `eslint-plugin-react` to `^7.16.0`
  - `jest` to `^24.9.0`
  - `stylelint` to `^11.0.0`
  - `stylelint-config-standard` to `^19.0.0`
  - `stylelint-declaration-strict-value` to `^1.1.6`
  - `stylelint-order` to `^3.1.1`
  - `stylelint-scss` to `^3.11.1`

## 2.0.0-beta.3

- Upgraded `stylelint` peerDependency to `^10.1.0`

## 2.0.0-beta.2

### Fixed

- Disabled `no-descending-specificity` rule

## 2.0.0-beta.1

### Changed

- Upgraded `stylelint` peerDependency to `^9.1.1`
- Upgraded dependencies:
  - `stylelint-config-standard` to `18.1.0`
  - `stylelint-order` to `^0.8.1`
  - `stylelint-scss` to `^2.4.0`

## 1.0.1

### Fixed

- Relaxed semver range for `stylelint` peer dependency from `~8.0.0` to `^8.0.0`
- Upgraded `stylelint-scss` from `1.5.1` to `^2.1.0`
- Upgraded `stylelint-order` from `0.6.0` to `"^0.7.0`

## 1.0.0

### Added

- Flex and grid rules to `order/order` rule
- Added `selector-max-type` as warning (for now) to prevent interference between stylesheets
- Allow `@else` and `@else if` SCSS rules to be on same line as `@if` closing bracket
- Styleguide!

### Changed

- `selector-no-id` rules replaced by functionally identical `selector-max-id`
- Updated dependencies and peerDependencies:
  - `stylelint` to `8.0.0`
  - `stylelint-scss` to `1.5.1`
  - `stylelint-order` to `0.6.0`
  - `stylelint-declaration-strict-value` to `1.0.4`

## 0.1.5

### Fixed

- Fixed links in messages for `selector-class-pattern` and `scss/at-mixin-pattern`

## 0.1.4

### Added

- Added tests
- Added message to `selector-class-pattern` and `scss/at-mixin-pattern`

### Changed

- Upgraded `stylelint-order` and `stylelint-scss` to fix downstream bugs

## 0.1.3

### Added

- `at-rule-no-vendor-prefix`, `media-feature-name-no-vendor-prefix`, `property-no-vendor-prefix`, `selector-no-vendor-prefix`, `value-no-vendor-prefix` to encourage Autoprefixer usage
- `string-quotes`, `selector-attribute-quotes`, `font-family-name-quotes` to standardise string usage
- `unspecified: 'bottomAlphabetical'` to `order/properties-order` rule

*

## 0.1.2

### Changed

- `scss/at-mixin-pattern` changed to include some valid edge cases

### Fixed

- Regex for `scss/at-function-pattern`, `scss/at-mixin-pattern`, `scss/dollar-variable-pattern`, and `scss/percent-placeholder-pattern` now works as intended

## 0.1.1

### Changed

- `scss/at-function-pattern`, `scss/at-mixin-pattern`, `scss/dollar-variable-pattern`, and `scss/percent-placeholder-pattern` updated to use the same kebab case regex as class names

### Removed

- `scss/operator-no-newline-before` as it clashed with `scss/operator-no-newline-after`

## 0.1.0 - Initial config

### Added

- Initial config based on [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
