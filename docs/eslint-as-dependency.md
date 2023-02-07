# ESLint as a dependency

`@skyscanner/eslint-config-skyscanner` (ECS) is installed as a `dependency` rather than a `devDependency`.

This was done in https://github.com/Skyscanner/stylelint-config-skyscanner/pull/63.

ECS depends on Prettier. `@skyscanner/eslint-config-skyscanner` (SCS) also includes Prettier. If Prettier is installed at the top level of SCS then conflicts happen between it, Prettier, and Prettier within ECS.

Conflicts then happen when SCS and ECS are installed in the same consumer. This can lead to unexpected behaviours, with consumers being locked to unexpected versions of Prettier.

Instead SCS does not specify which version of Prettier it uses, and installs ECS as a main dependency, using ECS's version of Prettier as its own. SCS then ships with ECS bundled, allowing consumers to update to the latest of each and have a tree that is in sync.

The downside here is that **major versions of ECS mean a new major version of SCS must be released**, as consumers resolve nested dependencies based on it.

There is no perfect solution here, but the above is felt to be the most reasonable trade off.
