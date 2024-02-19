const path = require('path')

const lintCurrentFiles = (filenames) =>
    `next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`

module.exports = {
    '*.{ts,tsx}': [lintCurrentFiles, 'npm run format'],
    '!(*.ts|*.tsx)': 'npm run format'
}
