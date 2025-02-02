// import fs from "fs";
import { write } from "fs";
import fs from "fs/promises";
// readFile() - callback
// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// // readfileSnc() - synchronous
// const data = fs.readFileSync("./text.txt", "utf8");
// console.log(data);

//readFile() - promise .then()
// fs.readFile("./text.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// //readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// writeFile() - asynce/await
const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "Hello, World!");
    console.log("File written to...");
  } catch (err) {
    console.log(err);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", `\nthis is appended`);
    console.log("File appended to...");
  } catch (err) {
    console.log(err);
  }
};

writeFile();
appendFile();
readFile();
