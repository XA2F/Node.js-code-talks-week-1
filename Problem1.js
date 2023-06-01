//Coding Problem 1

//Here, it'll import these functions from the fs module so we can read and write to them.
const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");

////ReadFileSync will just read those files. I was able to use this closely in the second problem we had for our introduction to Node.js.

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//with our console.log we can see the files being outputted, in terms of seeing the data that they contain
console.log(first, second);

//here we will just have those two files combined into a new file in our folder because it is overwriting the file with the combined contents.
writeFileSync(
  "./content/result-syncBuiltinESMExports.txt",
  `Here is the result : ${first}, ${second}`
);

//here the 'a' if I am understanding this correctly would stand for append, so it would be telling it to append the combined content
writeFileSync(
  "./content/result-syncBuiltinESMExports.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
