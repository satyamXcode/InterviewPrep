const fs = require("fs");
fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) throw err;
  console.log(data1);  // Log file1 content after it's read
  
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) throw err;
    console.log(data2);  // Log file2 content after it's read
    
    fs.writeFile('output.txt', data1 + data2, 'utf8', (err) => {
      if (err) throw err;
      console.log('Done!');  // Log when writing is complete
    });
  });
});