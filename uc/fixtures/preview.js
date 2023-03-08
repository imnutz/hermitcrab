var preview = {
  "metadata": {
    "host": "consents-development.treasuredata.com",
    "tdAccountId": 1,
    "workspaceId": 1,
    "formId": 3,
    "languages": [
      {
        "code": "en",
        "name": "English"
      }
    ]
  },
  "form": {
    "type": "VerticalLayout",
    "elements": [
      {
        "type": "Group",
        "allowGroupSubscription": true,
        "elements": [
          {
            "type": "boolean",
            "name": "superdrink_notification",
            "checked": false,
            "translations": {
              "en": {
                "name": "SuperDrink Notification",
                "description": "We will send notifications",
                "label": "Do you want to receive notifications?"
              }
            },
            "agreementId": 5,
            "purposeId": 76,
            "brandId": 143
          }
        ],
        "translations": {
          "en": {
            "header": "Notifications",
            "headerDescription": null,
            "footer": null
          }
        }
      }
    ]
  },
  "buttonTranslations": {
    "en": {
      "save": "Save Preferences",
      "cancel": "Cancel",
      "unsubscribe": "Unsubscribe"
    }
  }
};
