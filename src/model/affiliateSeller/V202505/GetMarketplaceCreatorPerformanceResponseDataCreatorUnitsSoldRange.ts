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

export class AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseDataCreatorUnitsSoldRange {
    /**
    * The formatted range of minimum number of units sold to maximum number of units sold over the lifetime of the creator account.
    */
    'formattedRange'?: string;
    /**
    * The highest number of units sold.
    */
    'maximumAmount'?: number;
    /**
    * The lowest number of units sold.
    */
    'minimumAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "formattedRange",
            "baseName": "formatted_range",
            "type": "string"
        },
        {
            "name": "maximumAmount",
            "baseName": "maximum_amount",
            "type": "number"
        },
        {
            "name": "minimumAmount",
            "baseName": "minimum_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseDataCreatorUnitsSoldRange.attributeTypeMap;
    }
}

