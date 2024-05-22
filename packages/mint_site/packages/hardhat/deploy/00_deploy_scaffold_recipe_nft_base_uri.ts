import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployScaffoldRecipeNFTBaseUriContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ScaffoldRecipeNFTBaseUri", {
    from: deployer,
    args: ["https://arweave.net/jiTao2EwyXUGlxbBsvG1x2Do5bQ4UkfXwQ0xnVmk1uQ/"],
    log: true,
    autoMine: true,
  });

  const scaffoldRecipeNFTBaseUriContract = await hre.ethers.getContract<Contract>("ScaffoldRecipeNFTBaseUri", deployer);
  console.log("🚀 Deploy ScaffoldRecipeNFTBaseUri Contract:", await scaffoldRecipeNFTBaseUriContract.getAddress());
};

export default deployScaffoldRecipeNFTBaseUriContract;

deployScaffoldRecipeNFTBaseUriContract.tags = ["ScaffoldRecipeNFTBaseUriContract"];
