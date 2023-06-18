
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { base64StringToBlob, blobToBase64String } from 'lit-js-sdk';
import { useRef, useEffect } from 'react';
import { authenticateCeramic, createDocument, loadDocument } from '../scripts/Ceramic';
import client from '../scripts/Lit';



export default function sendInfo() {
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
    <div className="p-5 mt-20 ">  

    <div className="relative p-8 mt-48 flex flex-col min-w-min justify-center items-center  bg-black shadow-xl rounded-xl"> 

    <div className="flex flex-col rounded-xl w-1/2 place-items-center  p-4"
          style={{
            border: '0.88px solid',
    
            backdropFilter: 'saturate(180%) blur(14px)',
            background: ' #ffffff0d',
          }}
        >
                <div className="text-center h-40">
                  {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      
                     <span className="bg-gray-700 text-white px-4 py-2 rounded-lg">Upload a file</span>
                     
                      
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    
                  </div>
                  <p className="pl-1 text-b text-center">or drag and drop</p>
                  <p className="text-xs leading-5 text-white">PNG, JPG, GIF up    to  10MB</p>
                </div>
              </div>   
    <textarea
      ref={inputRef}
      className="border border-gray-300 p-2 mt-5 w-1/2 place-items-center h-40 resize-none flex flex-col rounded-xl"
    ></textarea>
    <p ref={outputRef} className="mt-4 text-xl text-black "></p>
     
    <div className="flex space-x-4 mt-4 place-items-center ">
    <button 
    onClick={encrypt}
    className="relative block group ">
          <span className="absolute inset-0  bg-green-500  rounded-lg"></span>
          <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-2 ">
              <p className="text-xl font-outerSans font-medium">Encrypt</p>
            </div>
          </div>
        </button>

        <button 
    onClick={decrypt}
    className="relative block group ">
          <span className="absolute inset-0  bg-pink-500  rounded-lg"></span>
          <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-2 ">
              <p className="text-xl font-outerSans font-medium">Decrypt</p>
            </div>
          </div>
        </button>
     
    


    </div>
  </div>
  </div>
  );
}


