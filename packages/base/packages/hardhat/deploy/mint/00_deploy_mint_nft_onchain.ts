import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployMintNFTOnchainContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MintNFTOnchain", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const mintNFTOnchainContract = await hre.ethers.getContract<Contract>("MintNFTOnchain", deployer);
  console.log("🚀 Deploy MintNFTOnchain Contract:", await mintNFTOnchainContract.getAddress());
};

export default deployMintNFTOnchainContract;

deployMintNFTOnchainContract.tags = ["MintNFTOnchainContract"];
