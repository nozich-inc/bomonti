import * as core from '@actions/core';
import { exec } from '@actions/exec';
import { context } from '@actions/github';

const ci = '/home/nozich/ci';
const branchs = { develop: 'test', master: 'prod' };

const run = async () => {
  try {
    const {
      payload: {
        repository,
        head_commit: { id }
      },
      ref
    } = context;

    const branch = branchs[ref.replace('refs/heads/', '')];
    const name = `${repository.name}-${branch}`;
    const commitId = id.substr(0, 7);
    const random = Math.random().toString(36).slice(2);
    const workDir = `${branch}-${commitId}-${random}`;
    const workPath = `${ci}/${repository.name}/${workDir}`;

    // Next build dir exists check
    await exec('cat ./.next/BUILD_ID');

    await exec(`cp ${ci}/${repository.name}/${branch}.env ./.env`);
    await exec(`pwd`);
    await exec(`ls -lash`);
    await exec(`mkdir -p ${workPath}`);
    await exec(`cp -R . ${workPath}`);
    await exec(`ls -lash ${workPath}`);

    await exec(`docker rm -f ${name}`).catch(() => {
      core.warning(`Container ${name} not found.`);
    });

    await exec(
      `docker-compose -p ${name} --project-directory ${workPath} up -d`
    );

    await exec(
      `find ${ci}/${repository.name}/ -type d -name "${branch}-*" -not -name "${workDir}"`
    );

    await exec(
      `find ${ci}/${repository.name}/ -type d -name "${branch}-*" -not -name "${workDir}" -exec rm -rf {} \;`
    ).catch((error) => {
      core.warning(error.message);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
