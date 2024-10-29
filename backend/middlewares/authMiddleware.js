var jwt = require("jsonwebtoken");

const authMiddleware = async (req, res) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(409).json({ error: "Please Login" });
  } else {
    try {
      const deCodeToken = await jwt.verify(accessToken, process.env.SECRET);
      (req.id = deCodeToken.id), (req.role = deCodeToken.role);
    } catch (error) {
        return res.status(409).json({error: "Please Login"})
    }
  }
};

module.exports = authMiddleware;
