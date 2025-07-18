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

export class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductPrice {
    /**
    * The currency code for the maximum and minimum offered price for the product.
    */
    'currency'?: string;
    /**
    * The maximum offered price of the product.
    */
    'maxPrice'?: string;
    /**
    * The minimum offered price of the product.
    */
    'minPrice'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "maxPrice",
            "baseName": "max_price",
            "type": "string"
        },
        {
            "name": "minPrice",
            "baseName": "min_price",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductPrice.attributeTypeMap;
    }
}

