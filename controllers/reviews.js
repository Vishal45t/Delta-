const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.postreview = async (req, res) => {
const listing = await Listing.findById(req.params.id)
  .populate("owner")   
  .populate({
    path: "reviews",
    populate: { path: "author",model: "User" }
});
    const newreview = new Review(req.body.review);
   newreview.author = req.user._id;
   listing.reviews.push(newreview);

   await newreview.save();
   await listing.save();

  res.redirect(`/listings/${listing._id}`);
};


module.exports.deleteReview = async(req,res) => {
     let{id,reviewId} = req.params;

     await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
     await Review.findByIdAndDelete(reviewId);

     res.redirect(`/listings/${id}`);
};