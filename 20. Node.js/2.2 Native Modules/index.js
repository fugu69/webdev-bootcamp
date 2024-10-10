const fs = require("fs");

fs.writeFile("message.txt", "Hello from Node.js!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

const { open } = require('node:fs/promises');

(async () => {
  const file = await open('./message.txt');

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();