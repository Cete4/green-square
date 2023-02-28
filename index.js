import signale from 'signale';
import {exec} from 'child_process';

const logger = signale;

logger.start("--------------- Script start ---------------")

exec("dir", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

logger.success("--------------- Script end ---------------")