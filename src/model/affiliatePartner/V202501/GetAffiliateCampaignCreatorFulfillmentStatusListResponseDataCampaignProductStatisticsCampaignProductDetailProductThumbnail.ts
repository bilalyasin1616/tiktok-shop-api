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

export class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductThumbnail {
    /**
    * The base URI of the product.
    */
    'uri'?: string;
    /**
    * A list of URLs for each image associated with the product.
    */
    'urlList'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        },
        {
            "name": "urlList",
            "baseName": "url_list",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductThumbnail.attributeTypeMap;
    }
}

