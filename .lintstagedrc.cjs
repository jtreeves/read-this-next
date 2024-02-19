const path = require('path')

const lintCurrentFiles = (filenames) =>
    `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')} --max-warnings=0`

module.exports = {
    '*.{ts,tsx}': [lintCurrentFiles, 'npm run format']
}
