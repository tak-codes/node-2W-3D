const jwt = require("jsonwebtoken");
const User = require("../schemas/user");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue] = authorization.split(" ");
  if (tokenType !== "Bearer") {
    res.status(401).send({
      erroMessage: "로그인 후 사용하세요!",
    });
    return;
  }
  try {
    const { userId } = jwt.verify(tokenValue, "my-blog-tak");
    User.findOne({ userId }).then((user) => {
      res.locals.user = userId;
      next();
    });
  } catch (error) {
    res.status(400).send({
      erroMessage: "로그인 후 사용하세요!",
    });
    return;
  }
};
