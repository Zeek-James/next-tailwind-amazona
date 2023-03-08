import { Layout, ProductItem } from "@/components";
import Product from "@/models/Product";
// import data from "@/utils/data";
import db from "@/utils/db";
import { Store } from "@/utils/Store";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    // Check Stock Inventory
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      toast.error("Sorry. Product is out of stock");
      return;
    }

    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    toast.success("Product added to the cart");
  };

  return (
    <Layout title={"Home page"}>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4
"
      >
        {products.map((product) => (
          <ProductItem
            key={product.slug}
            product={product}
            addToCartHandler={addToCartHandler}
          />
        ))}
        {/* {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))} */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
