import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import errorController from "../controllers/error.controller.js";
import protectedController from "../controllers/protected.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router()

// Auth routes
router.post("/login", authController.loginExistingUser)
router.post("/register", authController.registerNewUser)

// Protected router
router.get("/protected",
    authMiddleware.authenticate,
    protectedController.protected
)


// Error handler middlewares
router.use(errorController.serverError)
router.use(errorController.pageNotFound)

export default router