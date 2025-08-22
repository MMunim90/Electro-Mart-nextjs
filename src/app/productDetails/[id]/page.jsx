import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function ProductsDetailsPage({ params }) {
  const p = await params;
  const productsCollection = await dbConnect(
    collectionNameObj.productsCollection
  );
  const product = await productsCollection.findOne({ _id: new ObjectId(p.id) });

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-md max-h-[400px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">
            {product.name}
          </h1>
          <p className="mb-4 text-lg md:text-xl">
            Category : {product.category}
          </p>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-300 mb-6">
            ${product.price}
          </p>

          {/* Added By Section */}
          <div className="mt-6 border-t border-gray-700 pt-4 flex items-center gap-3">
            {/* Profile Image */}
              <Image
                src={product.addedBy?.image || "https://i.ibb.co/990my6Yq/avater.png"}
                alt={product.addedBy?.name || "User"}
                width={40}
                height={40}
                className="rounded-full border border-gray-600"
              />

            {/* User Info */}
            <div>
              <p className="text-sm text-gray-400">
                Added by :{" "}
                <span className="font-medium text-white">
                  {product.addedBy?.name || "Unknown"}
                </span>
              </p>
              
                <p className="text-xs text-gray-500">{product.addedBy?.email}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
