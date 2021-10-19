## Releasing

This package can be published by members of the Koala team and authorised Skyscanner contributors.

### Stable release

To do this:
- Add a title with the new version for changes in the `CHANGELOG.md` and copy the changes to be published from the `UNRELEASED.md` file to the new section.
- Stage those changes (`git add CHANGELOG.md`).
- Run `npm version -f major|minor|patch`. This will create a tagged commit changing the version in `package.json`, and the changes in `CHANGELOG.md`.
- Run `npm publish`.
- Run `git push && git push --tags`.

### Alpha/Beta release

Want to test your changes before making it stable and available to the general team? Release an alpha or a beta!

To do this on your BRANCH or if already merged to main:
- Run `npm version <provide a custom version with the alpha or beta name e.g. 10.0.0-beta.1>`. This will create a new version in the `package.json` file and create a tagged commit (you don't need to commit this).
- Run `npm publish --tag alpha|beta` - use the correct tag depending on if you want to publish and alpha or a beta.
- Test your new release!