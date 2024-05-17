import * as fs from 'fs'
import * as path from 'path'
import { exec } from 'child_process'

const servicesDirectory = 'src/services'
const templateFile = 'src/.index.template.ts'
const entryFile = 'src/index.ts'

function findAndListTSFiles(directory: string): string[] {
  const files = fs.readdirSync(directory)
  const tsFiles = files.filter((file) => file.endsWith('.ts')).map((file) => path.parse(file).name)
  return tsFiles
}

function generateUpdatedContent(fileList: string[], existingContent: string): string {
  const imports = fileList.map((file) => `import { ${file} } from './services/${file}'`).join('\n')
  existingContent = existingContent.replace('//import//', imports)

  const exports = fileList.map((file) => `  ${file},`).join('\n')
  existingContent = existingContent.replace('//export//', exports)

  return existingContent
}

function format() {
  const command = `npx prettier --write "${entryFile}"`
  exec(command, (error, stdout) => {
    if (error) {
      console.error(`Error formatting the file: ${error.message}`)
      return
    }

    console.log(`File formatted successfully:\n${stdout}`)
  })
}

function updateIndexFile() {
  const tsFiles = findAndListTSFiles(servicesDirectory)
  console.log(tsFiles)

  if (!fs.existsSync(templateFile)) {
    console.error(`${templateFile} does not exist.`)
    return
  }

  const existingContent = fs.readFileSync(templateFile, 'utf-8')
  const updatedContent = generateUpdatedContent(tsFiles, existingContent)

  fs.writeFileSync(entryFile, updatedContent, 'utf-8')
  console.log(`${entryFile} has been updated.`)

  format()
}

updateIndexFile()
