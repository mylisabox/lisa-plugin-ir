import {Driver} from 'lisa-plugin'

export default class IRDriver extends Driver {
  setDeviceValue(device, key, value) {
    if (device) {
      let command = device.data.action
      if (command.toLowerCase().indexOf('key') === -1) {
        command = 'KEY_' + command.trim().toUpperCase()
      }
      return this.lisa.ir.send(device.data.remote, command)
    }
    else {
      let command = value
      if (command && command.toLowerCase().indexOf('key') === -1) {
        command = 'KEY_' + command.trim().toUpperCase()
      }
      return this.lisa.ir.send(key, command)
    }
  }

  async triggerDevice(device) {
    return this.setDeviceValue(device);
  }
}
