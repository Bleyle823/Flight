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

const ApproveRequestTest = () => {
  const { account: acc, library } = useContext<any>(Web3Context);
  const { env, isCAIP } = useContext<any>(EnvContext);
  const [isLoading, setLoading] = useState(false);
  const [senderAddress, setSenderAddress] = useState<string>('');
  const [approveResponse, setApproveResponse] = useState<any>('');
  const [account, setAccount] = useState<string>(acc);

  const updateAccount = (e: React.SyntheticEvent<HTMLElement>) => {
    setAccount((e.target as HTMLInputElement).value);
  };

  const updateSenderAddress = (e: React.SyntheticEvent<HTMLElement>) => {
    setSenderAddress((e.target as HTMLInputElement).value);
  };

  const testApproveRequest = async () => {
    try {
      setLoading(true);
      const user = await PushAPI.user.get({ account: account, env });
      let pvtkey = null;
      const librarySigner = await library.getSigner();
      if (user?.encryptedPrivateKey) {
        pvtkey = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account,
          signer: librarySigner,
          env
        });
      }

      const response = await PushAPI.chat.approve({
        status: 'Approved',
        account: isCAIP ? walletToPCAIP10(account) : account,
        senderAddress,
        env,
        pgpPrivateKey: pvtkey,
        signer: librarySigner
      });

      setApproveResponse(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ChatTest />
      <h2>Send Message Test page</h2>

      <Loader show={isLoading} />

      <Section>
        <SectionItem>
          <div>
            <SectionItem style={{ marginTop: 20 }}>
              <label>Sender's Address</label>
              <input
                type="text"
                onChange={updateSenderAddress}
                value={senderAddress}
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
              <SectionButton onClick={testApproveRequest}>
                approve request
              </SectionButton>
            </SectionItem>
          </div>
        </SectionItem>

        <SectionItem>
          <div>
            {approveResponse ? (
              <CodeFormatter>
                {JSON.stringify(approveResponse, null, 4)}
              </CodeFormatter>
            ) : null}
          </div>
        </SectionItem>
      </Section>
    </div>
  );
};

export default ApproveRequestTest;
