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

export class AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorCategoryGmvDistribution {
    /**
    * The top-level category identifier. 
    */
    'categoryId'?: string;
    /**
    * GMV associated with the category in hundredths of a percent.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categoryId",
            "baseName": "category_id",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorCategoryGmvDistribution.attributeTypeMap;
    }
}

