'use client';

import React, { useEffect, useState } from 'react';
import useMounted from '@/hook/useMounted';
import { usePathname } from 'next/navigation';
import LayoutPrimary from './LayoutPrimary';
import LayoutAdmin from './LayoutAdmin';
import Loading from '@/app/loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Chain, mainnet, sepolia } from '@starknet-react/chains';
import ControllerConnector from '@cartridge/connector/controller';
import { RpcProvider, shortString } from 'starknet';
import { StarknetConfig, starkscan } from '@starknet-react/core';

const ACHIEVEMENT_SYSTEMS =
  '0x4a46bfad58a759e0b7d5a7ffd5ea0e2cecd733fc22baf727675cfdda23f3e42';
export const DRAGON_SYSTEMS =
  '0x5eef5fb35be8bd06f73ce3dd7fe2c78ad810df51b8f15b094870ca16a4bacdb';
export const ISLAND_SYSTEMS =
  '0x1d9a9613817fc635d8c7ad9beb07363c25cb8bc097031773c96e50ef46008a2';
const JOURNEY_SYSTEMS =
  '0x2cff04010f141e12e9446caa83c43c64fff9d92d5189ef0022358c9a0085281';
export const MAP_SYSTEMS =
  '0x6089c0b04f407e4e950bfb9eb289e07a89301a12514f45b144b06e31ea5d58b';
const MISSION_SYSTEMS =
  '0x13a13fe4ca46690dad9aa3ba27cb42648e6567cf2feb9e4c71177e19ee1b70f';
const PLAYER_SYSTEMS =
  '0x3fb6044f77a9e4c5d63e3e6b06096b93dfa94e18a5949d12793bf592fbe9289';
export const SCOUT_SYSTEMS =
  '0x1f355828b92fd901e2d75dad34618a25a9771c7bb828667569187c4aa9fa867';
const SHIELD_SYSTEMS =
  '0x293e2b293350c761bba68bdd1c224f3220f8f9e0e930329d7c0a8b9c94fc2a3';
const TREASURE_HUNT_SYSTEMS =
  '0xa2ca364c600c8c11fd9366a0dc6a4b6ba5333a8d1ef5f1cd52e7d7eb2ddec5';

const connector = new ControllerConnector({
  policies: [
    {
      target: ACHIEVEMENT_SYSTEMS,
      method: 'claim_achievement_reward',
      description: 'A method to claim your achievement reward.',
    },
    {
      target: DRAGON_SYSTEMS,
      method: 'activate_dragon',
      description: 'A method to activate the Dragark NFT into the game.',
    },
    {
      target: DRAGON_SYSTEMS,
      method: 'deactivate_dragon',
      description: 'A method to deactivate Dragark NFT out of the game.',
    },
    {
      target: DRAGON_SYSTEMS,
      method: 'claim_default_dragon',
      description: 'A method to claim the default Dragark.',
    },
    {
      target: DRAGON_SYSTEMS,
      method: 'upgrade_dragon',
      description: "A method to upgrade the Dragark's level.",
    },
    {
      target: ISLAND_SYSTEMS,
      method: 'claim_resources',
      description: "A method to claim the island's rescources.",
    },
    {
      target: JOURNEY_SYSTEMS,
      method: 'start_journey',
      description: 'A method to start a new journey to other island.',
    },
    {
      target: JOURNEY_SYSTEMS,
      method: 'finish_journey',
      description: 'A method to finish a started journey.',
    },
    {
      target: MAP_SYSTEMS,
      method: 'join_map',
      description: 'A method to join the map.',
    },
    {
      target: MAP_SYSTEMS,
      method: 're_join_map',
      description: 'A method to rejoin the map.',
    },
    {
      target: MISSION_SYSTEMS,
      method: 'claim_mission_reward',
      description: 'A method to claim your mission reward.',
    },
    {
      target: PLAYER_SYSTEMS,
      method: 'buy_energy',
      description: 'A method to buy energy.',
    },
    {
      target: PLAYER_SYSTEMS,
      method: 'upgrade_account_level',
      description: 'A method to upgrade your account level.',
    },
    {
      target: PLAYER_SYSTEMS,
      method: 'upgrade_invitation_level',
      description: 'A method to upgrade your invitation level.',
    },
    {
      target: PLAYER_SYSTEMS,
      method: 'redeem_invite_code',
      description: 'A method to redeem invite code.',
    },
    {
      target: PLAYER_SYSTEMS,
      method: 'buy_item_star_shop',
      description: 'A method to buy item from the Star Shop.',
    },
    {
      target: PLAYER_SYSTEMS,
      method: 'claim_pool_share_reward',
      description: 'A method to claim your Pool Share reward.',
    },
    {
      target: SCOUT_SYSTEMS,
      method: 'scout',
      description: 'A method to scout the map.',
    },
    {
      target: SHIELD_SYSTEMS,
      method: 'activate_shield',
      description: 'A method to activate a shield to protect your island.',
    },
    {
      target: SHIELD_SYSTEMS,
      method: 'deactivate_shield',
      description: 'A method to deactivate a shield from your island.',
    },
    {
      target: SHIELD_SYSTEMS,
      method: 'buy_shield',
      description: 'A method to buy a shield.',
    },
    {
      target: TREASURE_HUNT_SYSTEMS,
      method: 'insert_dragon_treasure_hunt',
      description:
        'A method to insert your Dragark to start a new treasure hunt.',
    },
    {
      target: TREASURE_HUNT_SYSTEMS,
      method: 'end_treasure_hunt',
      description: 'A method to end an existing treasure hunt.',
    },
  ],
  rpc: 'https://api.cartridge.gg/x/starknet/mainnet',
  // paymaster: {
  //   caller: shortString.encodeShortString('ANY_CALLER'),
  // },
  propagateSessionErrors: true,
  // Uncomment to use a custom theme
  theme: 'dope-wars',
  colorMode: 'dark',
});

const Layout = ({ children }: any) => {
  const { isMounted } = useMounted();

  const pathName = usePathname();
  const [currentLayout, setCurrentLayout] = useState(
    <LayoutPrimary>{children}</LayoutPrimary>
  );
  const queryClient = new QueryClient();

  useEffect(() => {
    if (pathName === '/admin') {
      setCurrentLayout(<LayoutAdmin>{children}</LayoutAdmin>);
    } else {
      setCurrentLayout(<LayoutPrimary>{children}</LayoutPrimary>);
    }
  }, [pathName]);

  return (
    <>
      {!isMounted ? (
        <Loading />
      ) : (
        <StarknetConfig
          autoConnect
          chains={[sepolia]}
          connectors={[connector]}
          explorer={starkscan}
          provider={(chain: Chain) => {
            return new RpcProvider({
              nodeUrl: 'https://api.cartridge.gg/x/starknet/mainnet',
            });
          }}
        >
          {' '}
          <QueryClientProvider client={queryClient}>
            {currentLayout}
          </QueryClientProvider>
        </StarknetConfig>
      )}
    </>
  );
};

export default Layout;
