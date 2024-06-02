import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployScaffoldRecipeNFTOnchainContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ScaffoldRecipeNFTOnchain", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const scaffoldRecipeNFTOnchainContract = await hre.ethers.getContract<Contract>("ScaffoldRecipeNFTOnchain", deployer);
  console.log("🚀 Deploy ScaffoldRecipeNFTOnchain Contract:", await scaffoldRecipeNFTOnchainContract.getAddress());
};

export default deployScaffoldRecipeNFTOnchainContract;

deployScaffoldRecipeNFTOnchainContract.tags = ["ScaffoldRecipeNFTContract"];
