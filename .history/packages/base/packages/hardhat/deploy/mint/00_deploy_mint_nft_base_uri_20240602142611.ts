import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployMintNFTBaseUriContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MintNFTBaseUri", {
    from: deployer,
    args: ["https://arweave.net/jiTao2EwyXUGlxbBsvG1x2Do5bQ4UkfXwQ0xnVmk1uQ/"],
    log: true,
    autoMine: true,
  });

  const scaffoldRecipeNFTBaseUriContract = await hre.ethers.getContract<Contract>("MintNFTBaseUri", deployer);
  console.log("🚀 Deploy MintNFTBaseUri Contract:", await scaffoldRecipeNFTBaseUriContract.getAddress());
};

export default deployMintNFTBaseUriContract;

deployMintNFTBaseUriContract.tags = ["MintNFTBaseUriContract"];
