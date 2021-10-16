import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const template = require('../widgets/ir.json')

export default [
  {
    pairing: 'settings',
    name: {
      en: 'IR command',
      fr: 'Commande infrarouge',
    },
    description: {
      en: 'Manage IR command ',
      fr: 'Gestion de commande infrarouge',
    },
    driver: 'ir',
    type: 'other',
    template: template,
    image: 'ir.svg',
    imageOn: 'ir.svg',
    imageOff: 'ir.svg',
    defaultAction: {
      'fr': 'Déclencher',
      'en': 'Trigger',
    },
    settings: {
      'type': 'column',
      'crossAxisAlignment': 3,
      'children': [
        {
          'type': 'text_field',
          'id': 'remote',
          'required': true,
          'private': true,
          'textInputAction': 6,
          'decoration': {
            'labelText': 'Remote name*',
          },
        },
        {
          'type': 'text_field',
          'id': 'action',
          'required': true,
          'private': true,
          'textInputAction': 2,
          'decoration': {
            'labelText': 'Remote command*',
          },
        },
      ],
    },
  },
]
