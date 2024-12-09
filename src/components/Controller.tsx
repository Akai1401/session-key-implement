import useMounted from '@/hook/useMounted';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useExplorer,
} from '@starknet-react/core';
import React, { useCallback, useState } from 'react';
import CustomButton from './custom/CustomButton';
import { SCOUT_SYSTEMS } from '@/constant';

const Controller = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { isMounted } = useMounted();
  const { account } = useAccount();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const explorer = useExplorer();
  const [txnHash, setTxnHash] = useState<string>();

  const execute = useCallback(async () => {
    console.log('account', account);
    if (!account) {
      return;
    }
    setSubmitted(true);
    setTxnHash(undefined);
    await account
      .execute([
        // {
        //   contractAddress: MAP_SYSTEMS,
        //   entrypoint: 'join_map',
        //   calldata: ['1384066088', '0', '0', '0', '0'],
        // },
        // {
        //   contractAddress: DRAGON_SYSTEMS,
        //   entrypoint: 'claim_default_dragon',
        //   calldata: ['1384066088'],
        // },
        {
          contractAddress: SCOUT_SYSTEMS,
          entrypoint: 'scout',
          calldata: ['1384066088', '2', '2'],
        },
      ])
      .then(({ transaction_hash }) => setTxnHash(transaction_hash))
      .catch((e) => console.error(e))
      .finally(() => setSubmitted(false));
  }, [account]);

  return (
    <div className='flex items-center flex-col'>
      {address && <p>{address}</p>}
      <div className='flex items-center gap-[0.5rem] my-[0.5rem]'>
        <CustomButton
          className='text-[rgb(243,205,98)] hover:!bg-[#1a1c1b] bg-[#1a1c1b]'
          type='primary'
          onClick={() => {
            console.log('connectors', connectors);
            address ? disconnect() : connect({ connector: connectors[0] });
          }}
        >
          {address ? 'Disconnect' : 'Cartridge Controller'}
        </CustomButton>
        {address && (
          <CustomButton loading={submitted} onClick={execute}>
            Execute
          </CustomButton>
        )}
      </div>
      {txnHash && (
        <p>
          <b>Tx hash:</b>{' '}
          <a
            href={explorer.transaction(txnHash)}
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

export default Controller;
