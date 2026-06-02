const fs = require('fs');
let text = fs.readFileSync('index.html', 'utf8');
text = text.replace(/"dist\//g, '"assets/');
fs.writeFileSync('index.html', text);
console.log('Replaced all "dist/" with "assets/" in index.html');
