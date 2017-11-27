'use strict'

const Driver = require('lisa-plugin').Driver

module.exports = class IRDriver extends Driver {

  setDeviceValue(device, key, value) {
    if (device) {
      let command = device.privateData.action
      if (command.indexOf('key') === -1) {
        command = 'KEY_' + command.trim().toUpperCase()
      }
      return this.lisa.ir.send(device.privateData.remote, command)
    }
    else {
      let command = value
      if (command && command.indexOf('key') === -1) {
        command = 'KEY_' + command.trim().toUpperCase()
      }
      return this.lisa.ir.send(key, command)
    }
  }
}
