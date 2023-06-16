import { useState, useContext } from 'react';
import { Web3Context, EnvContext } from '../../context';
import { walletToPCAIP10 } from '../../pages/helpers';
import ChatTest from './ChatTest';

const UpdateGroupTest = () => {
  const { account: acc, library } = useContext(Web3Context);
  const { env, isCAIP } = useContext(EnvContext);
  const [isLoading, setLoading] = useState(false);
  const [chatId, setChatId] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupImage, setGroupImage] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [members, setMembers] = useState('');
  const [admins, setAdmins] = useState('');
  const [account, setAccount] = useState(acc);
  const [sendResponse, setSendResponse] = useState('');

  const updateChatId = (e) => {
    setChatId(e.target.value);
  };

  const updateGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const updateGroupDescription = (e) => {
    setGroupDescription(e.target.value);
  };

  const updateGroupImage = (e) => {
    setGroupImage(e.target.value);
  };

  const updateMembers = (e) => {
    setMembers(e.target.value);
  };

  const updateAdmins = (e) => {
    setAdmins(e.target.value);
  };

  const updateAccount = (e) => {
    setAccount(e.target.value);
  };

  const testUpdateGroup = async () => {
    try {
      setLoading(true);
      const librarySigner = await library.getSigner();
      const response = await PushAPI.chat.updateGroup({
        chatId,
        groupName,
        groupImage,
        groupDescription,
        members: members.split(','),
        admins: admins.split(','),
        account: isCAIP ? walletToPCAIP10(account) : account,
        signer: librarySigner,
        env,
      });

      setSendResponse(response);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <ChatTest />
      <h2 className="text-2xl font-bold mb-4">Update Group Test Page</h2>

      {isLoading && <Loader />}

      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <label className="font-semibold">Chat ID</label>
          <input
            type="text"
            onChange={updateChatId}
            value={chatId}
            className="border border-gray-300 p-2 w-80"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Group Name</label>
          <input
            type="text"
            onChange={updateGroupName}
            value={groupName}
            className="border border-gray-300 p-2 w-80"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Group Description</label>
          <input
            type="text"
            onChange={updateGroupDescription}
            value={groupDescription}
            className="border border-gray-300 p-2 w-80"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Group Image</label>
          <input
            type="text"
            onChange={updateGroupImage}
            value={groupImage}
            className="border border-gray-300 p-2 w-80"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Members (comma-separated)</label>
          <input
            type="text"
            onChange={updateMembers}
            value={members}
            className="border border-gray-300 p-2 w-80"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Admins (comma-separated)</label>
          <input
            type="text"
            onChange={updateAdmins}
            value={admins}
            className="border border-gray-300 p-2 w-80"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Group Creator (Wallet Address or NFT DID)</label>
          <input
            type="text"
            onChange={updateAccount}
            value={account}
            className="border border-gray-300 p-2 w-80"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={testUpdateGroup}
        >
          Update Group
        </button>
      </div>

      {sendResponse && (
        <CodeFormatter className="mt-4">
          {JSON.stringify(sendResponse, null, 4)}
        </CodeFormatter>
      )}
    </div>
  );
};

export default UpdateGroupTest;