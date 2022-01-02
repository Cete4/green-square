import signale from 'signale';
import {exec} from 'child_process';

const logger = signale;

logger.start("--------------- Script start ---------------")
for(let month = 1; month < 13; month++){
    for(let day = 1; day < 28; day++){

        exec(`git add . && git commit --date '2022-${month}-${day}' -m 'commit' && git push`, (error, stdout, stderr) => {
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
    }
}

