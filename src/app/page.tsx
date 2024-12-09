'use client';

import CustomButton from '@/components/custom/CustomButton';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useExplorer,
} from '@starknet-react/core';
import React, { useCallback, useEffect, useState } from 'react';
import useMounted from '@/hook/useMounted';
import { StarknetConfig } from '@starknet-react/core';
import { messageError } from '@/utils/message';
import { formatWallet } from '@/utils';
import { DRAGON_SYSTEMS, MAP_SYSTEMS, ISLAND_SYSTEMS, SCOUT_SYSTEMS } from '@/Layouts';
import { Divider } from 'antd';

const Home = () => {
  // const count = useStore((state) => state.count);
  // const setCount = useStore((state) => state.setCount);
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { isMounted } = useMounted();
  const { account } = useAccount();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const explorer = useExplorer();
  const [txnHash, setTxnHash] = useState<string>();

  useEffect(() => {
    if (!isMounted) return;
  }, [isMounted]);

  const execute = useCallback(async () => {
    if (!account) {
      return;
    }
    console.log(account);
    setSubmitted(true);
    setTxnHash(undefined);
    await account
      .execute([
        // {
        //   contractAddress: MAP_SYSTEMS,
        //   entrypoint: 'join_map',
        //   calldata: ['2643854167', '0', '0', '0', '0'],
        // },
        // {
        //   contractAddress: DRAGON_SYSTEMS,
        //   entrypoint: 'claim_default_dragon',
        //   calldata: ['2643854167'],
        // },
        {
          contractAddress: SCOUT_SYSTEMS,
          entrypoint: 'scout',
          calldata: ['2643854167', '1', '3'],
        },
      ])
      .then(({ transaction_hash }) => setTxnHash(transaction_hash))
      .catch((e) => console.error(e))
      .finally(() => setSubmitted(false));
  }, [account]);

  return (
    <div className='flex flex-col items-center gap-[1rem] mt-[5rem]'>
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
      <Divider />
      <CustomButton type='primary'>ArgentX Session Key</CustomButton>
    </div>
  );
};

export default React.memo(Home);
