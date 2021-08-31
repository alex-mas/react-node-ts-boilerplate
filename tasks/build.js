const fs = require('fs-extra');

fs.copy('./src/client/index.html', './bin/client/index.html');
fs.copy('./src/client/resources','./bin/client/resources');

