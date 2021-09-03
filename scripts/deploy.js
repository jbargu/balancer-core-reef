const hre = require("hardhat");
const ethers = require("ethers");

const dollar = ethers.BigNumber.from("10000000000000");
const REEF_ADDRESS = "0x0000000000000000000000000000000001000000";

async function main() {
  const deployer = await hre.reef.getSignerByName("alice");
  await deployer.claimDefaultAccount();

  // token contracts
  const ReefToken = await hre.reef.getContractFactory("Token", deployer);
  const ErcToken = await hre.reef.getContractFactory("Token", deployer);

  // Balancer contracts
  const BFactory = await hre.reef.getContractFactory("BFactory", deployer);

  console.log("Deploying tokens ...");
  const tokenReef = await ReefToken.deploy(dollar.mul(1000));
  const tokenErc = await ErcToken.deploy(dollar.mul(1000));

  console.log("Test tokens deployed", {
    tokenReef: tokenReef.address,
    tokenErc: tokenErc.address,
  });

  const factory = await BFactory.deploy();

  console.log("Factory deployed:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
