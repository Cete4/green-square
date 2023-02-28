import signale from 'signale';
import {exec} from 'child_process';

const logger = signale;

logger.start("--------------- Script start ---------------")

exec(`git add . && git commit --date '2022-03-06' -m 'commit' && git push`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    logger.complete(`\nstdout: ${stdout}`);
});

