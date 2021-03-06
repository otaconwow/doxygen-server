const fs = require('fs');
const path = require('path');
const doxygenBinPath = path.join(process.cwd(), 'doxygen/bin/doxygen');
var mkdirp = require('mkdirp');

const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;

module.exports = function(callback){
    console.log("..........doxing................");
    fs.chmodSync(doxygenBinPath, 0777);

    execSync(doxygenBinPath);
    console.log("....Process ENDED");
    callback();
    /*
    const doxy = spawn(doxygenBinPath);

    doxy.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    doxy.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    doxy.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      console.log("...............CALLING CALLBACK...............");
      callback();
    });
    */
}
