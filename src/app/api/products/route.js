import { NextResponse } from "next/server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

// Add new product
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price, image, category, addedBy } = body;

    if (!name || !description || !price || !image || !category) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const productsCollection = await dbConnect(
      collectionNameObj.productsCollection
    );

    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      image,
      category,
      addedBy: addedBy || null,
    };

    const result = await productsCollection.insertOne(newProduct);

    return NextResponse.json(
      {
        message: "Product added successfully",
        productId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}

// Get all products
export async function GET(req) {
  try {
    const productsCollection = await dbConnect(
      collectionNameObj.productsCollection
    );

    const products = await productsCollection.find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
