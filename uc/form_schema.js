var full = {
  metadata: {
    host: 'xcmusrgjifad7s3rfkxwfpqx7y0jrdfh.lambda-url.us-east-1.on.aws',
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
        type: 'VerticalLayout',
        elements: [
          {
            type: 'string',
            options: {
              format: 'heading1',
            },
            translations: {
              en: {
                label: 'Preference Settings',
              },
              fr: {
                label: 'Label in French',
              },
            },
          },
          {
            type: 'string',
            options: {
              format: 'heading3',
            },
            translations: {
              en: {
                label: 'Manage how your data is used anytime',
              },
              fr: {
                label: 'Label in French',
              },
            },
          },
        ],
      },
      {
        type: 'string',
        value: 'abc@gmail.com',
        name: 'identifiers',
        options: {
          format: 'email',
        },
        validations: [
          {
            type: 'required',
            message: 'is required',
          },
          {
            type: 'length',
            min: 3,
            max: 100,
            message: 'between 3 and 100 characters',
          },
          {
            type: 'pattern',
            expression: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
            message: 'must be an email',
          },
        ],
        translations: {
          en: {
            label: 'Confirm your email',
          },
          fr: {
            label: 'Label in French',
          },
        },
      },
      {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'string',
            options: {
              format: 'heading3',
            },
            translations: {
              en: {
                label: 'Your email preferences',
              },
              vi: {
                label: 'Xin chao',
              },
            },
          },
          {
            type: 'string',
            options: {
              format: 'label',
            },
            translations: {
              en: {
                label: 'How often do you want to receive our emails?',
              },
              vi: {
                label: 'Xin chao',
              },
            },
          },
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'radio',
                description: '',
                name: 'frequency',
                checked: false,
                value: 'week$1',
                frequencyNumber: 1,
                frequencyUnit: 'week',
                translations: {
                  en: {
                    label: 'Weekly',
                  },
                },
              },
              {
                type: 'radio',
                description: '',
                name: 'frequency',
                value: 'month$1',
                checked: false,
                frequencyNumber: 1,
                frequencyUnit: 'month',
                translations: {
                  en: {
                    label: 'Monthly',
                    description: 'You know what I mean',
                  },
                },
              },
              {
                type: 'radio',
                name: 'frequency',
                value: 'unsubscribed',
                checked: true,
                translations: {
                  en: {
                    label: 'Unsubscribed',
                    description: 'You know what I mean',
                  },
                },
              },
            ],
          },
          {
            type: 'string',
            name: 'rule_test',
            rule: {
              type: 'enable',
              condition: {
                control: 'brand4',
                value: 'break_30',
              },
            },
            translations: {
              en: {
                label: 'For testing rules',
              },
            },
          },
        ],
      },
      {
        type: 'VerticalLayout',
        elements: [
          {
            type: 'string',
            options: {
              format: 'heading3',
            },
            translations: {
              en: {
                label: 'Select component',
              },
            },
          },
          {
            type: 'select',
            name: 'select_me',
            options: ['option1', 'option2', 'option3'],
            value: 'option2',
            translations: {
              en: {
                optionLabels: ['Option1', 'Option2', 'Option3'],
                label: 'Select me',
              },
            },
            rule: {
              type: 'enable',
              condition: {
                control: 'identifiers',
                value: 'abc@gmail.com',
              },
            },
          },
          {
            type: 'string',
            options: {
              format: 'heading3',
            },

            translations: {
              en: {
                label: 'Markdown',
              },
            },
          },
          {
            type: 'markdown',
            translations: {
              en: {
                text: 'This is a [link](https://google.com). And this is **bold** text.',
              },
              fr: {
                text: 'Ceci est un [lien](https://google.com). Et ceci est un texte **gras**',
              },
            },
          },
          {
            type: 'markdown',
            translations: {
              en: {
                text: '_This is emphasized text!_',
              },
              fr: {
                text: 'Ceci est un [lien](https://google.com). Et ceci est un texte **gras**',
              },
            },
          },
          {
            type: 'markdown',
            translations: {
              en: {
                text: '__This is strong text!__',
              },
              fr: {
                text: 'Ceci est un [lien](https://google.com). Et ceci est un texte **gras**',
              },
            },
          },
          {
            type: 'markdown',

            translations: {
              en: {
                text: '*This is emphasized text!*',
              },
              fr: {
                text: 'Ceci est un [lien](https://google.com). Et ceci est un texte **gras**',
              },
            },
          },
          {
            type: 'string',
            label: 'Which emails would you like?',
            options: {
              format: 'heading3',
            },
          },

          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Group',
                image: 'https://td-jssdk.s3.amazonaws.com/car.png',
                allowGroupSubscription: true,
                allowToggle: true,

                translations: {
                  en: {
                    header: 'Emails from Brand2',
                  },
                },
                elements: [
                  {
                    type: 'boolean',
                    name: 'agreement_4',
                    checked: true,
                    value: 'product_updates',
                    translations: {
                      en: {
                        label: 'Product Updates',
                        description: 'Experience Brand2 innovation...',
                      },
                    },
                    validations: [
                      {type: 'required', message: 'group: required'},
                    ],
                  },
                  {
                    type: 'boolean',
                    name: 'agreement_5',
                    checked: true,
                    value: 'sales',
                    translations: {
                      en: {
                        label: 'Sales',
                        description:
                          'Promotional emails that update you with...',
                      },
                    },
                  },
                  {
                    type: 'boolean',
                    name: 'agreement_6',
                    value: 'meetups',
                    translations: {
                      en: {
                        label: 'Meetups',
                        description: 'Meet the rest of the community...',
                      },
                    },
                  },
                ],
              },
              {
                type: 'Group',
                image: 'https://td-jssdk.s3.amazonaws.com/car.png',
                allowGroupSubscription: true,
                allowToggle: true,

                translations: {
                  en: {
                    header: 'Emails from Brand2',
                  },
                },
                elements: [
                  {
                    type: 'boolean',
                    name: 'agreement_7',
                    checked: true,
                    value: 'product_updates',
                    translations: {
                      en: {
                        label: 'Product Updates',
                        description: 'Experience Brand2 innovation...',
                      },
                    },
                    validations: [
                      {type: 'required', message: 'group: required'},
                    ],
                  },
                  {
                    type: 'boolean',
                    name: 'agreement_8',
                    checked: true,
                    value: 'sales',
                    translations: {
                      en: {
                        label: 'Sales',
                        description:
                          'Promotional emails that update you with...',
                      },
                    },
                  },
                  {
                    type: 'boolean',
                    name: 'agreement_9',
                    value: 'meetups',
                    translations: {
                      en: {
                        label: 'Meetups',
                        description: 'Meet the rest of the community...',
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'Group',
        translations: {
          en: {
            header: 'How many brand1 drinks do you want in your life?',
            headerDescription:
              'Header description with a **strong** text and _em_ text',
            footer:
              'For more information, please check [privacy](https://treasuredata.com)',
          },
          fr: {
            header:
              'Combien de boissons de marque1 voulez-vous dans votre vie ?',
          },
        },
        elements: [
          {
            type: 'radio',
            value: 'as_many',
            name: 'brand4',
            checked: true,
            translations: {
              en: {
                label: 'As many as you have',
                description: 'Ya, I mean it: As many as you have',
              },
            },
          },
          {
            type: 'radio',
            name: 'brand4',
            value: 'week$2',
            frequencyUnit: 'week',
            frequencyNumber: 2,
            translations: {
              en: {
                label: '2-3 emails a week. Just enough to stay in touch',
              },
            },
          },
          {
            type: 'radio',
            name: 'brand4',
            value: 'week$1',
            frequencyUnit: 'week',
            frequencyNumber: 1,
            translations: {
              en: {
                label: 'Just 1 email a week',
              },
            },
          },
          {
            type: 'radio',
            name: 'brand4',
            value: 'month$1',
            frequencyUnit: 'month',
            frequencyNumber: 1,
            translations: {
              en: {
                label:
                  'I need a 30-day break. Distance makes the heart grow fonder',
              },
            },
          },
          {
            type: 'radio',
            name: 'brand4',
            value: 'none',
            translations: {
              en: {
                label: 'None',
              },
            },
          },
        ],
      },
    ],
  },
};

var preview_1 = {
  metadata: {
    primaryLanguage: 'en'
  },
  buttonTranslations: {
    en: {
      save: 'Save me pls!',
      cancel: false,
      unsubscribe: 'Unsubscribe all',
    },
  },
  form: {
    type: 'Group',
    translations: {
      en: {
        header: 'Select what you want',
        headerDescription: 'Example of group of agreement preview',
      }
    },
    elements: [
      {
        type: 'radio',
        value: 'as_many',
        name: 'brand4',
        checked: true,
        translations: {
          en: {
            label: 'As many as you have',
            description: 'Ya, I mean it: As many as you have',
          },
        },
      },
      {
        type: 'radio',
        name: 'brand4',
        value: 'week$2',
        frequencyUnit: 'week',
        frequencyNumber: 2,
        translations: {
          en: {
            label: '2-3 emails a week. Just enough to stay in touch',
          },
        },
      },
      {
        type: 'radio',
        name: 'brand4',
        value: 'week$1',
        frequencyUnit: 'week',
        frequencyNumber: 1,
        translations: {
          en: {
            label: 'Just 1 email a week',
          },
        },
      },
      {
        type: 'radio',
        name: 'brand4',
        value: 'month$1',
        frequencyUnit: 'month',
        frequencyNumber: 1,
        translations: {
          en: {
            label:
              'I need a 30-day break. Distance makes the heart grow fonder',
          },
        },
      },
      {
        type: 'radio',
        name: 'brand4',
        value: 'none',
        translations: {
          en: {
            label: 'None',
          },
        },
      },
    ],
  },
};

var preview_2 = {
  metadata: {
    host: 'xcmusrgjifad7s3rfkxwfpqx7y0jrdfh.lambda-url.us-east-1.on.aws',
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
    type: 'Group',
    translations: {
      en: {
        header: 'Group of checkboxes',
        headerDescription: 'Multiple choices',
      }
    },
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
    ],
  },
};

var preview_3 = {
  metadata: {
    primaryLanguage: 'en'
  },
  form: {
    type: 'Group',
    translations: {
      en: {
        header: 'Single checkbox',
      }
    },
    elements: [
      {
        type: 'boolean',
        name: 'single_preview_boolean_1',
        checked: true,
        translations: {
          en: {
            label: 'I want to receive everything!'
          },
        },
      },
    ],
  },
};

