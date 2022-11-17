var horGroup = {
  metadata: {
    host: "consents-development.treasuredata.com",
    tdAccountId: 1,
    workspaceId: 1,
    formId: 3,
    languages: [
      {
        name: "English",
        code: "en",
      },
      {
        name: "French",
        code: "fr",
      },
    ],
  },
  buttonTranslations: {
    en: {
      save: "Save me pls!",
      cancel: false,
      unsubscribe: "Unsubscribe all",
    },
  },
  form: {
    type: "HorizontalGroup",
    translations: {
      en: {
        header: "This is horizontal group",
        headerDescription: "with header description in *markdown*",
      },
    },
    elements: [
      {
        type: "boolean",
        name: "sms_channel",
        checked: true,
        translations: {
          en: {
            label: "SMS",
          },
        },
      },
      {
        type: "boolean",
        name: "email_channel",
        checked: false,
        translations: {
          en: {
            label: "Email",
          },
        },
      },
      {
        type: "boolean",
        name: "directemail_channel",
        checked: false,
        translations: {
          en: {
            label: "Direct Email",
          },
        },
      },
      {
        type: "boolean",
        name: "notification_channel",
        checked: false,
        translations: {
          en: {
            label: "Notification",
          },
        },
      },
    ],
  },
};
