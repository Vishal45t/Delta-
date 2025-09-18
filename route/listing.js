const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");


// 👉 Index Route
router.get("/", wrapAsync(listingController.index));

// 👉 New Route (must come BEFORE :id route)
router.get("/new",isLoggedIn, listingController.renderNewForm);            //present in Controllers

// 👉 Show Route
router.get("/:id", wrapAsync(listingController.showListing));

// 👉 Create Route
router.post("/",wrapAsync(listingController.createListing));

// 👉 Edit Route
router.get("/:id/edit",isLoggedIn ,isOwner, wrapAsync(listingController.editListing));

// 👉 Update Route
router.put("/:id",isLoggedIn, isOwner, wrapAsync(listingController.updateListing));

// 👉 Delete Route
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;