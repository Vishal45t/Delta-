const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    description: "A modern villa with stunning ocean views and private beach access.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 350,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain Retreat",
    description: "Cozy wooden cabin surrounded by pine forests and snowy peaks.",
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
    price: 200,
    location: "Manali",
    country: "India"
  },
  {
    title: "Urban Apartment",
    description: "Modern apartment in the heart of downtown with skyline views.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    price: 180,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Desert Camp",
    description: "Experience the desert lifestyle with traditional tents and camel rides.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    price: 120,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Lakeview Cottage",
    description: "Peaceful stay by the lake, perfect for nature lovers.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
    price: 160,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Countryside Farmhouse",
    description: "Rustic farmhouse surrounded by fields and fresh air.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    price: 140,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Perfect winter getaway with fireplace and snowy mountain views.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    price: 220,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Heritage Haveli",
    description: "Stay in a royal haveli with traditional Rajasthani decor.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    price: 280,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Luxury Houseboat",
    description: "Enjoy backwaters with a traditional yet luxurious houseboat stay.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    price: 300,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Cliffside Bungalow",
    description: "Beautiful bungalow on a cliff with panoramic sea views.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
    price: 260,
    location: "Varkala",
    country: "India"
  },
  // {
  //   title: "Tea Garden Stay",
  //   description: "Cottage amidst tea plantations with refreshing scenery.",
  //   image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
  //   price: 170,
  //   location: "Munnar",
  //   country: "India"
  // },
  // {
  //   title: "Luxury City Hotel",
  //   description: "Five-star hotel in the city center with premium amenities.",
  //   image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=800&q=60",
  //   price: 400,
  //   location: "Delhi",
  //   country: "India"
  // },
  {
    title: "Eco Jungle Stay",
    description: "Eco-friendly cottages in the middle of the jungle with wildlife experiences.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    price: 190,
    location: "Jim Corbett",
    country: "India"
  },
  // {
  //   title: "Luxury Palace Hotel",
  //   description: "Experience royalty with a stay in a converted palace hotel.",
  //   image: "https://images.unsplash.com/photo-1590490360180-5f63f5c37a88?auto=format&fit=crop&w=800&q=60",
  //   price: 500,
  //   location: "Udaipur",
  //   country: "India"
  // },
  {
    title: "Riverside Tent",
    description: "Camping tents along the riverside with bonfire nights.",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60",
    price: 110,
    location: "Rishikesh",
    country: "India"
  }
];

module.exports = { data : sampleListings };