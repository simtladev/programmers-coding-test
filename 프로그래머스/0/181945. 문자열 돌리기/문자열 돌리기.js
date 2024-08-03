const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
  rl.close();
}).on("close", function () {
  const str = input[0];

  [...str].forEach((a) => console.log(a));
});
