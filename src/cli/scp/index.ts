import { program } from '@/index'
import { download } from './download'
import { upload } from './upload'
import { create } from './create'
import { cat } from './cat'
import { init } from './init'

export const scpCommands = () => {
  const scp = program.command('scp').description('Export Solana Validator Data')

  scp
    .command('download')
    .alias('dl')
    .description('Export Solana Validator Keypair')
    .action(async () => {
      await download()
    })

  scp
    .command('upload')
    .alias('up')
    .description('Upload Solana Validator Keypair')
    .action(async () => {
      await upload()
    })

  scp
    .command('create')
    .alias('c')
    .description('Create SSH Login Setting')
    .action(async () => {
      await create()
    })

  scp
    .command('cat')
    .description('Show SSH Public Key')
    .action(() => {
      cat()
    })

  scp
    .command('init')
    .description('Init SSH Key Pair')
    .action(() => {
      init()
    })
}
