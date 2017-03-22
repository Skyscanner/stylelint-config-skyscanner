# Change Log
## [0.1.2]
### Changed
- `scss/at-mixin-pattern` changed to include some valid edge cases 

### Fixed
- Regex for `scss/at-function-pattern`, `scss/at-mixin-pattern`, `scss/dollar-variable-pattern`, and `scss/percent-placeholder-pattern` now works as intended

## [0.1.1]
### Changed
- `scss/at-function-pattern`, `scss/at-mixin-pattern`, `scss/dollar-variable-pattern`, and `scss/percent-placeholder-pattern` updated to use the same kebab case regex as class names 
### Removed 
- `scss/operator-no-newline-before` as it clashed with `scss/operator-no-newline-after`

## [0.1.0] - Initial config
### Added
- Initial config based on [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard)
