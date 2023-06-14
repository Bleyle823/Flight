/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { base64StringToBlob, blobToBase64String } from 'lit-js-sdk';
import { useRef, useEffect } from 'react';
import { authenticateCeramic, createDocument, loadDocument } from '../scripts/Ceramic';
import client from '../scripts/Lit';

function App() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const docIdRef = useRef(null);
  const chain = 'mumbai';

  const mintNFT = async () => {};

  const encrypt = async () => {
    const accessControlConditionsNFT = [
      {
        contractAddress: '0x1A3DAa1EBF7E9409e94D6dc5caDc7aCBbb8F0777',
        standardContractType: 'ERC1155',
        chain,
        method: 'balanceOf',
        parameters: [':userAddress', '0'],
        returnValueTest: {
          comparator: '>',
          value: '0',
        },
      },
    ];
    const { encryptedFile, encryptedSymmetricKey } = await client.encryptString(
      inputRef.current.value,
      accessControlConditionsNFT
    );
    docIdRef.current = await createDocument({
      encryptedFile: await blobToBase64String(encryptedFile),
      encryptedSymmetricKey,
      accessControlConditionsNFT,
    });
    outputRef.current.innerText = 'Encrypted and saved to Ceramic: ' + docIdRef.current;
  };

  const decrypt = async () => {
    const doc = await loadDocument(docIdRef.current);
    console.log('HEY HEY', doc.content);
    const decryptedFile = await client.decryptString(
      base64StringToBlob(doc.content.encryptedFile),
      doc.content.encryptedSymmetricKey,
      doc.content.accessControlConditionsNFT
    );
    outputRef.current.innerText = 'Output: ' + decryptedFile;
  };

  useEffect(() => {
    authenticateCeramic();
  }, []);

  return (
    <div className="p-4">
      <textarea
        ref={inputRef}
        className="border border-gray-300 p-2 w-full h-40 resize-none"
      ></textarea>
      <p ref={outputRef} className="mt-4 text-lg"></p>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={encrypt}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Encrypt
        </button>
        <button
          onClick={decrypt}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Decrypt
        </button>
      </div>
    </div>
  );
}

export default App;