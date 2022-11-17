var vertical = {
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
        type: 'boolean',
        name: 'preview_boolean_1',
        checked: true,
        translations: {
          en: {
            label: 'Option 1'
          },
        },
      },
      {
        type: 'boolean',
        name: 'preview_boolean_2',
        translations: {
          en: {
            label: 'Option 2',
          },
        },
      },
      {
        type: 'boolean',
        name: 'preview_boolean_3',
        translations: {
          en: {
            label: 'Option 3',
          },
        },
      },
      {
        type: 'boolean',
        name: 'preview_boolean_4',
        translations: {
          en: {
            label: 'Option 4',
          },
        },
      },
      {
        type: 'boolean',
        name: 'preview_boolean_5',
        translations: {
          en: {
            label: 'Option 5',
          },
        },
      },
    ]
  }
};
