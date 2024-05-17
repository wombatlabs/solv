import dotenv from 'dotenv'
import { Command } from 'commander'
import { VERSION } from '@/lib/version'
import { readOrCreateDefaultConfig } from '@/lib/readOrCreateDefaultConfig'
import {
  logCommands,
  startCommand,
  stopCommand,
  updateCommands,
  stakeCommands,
  setupCommands,
  restartCommand,
  installCommands,
  cronCommands,
  statusCommands,
  scpCommands,
  serverCommands,
  getCommands,
  clientCommands,
  mountCommands,
} from '@/cli'
import { balanceCommands } from './cli/balance'
import { rmLogs } from './cli/setup/rmLogs'
import { rmSnapshot } from './cli/setup/rmSnapshot'
import { withdraw } from './cli/withdraw'
import { login } from './cli/login'
import { change } from './cli/change'

dotenv.config()
const solvConfig = readOrCreateDefaultConfig()

export const program = new Command()
program
  .name('solv')
  .description(solvConfig.locale.cmds.description)
  .helpOption('-h, --help', solvConfig.locale.cmds.help)
  .version(VERSION, '-V', solvConfig.locale.cmds.version)

async function main() {
  try {
    serverCommands(solvConfig)
    startCommand(solvConfig)
    restartCommand(solvConfig)
    stopCommand(solvConfig)
    statusCommands(solvConfig)
    updateCommands(solvConfig)
    logCommands(solvConfig)
    installCommands(solvConfig)
    stakeCommands(solvConfig)
    getCommands(solvConfig)
    scpCommands(solvConfig)
    cronCommands(solvConfig)
    setupCommands(solvConfig)
    clientCommands(solvConfig)
    balanceCommands(solvConfig)
    mountCommands(solvConfig)

    program
      .command('rm:log')
      .description('Remove Logs')
      .action(() => {
        rmLogs()
      })

    program
      .command('rm:snapshot')
      .description('Remove Snapshot')
      .action(() => {
        rmSnapshot()
      })

    program
      .command('withdraw')
      .description('Withdraw SOL from Vote Account to Authority Account')
      .action(async () => {
        await withdraw(solvConfig)
      })

    program
      .command('login')
      .description('Login to Validatoors Cloud')
      .action(async () => {
        await login()
      })

    program
      .command('change')
      .description('Change Identity of Validator to New Validator')
      .action(async () => {
        change()
      })

    await program
      .addHelpCommand('help [cmd]', solvConfig.locale.cmds.help)
      .parseAsync(process.argv)
  } catch (error) {
    console.log(error)
  }
}

main()
