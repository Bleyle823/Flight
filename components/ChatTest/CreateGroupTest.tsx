import { useState, useContext } from 'react';
import {
  Section,
  SectionItem,
  CodeFormatter,
  SectionButton,
} from '../StyledComponents';
import Loader from '../Loader';
import { Web3Context, EnvContext } from '../../context';
import * as PushAPI from '@pushprotocol/restapi';
import { walletToPCAIP10 } from '../../pages/helpers';
import ChatTest from './ChatTest';

const CreateGroupTest = () => {
  const { account: acc, library } = useContext(Web3Context);
  const { env, basename, isCAIP } = useContext(EnvContext);
  const [isLoading, setLoading] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [members, setMembers] = useState('');
  const [groupImage, setGroupImage] = useState('');
  const [admins, setAdmins] = useState('');
  const [isPublic, setIsPublic] = useState('');
  const [contractAddressNFT, setContractAddressNFT] = useState('');
  const [numberOfNFTs, setNumberOfNFTs] = useState('');
  const [contractAddressERC20, setContractAddressERC20] = useState('');
  const [numberOfERC20, setNumberOfERC20] = useState('');
  const [meta, setMeta] = useState('');
  const [account, setAccount] = useState(acc);

  const [sendResponse, setSendResponse] = useState<any>('');

  const updateGroupName = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setGroupName(e.currentTarget.value);
  };

  const updateGroupDescription = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setGroupDescription(e.currentTarget.value);
  };

  const updateMembers = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setMembers(e.currentTarget.value);
  };

  const updateGroupImage = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setGroupImage(e.currentTarget.value);
  };

  const updateAdmins = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setAdmins(e.currentTarget.value);
  };

  const updateIsPublic = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setIsPublic(e.currentTarget.value);
  };

  const updateContractAddressNFT = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setContractAddressNFT(e.currentTarget.value);
  };

  const updateNumberOfNFTs = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setNumberOfNFTs(e.currentTarget.value);
  };

  const updateContractAddressERC20 = (
    e: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setContractAddressERC20(e.currentTarget.value);
  };

  const updateNumberOfERC20 = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setNumberOfERC20(e.currentTarget.value);
  };

  const updateMeta = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setMeta(e.currentTarget.value);
  };

  const updateAccount = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setAccount(e.currentTarget.value);
  };

  const testCreateGroup = async () => {
    try {
      setLoading(true);
      const librarySigner = await library.getSigner();

      const response = await PushAPI.chat.createGroup({
        groupName,
        groupDescription,
        members: members.split(','),
        groupImage,
        admins: admins.split(','),
        isPublic: isPublic === 'true',
        contractAddressNFT,
        numberOfNFTs: numberOfNFTs ? Number(numberOfNFTs) : undefined,
        contractAddressERC20,
        numberOfERC20: numberOfERC20 ? Number(numberOfERC20) : undefined,
        account: isCAIP ? walletToPCAIP10(account) : account,
        signer: librarySigner,
        env,
        meta,
      });

      setSendResponse(response);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ChatTest />
      <h2>Create Group Test page</h2>

      <Loader show={isLoading} />

      <Section>
        <SectionItem>
          <div>
            <SectionItem>
              <label>Group Name</label>
              <input
                type="text"
                onChange={updateGroupName}
                value={groupName}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem>
              <label>Group Description</label>
              <input
                type="text"
                onChange={updateGroupDescription}
                value={groupDescription}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem>
              <label>Members</label>
              <input
                type="text"
                onChange={updateMembers}
                value={members}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Group Image</label>
              <input
                type="text"
                onChange={updateGroupImage}
                value={groupImage}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Admins</label>
              <input
                type="text"
                onChange={updateAdmins}
                value={admins}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Is Public</label>
              <input
                type="text"
                onChange={updateIsPublic}
                value={isPublic}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Account</label>
              <input
                type="text"
                onChange={updateAccount}
                value={account}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Contract Address NFT</label>
              <input
                type="text"
                onChange={updateContractAddressNFT}
                value={contractAddressNFT}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Number of NFTs</label>
              <input
                type="text"
                onChange={updateNumberOfNFTs}
                value={numberOfNFTs}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Contract Address ERC20</label>
              <input
                type="text"
                onChange={updateContractAddressERC20}
                value={contractAddressERC20}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Number of ERC20</label>
              <input
                type="text"
                onChange={updateNumberOfERC20}
                value={numberOfERC20}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>

            <SectionItem style={{ marginTop: 20 }}>
              <label>Meta</label>
              <input
                type="text"
                onChange={updateMeta}
                value={meta}
                style={{ width: 400, height: 30 }}
              />
            </SectionItem>
          </div>
        </SectionItem>

        <SectionButton>
          <button onClick={testCreateGroup}>Create Group</button>
        </SectionButton>
      </Section>

      <CodeFormatter>
        {sendResponse && JSON.stringify(sendResponse, null, 2)}
      </CodeFormatter>
    </div>
  );
};

export default CreateGroupTest;