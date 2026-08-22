const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // =========================
    // 1. Authorization header
    // =========================

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization token is required",
      });
    }


    // =========================
    // 2. Check Bearer format
    // =========================

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Invalid authorization format. Use Bearer token",
      });
    }


    // =========================
    // 3. Extract token
    // =========================

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token is missing",
      });
    }


    // =========================
    // 4. Check JWT secret
    // =========================

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing in .env");

      return res.status(500).json({
        message: "JWT configuration error",
      });
    }


    // =========================
    // 5. Verify JWT
    // =========================

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );


    // =========================
    // 6. Check userId
    // =========================

    if (!decoded || !decoded.userId) {
      return res.status(401).json({
        message: "Invalid token payload",
      });
    }


    // =========================
    // 7. Store user ID
    // =========================

    req.userId = decoded.userId;


    // =========================
    // 8. Continue
    // =========================

    next();

  } catch (error) {

    console.error(
      "Authentication error:",
      error.message
    );

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};


module.exports = authMiddleware;