export const FE_URL = process.env.NEXT_PUBLIC_FE_URL || 'http://localhost:3000';
export const BE_URL = process.env.NEXT_PUBLIC_BE_URL || 'http://localhost:3003';
export const DISCORD_CLIENT_ID =
  process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '1234567890';
export const TWITTER_CLIENT_ID =
  process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID || '1234567890';

export const ETH_CONTRACT_ADDRESS =
  '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';

export const ACHIEVEMENT_SYSTEMS =
  '0x6c47db20eb269fb94de55a25153a5aa8a6fad19049872bd0589fb80a72b8446';
export const DRAGON_SYSTEMS =
  '0xba51a5fabb2fe129aa4913820026280fa7414a564759e34f4055c307172684';
export const ISLAND_SYSTEMS =
  '0x759cb18f2ea81e1c959808c2232c14d261e3e51db2f865e7464c0e298595bc7';
export const JOURNEY_SYSTEMS =
  '0x1e0bc3fb44a980029d942536aaa4a36c0deeb0dfe629978ac8170e69c15fda0';
export const MAP_SYSTEMS =
  '0x6e7858e68e673fd872a53a8cbbd413d95dccdd5af64f8a8ea0958d470b11067';
export const MISSION_SYSTEMS =
  '0x24b1062e891ab7637b89f37382319798f7e453c9bf2b347260535d0500f7f40';
export const PLAYER_SYSTEMS =
  '0x7a190f89e1af1427686f512631eea0289fa14f1c88824b90fd6dd5383ec2458';
export const SCOUT_SYSTEMS =
  '0x5f90c08c4d09d05363c5956050e30674475e91f617dbc98c791b615b631785e';
export const SHIELD_SYSTEMS =
  '0x41377212f4b3a1cdd32b03cbafd1c41ac0ab57ff8c281916c679ad1f1882559';
export const TREASURE_HUNT_SYSTEMS =
  '0x5e434f3c09d53b17b8824575f7ba615b1fa3fdcc1a3056ac362e669cd1e0a3d';

export const POLICIES = [
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
];
