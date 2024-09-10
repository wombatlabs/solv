import { DefaultConfigType } from '@/config/types'
import {
  MNT_DISK_TYPE,
  NodeType,
  Network,
  ValidatorType,
  RpcType,
} from '@/config/enums'
import {
  COMMISSION,
  DELINQUENT_STAKE_MAINNET,
  DELINQUENT_STAKE_TESTNET,
  VERSION_MAINNET,
  VERSION_NODE,
  VERSION_TESTNET,
} from '@/config/versionConfig'
import {
  DEFAULT_VALIDATOR_VOTE_ACCOUNT_PUBKEY,
  SOLANA_MAINNET_RPC_URL,
} from '@/config/constants'

const DEFAULT_CONFIG: DefaultConfigType = {
  NETWORK: Network.TESTNET,
  NODE_TYPE: NodeType.RPC,
  VALIDATOR_TYPE: ValidatorType.NONE,
  RPC_TYPE: RpcType.AGAVE,
  MNT_DISK_TYPE: MNT_DISK_TYPE.SINGLE,
  TESTNET_SOLANA_VERSION: VERSION_TESTNET,
  MAINNET_SOLANA_VERSION: VERSION_MAINNET,
  NODE_VERSION: VERSION_NODE,
  TESTNET_DELINQUENT_STAKE: DELINQUENT_STAKE_TESTNET,
  MAINNET_DELINQUENT_STAKE: DELINQUENT_STAKE_MAINNET,
  COMMISSION: COMMISSION,
  DEFAULT_VALIDATOR_VOTE_ACCOUNT_PUBKEY: DEFAULT_VALIDATOR_VOTE_ACCOUNT_PUBKEY,
  STAKE_ACCOUNTS: [],
  HARVEST_ACCOUNT: '',
  IS_MEV_MODE: false,
  RPC_URL: SOLANA_MAINNET_RPC_URL,
  KEYPAIR_PATH: '',
  DISCORD_WEBHOOK_URL: '',
  AUTO_UPDATE: false,
  AUTO_RESTART: false,
  IS_DUMMY: false,
  API_KEY: '',
}

export default DEFAULT_CONFIG
