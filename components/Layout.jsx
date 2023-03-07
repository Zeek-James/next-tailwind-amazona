import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md px-4">
            <Link href="/" className="text-lg font-bold">
              amazona
            </Link>
            <div className="">
              <Link href={"/cart"} className={"p-2"}>
                Cart
              </Link>
              <Link href={"/login"} className={"p-2"}>
                Login
              </Link>
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
