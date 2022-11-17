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
      },
      {
        type: 'select',
        name: 'select_me',
        options: ['option1', 'option2', 'option3'],
        value: 'option2',
        translations: {
          en: {
            optionLabels: ['Option1', 'Option2', 'Option3'],
            label: 'Dropdown',
          },
        },
      },
      {
        type: 'boolean',
        name: 'agreement_0',
        checked: true,
        translations: {
          en: {
            label: 'Checkbox with desc',
            description: 'Experience Brand2 innovation...',
          },
        }
      },
      {
        type: 'radio',
        value: 'radio_value',
        name: 'agreement_1',
        checked: true,
        translations: {
          en: {
            label: 'Radio with desc',
            description: 'Ya, I mean it: As many as you have',
          },
        },
      },
      {
        type: 'markdown',
        translations: {
          en: {
            text: 'This is a **markdown** text with link [TreasureData](https://treasuredata.com)'
          }
        }
      },
      {
        type: 'hr'
      }
    ],
  },
};
