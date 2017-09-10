'use strict'

const Plugin = require('lisa-plugin')

module.exports = class IRPlugin extends Plugin {
  interact(action, infos) {
    switch (action) {
      case "SEND_IR_COMMAND":
        return this.drivers['ir'].setDeviceValue(null, infos.fields.remote, infos.fields.action)
      default:
        return Promise.resolve()
    }
  }

  constructor(app) {
    super(app, {
      drivers: require('./drivers'),
      pkg: require('./package'),
      config: require('./config')
    })
  }
}
