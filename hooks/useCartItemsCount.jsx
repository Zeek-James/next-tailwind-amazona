import { useEffect, useState } from "react";

export default function useCartItemsCount(cartItem) {
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    setCartItemCount(cartItem.reduce((a, c) => a + c.quantity, 0));
  }, [cartItem]);

  return cartItemCount;
}
