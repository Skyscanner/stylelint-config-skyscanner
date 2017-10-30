const stylelint = require('stylelint');
const config = require('.');


const validCss = (
  `$kebab-case-variable: 3rem;

@mixin kebab-case-mixin {
  @content;
}

@mixin _kebab-case-mixin {
  @content;
}

@mixin kebab-case-mixin__kebab-case-element {
  @content;
}

@mixin kebab-case-mixin--kebab-case-modifier {
  @content;
}

@mixin kebab-case-mixin__kebab-case-element--kebab-case-modifier {
  @content;
}

@mixin kebab-case-mixin-($x) {
  @content;
}

@mixin kebab-case-mixin--($x) {
  @content;
}

.PascalCaseBlock {
  display: block;

  &--camelCaseModifier {
    display: block;
  }

  &__camelCaseElement {
    display: block;

    &--camelCaseModifier {
      display: block;
    }

    &--kebab-case-modifier {
      display: block;
    }
  }

  &--kebab-case-modifier {
    display: block;
  }

  &__kebab-case-element {
    display: block;

    &--camelCaseModifier {
      display: block;
    }

    &--kebab-case-modifier {
      display: block;
    }
  }
}

.kebab-case-block {
  display: block;

  &--camelCaseModifier {
    display: block;
  }

  &__camelCaseElement {
    display: block;

    &--camelCaseModifier {
      display: block;
    }

    &--kebab-case-modifier {
      display: block;
    }
  }

  &--kebab-case-modifier {
    display: block;
  }

  &__kebab-case-element {
    display: block;

    &--camelCaseModifier {
      display: block;
    }

    &--kebab-case-modifier {
      display: block;
    }
  }
}

%kebab-case-placeholder {
  display: block;
}

.NoLeadingZero {
  padding: .5em;
}

.OrderCheck {
  @extend kebab-case-placeholder;

  position: static;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  float: left;
  clear: left;
  display: inline;
  z-index: 1;
  width: 4rem;
  min-width: 1rem;
  max-width: 1rem;
  height: 1rem;
  min-height: 1rem;
  max-height: 1rem;
  margin: 1rem;
  padding: 1rem;
  color: transparent;
  fill: transparent;
  stroke: transparent;

  @include kebab-case-mixin;

  @include kebab-case-mixin {
    display: block;
  }
}

.AtRules {
  @if $display == 'block' {
    display: 'block';
  } @else if $display == 'inline' {
    display: 'inline';
  } @else {
    display: 'inline-block';
  }
}
`);

describe('flags no warnings with valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      config,
      code: validCss,
    });
  });

  it('did not error', () => result.then(data => (
    expect(data.errored).toBeFalsy()
  )));

  it('raised no warnings', () => result.then(data => (
    expect(data.results[0].warnings.length).toBe(0)
  )));
});

const invalidSelectorNoIdCSS = (
  `#invalid-id {
  display: block;
}
`);

describe('flags selector-max-id', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidSelectorNoIdCSS,
      config,
    });
  });

  it('did error', () => result.then(data => (
    expect(data.errored).toBeTruthy()
  )));

  it('raised one warning', () => result.then(data => (
    expect(data.results[0].warnings.length).toBe(1)
  )));

  it('raised correct rule', () => result.then(data => (
    expect(data.results[0].warnings[0].rule).toBe('selector-max-id')
  )));
});

const invalidNumberLeadingZoCSS = (
  `.Block {
  height: 0.5em;
}
`);

describe('flags number-leading-zero', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidNumberLeadingZoCSS,
      config,
    });
  });

  it('did error', () => result.then(data => (
    expect(data.errored).toBeTruthy()
  )));

  it('raised one warning', () => result.then(data => (
    expect(data.results[0].warnings.length).toBe(1)
  )));

  it('raised correct rule', () => result.then(data => (
    expect(data.results[0].warnings[0].rule).toBe('number-leading-zero')
  )));
});

