import { useState, useContext } from 'react';
import { Web3Context, EnvContext } from '../../context';
import { ethers } from 'ethers';

const SendMessageTest = () => {
  const { account: acc, library } = useContext(Web3Context);
  const { env, isCAIP } = useContext(EnvContext);
  const [isLoading, setLoading] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [messageType, setMessageType] = useState('Text');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [sendResponse, setSendResponse] = useState(null);
  const [account, setAccount] = useState(acc);

  const updateMessageContent = (e) => {
    setMessageContent(e.target.value);
  };

  const updateAccount = (e) => {
    setAccount(e.target.value);
  };

  const updateReceiverAddress = (e) => {
    setReceiverAddress(e.target.value);
  };

  const testSendMessage = async (index) => {
    try {
      setLoading(true);

      let response;
      switch (index) {
        case 0: {
          const librarySigner = await library.getSigner();
          response = await PushAPI.chat.send({
            messageContent,
            messageType: messageType,
            receiverAddress,
            signer: librarySigner,
            env,
            account,
          });
          break;
        }
        case 1: {
          const walletPvtKey =
            '4f380c43fe3fcb887ce5104cfae4fa049427233855c9003cbb87f720a1d911bc';
          const Pkey = `0x${walletPvtKey}`;
          const pvtKeySigner = new ethers.Wallet(Pkey);
          response = await PushAPI.chat.send({
            messageContent,
            messageType: messageType,
            receiverAddress,
            signer: pvtKeySigner,
            env,
            account,
          });
          break;
        }
        default:
          break;
      }

      setSendResponse(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Send Message Test page</h2>

      {isLoading && <Loader show={isLoading} />}

      <div className="p-4">
        <div className="mb-4">
          <label className="block mb-2">Message Content</label>
          <input
            type="text"
            onChange={updateMessageContent}
            value={messageContent}
            className="w-full p-2 border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Message Type</label>
          <div>
            <input
              type="radio"
              name="messageType"
              value="Text"
              checked={messageType === 'Text'}
              onChange={() => setMessageType('Text')}
            />
            <label className="ml-2">Text</label>
          </div>
          <div>
            <input
              type="radio"
              name="messageType"
              value="Image"
              checked={messageType === 'Image'}
              onChange={() => setMessageType('Image')}
            />
            <label className="ml-2">Image</label>
          </div>
          <div>
            <input
              type="radio"
              name="messageType"
              value="File"
              checked={messageType === 'File'}
              onChange={() => setMessageType('File')}
            />
            <label className="ml-2">File</label>
          </div>
          <div>
            <input
              type="radio"
              name="messageType"
              value="GIF"
              checked={messageType === 'GIF'}
              onChange={() => setMessageType('GIF')}
            />
            <label className="ml-2">GIF (DEPRECATED)</label>
          </div>
          <div>
            <input
              type="radio"
              name="messageType"
              value="MediaURL"
              checked={messageType === 'MediaURL'}
              onChange={() => setMessageType('MediaURL')}
            />
            <label className="ml-2">MediaURL</label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Receiver's Address</label>
          <input
            type="text"
            onChange={updateReceiverAddress}
            value={receiverAddress}
            className="w-full p-2 border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Account</label>
          <input
            type="text"
            onChange={updateAccount}
            value={account}
            className="w-full p-2 border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <button
            onClick={() => testSendMessage(0)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send message with library signer
          </button>
        </div>

        <div className="mb-4">
          <button
            onClick={() => testSendMessage(1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send message with private key signer
          </button>
        </div>

        {sendResponse && (
          <div className="p-4 border border-gray-300">
            <pre>{JSON.stringify(sendResponse, null, 4)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SendMessageTest;