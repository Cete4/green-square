import signale from 'signale';
import {exec} from 'child_process';

const logger = signale;

logger.start("--------------- Script start ---------------")
for(let month = 1; month < 2; month++){
    for(let day = 1; day < 28; day++){

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
        setTimeout(() => {
            logger.awaiting("Waiting for calls to complete");
        }, 5000)
    }
}

