var controls = {
  metadata: {
    host: 'consents-development.treasuredata.com',
    tdAccountId: 1,
    workspaceId: 1,
    formId: 3,
    languages: [
      {
        name: 'English',
        code: 'en',
      },
      {
        name: 'French',
        code: 'fr',
      },
    ],
  },
  buttonTranslations: {
    en: {
      save: 'Save me pls!',
      cancel: false,
      unsubscribe: 'Unsubscribe all',
    },
  },
  form: {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'string',
        options: {
          format: 'heading1'
        },
        translations: {
          en: {
            label: 'Heading 1'
          }
        }
      },
      {
        type: 'string',
        value: 'abc@gmail.com',
        name: 'input_field',
        translations: {
          en: {
            label: 'Input field'
          }
        }
      }
    ],
  },
};
