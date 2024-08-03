const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = [line];
  rl.close();
});

const wordReverse = (w) => {
  if (w.toUpperCase() === w) {
    return w.toLowerCase();
  } else {
    return w.toUpperCase();
  }
};

rl.on("close", () => {
  const [word] = input;
  const wordList = word.split("");

  const answer = wordList.map((w) => wordReverse(w)).join("");
  console.log(answer);
});
