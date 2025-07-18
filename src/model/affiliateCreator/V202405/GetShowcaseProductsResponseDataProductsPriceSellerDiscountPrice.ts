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

export class AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceSellerDiscountPrice {
    /**
    * The currency code.
    */
    'currency'?: string;
    /**
    * The highest discount price. 
    */
    'maximumAmount'?: string;
    /**
    * The lowest discount price.
    */
    'minimumAmount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "maximumAmount",
            "baseName": "maximum_amount",
            "type": "string"
        },
        {
            "name": "minimumAmount",
            "baseName": "minimum_amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceSellerDiscountPrice.attributeTypeMap;
    }
}

