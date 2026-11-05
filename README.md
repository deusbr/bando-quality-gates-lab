# Arithmetic quality gate laboratory

This public laboratory uses invented arithmetic examples to demonstrate a required CI check. It contains no production data, credentials, or external services.

Run the four tests with Node.js 20 or newer:

```sh
node --test
```

The `quality-gates` workflow uses only Node's built-in test runner. Its checkout action is pinned to a full commit, and its workflow token has read-only repository contents access.

The protected `main` branch requires the GitHub Actions `quality-gates` check to pass against an up-to-date branch. The requirement also applies to repository administrators. Human review approval is not required for this fictional lab.

A canary pull request deliberately changes addition to subtraction so the tests fail. The same branch is then corrected to demonstrate that the required check permits the fixed result to become mergeable. The pull request remains open for inspection.

## Public CodeQL demonstration

This small fictional laboratory is released under the MIT license in `LICENSE`. That license applies only to this repository's disposable arithmetic example and its operational files. It grants no license to any private repository or product.

The `codeql-public` workflow analyzes only this public JavaScript example. It is restricted to this repository name and public visibility, pins the official CodeQL action to a full commit, and requests one thread and 3072 MiB on the hosted runner. The workflow has a 15-minute timeout. It uploads analysis results to this public repository's code scanning interface; it does not call a paid AI service.

The existing `quality-gates` branch requirement remains in force. CodeQL is a separate demonstrated analysis check; a passing analysis does not replace branch protection or the arithmetic tests.
