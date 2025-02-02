import http from "http";
import fs from "fs/promises"; //integrated node modules
import url from "url"; //integrated node modules
import path from "path"; //integrated node modules
const PORT = process.env.PORT;

//Get currren path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.end("<h1>Hello World</h1>");
  //   console.log(req.url);
  //   console.log(req.method);
  try {
    //check 1
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>Home<h1>");
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("<h1>About<h1>");
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        // res.writeHead(404, { "Content-Type": "text/html" });
        // res.end("<h1>Not Found<h1>");
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Invalid Method");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
  //   res.write("Hello World");
  //   res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
