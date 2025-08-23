# Electro-Mart

## Project Description
Electro-Mart is a modern e-commerce web application built with Next.js and MongoDB. It allows users to browse and purchase electronics, including smartphones, TVs, laptops, audio devices, and more. Admins can manage products through a secure dashboard.

Key features:
- Responsive product catalog with product highlights
- Product details page with “Added by” information
- Adding new products
- Authentication using NextAuth
- Fast and reliable API routes connected to MongoDB

---

## Setup & Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/electro-mart.git
cd electro-mart

2. **Install dependencies:**

npm install


3. **Set up environment variables:**
Create a .env.local file in the root directory:

MONGODB_URI=<Your MongoDB connection string>
NEXTAUTH_SECRET=<Your secret for NextAuth>
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000


4. **Run the development server:**

npm run dev



1. / GET = Home page showing featured products
2. /products GET = All products page displaying full catalog
3. /products/[id] GET = Product details page
4. /dashboard/addProduct GET = Add product form (protected, admin only)
5. /api/products POST = API route to add a new product (requires auth)
6. /api/products GET = API route to fetch all products


## Technologies Used

- Next.js (App Router)

- Tailwind CSS & Daisy UI

- MongoDB

- NextAuth for authentication

- React Hot Toast for notifications