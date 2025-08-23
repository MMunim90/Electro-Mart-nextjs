"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const categories = [
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast("Adding product....");
    try {
      const payload = {
        ...formData,
        addedBy: {
          name: session?.user?.name || "Unknown",
          image: session?.user?.image || "https://i.ibb.co/990my6Yq/avater.png",
          email: session?.user?.email || null,
        },
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success("Product added successfully!");
        setFormData({
          name: "",
          description: "",
          price: "",
          image: "",
          category: "",
        });
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Error adding product");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 py-12">
      {/* Cover Image */}
      <div className="w-full max-w-7xl mb-8">
        <img
          src="/assets/cover.png"
          alt="Add Product Cover"
          className="w-full h-auto md:h-92 rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full max-w-7xl">
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Product Name"
            className="w-full border rounded p-2"
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="Image URL"
            className="w-full border rounded p-2"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Description"
            className="w-full border rounded p-2 md:col-span-2"
            rows={4}
          />

          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Price ($)"
            className="w-full border rounded p-2"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded p-2 bg-black"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:col-span-2 bg-white hover:bg-gray-300 text-black font-semibold py-2 rounded transition"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
