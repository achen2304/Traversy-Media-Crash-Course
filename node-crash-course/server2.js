import { createServer } from "http";
const PORT = process.env.PORT;

const users = {
  1: { name: "Alice" },
  2: { name: "Bob" },
  3: { name: "Charlie" },
  4: { name: "David" },
};

// logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON parser middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = parseInt(req.url.split("/")[3]);
  const user = users[id];
  if (user) {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(user));
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User Not Found" }));
  }
  res.end();
};

// Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Res Not Found" }));
  res.end();

}

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (req.url.match(/\/api\/users\/\d+/) && req.method === "GET") {
        getUserByIdHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
