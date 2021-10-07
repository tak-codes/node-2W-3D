const express = require("express");
const app = express();
const port = 3000;
const connect = require("./schemas");
connect();

const PostRouter = require("./routers/index");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", [PostRouter]);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/detail", (req, res) => {
  res.render("detail");
});

app.get("/editpost", (req, res) => {
  res.render("editpost");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
