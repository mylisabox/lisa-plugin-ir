import {Plugin} from 'lisa-plugin'
import {createRequire} from 'module';
import config from './config/index.js';
import drivers from './drivers/index.js';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default class IRPlugin extends Plugin {
  interact(action, infos) {
    const device = infos.fields.device
    if (device && device.pluginName !== this.fullName) {
      return Promise.resolve()
    }
    switch (action) {
    case 'DEVICE_TURN_ON':
      return this.drivers['ir'].setDeviceValue(device)
    case 'SEND_IR_COMMAND':
      if (device) {
        return this.drivers['ir'].setDeviceValue(device)
      }
      return this.drivers['ir'].setDeviceValue(null, infos.fields.remote, infos.fields.action)
    default:
      return Promise.resolve()
    }
  }

  constructor(app) {
    super(app, {
      drivers: drivers,
      pkg: pkg,
      config: config,
    })
  }
}
