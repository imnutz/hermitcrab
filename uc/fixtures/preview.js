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
            },
            {
                "type": "Group",
                "allowGroupSubscription": false,
                "elements": [
                    {
                        "type": "HorizontalLayout",
                        "elements": [
                            {
                                "type": "radio",
                                "name": "agreement_1",
                                "value": "week$1",
                                "frequencyUnit": "week",
                                "frequencyNumber": 1,
                                "checked": false,
                                "agreementId": 3,
                                "purposeId": 76,
                                "brandId": 4,
                                "translations": {
                                    "en": {
                                        "label": "weekly"
                                    },
                                    "ja": {
                                        "label": "毎週"
                                    }
                                }
                            },
                            {
                                "type": "radio",
                                "name": "agreement_1",
                                "value": "month$1",
                                "frequencyUnit": "month",
                                "frequencyNumber": 1,
                                "checked": false,
                                "agreementId": 3,
                                "purposeId": 76,
                                "brandId": 4,
                                "translations": {
                                    "en": {
                                        "label": "monthly"
                                    },
                                    "ja": {
                                        "label": "毎月"
                                    }
                                }
                            }
                        ],
                        "translations": {
                            "en": {
                                "name": "SuperDrink NewsLetter Frequency",
                                "description": "",
                                "label": ""
                            }
                        }
                    },
                    {
                        "type": "HorizontalLayout",
                        "elements": [
                            {
                                "type": "boolean",
                                "name": "communication_superdrink",
                                "value": "sms",
                                "checked": false,
                                "agreementId": 4,
                                "purposeId": 76,
                                "brandId": 142,
                                "translations": {
                                    "en": {
                                        "label": "SMS"
                                    },
                                    "ja": {
                                        "label": "SMS"
                                    }
                                }
                            },
                            {
                                "type": "boolean",
                                "name": "communication_superdrink",
                                "value": "email",
                                "checked": false,
                                "agreementId": 4,
                                "purposeId": 76,
                                "brandId": 142,
                                "translations": {
                                    "en": {
                                        "label": "email"
                                    },
                                    "ja": {
                                        "label": "メール"
                                    }
                                }
                            }
                        ],
                        "translations": {
                            "en": {
                                "name": "SuperDrink Communication Method",
                                "description": "",
                                "label": ""
                            }
                        }
                    }
                ],
                "translations": {
                    "en": {
                        "header": "Communication Preference",
                        "headerDescription": "",
                        "footer": ""
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
