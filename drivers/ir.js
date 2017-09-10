'use strict'

const Driver = require('lisa-plugin').Driver

module.exports = class IRDriver extends Driver {

  setDeviceValue(device, key, value) {
    if (device) {
      return this.lisa.ir.send(device.privateData.remote, device.privateData.action)
    }
    else {
      return this.lisa.ir.send(key, value)
    }
  }
}
