"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useWriteContract } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import deployedContracts from "~~/contracts/deployedContracts";


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { writeContractAsync, status } = useWriteContract();

  return (
    <>
      <div className="flex items-center justify-center flex-col py-16 h-screen">
        <div className="px-5 flex flex-col justify-start items-center">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Mint Clock NFT</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </div>
        <div className="mt-12">
          <Image src="/clock.png" alt="Clock" width={400} height={400} />
        </div>
        <div className="mt-12">
          <button
            className="btn btn-primary text-xl w-60"
            onClick={() =>
              writeContractAsync({
                abi: deployedContracts?.["11155111"]?.ScaffoldRecipeNFT.abi,
                address: deployedContracts?.["11155111"]?.ScaffoldRecipeNFT.address,
                functionName: "safeMint",
                args: [
                  connectedAddress || "",
                  "https://arweave.net/jiTao2EwyXUGlxbBsvG1x2Do5bQ4UkfXwQ0xnVmk1uQ/1.json",
                ],
              })
            }
          >
            {status === "success" ? "✅ Minted" : "Mint"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
