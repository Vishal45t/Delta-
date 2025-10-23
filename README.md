🌍 Wanderlust — Travel Listing App

Wanderlust is a full-stack web application that lets users discover, create, and review travel destinations or stays — similar to Airbnb. It features user authentication, image uploads, CRUD listings, and secure session management.

🚀 Features

🏡 Browse & Explore Listings: View all travel destinations with images, descriptions, and prices.

✏️ Create, Edit & Delete Listings: Authenticated users can manage their own listings.

💬 Add Reviews: Logged-in users can post reviews and ratings for listings.

🔐 User Authentication: Secure login, registration, and session handling.

🖼️ Image Uploads: Cloudinary integration for uploading listing images.

💾 Persistent Sessions: Sessions stored securely in MongoDB.

⚙️ Robust Error Handling: Centralized error and validation handling using middleware.

🧱 Tech Stack

Frontend:

EJS templates / React (choose your version)

Bootstrap / Tailwind CSS for responsive UI

Backend:

Node.js

Express.js

Database:

MongoDB with Mongoose ODM

Authentication & Security:

Passport.js (Local strategy)

bcrypt for password hashing

express-session + connect-mongo for persistent sessions

Joi for validation

File Uploads:

Multer for handling form uploads

Cloudinary for image storage
