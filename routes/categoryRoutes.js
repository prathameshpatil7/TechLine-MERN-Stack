import express from "express";
import {
  categoryControlller,
  // categoryPhotoController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
// import formidable from "express-formidable";
import ExpressFormidable from "express-formidable";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//get photo
// router.get("/category-photo/:pid", categoryPhotoController);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  // formidable(),
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
