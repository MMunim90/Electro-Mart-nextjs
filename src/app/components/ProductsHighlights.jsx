import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import React from "react";

export default async function ProductsHighlights() {
  const productsCollection = await dbConnect(
    collectionNameObj.productsCollection
  );
  const products = await productsCollection.find({}).toArray();

  // Show only 8 products
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
          Product Highlights
        </h2>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16">
          Explore our top-rated electronics carefully selected for quality,
          performance, and value. From smart TVs to wireless earbuds, these
          products are designed to enhance your lifestyle and bring the latest
          technology right to your home. Shop with confidence and enjoy fast
          delivery on every order.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded-lg border border-gray-800 transition flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <p className="text-lg font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>

              {/* Sticky button at bottom */}
              <div className="mt-auto">
                <button className="btn w-full">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
