const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing =async (req, res) => {
  const { id } = req.params;
const listing = await Listing.findById(req.params.id)
  .populate("owner")
  .populate({
    path: "reviews",
    populate: { path: "author",model: "User" }
});
    if(!listing){
        req.flash("error","Listing not existed!");
        res.redirect("/listings")
      }
      res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
    //     if(!req.body.listing){
    //     throw new ExpressError(400,"Enter Valid listing");
    // }
    const { title, description, image, price, location, country } = req.body;
    const newListing = new Listing({
      title,
      description,
      image,
      price,
      location,
      country,
    });
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success","Listing created successfulyy!");
    res.redirect("/listings");
  };

module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
    if(!listing){
    req.flash("error","Listing not existed!");
    res.redirect("/listings")
  }
  res.render("listings/edit.ejs", { listing });
}; 

module.exports.updateListing = async (req, res) => {
            if(!req.body.listing){
        throw new ExpressError(400,"Enter Valid listing");
    }
  const { id } = req.params;
  const { title: newTitle } = req.body;
  await Listing.findByIdAndUpdate(
    id,
    { title: newTitle },
    { runValidators: true, new: true }
  );
  req.flash("success","Listing updated successfulyy!");
  res.redirect("/listings");
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Listing deleted successfully");
  res.redirect("/listings");
};
