//Coding Problem 2
//here we are just going to import our functions from the fs module
const { readFile, writeFile } = require("fs");
//here I'm not sure what it's supposed to do but it would just print "start"
console.log("start");
//here we will read the content in the file, we have our function with parameters err and result, and our conditional if and err occurs it will log "err" otherwise it will return the contents of the file because the return is assigned to first.
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  console.log(results);
  //this step is a bit of the same as the last one. If an error occurs, it'll log in to the console. The contents of the file would then be stored in results, and results are assigned to the second variable.
  readFile("./content/second.txt", "utf8", (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = results;
    console.log(results);
    //here write-file will combine the combined contents of the files to the result file, and it'll print the message but if there's an error it'll follow the same errors and will be logged to the console.
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first},${second}`,
      (err, results) => {
        if (err) {
          {
            console.log(err);
            return;
          }
          console.log("done with the task");
        }
      }
    );
  });
});

console.log("starting next week");
