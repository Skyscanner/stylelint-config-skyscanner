# stylelint-config-skyscanner

Skyscanner's stylelint config.

This stylelint config is based on [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) with Skyscanner specific additions and is meant to be used with Backpack and `backpack-react-scripts`. Rules encourage developers to leverage the Backpack design system and to outsource development dependencies to `backpack-react-scripts`.

## Installation

```bash
npm install --save-dev stylelint-config-skyscanner
```

## Usage

Add `"extends": "stylelint-config-skyscanner"` to your `.stylelintrc`.

## Styleguide

### Prefixes
Don't prefix your CSS, write standards compliant code and let [`autoprefixer`](https://github.com/postcss/autoprefixer) automatically make it cross-browser compatible. Even better, `autoprefixer` and a config aligned to current browser usage comes bundled with `backpack-react-scripts` so you don't have to worry about it.
Rules: `value-no-vendor-prefix`, `at-rule-no-vendor-prefix`, `media-feature-name-no-vendor-prefix`, `property-no-vendor-prefix`, `selector-no-vendor-prefix`

### Selectors
CSS is global by default. Whenever you write a CSS selector and expose it on a page, it's immediately in competition with every other selector on that page. This means that every selector has the potential to have unintended side effects by targeting unwanted elements or clashing with other selectors already defined.

Use CSS modules to avoid conflicts between your selectors and any others on the page. CSS module supports comes with `backpack-react-scripts`.

#### Universal
Avoid using top level universal selectors (`*`). You will most likely be sharing the page with other components, and it will cause interference.

#### Type
Never use top level type selectors. You will most likely be sharing the page with other components, and it will cause interference.
Rule: `selector-max-type`

#### Id
Never use ids. The high specificity of ids can cause unexpected interactions between styles. Leave ids only for JavaScript bindings (eg. React root elements).
Rule: `selector-max-id`

#### Class
Class names should be in the [Block Element Modifier​ (BEM)](http://getbem.com/introduction/) style. BEM makes CSS easier to maintain and reason about as it makes clear what the connection between styles and HTML is. It also encourages a compositional approach to writing modifiers. 

Rule: `selector-class-pattern`
##### Patterns
 - PascalCase
```([A-Z][a-zA-Z0-9]+)```
 - kebab-case
```([a-z][a-z0-9]*(-[a-z0-9]+)*)```
 - camelCase
```([a-z]+([A-Z][a-z0-9]+)*)```

###### Class selector pattern:
```
`(${pascalCase}|${kebabCase})` + // block
`(__(${camelCase}|${kebabCase}))?` + // element
`(--(${camelCase}|${kebabCase}))?$`, // modifier
```

###### Mixin pattern:
```
_?${kebabCase}(__${kebabCase})?(--${kebabCase}?)?-?
```

#### Compound selectors
Do not use more than two levels of compound selectors. SCSS nesting can make the structure of CSS harder to understand and change. Targeting specific elements can be done using BEM and CSS modules without requiring nesting. Leave nesting for situation where parent element changes affect their children (eg. hovering a button changes the colour of an icon inside it).

Rule: `selector-max-compound-selectors`

#### Important
Do not use `!important`. It can cause unforeseen issues down the line as it breaks the cascading model of CSS.  If you find yourself in a situation where `!important` seems like a solution, it is probably a code smell. Try and refactor your code to avoid it instead.

Rule: `declaration-no-important`

### Order
Keep all styles pertaining to an element in one place. Media queries, RTL styles, pseudo-classes, and pseudo-elements should all live inside the SCSS class that targets the element. This way all the element's behaviour is easily understood by looking in one place. The order of rules is predicated on how they are likely to be overwritten.

#### Properties
The order of properties is in accordance to how much they affect the element. Consistent ordering and grouping is very important to quickly find properties, especially related properties like those that affect flex or grid behaviour.

Put properties above mixins, this will help you avoid inadvertently overriding properties from mixins and make you have to explicitly disable the ordering rule if you have to do it. Overriding too many rules from a mixin should make you question if that mixin is too specific or if it needs to be included. Avoid overriding Backpack mixins for a consistent UI across components.

#### Mixins
Put mixins without a body above mixins with a body. The rules inside mixins with bodies may overwrite those included via bodyless mixins.

#### Media rules
Nest `@media` rules inside the block they modify to keep all styles that affect an element together. Keep `@media` rules at the bottom of the page as inside them all other rules may be overwritten. 

Use mixins whenever a media rule repeats itself for easier maintenance. Use the [media query mixins in Backpack](http://backpack.prod.aws.skyscnr.com/sassdoc/#breakpoints) whenever possible.
 
### Quotes
Only use quotes where required: data URIs, import statements, and font names that contain white space, digits or punctuation characters other than hyphens. Use single quotes to align to the preferred usage in JavaScript ([ESLint config](https://github.com/Skyscanner/eslint-config-skyscanner/)).
Rules: `string-quotes`, `selector-attribute-quotes`, `font-family-name-quotes`

### Units and colours
Avoid using `px` values, use `rem` for better scaling.

Avoid declaring your own `font-size` and `line-height`,  use [`bpk-text-<size>` mixins from Backpack](http://backpack.prod.aws.skyscnr.com/sassdoc/#typography) instead.

Avoid declaring your own colours, use [`bpk-color-<color>` SCSS variables from Backpack](http://backpack.prod.aws.skyscnr.com/components/bonds/colors) instead.
 
Rules: `unit-blacklist`, `scale-unlimited/declaration-strict-value`

## License

[Apache License 2.0](LICENSE.md)
