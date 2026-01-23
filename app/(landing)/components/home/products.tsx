"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formater";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

// const productList = [
//   {
//     name: "SportsOn Hyperfast Shoes",
//     category: "Running",
//     price: 329000,
//     imgUrl: "product-1.png",
//   },
//   {
//     name: "SportsOn Rockets Tennis",
//     category: "Tennis",
//     price: 999000,
//     imgUrl: "product-2.png",
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//   },
//   {
//     name: "SportsOn HyperSoccer v2",
//     category: "Football",
//     price: 458000,
//     imgUrl: "product-4.png",
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-5.png",
//   },
//   {
//     name: "SportsOn Ball VX7",
//     category: "Basketball",
//     price: 580000,
//     imgUrl: "product-6.png",
//   },
//   {
//     name: "SportsOn Hyperfast Shoes",
//     category: "Running",
//     price: 329000,
//     imgUrl: "product-7.png",
//   },
//   {
//     name: "SportsOn Rockets Tennis",
//     category: "Tennis",
//     price: 999000,
//     imgUrl: "product-9.png",
//   },
// ];

type TProductsProps = {
  products: Product[];
};

const ProductsSection = ({ products }: TProductsProps) => {
  const { addItem } = useCartStore();

  const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <section id="products-section" className="container mx-auto mt-32 mb-52">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button
                className="w-10 h-10 p-2! absolute right-3 top-3"
                onClick={(e) => handleAddtoCart(e, product)}
              >
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category.name}</div>
              <div className="text-primary font-medium">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