const invalidPatternCSS = (
  `$DollarVariable: 1rem;

%PlaceHolder {
  display: block;
}

@mixin Mixin_Mixin {
  @content;
}

.class_class {
  display: block;
}

.class___class {
  display: block;
}

.Class-class {
  display: block;
}

.Class---class {
  display: block;
}

.0class {
  display: block;
}
`);

describe('flags pattern errors', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidPatternCSS,
      config,
    });
  });

  it('did error', () => result.then(data => (
    expect(data.errored).toBeTruthy()
  )));

  it('raised correct number of warnings', () => result.then(data => (
    expect(data.results[0].warnings.length).toBe(8)
  )));

  it('raised correct rules', () => result.then(data => (
    expect(data.results[0].warnings).toEqual([
      expect.objectContaining({ rule: 'selector-class-pattern' }),
      expect.objectContaining({ rule: 'selector-class-pattern' }),
      expect.objectContaining({ rule: 'selector-class-pattern' }),
      expect.objectContaining({ rule: 'selector-class-pattern' }),
      expect.objectContaining({ rule: 'selector-class-pattern' }),
      expect.objectContaining({ rule: 'scss/at-mixin-pattern' }),
      expect.objectContaining({ rule: 'scss/dollar-variable-pattern' }),
      expect.objectContaining({ rule: 'scss/percent-placeholder-pattern' }),
    ])
  )));

  it('produced correct message', () => result.then(data => (
    expect(data.results[0].warnings).toEqual([
      expect.objectContaining({ text: 'Expect class selector to conform to BEM, see https://github.com/Skyscanner/stylelint-config-skyscanner#class-selector-pattern for pattern (selector-class-pattern)' }),
      expect.objectContaining({ text: 'Expect class selector to conform to BEM, see https://github.com/Skyscanner/stylelint-config-skyscanner#class-selector-pattern for pattern (selector-class-pattern)' }),
      expect.objectContaining({ text: 'Expect class selector to conform to BEM, see https://github.com/Skyscanner/stylelint-config-skyscanner#class-selector-pattern for pattern (selector-class-pattern)' }),
      expect.objectContaining({ text: 'Expect class selector to conform to BEM, see https://github.com/Skyscanner/stylelint-config-skyscanner#class-selector-pattern for pattern (selector-class-pattern)' }),
      expect.objectContaining({ text: 'Expect class selector to conform to BEM, see https://github.com/Skyscanner/stylelint-config-skyscanner#class-selector-pattern for pattern (selector-class-pattern)' }),
      expect.objectContaining({ text: 'Expected mixin to be kebab-case with BEM variants allowed, see https://github.com/Skyscanner/stylelint-config-skyscanner#mixin-pattern for pattern (scss/at-mixin-pattern)' }),
      expect.objectContaining({ text: 'Expected $ variable to be kebab-case (scss/dollar-variable-pattern)' }),
      expect.objectContaining({ text: 'Expected %-placeholder to be kebab-case (scss/percent-placeholder-pattern)' }),
    ])
  )));
});
const invalidAtRules = (
  `.AtRules {
  @if $display == 'block' {
    display: 'block';
  }

  @else if $display == 'inline' {
    display: 'inline';
  }
  @else {
    display: 'inline-block';
  }
}
`);

describe('at rules errors', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidAtRules,
      config,
    });
  });

  it('did error', () => result.then(data => (
    expect(data.errored).toBeTruthy()
  )));

  it('raised correct number of warnings', () => result.then(data => (
    expect(data.results[0].warnings.length).toBe(5)
  )));

  it('raised correct rules', () => result.then(data => (
    expect(data.results[0].warnings).toEqual([
      expect.objectContaining({ rule: 'scss/at-else-closing-brace-newline-after' }),
      expect.objectContaining({ rule: 'scss/at-else-closing-brace-space-after' }),
      expect.objectContaining({ rule: 'scss/at-else-empty-line-before' }),
      expect.objectContaining({ rule: 'scss/at-if-closing-brace-newline-after' }),
      expect.objectContaining({ rule: 'scss/at-if-closing-brace-space-after' }),
    ])
  )));
});
