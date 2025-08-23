"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Audio",
    "Mobile",
    "Computers",
    "Wearables",
    "Security",
    "Home Appliances",
    "Cameras",
    "Storage",
    "Other",
  ];

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); 
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded ${
                selectedCategory === cat
                  ? "bg-white text-black"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-700"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
          </div>
        ) : (
          // Products Grid
          filteredProducts.length === 0 ? (<div className="flex justify-center text-2xl">No Product Found</div>) : (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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
          </div>)
        )}
      </div>
    </div>
  );
}
