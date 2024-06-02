"use client";

import Image from "next/Image";
import Link from "next/link";
import type { NextPage } from "next";


const Home: NextPage = () => {

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="">
        <Link href="/mint?contract=mint">
          <Image src="/clock.png" alt="clock" width={300} height={300} />
          <p>Mint</p>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
