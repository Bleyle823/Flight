
<h1 align="center">
 FLIGHT 🚁 
</h1>
Flight is a decentralized platform that creates a vibrant community where Drone pilots, racers, and drone enthusiasts can hang out, connect, chat, collaborate and even go out on virtual FPV drone expeditions thereby serving as a hub for team formations, race planning, and knowledge sharing. The "FPV" hobby has been on an upward spiral since 2020 with pilots adopting the popular "FPV"(First Person View) name suffix across social media platforms. The problem however is that this ever-growing community has no real virtual stomping ground. Multi-GP, one of the most popular online community platforms has it's users on Facebook and does not support interaction on the site. Another classic example, Blacksheep FPV only allows buying and selling of drone hardware on it's platform with the rest of engagement being on Instagram. That being said, Flight FPV seeks to onboard this ever growing community of pilots and hobbyists on to a decentralized platform where they can form groups on the chat hence form teams, organize friendly/competitive  races, share ideas, purchase NFT based FPV event tickets, buy/sell their aerial videos and photos creations or even more exiting, go out on virtual FPV expeditions! 🚁

<h1 align="center">
 TECH STACK 👩‍💻 
</h1>

* FVM - To deploy the Marketplace and Ticketing smart contracts.
  
* ENS - To enable pilots/users to have a personalized avatar derived from the ENS Avatar as well as use their ENS name as their profile name on the platform
  
* Ceramic + Lit - To allow private sharing of data let alone sensitive data through encryption and decryption in line with pre-defined conditions that are made possible with lit protocol. For example , only holders of the APE token would be able to decrypt flight data and other sensitive data.
  
* ApeCoin- Used as the native currency of the platform to buy and sell NFTS or event tickets
  
* Push Protocol - This makes chatting including group creation, subscribing to favorite pilots via push channels, receiving notifications on live flights and even peer to peer video calling.
  
* Huddle01 - While Push Protocol is leveraged for peer to peer video calls, Huddle is used for live stream functionality, making taking a large audience on a virtual FPV expedition possible.
  
* Lit Protocol - As most of the FPV community still live in the web2 world, onboarding them on to this new world is made easier and convenient to them by providing an option to sign in to the platform with Google accounts using lit protocol's PKP's.


## 🚀 Getting Started

First, run the development server:

```bash

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## ✍ Customizing Tailwind Typography

[Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) is an official tailwind plugin that provides a set of `prose` classes to add beautiful typographic defaults to any vanilla HTML you don't control (like HTML rendered from Markdown, or pulled from a CMS).

To customize the defaults provided by the plugin, add the overrides under the `typography` key in the theme section of the `tailwind.config.js` file. Refer to its [default styles](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js) for more in-depth examples.

For more information, please check out Tailwind Typography's [customization section](https://github.com/tailwindlabs/tailwindcss-typography#customization).

## 📖 Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Tailwind CSS

To learn more about Tailwind CSS, take a look at the following resources:

- [Tailwind Documentation](https://tailwindcss.com/) - learn about Tailwind CSS features and API.


## ☁ Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kumard3/dev-ui-templates/tree/main/template-4)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/kumard3/dev-ui-templates/tree/main/template-4)


This will clone the hardhat kit onto your computer, switch directories into the newly installed kit, and install the dependencies the kit needs to work.


## Get a Private Key

You can get a private key from a wallet provider [such as Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).


## Add your Private Key as an Environment Variable

Add your private key as an environment variable by running this command:

 ```
