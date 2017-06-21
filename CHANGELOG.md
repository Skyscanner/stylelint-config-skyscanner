# Change Log
## 0.2.0
### Added
- Flex and grid rules to `order/order` rule

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
