import Image from "next/image";
import Hero from "./components/Hero";
import ProductsHighlights from "./components/ProductsHighlights";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductsHighlights></ProductsHighlights>
    </div>
  );
}
