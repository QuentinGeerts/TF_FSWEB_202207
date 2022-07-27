const fs = require('fs')


const loadStaticFile = (targetFile, response) => {

  const origin = process.cwd()
  const filePath = origin + targetFile

  console.log('origin :>> ', origin);
  console.log('filePath :>> ', filePath);

  if (fs.existsSync(filePath)) {
    // On verra demain :)
  }

}

module.exports = loadStaticFile