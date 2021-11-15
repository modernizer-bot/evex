const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const values = require("postcss-modules-values");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function (req, res, next) {
  setTimeout(next, 2000);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/users/", function (req, res, next) {
  const error = validateUser(req.body);

  if (error) return res.status(400).send(error);

  req.body.slug = createSlug(req.body.id);
  next();
});

server.use(router);

const port = 3002;

server.listen(port, () => {
  console.log(`JSON Server is running now on port ${port}`);
});

function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateUser(user) {
  if (!user.name) return "Name is required.";
  if (!user.lastName) return "Last Name is required";
  return "";
}
