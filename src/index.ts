import { getInput, setFailed, setOutput } from '@actions/core'
import { Octokit } from '@octokit/rest'
import { context } from '@actions/github'

async function run() {
  try {
    const token = getInput('token')
    const octokit = new Octokit({ auth: `token ${token}` })
    const { owner, repo } = context.repo
    const body = getInput('body')

    const response = await octokit.repos.createCommitComment({
      owner,
      repo,
      commit_sha: context.sha,
      body,
    })
    const comment_id = response.data.id

    setOutput('comment_id', comment_id)
  } catch (error: any) {
    setFailed(error.message)
  }
}

run()
