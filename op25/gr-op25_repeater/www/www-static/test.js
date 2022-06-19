const { spawn } = require('child_process');

const childPython = spawn('python', ['shutdown.py']);

childPython.stdout.on('data', (data) => {
    console.log(stdout: ${data});
});
