import { useCartItemsCount } from "@/hooks";
import { Store } from "@/utils/Store";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title }) => {
  const { status, session } = useSession();

  const { state } = useContext(Store);
  const { cart } = state;
  const cartItemCount = useCartItemsCount(cart.cartItems);

  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md px-4">
            <Link href="/" className="text-lg font-bold">
              amazona
            </Link>
            <div className="">
              <Link href={"/cart"} className={"p-2"}>
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white ">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href={"/login"} className={"p-2"}>
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright 2023 Amazona</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
