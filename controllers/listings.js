const Listing = require("../models/listing.js");

// 👉 INDEX + SEARCH
module.exports.index = async (req, res) => {
  const { q } = req.query;

  let listings;

  if (q) {
    listings = await Listing.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } }
      ],
    });
  } else {
    listings = await Listing.find({});
  }
    res.render("listings/index", { listings });

};

// 👉 NEW
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

// 👉 SHOW
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews").populate("owner");
  res.render("listings/show", { listing });
};

// 👉 CREATE
module.exports.createListing = async (req, res) => {
  const listing = new Listing(req.body.listing);
  listing.owner = req.user._id;
  await listing.save();
  req.flash("success", "New listing created!");
  res.redirect("/listings");
};

// 👉 EDIT
module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit", { listing });
};

// 👉 UPDATE
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
};

// 👉 DELETE
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};
