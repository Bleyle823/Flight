import * as LitJsSdk from "lit-js-sdk";

const client = new LitJsSdk.LitNodeClient();
const chain = "mumbai";

class Lit {
  litNodeClient;

  async connect() {
    await client.connect();
    this.litNodeClient = client;
  }

  async encryptString(str, accessControlConditionsNFT) {
    if (!this.litNodeClient) {
      await this.connect();
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(str);

    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditions: accessControlConditionsNFT,
      symmetricKey,
      authSig,
      chain,
    });

    return {
      encryptedFile: encryptedString,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(
        encryptedSymmetricKey,
        "base16"
      ),
    };
  }

  async decryptString(
    encryptedStr,
    encryptedSymmetricKey,
    accessControlConditionsNFT
  ) {
    if (!this.litNodeClient) {
      await this.connect();
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      accessControlConditions: accessControlConditionsNFT,
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig,
    });
    const decryptedFile = await LitJsSdk.decryptString(
      encryptedStr,
      symmetricKey
    );

    return decryptedFile;
  }
}

export default new Lit();
