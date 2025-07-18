/**
 * tiktok shop openapi
 * sdk for apis
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../../models';

export class AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataContactInfo {
    /**
    * Email
    */
    'email'?: string;
    /**
    * Line account number
    */
    'line'?: string;
    /**
    * Phone number
    */
    'phone'?: string;
    /**
    * Viber account number
    */
    'viber'?: string;
    /**
    * WhatsApp account number
    */
    'whatsapp'?: string;
    /**
    * Zalo account number
    */
    'zalo'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "line",
            "baseName": "line",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "viber",
            "baseName": "viber",
            "type": "string"
        },
        {
            "name": "whatsapp",
            "baseName": "whatsapp",
            "type": "string"
        },
        {
            "name": "zalo",
            "baseName": "zalo",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponseDataContactInfo.attributeTypeMap;
    }
}

