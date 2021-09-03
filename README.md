# Balancer pools

Compiles and deploys `balancer-core` libraries.

## Setup
Install dependencies with `yarn`.


## Deploy

Run `npx hardhat run scripts/deploy.js` to deploy the `BFactory`.


## Configure
Define your Reef chain URL in `hardhat.config.js` (by default `ws://127.0.0.1:9944`):

Hardhat-reef uses the default network `reef`.
If the user wants to run the script on the other network, he can do so in CLI with `--network {network-name}` flag.

To change the deployer account, update the line 
```
const deployer = await hre.reef.getSignerByName("alice");
```

in `scripts/deploy.js` to your account defined in `hardhat.config.js`.

Example:
`yarn hardhat run scripts/sample-script.js --network hardhat`

Users can define the network configuration in `hardhat.config.js`.
He can switch the `defaultNetwork` to the desired one.

Configuring the Reef network, the user can edit its URL. If the URL exists (can be pinged), the system will automatically connect to it, else it will run internal `Reef-Node` and try to connect to it.
