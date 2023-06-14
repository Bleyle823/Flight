import { CeramicClient } from "@ceramicnetwork/http-client";
import { DID } from "dids";
import { getResolver as getKeyResolver } from "key-did-resolver";
import { getResolver as get3IDResolver } from "@ceramicnetwork/3id-did-resolver";
import { EthereumAuthProvider, ThreeIdConnect } from "@3id/connect";
import { TileDocument } from "@ceramicnetwork/stream-tile";

const threeID = new ThreeIdConnect();
const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

async function authenticateWithEthereum(ethereumProvider) {
  const accounts = await ethereumProvider.request({
    method: "eth_requestAccounts",
  });
  const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0]);
  await threeID.connect(authProvider);

  const did = new DID({
    provider: threeID.getDidProvider(),
    resolver: {
      ...get3IDResolver(ceramic),
      ...getKeyResolver(),
    },
  });
  await did.authenticate();
  ceramic.did = did;
}

async function authenticateCeramic() {
  if (window.ethereum == null) {
    throw new Error("No injected Ethereum provider");
  }
  await authenticateWithEthereum(window.ethereum);
}

async function loadDocument(id) {
  return await TileDocument.load(ceramic, id);
}

async function createDocument(content) {
  console.log(ceramic.did);
  const doc = await TileDocument.create(ceramic, content, {
    family: "desci-exchange",
    controllers: [ceramic.did.id],
  });
  return doc.id;
}

async function updateDocument(id, content) {
  const doc = await TileDocument.load(ceramic, id);
  await doc.update(content);
}

export { loadDocument, authenticateCeramic, createDocument, updateDocument };
