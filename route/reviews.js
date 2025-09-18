const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {validateReview} = require("../middleware.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const {isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//post Review

router.post("", isLoggedIn,validateReview, wrapAsync(reviewController.postreview));

//Delete Review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync (reviewController.deleteReview));

module.exports = router;
