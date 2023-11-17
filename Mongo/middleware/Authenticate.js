const jwt = require("jsonwebtoken");
const { User } = require("../models/db");

const Authenticate = async (req, res, next) => {
  try {
    // const token = req.cookies.jwtoken;
    let id = "324424253246263632"
      const token = jwt.sign({userId: id }, "your-secret-key", { expiresIn: "50h" });
    const verifyToken = jwt.verify(token, "your-secret-key");
    res.send(verifyToken);
    const rootUser = await User.findOne({ _id: verifyToken.userId });
    if (!rootUser) throw new Error("user not found");
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
  } catch (err) {
    res.send("No token");
  }
};
module.exports = Authenticate;
