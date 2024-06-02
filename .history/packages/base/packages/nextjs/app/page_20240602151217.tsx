"use client";

import Image from "next/Image";
import Link from "next/link";
import type { NextPage } from "next";


const Home: NextPage = () => {

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex justify-center items-center">
        <Link href="/mint?contract=mint" className="border-2 border-gray-300 p-4 rounded-md">
          <Image src="/clock.png" alt="clock" width={300} height={300} />
          <p className="text-center text-xl font-semibold">Mint</p>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
