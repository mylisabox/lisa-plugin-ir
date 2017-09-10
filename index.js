'use strict'

const Plugin = require('lisa-plugin')

module.exports = class IRPlugin extends Plugin {
  interact(action, infos) {
    switch (action) {
      case "SEND_IR_COMMAND":
        let command = infos.fields.action
        if (command.indexOf('key') === -1) {
          command = 'KEY_' + command.trim().toUpperCase()
        }
        return this.drivers['ir'].setDeviceValue(null, infos.fields.remote, command)
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
