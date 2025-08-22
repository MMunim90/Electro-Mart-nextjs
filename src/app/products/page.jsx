import React from "react";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Link from "next/link";

export default async function ProductsPage() {
  const productsCollection = await dbConnect(
    collectionNameObj.productsCollection
  );
  const products = await productsCollection.find({}).toArray();

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore our full range of electronics, from smart devices to
            headphones, TVs, laptops, and more. Find the perfect gadget for your
            lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="p-6 rounded-lg shadow hover:shadow-2xl hover:scale-103 transition-all duration-300 flex flex-col border border-gray-800 bg-gray-900"
            >
              <div className="relative w-full h-48 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                {product.description}
              </p>
              <p className="text-lg font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/productDetails/${product._id}`}
                  className="block text-center bg-white w-full rounded-md text-gray-800 py-2 font-bold hover:bg-gray-100 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Pagination or Load More */}
        {/* <div className="mt-12 text-center">
          <button className="btn btn-outline">Load More</button>
        </div> */}
      </div>
    </div>
  );
}
