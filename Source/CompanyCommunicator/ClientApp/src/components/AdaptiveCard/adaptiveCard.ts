// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TFunction } from "i18next";

export const getInitAdaptiveCard = (t: TFunction, horizontalAlignmentAsString: string) => {
    const titleTextAsString = t("TitleText");
    return (
        {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "TextBlock",
                    "weight": "Bolder",
                    "text": titleTextAsString,
                    "size": "ExtraLarge",
                    "wrap": true,
                    "horizontalAlignment": horizontalAlignmentAsString
                },
                {
                    "type": "Image",
                    "spacing": "Default",
                    "url": "",
                    "size": "Stretch",
                    "width": "400px",
                    "altText": ""
                },
                {
                    "type": "TextBlock",
                    "text": "",
                    "wrap": true,
                    "horizontalAlignment": horizontalAlignmentAsString
                },
                {
                    "type": "TextBlock",
                    "wrap": true,
                    "size": "Small",
                    "weight": "Lighter",
                    "horizontalAlignment": horizontalAlignmentAsString,
                    "text": ""
                    
                }
            ],
            "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.5"
        }
    );
}


export const setCardHorizontalAlighnment = (card: any, horizontalAlignmentAsString: string) => {
    card.body[0].horizontalAlignment = horizontalAlignmentAsString;
    card.body[2].horizontalAlignment = horizontalAlignmentAsString;
    card.body[3].horizontalAlignment = horizontalAlignmentAsString;
}

export const getCardTitle = (card: any) => {
    return card.body[0].text;
}

export const setCardTitle = (card: any, title: string) => {
    card.body[0].text = title;
}

export const getCardImageLink = (card: any) => {
    return card.body[1].url;
}

export const setCardImageLink = (card: any, imageLink?: string) => {
    card.body[1].url = imageLink;
}

export const getCardSummary = (card: any) => {
    return card.body[2].text;
}

export const setCardSummary = (card: any, summary?: string) => {
    card.body[2].text = summary;
}

export const getCardAuthor = (card: any) => {
    return card.body[3].text;
}

export const setCardAuthor = (card: any, author?: string) => {
    card.body[3].text = author;
}

export const getCardBtnTitle = (card: any) => {
    return card.actions[0].title;
}

export const getCardBtnLink = (card: any) => {
    return card.actions[0].url;
}

export const setCardBtn = (card: any, buttonTitle?: string, buttonLink?: string) => {
    if (buttonTitle && buttonLink) {
        card.actions = [
            {
                "type": "Action.OpenUrl",
                "title": buttonTitle,
                "url": buttonLink
            }
        ];
    } else {
        delete card.actions;
    }
}
