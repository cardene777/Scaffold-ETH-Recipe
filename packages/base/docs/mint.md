# 🏗 Mint Site

Mint Site environment template.

## Advance Preparation

- [README.md](../README.md)

### Test

```bash
cd package/hardhat
forge install
forge build
forge test -vvvv
```

1. Run a local network in the first terminal:

```bash
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

5. On a second terminal, deploy the test contract:

```bash
yarn deploy --tags MintNFTContract,MintNFTBaseUriContract,MintNFTOnchainContract
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

6. On a third terminal, start your NextJS app:

```bash
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`
