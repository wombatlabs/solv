<p align="center">
  <a href="https://solv.epics.dev/">
    <img src="https://storage.googleapis.com/epics-bucket/solv/assets/v3/solvEN.png" alt="solv" />
  </a>

  <a href="https://twitter.com/intent/follow?screen_name=EpicsDAO2">
    <img src="https://img.shields.io/twitter/follow/EpicsDAO2.svg?label=Follow%20@EpicsDAO2" alt="Follow @EpicsDAO2" />
  </a>
  <br/>
  <a aria-label="npm version" href="https://www.npmjs.com/package/@epics-dao/solv">
    <img alt="" src="https://badgen.net/npm/v/@epics-dao/solv">
  </a>
  <a aria-label="Downloads Number" href="https://www.npmjs.com/package/@epics-dao/solv">
    <img alt="" src="https://badgen.net/npm/dt/@epics-dao/solv">
  </a>
  <a aria-label="License" href="https://github.com/EpicsDAO/solv/blob/master/LICENSE.txt">
    <img alt="" src="https://badgen.net/badge/license/Apache/blue">
  </a>
    <a aria-label="Code of Conduct" href="https://github.com/EpicsDAO/solv/blob/master/CODE_OF_CONDUCT.md">
    <img alt="" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg">
  </a>
</p>

## CLI Tool for Managing Solana Validators - "solv"

The utility tool for Solana Validators

solv is an open-source tool designed to simplify the setup and operation of Solana validators and RPC nodes.

## 📖 Server Spec

- Linux Ubuntu 20.04 LTS
- Linux Ubuntu 22.04 LTS

## Solana Validator Setup

Login in to your Validator server by ssh and run the following command.

```bash
$ bash -c "$(curl -sSfL "https://storage.googleapis.com/epics-bucket/resource/solv/v4.1.16/install")"
$ cd ~ && source ~/.profile
$ solv setup
```

