const fs = require('fs')
const path = require('path')
const Glob = require("glob")
const YAML = require('yaml')
const subsetFont = require('subset-font')

const faFile = require.resolve('./node_modules/@fortawesome/fontawesome-free')
const faMetadata = path.resolve(faFile, '../../metadata/icons.yml')
const faWebFonts = path.resolve(faFile, '../../webfonts')
const outDir = path.resolve('./assets/' + process.argv[2])

const iconYaml = fs.readFileSync(faMetadata, 'utf8')
const icons = YAML.parse(iconYaml)

const iconSubset = process.argv.slice(3);
console.log('iconSubset: ', iconSubset);

if (!fs.existsSync(outDir)){
    fs.mkdirSync(outDir);
}

let iconSubSetUnicode = []

iconSubset.forEach((ico) => {
  console.log(icons[ico])
  iconSubSetUnicode.push(String.fromCodePoint(parseInt(icons[ico]['unicode'], 16)))
})

const outputTypes = [
  { targetFormat: 'woff2', fileExt: 'woff2' },
  { targetFormat: 'sfnt', fileExt: 'ttf' }
]

Glob.sync(faWebFonts + '/*.ttf').forEach((entry) => {
  console.log(entry)

  const fontData = fs.readFileSync(entry);

  outputTypes.forEach((ftype) => {

    const subsetBuffer = subsetFont(fontData, iconSubSetUnicode.join(' '), {
      targetFormat: ftype.targetFormat,
    });

    subsetBuffer.then((data) => {
      const fName = path.parse(entry).name + '.' + ftype.fileExt;
      const fPath = path.join(outDir, fName)
      fs.writeFile(fPath, data, err => {
        if (err) {
          console.error(err);
        }
      });
    })

  })
})