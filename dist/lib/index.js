"use strict";
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
var import_core = require("@actions/core");
var import_rest = require("@octokit/rest");
var import_github = require("@actions/github");
function run() {
  return __async(this, null, function* () {
    try {
      const token = (0, import_core.getInput)("token");
      const octokit = new import_rest.Octokit({ auth: `token ${token}` });
      const { owner, repo } = import_github.context.repo;
      const body = (0, import_core.getInput)("body");
      const response = yield octokit.repos.createCommitComment({
        owner,
        repo,
        commit_sha: import_github.context.sha,
        body
      });
      const comment_id = response.data.id;
      (0, import_core.setOutput)("comment_id", comment_id);
    } catch (error) {
      (0, import_core.setFailed)(error.message);
    }
  });
}
run().catch((error) => {
  (0, import_core.setFailed)(error.message);
});