![](https://storage.googleapis.com/zenn-user-upload/949db29fc401-20240131.png)

Then, select the type of node you want to target.

- `TESTNET_VALIDATOR`
- `MAINNET_VALIDATOR`
- `RPC_NODE`

Then

After startup, the snapshot download will start automatically.
The Solana validator will start 🎊

[![solv](https://storage.googleapis.com/epics-bucket/Validator/solv-install-top.gif)](https://youtu.be/rY4bajhRJgw)

If your node does not start, you can try the following command.

This will remove the snapshot and restart the Solana Validator from the new snapshot.

```bash
$ solv restart --rm
```

equivalent to

```bash
$ solv stop
$ solv rm:snapshot
$ solv get snapshot
$ solv start
```

## solv MEV Mode

This will enable solv MEV Mode on your validator instance.
MEV Mode will allow you to harvest your rewards to your authority account every right before the epoch ends.
Then convert SOL to elSOL (LST) and send it to your desired account.

```bash
$ solv mev
? Do you want to enable solv MEV Mode? (y/N) y
? Enter your RPC URL (https://api.mainnet-beta.solana.com)
? Enter your Harvest Address (your solana address)
? Enter your Discord Webhook URL (https://discord.com/api/webhooks/11111111/xxxxxxxx)
```

### Epoch Timer

Epoch Timer will be set in cron job to check the epoch timer every 5 minutes.
(※ You need solv mev to enable MEV mode)

### Epoch Timer Sends Discord Notification(SOL Balance Alert)

Epoch Timer will send a Discord notification when the epoch is less than 1 day, 8 hours, 1 hour and the new epoch starts.

- New Epoch
- Less than 1 day
- Less than 8 hours
- Less than 1 hours
  solv harvest will be executed automatically if solv MEV Mode is enabled.

Besides, the epoch timer checks the Validator Account Balance and sends a notification when the balance is less than 0.5 SOL.

### solv Harvest

solv harvest will be executed automatically if solv MEV Mode is enabled.
This will harvest your rewards to your authority account every right before the epoch ends.
Then convert SOL to elSOL (LST) and send it to your desired account.

1. Withdraw rewards from the Vote Account to the Validator Authority Account.
2. Calculate the amount of SOL to be transferred from the Validator Account to the Authority Account.
3. Convert the amount of SOL to elSOL (LST).
4. Transfer the elSOL (LST) to the desired account.

This strategy keeps the balance of SOL in your validator node low, enhancing security by mitigating the risk of large-scale SOL withdrawals. By immediately converting earned rewards to LST, it ensures high yield maintenance.

## New Features - v4.2.0~v4.2.x

- Added Solana Liquid Staking Command
- Added Solana Transfer Command
- Added Auto Reward Harvest Command
- Added Epoch Timer
- Improved setup command
- Improved log command
- Added solv df command
- Migrated to ESM Module
- Added Turbo Repo
- Improved solv restart

## New Features - v4.0.0~v4.1.0

- Jito Relayer Setup
- Jito RPC Setup
- No Downtime Migration
- Snapshot Download Speed Improved 100x~ Faster

### Snapshot Download Speed Improved 100x~ Faster

solv integrated with solana snapshot finders for Solana Mainnet and Testnet.
This will improve the snapshot download speed 100x~ faster than before.
Greatly reduce the time to start the Solana Validator.

Special Thanks to c29r3 for the great OSS ⭐️

- [Solana Snapshot Finder](https://github.com/c29r3/solana-snapshot-finder)

### No Downtime Migration

solv supports no downtime migration for Solana Validator.
You can migrate your Solana Validator to other servers without restarting the Solana Validator.

`solv change` command will help you to migrate your Solana Validator to other servers.

Prepare your new server(Inactive) and current server(Active) with the latest slot.
Then run the following command on new server(Inactive) and current server(Active).

※ Please make sure to backup your keys before running the command.
※ Please make sure to run the new server with solv4 as a dummy mode.

Run the following command on the current server(Active).
You will be asked to enter the new server IP address.

```bash
$ solv change
```

Then, you should quickly run the following command on the new server(Inactive).

```bash
$ solv change
```

This function was created with reference to the following link.

Special Thanks to pumpkins-pool for the great OSS ⭐️

- [Pumpkin's Pool - Identity Transition](https://pumpkins-pool.gitbook.io/pumpkins-pool)

## Jito MEV Setup

You can select the mainnet for Jito MEV or RPC Jito Client🎉

![](https://storage.googleapis.com/epics-bucket/solv/assets/mainnet-select.png)

Also you have option to select Jito Relayer.

## Run solv Server CLI - from your validator server

```bash
$ solv s
```

![solv s](https://storage.googleapis.com/epics-bucket/solv/assets/solv-s.png)

## Solana Validator Logs

```bash
$ solv log
```

or

Show only error logs

```bash
$ solv log -e
```

## Show Solana Validator Config

This command will show your all config paths which are used by solana validator.

```bash
$ solv config
```

## Solana Delegation Program

https://solana.org/delegation-program

## solv CLI

```bash
$ solv --help
Usage: solv [options] [command]

💎 Solana Validator All-in-One CLI 💎

Options:
  -V                   Output the current version
  -h, --help           Display help for solv commands

Commands:
  server|s               Open solv Dashboard
  start                  Start Solana Validator
  restart                Restart Solana Validator
  stop                   Stop Solana Validator
  status                 Show Solana Validator Status
  update|u [options]     Update Solana Validator Version
  log|l [options]        tail logs
  install|i [options]    Install/Update Solana Version
  stake [options]        Solana Delegate Stake
  unstake                Solana Delegate Stake
  get <cmd>              Get Solana Validator Info Commands
  scp <cmd>              Download/Upload Solana Validator Keypairs
  cron <cmd>             Run Schedule Tasks
  setup [options]        Setup Solana Validator
  balance|bal [options]  Show Keypairs Balance
  mtr                    Mount Reload Command
  disks                  Show unmounted disks
  relayer                Jiro Relayer Commands
  transfer|tr [options]  Transfer Solana Tokens/SPL Tokens
  withdraw [options]     Withdraw SOL from Vote Account to Authority Account
  harvest|hv             Harvest SOL from Validator Account to Authority Account
  mev                    Enable MEV Mode
  df                     Disk Free Command
  swap [options]         Swap Solana Tokens
  epochTimer             Check Solana Epoch Timer
  rm:log                 Remove Logs
  rm:snapshot            Remove Snapshot
  change                 Change Identity of Validator to New Validator
  monitor|m              Monitor Solana Node
  catchup|c              Check Solana Catchup Status
  config                 Show Solv Config
  help [cmd]             Display help for solv commands
```

If you have any questions, please contact us on Discord.

https://discord.gg/yxm5hJqRhg

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/EpicsDAO/solv This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

## Code of Conduct

Everyone interacting in the SKEET project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/EpicsDAO/solv/blob/master/CODE_OF_CONDUCT.md).
