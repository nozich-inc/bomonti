const spawn = require('child_process').spawn;

const argv = process.argv.slice(2);
const run = spawn(argv[0], [argv[1]]);

run.stdout.on('data', (e) => console.log(e.toString()));
run.stderr.on('data', (e) => console.log(e.toString()));

run.on('exit', (code) => console.log(`Child process exited with code ${code}`));
