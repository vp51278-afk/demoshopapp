const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {


    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization token is required",
      });
    }


    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Invalid authorization format. Use Bearer token",
      });
    }


   

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token is missing",
      });
    }



    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing in .env");

      return res.status(500).json({
        message: "JWT configuration error",
      });
    }




    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );




    if (!decoded || !decoded.userId) {
      return res.status(401).json({
        message: "Invalid token payload",
      });
    }




    req.userId = decoded.userId;



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