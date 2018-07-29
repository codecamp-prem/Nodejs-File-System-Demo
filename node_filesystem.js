//file: node_filesystem.js
//Make sure we got a filename on command-line
if(process.argv.length < 2){
  console.log('Usage: node '+process.argv[1]+ 'FILENAME');
  process.exit(1);
}

// Read the file and print its content
const fs = require('fs');
fs.readFile('filesystem_in_node.txt', 'utf-8', (err, data)=>{
  console.log(data);
})
