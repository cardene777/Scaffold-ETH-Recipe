import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployScaffoldRecipeNFTContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ScaffoldRecipeNFT", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const scaffoldRecipeNFTContract = await hre.ethers.getContract<Contract>("ScaffoldRecipeNFT", deployer);
  console.log("🚀 Deploy ScaffoldRecipeNFT Contract:", await scaffoldRecipeNFTContract.getAddress());
};

export default deployScaffoldRecipeNFTContract;

deployScaffoldRecipeNFTContract.tags = ["ScaffoldRecipeNFTContract"];
