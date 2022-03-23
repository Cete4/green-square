import signale from 'signale';
import {exec} from 'child_process';

const logger = signale;

logger.start("--------------- Script start ---------------")

let month = 3
let day = 22


exec(`git add . && git commit --date '2022-${month}-${day}' -m 'commit' && git push`, (error, stdout, stderr) => {
    if (error) {
        logger.error(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        logger.error(`stderr: ${stderr}`);
        return;
    }
    logger.awaiting(`\nstdout: ${stdout}`);
    logger.complete(`Commited to 2022-${month}-${day}`)
});

