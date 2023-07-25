## Releasing

This package can be published by members of the Koala team and authorised Skyscanner contributors.

### Stable release

Stable releases are now automated.

After a pull request is merged an authorised member next publishes a release via the [GitHub Release UI](https://github.com/Skyscanner/eslint-config-skyscanner/releases).

This will generate an email confirmation. Once this has been confirmed the tag and release will be generated.

### Alpha/Beta release

Want to test your changes before making it stable and available to the general team? Release an alpha or a beta!

To do this on your BRANCH or if already merged to main:
- Run `npm version <provide a custom version with the alpha or beta name e.g. 10.0.0-beta.1>`. This will create a new version in the `package.json` file and create a tagged commit (you don't need to commit this).
- Run `npm publish --registry=https://registry.npmjs.org/ --tag alpha|beta` - use the correct tag depending on if you want to publish and alpha or a beta.
- Test your new release!
