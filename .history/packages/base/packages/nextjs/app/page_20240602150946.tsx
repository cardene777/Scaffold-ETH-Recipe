"use client";

import Image from "next/Image";
import Link from "next/link";
import type { NextPage } from "next";


const Home: NextPage = () => {

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <Link href="/mint">
          <Image src="/mint.png" alt="mint" width={200} height={200} />
          <p>Mint</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
