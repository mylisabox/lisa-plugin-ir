const template = require('../widgets/ir.json')

module.exports = [
  {
    pairing: 'settings',
    name: {
      en: 'IR command',
      fr: 'Commande infrarouge'
    },
    description: {
      en: 'Manage IR command ',
      fr: 'Gestion de commande infrarouge'
    },
    driver: 'ir',
    type: 'other',
    template: template,
    image: 'ir.jpg',
    settings: [
      {
        controlType: 'textbox',
        type: 'text',
        name: 'remote',
        label: {
          en: 'Remote name',
          fr: 'Nom de la télécommande'
        },
        required: true,
        private: true
      },
      {
        controlType: 'textbox',
        type: 'text',
        name: 'action',
        label: {
          en: 'Remote command',
          fr: 'Nom de la touche'
        },
        required: true,
        private: true
      }
    ]
  }
]
