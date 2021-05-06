import { resolve } from 'path'

export default async function () {
  this.addPlugin({
    src: resolve(__dirname, './_plugin.js'),
    options: this.options.nacelle,
  })
}
