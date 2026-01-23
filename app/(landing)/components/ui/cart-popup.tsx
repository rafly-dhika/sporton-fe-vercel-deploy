// "use client";
// Ga perlu karena di Header (Parent Element) sudah ada use client

import priceFormatter from "@/app/utils/price-formater";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

// export const cartList = [
//   {
//     name: "SportsOn Hyperfast Shoes",
//     category: "Running",
//     price: 329000,
//     imgUrl: "product-1.png",
//     qty: 2,
//   },
//   {
//     name: "SportsOn Rockets Tennis",
//     category: "Tennis",
//     price: 999000,
//     imgUrl: "product-2.png",
//     qty: 1,
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//     qty: 1,
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//     qty: 1,
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//     qty: 1,
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//     qty: 1,
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//     qty: 1,
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//     qty: 1,
//   },
//   {
//     name: "SportsOn Slowlivin",
//     category: "Running",
//     price: 119000,
//     imgUrl: "product-3.png",
//     qty: 1,
//   },
// ];

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();
  const handleCheckout = () => {
    push("/checkout");
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  console.log("Cart Item: ", items);

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl border border-gray-200 w-90 z-10">
      <div className="font-bold text-center p-4 border-b border-gray-200">
        Shopping Cart
      </div>
      <div className="overflow-auto max-h-75">
        {items.length ? (
          items.map((item, index) => (
            <div
              className="border-b border-gray-200 p-4 flex gap-3"
              key={index}
            >
              <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                <Image
                  src={getImageUrl(item.imageUrl)}
                  alt={item.name}
                  width={63}
                  height={63}
                  className="aspect-square object-contain"
                />
              </div>
              <div className="self-center w-full">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="flex gap-3 font-medium text-xs">
                  <div>{item.qty}x</div>
                  <div className="text-primary">
                    {priceFormatter(item.price)}
                  </div>
                </div>
              </div>
              <Button
                size="small"
                variant="ghost"
                className="w-7 h-7 p-0! self-center mx-auto"
                onClick={() => removeItem(item._id)}
              >
                <FiTrash2 />
              </Button>
            </div>
          ))
        ) : (
          <div className="text-center py-5 opacity-50">
            Your shopping cart is empty
          </div>
        )}
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="font-semibold flex justify-between items-center">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
