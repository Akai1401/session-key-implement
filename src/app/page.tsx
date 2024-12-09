'use client';

import React from 'react';
import { Chain, mainnet, sepolia } from '@starknet-react/chains';
import ControllerConnector from '@cartridge/connector';
import { constants, RpcProvider } from 'starknet';
import {
  Connector,
  jsonRpcProvider,
  StarknetConfig,
  starkscan,
} from '@starknet-react/core';
import { Divider } from 'antd';
import { POLICIES } from '@/constant';
import Controller from '@/components/Controller';
import ArgentX from '@/components/ArgentX';
import { ArgentMobileBaseConnector } from 'starknetkit/argentMobile';
import { WebWalletConnector } from 'starknetkit/webwallet';
import { InjectedConnector } from 'starknetkit/injected';

const Home = () => {
  // const count = useStore((state) => state.count);
  // const setCount = useStore((state) => state.setCount);

  const CARTRIDGE_RPC_URL = 'https://api.cartridge.gg/x/starknet/mainnet';
  const STAKNET_RPC_URL =
    'https://starknet-sepolia.public.blastapi.io/rpc/v0_7';

  return (
    <div className='flex flex-col items-center gap-[1rem] mt-[5rem]'>
      <StarknetConfig
        autoConnect
        chains={[mainnet]}
        connectors={[
          new ControllerConnector({
            policies: POLICIES,
            rpc: CARTRIDGE_RPC_URL,
            // paymaster: {
            //   caller: shortString.encodeShortString('ANY_CALLER'),
            // },
            theme: 'dope-wars',
            colorMode: 'dark',
          }) as any,
        ]}
        explorer={starkscan}
        provider={(chain: Chain) => {
          return new RpcProvider({
            nodeUrl: CARTRIDGE_RPC_URL,
          });
        }}
      >
        <Controller />
      </StarknetConfig>

      <Divider />

      <StarknetConfig
        chains={[sepolia]}
        provider={jsonRpcProvider({
          rpc: () => ({
            nodeUrl: STAKNET_RPC_URL,
          }),
        })}
        connectors={
          [
            new InjectedConnector({ options: { id: 'argentX' } }),
            new InjectedConnector({ options: { id: 'braavos' } }),
            new InjectedConnector({ options: { id: 'keplr' } }),
            new InjectedConnector({ options: { id: 'okxwallet' } }),
            new ArgentMobileBaseConnector({
              dappName: 'Starknetkit example dapp',
              url: window.location.hostname,
              icons: [],
              chainId: constants.NetworkName.SN_SEPOLIA,
            }),
            new WebWalletConnector({ url: 'https://web.argent.xyz' }),
          ] as Connector[]
        }
      >
        <ArgentX />
      </StarknetConfig>
    </div>
  );
};

export default React.memo(Home);
