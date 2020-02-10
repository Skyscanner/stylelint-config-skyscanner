# Contributing to stylelint-config-skyscanner

We're glad you want to make a contribution!

Fork this repository and send in a pull request when you're finished with your changes. Link any relevant issues in too.

Take note of the build status of your pull request, only builds that pass will be accepted. Please also keep to our conventions and style so we can keep this repository as clean as possible.

## Pre-commit hooks

This project contains some pre-commit hooks that will format automatically some files based on our guidelines.

When performing a commit, the modified files will be formatted and added to the commit. In case of not been able to fix any of the issues, the commit will be aborted the list of errors will be displayed in the console.

One of the steps is running a spellchecker for the markdown files. In case of some word requiring an exception, add it to [.spelling](.spelling) file.

## License

By contributing your code, you agree to license your contribution under the terms of the APLv2: [LICENSE](LICENSE.md)

All files are released with the Apache 2.0 license.

If you are adding a new file it should have a header like this:

```
/**
 * Copyright 2020 Skyscanner Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
```
