var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
import { getInput, setFailed, setOutput } from "@actions/core";
import { Octokit } from "@octokit/rest";
import { context } from "@actions/github";
function run() {
  return __async(this, null, function* () {
    try {
      const token = getInput("token");
      const octokit = new Octokit({ auth: `token ${token}` });
      const { owner, repo } = context.repo;
      const body = getInput("body");
      const response = yield octokit.repos.createCommitComment({
        owner,
        repo,
        commit_sha: context.sha,
        body
      });
      const comment_id = response.data.id;
      setOutput("comment_id", comment_id);
    } catch (error) {
      setFailed(error.message);
    }
  });
}
run().catch((error) => {
  setFailed(error.message);
});
