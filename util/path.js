const path = require('path');

// process.mainModule.filename

// Process is a global scope variable
// mainModule is looking for a which module is responsible for main work or something like it work
// filename is fetching which file is responsible for starting the script
module.exports = path.dirname(process.mainModule.filename);