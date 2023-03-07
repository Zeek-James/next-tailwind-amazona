import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} className="rounded shadow">
        <Image
          src={`${product.image}`}
          alt={product.name}
          width={900}
          height={200}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="mb-2">{product.price}</p>
        <button className="primary-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
