"use client";

import Link from "next/link";
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <Link href="/mint">
          <a className="text-blue-500">Mint</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
