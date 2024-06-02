import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployMintNFTContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MintNFT", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const mintNFTContract = await hre.ethers.getContract<Contract>("MintNFT", deployer);
  console.log("🚀 Deploy MintNFT Contract:", await mintNFTContract.getAddress());
};

export default deployMintNFTContract;

deployMintNFTContract.tags = ["MintNFTContract"];
