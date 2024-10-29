const authController = require("../controllers/authController")
const authMiddleware = require("../middlewares/authMiddleware")

const router = require("express").Router()

router.post("/admin-login", authController)
router.get("/get-user", authMiddleware ,authController)

module.exports = router