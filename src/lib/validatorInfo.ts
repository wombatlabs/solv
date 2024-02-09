import { spawnSync } from 'child_process'
import inquirer from 'inquirer'

export type ValidatorInfoResponse = {
  ValidatorName: string
  Description: string
  website: string
}

export const validatorInfo = async () => {
  const answer = await inquirer.prompt<ValidatorInfoResponse>([
    {
      type: 'input',
      name: 'ValidatorName',
      message: 'What is the validator name?',
      default() {
        return 'solv validator'
      },
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is the validator description?',
      default() {
        return 'solv validator description'
      },
    },
    {
      type: 'input',
      name: 'website',
      message: 'What is the validator website?',
      default() {
        return 'https://solv.epics.dev'
      },
    },
  ])
  const cmd = `solana validator-info publish "${answer.ValidatorName}" -d "${answer.Description}" -w "${answer.website}" --force`
  spawnSync(cmd, { shell: true, stdio: 'inherit' })
  return true
}
