import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

export default async function ProductsDetailsPage({params}) {
    const p = await params;
    const productsCollection = dbConnect(collectionNameObj.productsCollection)
    const product = await productsCollection.findOne({_id: new ObjectId(p.id)})
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto p-6  grid md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl max-h-[400px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">{product.name}</h1>
          <p className="mb-4 text-lg md:text-xl">Category : {product.category}</p>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-500 mb-6">
            ${product.price}
          </p>

          <button className="bg-white hover:bg-gray-300 text-black px-6 py-3 rounded-xl transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}