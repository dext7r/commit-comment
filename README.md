![deploy](https://github.com/dext7r/commit-comment/actions/workflows/deploy.yml/badge.svg)
![stars](https://badgen.net/github/stars/dext7r/commit-comment)
![forks](https://badgen.net/github/forks/dext7r/commit-comment)
![HitCount](http://hits.dwyl.com/dext7r/commit-comment.svg)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=dext7r_commit-comment&metric=alert_status)](https://sonarcloud.io/dashboard?id=dext7r_commit-comment)
[![Technical Debt](https://sonarcloud.io/api/project_badges/quality_gate?project=dext7r_commit-comment)](https://sonarcloud.io/dashboard?id=dext7r_commit-comment)
[![Bugs](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=dext7r_commit-comment)

# Commit Comment GitHub Action

This GitHub Action allows you to automatically create a commit comment on a pull request.

## Usage

1. Add a step in your workflow YAML file to use this action:

   ```yaml
   - name: Commit Comment
     uses: dext7r/commit-comment@v1.0.0
     with:
       token: ${{ secrets.GITHUB_TOKEN }}
       body: 'This is a test comment.'
   ```

2. Configure the `token` input with a secret GitHub API token with the necessary permissions.

3. Specify the `body` input with the content of the comment you want to create.

## Inputs

- `token` (required): Secret GitHub API token to use for making API requests.
- `body` (required): Comment content.

## Outputs

- `comment_id`: The ID of the comment that was created.

## Example

```yaml
name: Create Comment
on:
  pull_request:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest

    steps:
      - name: Commit Comment
        uses: dext7r/commit-comment@v1.0.0
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          body: 'Hello from GitHub Action!'
```

## Versioning

This action follows semantic versioning. See [releases](https://github.com/h7ml/commit-comment/releases) for more information about each version.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
