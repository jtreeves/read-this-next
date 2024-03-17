# Contributing

## Orientation

-   Peruse the [README](../README.md) at the root of this repo to familiarize yourself with the project, including its purpose and file structure
-   Browse the [Issues](/issues) tab to find open tasks requiring work
-   View the project's [Trello board](https://trello.com/b/orTnMzfO/read-this-next) to find tasks ready to be completed
-   By participating in this project, you agree to abide by the terms specified in its [Code of Conduct](CODE_OF_CONDUCT.md)
-   By contributing to this project, you agree that your contributions will be licensed based on terms specified in the [LICENSE](LICENSE.md)

## Set Up

### Prerequisites

-   Node (v20+)
-   NPM (v10+)

### Installation

1.  Fork and clone the repository
2.  Install all dependencies:

```bash
npm i
```

3.  Configure your environment by storing your local variables in an `.env` file at the root of the repo

Example `.env` file:

```
PLAYWRIGHT_TEST_BASE_URL=http://localhost:3000
```

## Issues

### Reporting Bugs

-   Use the Issues tab to report any bugs
-   Check if the issue has already been reported before creating a new one
-   Clearly describe the steps to reproduce the bug, and provide any relevant information about your environment
-   Include screenshots or code snippets if they can help to illustrate the issue
-   Use the `bug` issue tag

### Feature Requests

-   Use the Issues tab to suggest new features or improvements
-   Provide detailed information about the proposed feature and its use cases
-   Be open to feedback and discussion from the community
-   Use the `enhancement` issue tag (and any other relevant existing tags)

### Discussions

-   Use the Issues tab to discuss anything else related to the project with the community at large
-   Use the `question` issue tag (any any other relevant existing tags)

## Pull Requests

### Branching

-   Write any new code in a branch off `main`
-   Branch names should be short descriptions of the new changes, in kebab-case, optionally prefixed with `feature/` or `bug/` (e.g., `dashboard-search`)
-   Branches should be short-lived, include only code affecting the new functionality, and only touch the files relevant to that new functionality

### Committing

This project uses Husky to enforce code quality during the commit process. It will run the following checks on each commit:

-   Message must begin with a capital letter and must not include periods (e.g., `Add search to dashboard`)
-   All TypeScript files will be linted and must not contain any errors
-   All files will have formatting applied to them

### Opening a Request

-   Once all work is completed, open a PR
-   Provide a descriptive title for the PR
-   Fill out all fields in the [PR template](PULL_REQUEST_TEMPLATE.md), which includes:
    -   Listing all major changes
    -   Linking to any relevant Trello cards
    -   Ensuring all tests pass
    -   Verifying that all functionality works

### Automated Checks

Whenever a pull request is opened, the `Pre-Merge Checks` GitHub Action will be fired. It will run the following checks:

-   No TypeScript files can contain any warnings (Husky's pre-commit check blocks errors; this check blocks warnings, too)
-   All unit tests must pass
-   The package must be able to be built

Best practice is to catch any errors that may be raised by these checks before a PR is opened. The following NPM script will run all necessary checks and catch any potential errors, so it should be executed locally before opening a PR:

```bash
npm run check
```

### Code Review

Currently, no approvals are required in order to merge, but any PRs should go through a standard code review process, and you should proactively request reviews from relevant contributors. At least one approval should be obtained, ideally from the project's owner (Jackson Reeves), prior to merging. The following issues are likely to be flagged during code review:

-   Deviations from the [style guide](STYLE_GUIDE.md)
-   New functionality lacking new tests or lacking sufficient coverage for edge cases

Be responsive to feedback and make any requested changes promptly.

### Merging

-   Once the pull request has been approved, perform a squash merge to merge it into the `main` branch, thus closing the PR and deleting the branch
-   Merging into `main` will automatically trigger a deployment via Vercel
-   After the code has been deployed, the `Post-Deploy Checks` GitHub Action will be fired to run e2e tests
-   Any failures with the e2e tests will result in a newly created issue, which should be resolved as soon as possible

## Resources

-   [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
-   [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
-   [GitHub Help](https://help.github.com)
