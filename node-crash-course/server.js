import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.end("<h1>Hello World</h1>");
  console.log(req.url);
  console.log(req.method);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ name: "Brad" }));
  //   res.write("Hello World");
  //   res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