export PRIVATE_KEY='abcdef'
```

If you use a .env file, don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!


## Get the Deployer Address

Run this command:
```
yarn hardhat get-address
```

This will show you the ethereum-style address associated with that private key and the filecoin-style f4 address (also known as t4 address on testnets)! The Ethereum address can now be exclusively used for almost all FEVM tools, including the faucet.


## Fund the Deployer Address

Go to the [Hyperspace testnet faucet](https://hyperspace.yoga/#faucet), and paste in the Ethereum address from the previous step. This will send some hyperspace testnet FIL to the account.


## Deploy the Contracts

Currently there are  main types of contracts:

*  NFT Marketplace : Simple contracts to run marketplace
  
*  NFT Ticketing : Event tickets functionality.

* Filecoin API Examples: Contracts that demo how to use the Filecoin APIs in Solidity to access storage deals and other Filecoin specific functions.

* Basic Deal Client: A contract that demos how to create Filecoin storage deals within Solidity smart contracts. See below to learn more.


Type in the following command in the terminal to deploy all contracts:

 ```
yarn hardhat deploy
```

This will compile all the contracts in the contracts folder and deploy them to the Hyperspace test network automatically!

Keep note of the deployed contract addresses for the next step.

## Interact with the Contracts

You can interact with contracts via hardhat tasks, found in the 'tasks' folder. For example, to interact with the SimpleCoin contract:

Type in the following command in the terminal:

 ```
yarn hardhat get-balance --contract 'THE DEPLOYED CONTRACT ADDRESS HERE' --account 'YOUR ETHEREUM ADDRESS HERE'
```

The console should read that your account has 12000 SimpleCoin!

## Filecoin APIs

The primary advantage of the FEVM over other EVM based chains is the ability to access and program around Filecoin storage deals. This can be done in the FEVM via the [Filecoin.sol library maintained by Zondax](https://github.com/Zondax/filecoin-solidity). **Note this library is currently in BETA**. It is unaudited, and the APIs will likely be changing with time. This repo will be updated as soon as possible when a breaking change occurs.

The library is included in this kit as an NPM package and will automatically be downloaded when you perform the `yarn` command (don't confuse these with the included mocks)!

Currently you will find a getter contract that calls the getter methods on the MarketAPI to get storage deal data and store that data. To do this you will need *dealIDs* which you can [find here on FilFox](https://hyperspace.filfox.info/en/deal).

As an example to store most of the data available for a deal run the store-all command with a specified dealID. Below is an example of using this command below with a deal on Hyperspace testnet with a dealID of 707.

```
yarn hardhat store-all --contract "DEPLOYED FILECOIN_MARKET_CONSUMER CONTRACT ADDRESS HERE" --dealid "707"
```
## Screenshots

![Screenshot (67)](https://github.com/Bleyle823/Flight/assets/86532040/c8cb6e42-525a-4acf-9dfe-6983bc84081d)
![Screenshot (68)](https://github.com/Bleyle823/Flight/assets/86532040/cf64f55c-b7b2-4c2c-963d-fc38cfdd0485)
![Screenshot (69)](https://github.com/Bleyle823/Flight/assets/86532040/65d8b22f-01df-4767-8d6f-d22ef62f4727)
![Screenshot (77)](https://github.com/Bleyle823/Flight/assets/86532040/08072a26-2971-4aee-aa5d-24e90a392ebe)
![Screenshot (70)](https://github.com/Bleyle823/Flight/assets/86532040/5ecfe010-5fbb-4091-9c1d-35f86e91cabd)
![Screenshot (71)](https://github.com/Bleyle823/Flight/assets/86532040/a99355c6-ff63-4960-8801-1c6094cd2186)
![Screenshot (72)](https://github.com/Bleyle823/Flight/assets/86532040/22061299-7705-4d60-9cf9-88c9cb0e6af4)
![Screenshot (73)](https://github.com/Bleyle823/Flight/assets/86532040/9d71c241-5836-4eaa-b48f-75d5a9f16f62)
![Screenshot (74)](https://github.com/Bleyle823/Flight/assets/86532040/3cd420f7-fa5d-48c2-8a78-d381dfe6c3a4)
![Screenshot (75)](https://github.com/Bleyle823/Flight/assets/86532040/632438c9-c48d-413a-8dd2-36e23ca1920a)
![Screenshot (76)](https://github.com/Bleyle823/Flight/assets/86532040/3c5186c9-f679-4fcc-9f5d-cf6c30f510d7)


