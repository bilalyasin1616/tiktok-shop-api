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

export class AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsPriceRange {
    /**
    * The minimum price of the searched product needed to be limited The unit is the local currency of the creator\'s marketing country. Prerequisites: - The value must be greater than or equal to zero - If no value is given, it means 0 - Currently, the value needs to be an integer, otherwise we will automatically truncate it to its floor integer. For instance, 12.54 will be truncated to 12
    */
    'priceGe'?: string;
    /**
    * The maximum price of the searched product needed to be limited The unit is the local currency of the creator\'s marketing country. Prerequisites: - The value must be greater than or equal to zero - If no value is given, it means 0 - Currently, the value needs to be an integer, otherwise we will automatically truncate it to its floor integer. For instance, 12.54 will be truncated to 12
    */
    'priceLe'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "priceGe",
            "baseName": "price_ge",
            "type": "string"
        },
        {
            "name": "priceLe",
            "baseName": "price_le",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsPriceRange.attributeTypeMap;
    }
}

