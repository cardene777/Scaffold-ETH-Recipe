import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployHardhatFoundryERC721Contract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("HardhatFoundryERC721", {
    from: deployer,
    // Contract constructor arguments
    args: ["HardhatFoundryERC721", "HFNFT"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const hardhatFoundryERC721Contract = await hre.ethers.getContract<Contract>("YourContract", deployer);
  console.log("👋 Initial HardhatFoundryERC721Contract:", await hardhatFoundryERC721Contract.greeting());
};

export default deployHardhatFoundryERC721Contract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployHardhatFoundryERC721Contract.tags = ["HardhatFoundryERC721Contract"];
