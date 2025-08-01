/*
 Copyright 2020 Skyscanner
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const pascalCase = '([A-Z][a-zA-Z0-9]+)'; // PascalCase
const kebabCase = '([a-z][a-z0-9]*(-[a-z0-9]+)*)'; // kebab-case
const camelCase = '([a-z0-9]+([A-Z][a-z0-9]+)*)'; // camelCase

const config = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-no-unsupported-browser-features',
    '@skyscanner/stylelint-plugin-backpack',
    'stylelint-scss',
    'stylelint-declaration-strict-value',
    'stylelint-order',
    'stylelint-prettier',
  ],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: ['css-when-else', 'flexbox', 'css-nesting', 'css3-cursors'],
        ignorePartialSupport: true,
        severity: 'warning',
      },
    ],
    // Declaring singular values of typography attributes (e.g. `font-weight`) is disallowed. Use a Backpack mixin that sets groups of attributes in sync with the overall design system
    // https://github.com/Skyscanner/stylelint-plugin-backpack/blob/3acae45c28a015bbdd250b447803da1ac2ed31e8/lib/rules/use-typography-styles/index.js
    'backpack/use-typography-styles': [
      true,
      {
        severity: 'warning',
      },
    ],

    // This rule is purely about code style and the impact of code churn turning this on outweighs our perceived benefit of enforcing it
    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
    'declaration-block-no-redundant-longhand-properties': null,

    // This suggests syntax that is not compatible with node-sass. It is blocked until we move our standard tooling to dart sass.
    // https://github.com/Skyscanner/backpack-react-scripts/blob/ccba8c3ae8b3cb178dd8ac4efa749328ede8928b/packages/react-scripts/package.json#L57
    // https://stylelint.io/user-guide/rules/media-feature-range-notation/
    'media-feature-range-notation': null,

    'selector-max-id': 0,
    'selector-max-type': [
      0,
      {
        ignore: ['compounded', 'descendant', 'child'],
        severity: 'warning',
      },
    ],
    'selector-max-compound-selectors': 2,
    'declaration-no-important': true,
    'unit-disallowed-list': [
      'px',
      {
        ignoreProperties: {
          px: ['margin-top', 'margin-bottom', '/^padding/', '/^border/'],
        },
      },
    ],
    'selector-class-pattern': [
      `^(${pascalCase}|${kebabCase})` + // block
        `(__(${camelCase}|${kebabCase}))?` + // element
        `(--(${camelCase}|${kebabCase}))?$`, // modifier
      {
        resolveNestedSelectors: true,
        message:
          'Expect class selector to conform to BEM, see https://github.com/Skyscanner/stylelint-config-skyscanner#class-selector-pattern for pattern (selector-class-pattern)',
      },
    ],
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'font-family-name-quotes': 'always-where-recommended',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': true,
    'scss/at-function-pattern': [
      `^${kebabCase}$`,
      {
        message:
          'Expected function to be kebab-case (scss/at-function-pattern)',
      },
    ],
    'scss/load-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-pattern': [
      `^_?${kebabCase}(__${kebabCase})?(--${kebabCase}?)?-?$`,
      {
        message:
          'Expected mixin to be kebab-case with BEM variants allowed, see https://github.com/Skyscanner/stylelint-config-skyscanner#mixin-pattern for pattern (scss/at-mixin-pattern)',
      },
    ],
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': [
      `^${kebabCase}$`,
      {
        message:
          'Expected $ variable to be kebab-case (scss/dollar-variable-pattern)',
      },
    ],
    'scss/percent-placeholder-pattern': [
      `^${kebabCase}$`,
      {
        message:
          'Expected %-placeholder to be kebab-case (scss/percent-placeholder-pattern)',
      },
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/load-partial-extension': 'never',
    'scale-unlimited/declaration-strict-value': [
      ['/color/', 'fill', 'stroke', 'font-size', 'line-height'],
      {
        ignoreKeywords: {
          '/color/': ['currentcolor', 'currentColor', 'transparent', 'inherit'],
          fill: ['currentcolor', 'currentColor', 'transparent', 'inherit'],
          stroke: ['currentcolor', 'currentColor', 'transparent', 'inherit'],
        },
        disableFix: true,
      },
    ],
    'order/order': [
      {
        type: 'at-rule',
        name: 'extend',
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: false,
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
    'order/properties-order': [
      [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'content',
        'float',
        'clear',
        'display',
        'visibility',
        'z-index',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'columns',
        'column-gap',
        'column-fill',
        'column-rule',
        'column-span',
        'column-count',
        'column-width',
        'grid',
        'grid-template',
        'grid-template-rows',
        'grid-template-columns',
        'grid-template-areas',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-gap',
        'grid-column-gap',
        'grid-row-gap',
        'justify-items',
        'grid-column',
        'grid-row',
        'grid-column-start',
        'grid-column-end',
        'grid-row-start',
        'grid-row-end',
        'grid-area',
        'justify-self',
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',
        'order',
        'align-self',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'transform',
        'transition',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-width',
        'border-top-width',
        'border-right-width',
        'border-bottom-width',
        'border-left-width',
        'border-style',
        'border-top-style',
        'border-right-style',
        'border-bottom-style',
        'border-left-style',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
        'outline',
        'outline-color',
        'outline-offset',
        'outline-style',
        'outline-width',
        'background',
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-size',
        'cursor',
        'color',
        'font',
        'font-family',
        'font-size',
        'font-smoothing',
        'font-style',
        'font-variant',
        'font-weight',
        'letter-spacing',
        'line-height',
        'list-style',
        'text-align',
        'text-decoration',
        'text-indent',
        'text-overflow',
        'text-rendering',
        'text-shadow',
        'text-transform',
        'text-wrap',
        'white-space',
        'word-spacing',
        'border-collapse',
        'border-spacing',
        'box-shadow',
        'caption-side',
        'cursor',
        'empty-cells',
        'opacity',
        'overflow',
        'overflow-x',
        'overflow-y',
        'quotes',
        'speak',
        'table-layout',
        'vertical-align',
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
  },
};

export default config;
