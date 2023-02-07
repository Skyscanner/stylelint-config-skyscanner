# UNRELEASED

_If `@skyscanner/eslint-config-skyscanner` has a major version change then `@skyscanner/stylelint-config-skyscanner` should also have a major version change, as explained in [the docs](./docs/eslint-as-dependency.md)_

## 7.0.0
### Updated

- Bump @skyscanner/eslint-config-skyscanner from 12.6.1 to 13.1.0
- Bump stylelint-config-prettier from 9.0.3 to 9.0.4
- Bump json5 from 1.0.1 to 1.0.2 (security bump)

As `@skyscanner/eslint-config-skyscanner` is shipped as `dependency` then this may cause JavaScript linting changes in your project as a side effect if you have no already updated. If that is the case it is the recommendation to also update `@skyscanner/eslint-config-skyscanner` and follow its [release notes](https://github.com/Skyscanner/eslint-config-skyscanner/releases/tag/v13.0.0).
