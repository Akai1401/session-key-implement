import React, { useState } from 'react';
import CustomButton from './custom/CustomButton';
import { useConnect, useProvider } from '@starknet-react/core';
import { connect, disconnect } from 'starknetkit';
import {
  createSessionRequest,
  DappKey,
  openSession,
  SessionParams,
} from '@argent/x-sessions';
import { toastError, toastSuccess } from '@/utils/toast';
import { constants, ec, RpcProvider } from 'starknet';
import { parseUnits } from '@/utils';
import { ETH_CONTRACT_ADDRESS } from '@/constant';

const ArgentX = () => {
  const { connectors } = useConnect();
  const [txnHash, setTxnHash] = useState<string>();
  const [wallet, setWallet] = useState<any>();
  const [accountSessionSignature, setAccountSessionSignature] = useState<any>();
  const [sessionRequest, setSessionRequest] = useState<any>();
  const [address, setAddress] = useState<any>('');
  const { provider } = useProvider();

  const handleCreateSession = async () => {
    /* Create Dapp key */
    const privateKey = ec.starkCurve.utils.randomPrivateKey();
    const dappKey: DappKey = {
      privateKey,
      publicKey: ec.starkCurve.getStarkKey(privateKey),
    };

    try {
      // init params
      const allowedMethods = [
        {
          'Contract Address': ETH_CONTRACT_ADDRESS,
          selector: 'transfer',
        },
      ];
      const expiry = Math.floor(
        (Date.now() + 1000 * 60 * 60 * 24) / 1000
      ) as any;
      const metaData = {
        projectID: 'test-dapp',
        txFees: [
          {
            tokenAddress: ETH_CONTRACT_ADDRESS,
            maxAmount: parseUnits('0.1', 18).value.toString(),
          },
        ],
      };
      // check deployment wallet
      await wallet!.request({
        type: 'wallet_deploymentData',
      });
      // get account Session Signature
      console.log(wallet);
      const accountSessionSignature = await openSession({
        chainId: await provider.getChainId(),
        wallet: wallet as any,
        sessionParams: {
          allowedMethods,
          expiry,
          metaData,
          publicDappKey: dappKey.publicKey,
        } as SessionParams,
      });
      setAccountSessionSignature(accountSessionSignature);
      // get Session Request
      const sessionRequest = createSessionRequest(
        allowedMethods,
        expiry,
        metaData,
        dappKey.publicKey
      );
      setSessionRequest(sessionRequest);
      toastSuccess('Session created successfully');
    } catch (e: any) {
      console.error(e);
      toastError(e?.message || 'Failed to create session');
    }
  };

  console.log('sessionRequest', sessionRequest);
  console.log('accountSessionSignature', accountSessionSignature);

  return (
    <div className='flex items-center flex-col'>
      {address && <p>{address}</p>}
      <div className='flex items-center gap-[0.5rem] my-[0.5rem]'>
        <CustomButton
          onClick={async () => {
            if (address) {
              await disconnect();
              setAddress('');
              setWallet(null);
            } else {
              try {
                const res = await connect({ connectors } as any);
                const { wallet, connectorData } = res;
                setWallet(wallet);
                setAddress(connectorData?.account);
                console.log('Connect response: ', res);
              } catch (err: any) {
                toastError(err?.message || 'Fail to connect');
              }
            }
          }}
          type='primary'
        >
          {address ? 'Disconnect' : '  ArgentX Session Key '}
        </CustomButton>
        {address && (
          <>
            <CustomButton onClick={handleCreateSession}>
              Authorize session
            </CustomButton>
            <CustomButton /* onClick={execute} */>Execute</CustomButton>
          </>
        )}
      </div>
      {txnHash && (
        <p>
          <b>Tx hash:</b>{' '}
          <a
            href={'https://sepolia.starkscan.co/tx/' + txnHash}
            target='_blank'
            rel='noreferrer'
          >
            {txnHash}
          </a>
        </p>
      )}
    </div>
  );
};

export default ArgentX;
