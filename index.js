import signale from 'signale';
import {exec} from 'child_process';

const logger = signale;

logger.start("--------------- Script start ---------------")

let month = 1
let day = 1
let year = 2020

setInterval(commit, 2000)

function commit(){
    if(day === 31) {
        day = 1
        month++
    } else {
        day++
    }
    if(month === 13){
        year++;
        month = 1
    }
    if(year === 2023){
        process.exit(0)
    }
    day % Math.floor(Math.random() * 3) === 0 ?
    exec(`git commit --allow-empty --date '${year}-${month}-${day}' -m 'New' && git push`, (error, stdout, stderr) => {
        if (error) {
            logger.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            logger.error(`stderr: ${stderr}`);
            return;
        }
        logger.awaiting(`\nstdout: ${stdout}`);
        logger.complete(`Commited to ${year}-${month}-${day}`)
    }) : logger.debug(`Didn't commit on ${year}-${month}-${day}`)
}




